import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons';

import data from "/data.json";

export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;

  return (
    <>
      {/* <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-12 right-12 p-3 bg-[#334155] w-11 h-11 rounded-md"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? "rotate-45  translate-y-0.5" : ""
            }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${menuOpened ? "hidden" : ""
            }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? "-rotate-45" : ""
            }`}
        />
      </button> */}
      <div className="z-10 fixed top-0 right-0 bottom-0 transition-all gap-6 p-8 overflow-hidden flex flex-col w-20 mr-4">

      </div>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 transition-all overflow-hidden flex flex-col align-middle
      ${menuOpened ? "w-20" : "w-20"}`}
      >
        <div className="flex-1 flex  justify-start  mt-10  flex-col gap-5">

          <a
            href={`${data.linkedIn}`}   // Replace with your LinkedIn profile link
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-gray-400 "
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
          <a
            href={`${data.github}`}  // Replace with your LinkedIn profile link
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-gray-400 "
          >
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>

          <a target="_blank"
            href={data.resume}
          >
            <button className="text-green-400 border-green-300 border hover:bg-gray-100 hover:text-gray-600 font-medium px-2 py-2 rounded-md">
              <div className="rounded-md flex flex-col">
                {"RESUME".split("").map((c) => (<span className="font-extrabold text-center"> {c}</span>))}

              </div>
            </button>
          </a>
        </div>
        {/* <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <MenuButton label="Home" onClick={() => onSectionChange(0)} />
          <MenuButton label="About/Skills" onClick={() => onSectionChange(1)} />
          <MenuButton label="Projects" onClick={() => onSectionChange(2)} />
        </div> */}
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors"
    >
      {label}
    </button>
  );
};
