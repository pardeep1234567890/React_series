// make a like or dislike function
import React,{useState} from 'react'

function Problem1() {
    const [like, setLike] = useState(0)
    const [dislike, setDisLike] = useState(0)

    const handleLike = () => {
        setLike(like + 1);
    }
    const handleDisLike = () => {
        setDisLike(dislike + 1)
    }
    return (
        <div>
            <h2>You have {like} Likes</h2>
            <h2>You have {dislike} Dislikes</h2>
            <button onClick={handleLike}>Like</button>
            <button onClick={handleDisLike}>Dislike</button>
        </div>
  )
}

export default Problem1
