import { assets, testimonialsData } from "../../assets/assets";
import { motion } from 'framer-motion';

const Testimonial = () => {
   return (
      <motion.div
         initial={ { opacity: 0, x: 200 } }
         transition={ { duration: 1 } }
         whileInView={ { opacity: 1, x: 0 } }
         viewport={ { once: true } }
         className="container mx-auto py-10 md:px-20 lg:px-10 w-full overflow-hidden" id='Testimonials'>
         <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Customer <span className="underline underline-offset-4 decoration-1 under font-light">Testimonials</span></h1>
         <p className="text-center text-gray-500 max-w-80 mb-12 mx-auto">
            Real Stories from Those Who Found Home with Us
         </p>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
            { testimonialsData.map((testimony, index) => (
               <div key={ index } className="max-w-[340px] shadow-lg rounded py-12 text-center">
                  <img src={ testimony.image } alt={ testimony.alt } className="w-20 h-20 rounded-full mx-auto mb-4" />
                  <h2 className="text-xl text-gray-700 font-medium">{ testimony.name }</h2>
                  <p className="text-gray-500 text-sm">{ testimony.title }</p>
                  <div className="flex justify-center gap-1 text-red-500 mb-4">
                     { Array.from({ length: testimony.rating }, (item, index) => (
                        <img key={ index } src={ assets.star_icon } alt="" />
                     )) }
                  </div>
                  <p className="text-gray-600">{ testimony.text }</p>
               </div>
            )) }
         </div>
      </motion.div>
   );
};

export default Testimonial;
