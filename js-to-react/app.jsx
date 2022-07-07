const app = document.getElementById('app');

function Header({title}){
    console.log(title)
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

function HomePage(){
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    const [likes, setLikes] = React.useState(0)

    function handleClick() {
        setLikes(likes + 1)
    }

    return (
        <div>
            <Header title='React 💙. 🚀 ' />
            <Header title="I'am learning React with Next Js" />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Likes ({likes})</button>
        </div>
    )
}

ReactDOM.render(<HomePage />, app);