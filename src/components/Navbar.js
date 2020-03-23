import React from 'react';
import { Link } from '@reach/router';


const Navbar = () => {
    return (
        <nav>
            <Link to="/"><button className="dropbtn">Hjem</button></Link>
            <Link to="/quiz"><button className="dropbtn">Quiz</button></Link>
            <Link to="/omoss"><button className="dropbtn">Om oss</button></Link>
        </nav>
    )
}

export default Navbar;