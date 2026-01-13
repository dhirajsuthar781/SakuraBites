
import RenderMainRecipe from './_component/RenderRecipe/RenderMainRecipe'
import QuestionAsked from './_component/questions/QuestionAsked'
import Reviews from './_component/reviews/Reviews'
import { RecipeResponse } from '@/lib/types'
import { FETCH } from '@/lib/api'
import { Suspense } from 'react'

/*------------------------------------
Prop = recipe's slug,
--------------------------------------*/

type Props = {
  params: Promise<{ recipe_slug: string }>
}

export default async function page({ params }: Props) {
  const { recipe_slug } = await params;

  const data_recipe: RecipeResponse = await FETCH.get(`/recipe/${recipe_slug}/by-slug`, { headers: { 'Cache-Control': 'public, s-maxage=60' } }).then(res => res.data)


  return (
    <section className=''>
      <RenderMainRecipe slug={recipe_slug} data={data_recipe?.data} />

      <Suspense fallback={<p>Loading...</p>}>
        <QuestionAsked id={data_recipe.data._id} />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Reviews id={data_recipe.data._id} />
      </Suspense>


    </section>
  )
}