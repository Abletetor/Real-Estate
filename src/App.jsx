import { ToastContainer } from "react-toastify";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

const App = () => {
   return (
      <div className="w-full overflow-hidden">
         <ToastContainer />
         <Header />
         <About />
         <Projects />
         <Testimonial />
         <Contact />
         <Footer />
      </div>
   );
};

export default App;
