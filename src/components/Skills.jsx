import SectionTitle from "./SectionTitle";

const checkIcon = (
    <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
        <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
    </svg>
);
const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color text-white">
        <span className="mr-4 flex font-bold ml-10 items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            {checkIcon}
        </span>
        {text}
    </p>
);
const Skills = () => {

    return <section id="about" className="p-2">
        <SectionTitle
            title="Skills"
            paragraph="In 9 years of experience, i have accumulated knowledge in technologies."
            mb="44px"
        />

        <div
            className="wow fadeInUp mb-12 items-center"
            data-wow-delay=".15s"
        >
            <div className="mx-[-12px] flex flex-wrap items-center">
                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="React.js" />
                    <List text="Node.js" />
                    <List text="Spring Boot" />
                </div>

                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="TypeScript" />
                    <List text="GraphQl" />
                    <List text="MySql" />
                </div>
            </div>
        </div>
    </section>
}
export default Skills;