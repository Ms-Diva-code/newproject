import React from 'react';
import {Link} from 'react-router-dom';


    function Nav() {
        const navStyle = {
            color: 'white'
        }
        return(
            <nav>
                
                <ul className="nav-links">
                    <Link style={navStyle} to={"./About"}>
                        <li>
                            About
                        </li>
                    </Link>
                    
 
                    <Link style={navStyle} to={"./Homepage"}>
                        <li>Homepage</li>
                    </Link>

                    <Link style={navStyle} to={"./Api"}>
                        <li>ApiForm</li>
                    </Link>

                    <Link style={navStyle} to={"./Form"}>
                        <li>Form</li>
                    </Link>
                    
                </ul>
            </nav>
        )

    }
      

export default Nav;

