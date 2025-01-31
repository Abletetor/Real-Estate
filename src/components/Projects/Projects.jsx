import { useEffect, useState } from "react";
import { assets, projectsData } from "../../assets/assets";
import { motion } from 'framer-motion';

const Projects = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [cardsToShow, setCardsToShow] = useState(1);

   useEffect(() => {
      const updateCardToShow = () => {
         if (window.innerWidth >= 1024) {
            setCardsToShow(projectsData.length);
         } else {
            setCardsToShow(1);
         }
      };

      updateCardToShow();
      window.addEventListener('resize', updateCardToShow);
      return () => window.removeEventListener('resize', updateCardToShow);
   }, []);

   const nextProject = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
   };
   const previousProject = () => {
      setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1);
   };

   return (
      <section className="bg-[#f9fafc]">
         <motion.div
            initial={ { opacity: 0, x: -200 } }
            transition={ { duration: 1 } }
            whileInView={ { opacity: 1, x: 0 } }
            viewport={ { once: true } }
            className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-10 my-20 w-full overflow-hidden"
            id="Projects"
         >
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
               Projects <span className="underline underline-offset-4 decoration-1 font-light">Completed</span>
            </h1>
            <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
               Crafting Spaces, Building Legacies - Explore Our Portfolio
            </p>

            {/* Slider Controls */ }
            <div className="flex justify-end items-center mb-8">
               <button onClick={ previousProject } className="p-3 bg-gray-200 rounded mr-2">
                  <img src={ assets.left_arrow } alt="previous" aria-label="Previous Project" />
               </button>
               <button onClick={ nextProject } className="p-3 bg-gray-200 rounded mr-2">
                  <img src={ assets.right_arrow } alt="Next" aria-label="Next Project" />
               </button>
            </div>

            {/* Project Slider Container */ }
            <div className="overflow-hidden">
               <div
                  className="flex gap-8 transition-transform duration-500 ease-in-out"
                  style={ { transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` } }
               >
                  { projectsData.map((project, index) => (
                     <div key={ index } className="relative flex-shrink-0 w-full sm:w-1/4">
                        <img src={ project.image } alt={ project.title } className="rounded w-full h-auto mb-14 pb-5" />
                        <div className="absolute left-0 right-0 bottom-5 flex flex-col items-center">
                           <div className="inline-block bg-white w-3/4 px-3 py-2 shadow-md text-center">
                              <h2 className="text-sm font-semibold text-gray-800">{ project.title }</h2>
                              <p className="text-gray-500 text-sm">{ project.price } <span className="px-1">|</span> { project.location }</p>
                           </div>
                           <button
                              className="mt-3 bg-blue-600 text-white text-sm px-8 py-2 rounded-md hover:bg-blue-700 transition"
                              onClick={ () => window.location.href = `/project/#` }
                           >
                              Read More
                           </button>
                        </div>
                     </div>
                  )) }
               </div>
            </div>
         </motion.div>
      </section>
   );
};

export default Projects;
