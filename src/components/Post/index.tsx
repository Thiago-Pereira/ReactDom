import { useParams } from "react-router-dom"

export const Post = () => {
  const { id } = useParams()

  return <div>
    <h1>Post {id}</h1>
  </div>
}
