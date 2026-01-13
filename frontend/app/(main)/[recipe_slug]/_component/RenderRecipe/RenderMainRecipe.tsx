import { Recipe } from '@/lib/types'
import Image from 'next/image'

type Props = {
     slug: string
     data: Recipe
}

export default function RenderMainRecipe({ slug, data }: Props) {
 
     return (
          <section className="max-w-3xl mx-auto px-4 py-6 space-y-6">


               <header>
                    <h2 className="text-2xl font-semibold mb-1">
                         {data.title}
                    </h2>

                    <div className="text-sm text-gray-500 flex flex-wrap gap-2">
                         <span>By {data.authorId}</span>
                         <span>•</span>
                         <span>{formatDate(data.createdAt)}</span>
                         <span>•</span>
                         <span>{data.cookTime} min cook time</span>
                    </div>
               </header>


               {data.coverImage && (
                    <div className=' w-full relative aspect-16/8'>
                         <Image
                              fill
                              src={data.coverImage}
                              alt={data.title}
                              className="w-full  h-full object-cover"
                         />
                    </div>
               )}

                    
               {data.description && (
                    <p className="text-gray-700 leading-relaxed">
                         {data.description}
                    </p>
               )}


          </section>
     )
}

/* ---------- helpers ---------- */

function formatDate(date: string | Date) {
     return new Date(date).toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
     })
}
