import { Link } from "react-router-dom"

function HomePage() {
    return(
        <div>
            <h1>화녀합니ㄷ!</h1>
            <Link to="/todo">할 일 보기</Link>
        </div>

    )
}

export default HomePage