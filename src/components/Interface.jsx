import { motion } from "framer-motion";
import Nav from "./Navi";
import About from "./About";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Skills from "./Skills";
import Projects from "./Projects";

const Section = (props) => {
  const { children } = props;
  // h-screen w-screen p-8 max-w-screen-2xl mx-auto
  // flex flex-col items-start justify-center
  return (
    <motion.section
      className={`
      h-screen w-screen flex 
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = ({ section }) => {
  return (
    <div className="flex flex-col items-center w-screen">
      {/* <Nav /> */}
      <AboutSection />
      {/* <SkillsSection /> */}
      <Section>
        <About />
      </Section>

      <div className="relative flex overflow-hidden align-middle justify-center p-4 py-12 mb-5" style={{

      }}>
        <div className="flex flex-col">
          <h1 className="text-6xl font-extrabold leading-snug text-center">
            <span className="text-gray-100 px-1">My Work</span>
          </h1>
          <Projects />
        </div>

      </div>
      {/* <ContactSection /> */}
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <div className="flex flex-col md:flex-row w-screen">
        <div className="w-full md:w-1/2 p-4 transition-opacity duration-300 hover:opacity-80 min-h-64" style={{
          backgroundImage: "url('/images/photo1.jpg')",
          backgroundRepeat: "no-repeat",      // Prevent image from repeating
          backgroundSize: "cover",            // Fit the image to cover the entire div
          // backgroundPosition: "center center"
        }}>

        </div>
        <div className="w-full md:w-3/4 p-8 flex flex-col items-start justify-center">
          {/* https://docs.google.com/document/d/1-c_cnL7e-3868XBTRup2TLNxsmNqCzl1JE6QczR-waU/edit?usp=sharing */}

          <h1 className="text-6xl font-extrabold leading-snug">
            <span className="text-white px-1 italic">Ashok Kumar Chokkapu</span>
          </h1>
          <span className="text-gray-100 px-1 text-xl italic ">
            Hello I am a<b> FullStack Developer</b> from Toronto, Canada.
          </span>
          <div className="flex gap-2 mt-3 items-end justify-items-center my-2 mb-3">
            <a
              href="https://www.linkedin.com/in/ashok-kumar-chokkapu-40961073/"  // Replace with your LinkedIn profile link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2xl" className="mr-3" />
            </a>
            {/* <button className="text-white bg-orange-600 hover:bg-orange-400 font-medium px-3 py-2 rounded-md">
              Contact Me
            </button> */}
            <a target="_blank" href="https://docs.google.com/document/d/1-c_cnL7e-3868XBTRup2TLNxsmNqCzl1JE6QczR-waU/edit?usp=sharing">
              <button className="text-white border-orange-600 border hover:bg-orange-400 font-medium px-3 py-2 rounded-md">
              Download Resume
            </button>
            </a>
          </div>
          <div className="flex gap-2 mt-5 text-gray-100 px-1 text-xl">
            <span className="border-b-4 border-gray-100 font-bold">
              ashokchokkapu@gmail.com<br />
              +1 4377 332 887
            </span>
          </div>
        </div>
      </div>

    </Section>
  );
};
