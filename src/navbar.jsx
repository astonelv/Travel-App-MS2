import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import './navbar.css';


const navbar = () => {
    return (
        <section className="navBarSection">
            <div className="header">
                <div ClassName="logoDiv">
                    <a href="#" className="logo">
                        <h1 className='flex'> <FaGlobe className='icon'/> </h1>
                        </a>
                     </div>
                </div>
           </section>
    )
}

export default navbar;