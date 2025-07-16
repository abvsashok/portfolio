import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faAddressBook, faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faDatabase, faAtom, faServer, faLaptop } from '@fortawesome/free-solid-svg-icons';
import TitleFlip from "./TitleFlip";
import data from "/data.json";
import Projects from "./Projects";

const Section = (props) => {
  const { children } = props;
  // h-screen w-screen p-8 max-w-screen-2xl mx-auto
  // flex flex-col items-start justify-center
  return (
    <motion.section
      className={``}
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
        <div className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-700 to-yellow-200  p-4 my-10 mx-3 md:mx-20 md:p-8 bg-white rounded-lg  dark:bg-gray-800 text-center" id="about" role="tabpanel" aria-labelledby="about-tab">
          <h2 className="text-6xl font-extrabold my-5 mb-10 border-solid border-b-3 border-green-400">About Me</h2>

          <h2 className="mb-3 text-xl md:text-3xl font-bold tracking-tight text-green-100 dark:text-white leading-8 md:leading-10">{data.about?.split("..").map((a) => (<>{a}.<br /></>))} </h2>
        </div>
      </motion.button>
      <SkillsSections />
      <div className="relative flex overflow-hidden align-middle justify-center">
        <div className="flex flex-col gap-6 p-4 my-10 mx-3 md:mx-20 md:p-8">
          <h1 className="text-3xl md:text-6xl font-extrabold leading-snug text-center mb-5">
            <span className="text-6xl font-extrabold my-5 border-solid border-b- border-green-400 text-gray-100 px-1 text-green-100">My Work</span>
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
          <div className="w-60 h-60 custom-box-shadow rounded-md  text-center relative">
            {/* You can add an image or other content inside the avatar here */}
            <div className="absolute bg-[#2e7a7a] px-5 py-1 text-green-100 rounded-md bottom-[-20px] left-[-20px]">
              <div className="font-bold text-lg">
                {data.designation}
              </div>
              <div className="font-semibold">
                10 years of Experience
              </div>
            </div>
            <img
              src="images/ashok-profile.jpeg"
              alt="Avatar"
              className="w-full h-full object-cover shadow hover:shadow-lg rounded-md"
            />

          </div>
        </div>
      </div>
      <div className="text-center p-3 md:4/4 w-3/4 items-center">
        <TitleFlip text={data.name} />
        <div className="flex flex-col md:flex-row gap-5 my-2 mt-7 ">
          <div className="flex space-x-2 justify-center items-center">
            <span>
              <FontAwesomeIcon icon={faEnvelope} className="text-white" size="lg" />
            </span>
            <span className="text-green-100 font-bold  text-xl text-center">{data.email}</span>
          </div>
          <div className="flex space-x-2 justify-center items-center">
            <span>
              <FontAwesomeIcon icon={faPhone} className="text-white" size="lg" />
            </span>
            <span className="text-green-100 font-bold  text-xl text-center">{data.phone}</span>
          </div>
          <div className="flex space-x-2 justify-center items-center">
            <span>
              <FontAwesomeIcon icon={faAddressCard} className="text-white" size="lg" />
            </span>
            <span className="text-green-100 font-bold  text-xl text-center">{data.address}</span>
          </div>
        </div>
      </div>
    </div>
  </>
}

const SkillsSections = () => {
  return <div className=" w-full">
    <div className="p-4 py-10 skills-background  md:p-8 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
      <h2 className="text-6xl font-extrabold my-1 mb-10 text-center border-solid border-b-3 border-green-400">Skills</h2>
      <dl className="flex flex-wrap justify-center gap-5 ">
        {data?.skills?.map((group, index) => {
          let icon = faAtom;
          if (index == 1)
            icon = faLaptop
          if (index == 2)
            icon = faServer;
          return <>
            <SKillsGroup group={group} icon={icon} />
          </>
        })}
      </dl>
    </div>
  </div>
};
const SKillsGroup = ({ group, icon }) => {
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
              <div href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <FontAwesomeIcon icon={icon} className="text-black" size="xl" />
                <span className="flex-1 ms-3 whitespace-nowrap">{s.label}</span>
                {/* <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span> */}
              </div>
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

