import React from 'react';
import { Link } from '@reach/router';


const Navbar = () => {
    return (
        <nav>
            <Link to="/"><button class="dropbtn">Hjem</button></Link>
            <Link to="/quiz"><button class="dropbtn">Quiz</button></Link>
            <Link to="/omoss"><button class="dropbtn">Om oss</button></Link>
        </nav>
    )
}

export default Navbar;