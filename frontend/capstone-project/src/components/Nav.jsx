import { Link } from 'react-router-dom';


export default function Nav() {
    return (
        <div className="nav">
        <Link to='/'>
            <div>Home</div>
        </Link>
        <Link to='/tasks'>
            <div>Tasks</div>
        </Link>
        <Link to='/planner'>
            <div>Planner</div>
        </Link>
        <Link to='/breathing'>
            <div>Guided Breathing</div>
        </Link>
        </div>
    )
}