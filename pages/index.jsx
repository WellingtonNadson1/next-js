import { useState } from "react";

function Header({title}){
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default function HomePage(){
    const names = [ 'Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']

    const [likes, setLikes] = useState(0)

    function handleClick(){
        return setLikes(likes + 1)
    }

    return (
        <>
            <Header title="React 💙. 🚀" />

            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Likes ({likes})</button>
        </>
    )
}