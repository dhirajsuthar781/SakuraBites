import { FETCH } from '@/lib/api'
import { DemoRecipeResponse } from '@/lib/types'
import Link from 'next/link'
 
type Props = {}

export default async function DemoApiSection({ }: Props) {

     const data: DemoRecipeResponse = await FETCH.get('/recipe/demo-recipe').then(res => res.data)

     return (
          <div className=' '>
               <h4>{data.success ? data.message + " fetched succesfully" : "Demo api rendering failed"} </h4>
               <div className=' grid grid-cols-4'>
                    {
                         data?.data?.map((recipe, index) => {
                              return (
                                   <Link
                                        className='bb'
                                        href={`/${recipe.slug}`}
                                        key={index}>

                                        <h6 className=''>{recipe.title}</h6>
                                        <p>Difficulty = {recipe.difficulty}</p>
                                        <p>Rating = { recipe.categories}</p>
                                   </Link>
                              )
                         })
                    }
               </div>

          </div>
     )
}