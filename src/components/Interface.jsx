import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faVcard, faAddressBook, faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import TitleFlip from "./TitleFlip";
import data from "/data.json";
import Projects from "./Projects";

const Section = (props) => {
  const { children } = props;
  // h-screen w-screen p-8 max-w-screen-2xl mx-auto
  // flex flex-col items-start justify-center
  return (
    <motion.section
      className={`
   
  `}
      initial={{
        opacity: 1,
        y: 5,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.2,
        },
      }}
    >
      {children}
    </motion.section>
  );
};
//bg-gradient-to-b from-stone-700
export const Interface = ({ section }) => {
  return (
    <div className="flex flex-col items-center ">
      <HomeBanner />
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="m-5"
      >
        <div className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-700 to-yellow-200  p-4 my-10 mx-3 md:mx-20 bg-white rounded-lg md:p-8 dark:bg-gray-800 text-center" id="about" role="tabpanel" aria-labelledby="about-tab">
          <h2 className="text-6xl font-extrabold my-5 mb-10 border-solid border-b-3 border-green-400">About Me</h2>

          <h2 className="mb-3 text-xl md:text-3xl font-bold tracking-tight text-white dark:text-white leading-8 md:leading-10">{data.about} </h2>
        </div>
      </motion.button>
      <SkillsSections />
      <div className="relative flex overflow-hidden align-middle justify-center" style={{

      }}>
        <div className="flex flex-col mx-10 md:mx-20 my-5">
          <h1 className="text-3xl md:text-6xl font-extrabold leading-snug text-center">
            <span className="text-gray-100 px-1">My Work</span>
          </h1>
          <Projects />
        </div>

      </div>
      {/* <ProjectsSection /> */}
    </div>
  );
};

export const HomeBanner = () => {
  return <>
    <div className="flex flex-col md:flex-row sm:flex-col items-center gap-3 mt-20 md:mt-15">
      <div className=" w-4/4 md:1/4 text-right flex justify-end">
        <div className="transition-opacity duration-300 hover:opacity-80 "

        >
          <div className="w-60 h-60 custom-box-shadow rounded-md overflow-hidden text-center">
            {/* You can add an image or other content inside the avatar here */}
            <img
              src="images/ashok-profile.jpeg"
              alt="Avatar"
              className="w-full h-full object-cover shadow hover:shadow-lg"
            />
            {/* <div className="absolute bottom-0">
              Sotware Developer
            </div> */}
          </div>
          {/* <img src="images/vamsi-profile.jpeg" className="border-stone-500" /> */}
        </div>
      </div>
      <div className="text-center p-3 md:4/4 w-3/4 items-center">
        {/* <ProjectsSection /> */}
        <div className="flex flex-col md:flex-row gap-3 my-3 justify-end">
          <div className="flex space-x-2  px-2 justify-center">

            <span className="text-white font-bold text-xl md:text-2xl border-b-3 text-center border-green-200">{data.designation}</span>
          </div>

        </div>
        <TitleFlip text={data.name} />
        <div className="flex flex-col md:flex-row gap-10 my-3 ">
          <div className="flex space-x-2 justify-center">
            <span>
              <FontAwesomeIcon icon={faEnvelope} className="text-white" size="xl" />
            </span>
            <span className="text-white font-bold  text-xl text-center">{data.email}</span>
          </div>
          <div className="flex space-x-2 justify-center">
            <span>
              <FontAwesomeIcon icon={faPhone} className="text-white" size="xl" />
            </span>
            <span className="text-white font-bold  text-xl text-center">{data.phone}</span>
          </div>
          <div className="flex space-x-2 justify-center">
            <span>
              <FontAwesomeIcon icon={faAddressCard} className="text-white" size="xl" />
            </span>
            <span className="text-white font-bold  text-xl text-center">{data.address}</span>
          </div>
        </div>
      </div>
    </div>


  </>
}

const SkillsSections = () => {
  return <div className=" w-full">
    <div className="p-4 bg-[#efefef]  md:p-8 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
      <h2 className="text-6xl font-extrabold my-5 mb-10 text-center border-solid border-b-3 border-green-400">Skills</h2>
      <dl className="flex flex-wrap justify-center gap-5 ">
        {data?.skills?.map((group) => {
          return <>
            <SKillsGroup group={group} />
          </>
        })}
      </dl>
    </div>
  </div>
};
const SKillsGroup = ({ group }) => {
  return <>

    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-3 text-gray-900 md:text-xl dark:text-white text-3xl font-extrabold text-center">
        {group.title}
      </h5>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400"></p>
      <ul className="my-4 space-y-3">
        {group?.list?.map((s) => {
          return <>
            <li>
              <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 21">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.24 7.194a24.16 24.16 0 0 1 3.72-3.062m0 0c3.443-2.277 6.732-2.969 8.24-1.46 2.054 2.053.03 7.407-4.522 11.959-4.552 4.551-9.906 6.576-11.96 4.522C1.223 17.658 1.89 14.412 4.121 11m6.838-6.868c-3.443-2.277-6.732-2.969-8.24-1.46-2.054 2.053-.03 7.407 4.522 11.959m3.718-10.499a24.16 24.16 0 0 1 3.719 3.062M17.798 11c2.23 3.412 2.898 6.658 1.402 8.153-1.502 1.503-4.771.822-8.2-1.433m1-6.808a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">{s.label}</span>
                {/* <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span> */}
              </a>
            </li></>
        })}

      </ul>
    </div>
  </>
}

const ProjectsSection = () => {
  return <div className="my-2 mx-5">
    <h2 className="text-6xl font-extrabold my-5 text-white mb-10 border-solid border-b-3 text-center border-green-400">Projects</h2>
    <div className="flex gap-5 flex-col md:flex-row my-10">
      {data?.projects?.map((project) => {
        return <>
          <div>
            <a href="#" class="flex flex-col items-center bg-white rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              {/* <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"  alt="" /> */}
              <div class="flex flex-col justify-between p-4 leading-normal gap-2 bg-gradient-to-r from-violet-200 to-pink-200">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{project.title}</h5>
                <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">

                  {project?.desc?.map((c) => {
                    return <>
                      <li class="flex space-x-2 rtl:space-x-reverse items-center">
                        <svg class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span class="leading-tight">{c}</span>
                      </li></>
                  })}

                </ul>
                {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
              </div>
            </a>

          </div></>
      })}

    </div> </div>

}

