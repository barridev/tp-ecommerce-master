import React from 'react'
import { Link } from 'react-router-dom'
import './Navlinks.css'

function Navlinks(){
    return(
        <div className='navlinks'>
            <div className='navlinks__outer'>
                <div className='navlinks__inner'>
                    <Link>Nouveautés</Link>
                    <Link>Nouveautés</Link>
                    <Link>Nouveautés</Link>
                    <Link>Nouveautés</Link>
                </div>
                
            </div>

        </div>
    )

}

export default Navlinks