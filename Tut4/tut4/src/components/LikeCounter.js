import { useState } from "react";

export default function LikeCounter() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>Overall Likes: {count}</p>
        <button onClick={() => setCount( (oldCount) => oldCount + 1)}>Like</button>
        <button onClick={() => setCount((oldCount) => oldCount - 1)}>Dislike</button>
      </div>
    )
  }