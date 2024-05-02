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
        <Link to='/login'>
            <div>LogIn</div>
        </Link>
        <Link to='/newuser'>
            <div>New User</div>
        </Link>
        </div>
    )
}