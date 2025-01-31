import { useState } from 'react';
import { assets } from '../../assets/assets';
import { useEffect } from 'react';
const Navbar = () => {
   const [showMobileMenu, setShowMobileMenu] = useState(false);

   //Prevent scrolling on mobile
   useEffect(() => {
      if (showMobileMenu) {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = 'auto';
      }
      return () => {
         document.body.style.overflow = 'auto';
      };
   }, [showMobileMenu]);
   return (
      <div className="absolute top-0 left-0 w-full z-10">
         <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={ assets.logo } alt="" />
            <ul className='hidden md:flex gap-7 text-white'>
               <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
               <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
               <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
               <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
            </ul>
            <button className='hidden md:block bg-blue-600 text-white px-8 p-2 rounded-full hover:bg-blue-700 transition cursor-pointer'>Signup</button>
            <img onClick={ () => setShowMobileMenu(true) } src={ assets.menu_icon } alt="" className='w-7 md:hidden' />
         </div>
         {/* ----------Mobile-menu---------- */ }
         <div className={ `md:hidden ${showMobileMenu ? 'w-full fixed' : 'h-0 w-0'}  top-0 bottom-0 right-0 overflow-hidden bg-white transition-all` } >
            <div className='flex justify-end p-6 cursor-pointer'>
               <img onClick={ () => setShowMobileMenu(false) } src={ assets.cross_icon } alt="" className='w-6' />
            </div>
            <ul className='flex flex-col items-center gap-2 mx-5 px-5 text-lg font-semibold cursor-pointer'>
               <a onClick={ () => setShowMobileMenu(false) } href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
               <a onClick={ () => setShowMobileMenu(false) } href="About" className='px-4 py-2 rounded-full inline-block'>About</a>
               <a onClick={ () => setShowMobileMenu(false) } href="Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
               <a onClick={ () => setShowMobileMenu(false) } href="#Testimonial" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
            </ul>
         </div>
      </div>
   );
};

export default Navbar;
