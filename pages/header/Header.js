import React, {useEffect, useRef} from 'react';
import Link from 'next/link';

const Header = () => {
const hamburgerBtnRef = useRef(null);
const hamburgerMenuRef = useRef(null);

const toggleHamburgerDisplay = () => {
    hamburgerBtnRef?.current?.classList?.toggle('open');
    hamburgerMenuRef?.current?.classList?.toggle('flex');
    hamburgerMenuRef?.current?.classList?.toggle('hidden');
};


    return (
        <header>
          <nav className='relative container mx-auto p-6'>
                <div className='flex items-center justify-between'>
                    <div className='pt-2'>
                        <img src='/images/logo.svg' alt="logo" />
                    </div>
                    <div className='hidden md:flex space-x-6'>
                        <a href="#" className='hover:text-darkGyayishBlue'>Pricing</a>
                        <a href="#" className='hover:text-darkGyayishBlue'>Product</a>
                        <a href="#" className='hover:text-darkGyayishBlue'>About Us</a>
                        <a href="#" className='hover:text-darkGyayishBlue'>Career</a>
                        <a href="#" className='hover:text-darkGyayishBlue'>Community</a>
                    </div>
                    <a href="#"
                        className='hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'>
                            Get Started
                        </a>

                <button id="menu-btn" ref={hamburgerBtnRef} className='open block hamburger md:hidden focus:outline-none' onClick={toggleHamburgerDisplay}>
                    <span className='hamburger-top' />
                    <span className='hamburger-middle' />
                    <span className='hamburger-bottom' />
                </button>
                </div>

                <div className='md:hidden'>
                    <div id="menu" ref={hamburgerMenuRef} className='absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white  sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'>
                        <a href="#">Pricing</a>
                        <a href="#">Products</a>
                        <a href="#">About Us</a>
                        <a href="#">Careers</a>
                        <a href="#">Community</a>
                    </div>
                </div>
            </nav>

           



           

        </header>
        
    )
}

export default Header
