import { Link } from 'react-router-dom'

const Notfoundpage = () => {
    return (
        <div>
            <h1>Page Not found</h1>
            <p>Go to <Link to="/">Home</Link></p>
        </div>
    )
}

export { Notfoundpage }