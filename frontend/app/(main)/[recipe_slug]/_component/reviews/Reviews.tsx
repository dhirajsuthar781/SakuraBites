import { FETCH } from "@/lib/api"
import { ReviewByResponse } from "@/lib/types"

type Props = {
  id: string
}

export default async function Reviews({ id }: Props) {

  const data_review: ReviewByResponse = await FETCH.get(`/feedback/review/${id}/by-recipe`, { headers: { 'Cache-Control': 'public, s-maxage=60' } }).then(res => res.data).catch(err => console.log(err))

  return (
    <div className=' bb'>
      <h4 className=" mb-2">Reviews</h4>
      <div>
        {
          data_review?.data?.map((rev) => (
            <div key={rev._id} className="my-4   pb-4">
              <p>
                Rating :  {rev.rating}
              </p>
              <p>By : {rev.userId}</p>
              <h6>{rev.comment}</h6>
            </div>
          ))
        }
      </div>
    </div>
  )
}