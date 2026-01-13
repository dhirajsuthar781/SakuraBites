import { FETCH } from '@/lib/api'
import { QuestionByRecipeResponse } from '@/lib/types'

type Props = {
  id: string
}

export default async function QuestionAsked({ id }: Props) {
 
  const data_questions: QuestionByRecipeResponse = await FETCH.get(`/feedback/questions/${id}/by-recipe`, { headers: { 'Cache-Control': 'public, s-maxage=60' } }).then(res => res.data).catch(err => console.log(err))
   

  return (
    <div className=' bb'>
      <h4 className=" mb-2">Questions</h4>
     <div>
        {
          data_questions?.data?.map((question) => (
            <div key={question._id} className="my-4   pb-4">
              <h6 className=" ">{question.question}</h6>
              {
                question?.answer ?
                  <p className="text-gray-600">{question.answer.text}</p>
                  :
                  <p className=' italic text-sm'>Not answered</p>
              }
            </div>
          ))
        }
      </div> 
    </div>
  )
}