import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {

    const [show, handleShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",transitionNavbar);
        return () => window.removeEventListener("scroll",transitionNavbar);
    },[])

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav__contents">
                <img className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />

                <img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
            </div>

        </div>
    )
}

export default Nav