import mongoose from 'mongoose';
import { faker } from '@faker-js/faker';
import { User, Recipe, Ingredient, Review, Question } from '../modules/user/user.model.js'; // Adjust path

const MONGODB_URI =  process.env.DB_URL

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to DB...");

    // 1. Clear existing data
    await Promise.all([
      User.deleteMany({}),
      Recipe.deleteMany({}),
      Ingredient.deleteMany({}),
      Review.deleteMany({}),
      Question.deleteMany({})
    ]);

    // 2. Seed Users
    const users = await User.insertMany(
      Array.from({ length: 5 }).map(() => ({
        email: faker.internet.email(),
        name: faker.person.fullName(),
        avatar: faker.image.avatar(),
        preferences: { dietary: ['vegan', 'gluten-free'] }
      }))
    );
    console.log(`✅ Seeded ${users.length} Users`);

    // 3. Seed Ingredients
    const ingredientData = [
      { name: 'Tomato', category: 'produce', nutrients: { calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2 } },
      { name: 'Chicken Breast', category: 'meat', nutrients: { calories: 165, protein: 31, carbs: 0, fat: 3.6 } },
      { name: 'Olive Oil', category: 'masala', nutrients: { calories: 884, protein: 0, carbs: 0, fat: 100 } },
      { name: 'Garlic', category: 'produce', nutrients: { calories: 149, protein: 6, carbs: 33, fat: 0.5 } }
    ];

    const ingredients = await Ingredient.insertMany(
      ingredientData.map(i => ({
        name: i.name,
        slug: i.name.toLowerCase().replace(/ /g, '-'),
        category: i.category,
        nutrientsPer100g: i.nutrients,
        description: faker.lorem.sentence()
      }))
    );
    console.log(`✅ Seeded ${ingredients.length} Ingredients`);

    // 4. Seed Recipes
    const recipes = [];
    for (let i = 0; i < 10; i++) {
      const title = faker.food.dish();
      const recipeIngredients = ingredients.slice(0, 3).map(ing => ({
        ingredientId: ing._id,
        name: ing.name,
        amount: faker.number.int({ min: 10, max: 200 }),
        unit: 'g'
      }));

      const newRecipe = await Recipe.create({
        title,
        slug: faker.helpers.slugify(title).toLowerCase() + '-' + faker.string.nanoid(3),
        authorId: users[0]._id,
        description: faker.food.description(),
        coverImage: faker.image.urlLoremFlickr({ category: 'food' }),
        baseServings: 4,
        prepTime: 15,
        cookTime: 30,
        difficulty: faker.helpers.arrayElement(['easy', 'medium', 'hard']),
        ingredients: recipeIngredients,
        instructions: [
          { step: 1, text: "Prepare base ingredients", isHeading: true },
          { step: 2, text: faker.lorem.sentence(), isHeading: false },
          { step: 3, text: "Cooking Process", isHeading: true },
          { step: 4, text: faker.lorem.sentence(), isHeading: false }
        ],
        categories: ['Dinner', 'Everyday Cooking'],
        cuisine: 'Indian',
        totalNutrients: { calories: 450, protein: 25, carbs: 40, fat: 15 }
      });
      recipes.push(newRecipe);
    }
    console.log(`✅ Seeded ${recipes.length} Recipes`);

    // 5. Seed Reviews & Questions
    await Review.create({
      recipeId: recipes[0]._id,
      userId: users[1]._id,
      rating: 5,
      comment: "Absolutely delicious! My family loved it.",
      personalNotes: "Added extra garlic for kick."
    });

    await Question.create({
      recipeId: recipes[0]._id,
      userId: users[2]._id,
      question: "Can I substitute chicken with Tofu?",
      answer: {
        text: "Yes, just adjust the cooking time slightly!",
        answeredBy: users[0]._id,
        answeredAt: new Date()
      }
    });

    console.log("⭐ Seeding Complete!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding Error:", err);
    process.exit(1);
  }
};

seedDatabase();