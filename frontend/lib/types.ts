export type ApiResponse<T> = {
     success: boolean;
     message: string;
     timestamp: string;
     data: T;
};

type Recipe_d = {
     _id: string;
     title: string;
     slug: string;
     authorId: string;
     coverImage: string;
     difficulty: string;
     categories: string[];
};

export type Ingredient = {
     ingredientId: string;
     name: string;
     amount: number;
     unit: string;
     isOptional: boolean;
}
export type Instructions = {
     step: number;
     text: string;
     isHeading: boolean;
}
export type User = {
     _id: string;
     email: string;
     name: string;
     slug: string;
     avatar: string;
     preferences: {
          dietary: string[];
          excludedIngredients: string[];
          excludedCategories: string[];
     };
     isVerified: boolean;
     otp: string;
     favorites: string[];
     socialLinks: {
          instagram: string;
          website: string;
     };
}

export type Nutrients={
     calories: number;
     protein: number;
     carbs: number;
     fat: number;
}

export type Stats={
     avgRating: number;
     reviewCount: number;
     favoriteCount: number;
}
export type Recipe = {
     _id: string;
     title: string;
     slug: string;
     authorId: string;
     description: string;
     coverImage: string;
     baseServings: number;
     prepTime: number;
     cookTime: number;
     difficulty: string;
     ingredients: Array<Ingredient>;
     instructions: Array<Instructions>;
     categories: string[];
     tags: string[];
     cuisine: string;
     relatedRecipeIds: string[];
     totalNutrients: Nutrients;
     stats: Stats;
     isPrivate: boolean;
     isDeleted: boolean;
     createdAt: string;
     updatedAt: string;
     v: number;
};

export type Question = {
     _id: string;
     recipeId: string;
     userId: string;
     question: string;
     upvotes: number;
     createdAt: string;
     updatedAt: string;
     answer:{
          answerdAt: string;
          answeredBy: string;
          text: string
     };
     v: number;
}

export type ReviewR={
     _id: string;
     recipeId: string;
     userId: string;
     rating: number;
     comment: string;
     createdAt: string;
     updatedAt: string;
     v: number;
}


/*------------------------------------
For api's response
--------------------------------------*/
export type DemoRecipeResponse = ApiResponse<Recipe_d[]>
export type RecipeResponse = ApiResponse<Recipe>
export type QuestionByRecipeResponse = ApiResponse<Question[]>
export type ReviewByResponse = ApiResponse<ReviewR[]>