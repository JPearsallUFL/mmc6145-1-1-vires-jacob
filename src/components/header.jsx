import {Link} from 'react-router-dom'

export default function Header(){
   return (
        <header>
            <div>
                <h2>Jacob Vires</h2>
            </div>
            <nav>
                <Link to = "/">Home</Link>
                <Link to = "/about">About</Link>
                <Link to = "/contact">Contact</Link>
            </nav>
        </header>
    )
}