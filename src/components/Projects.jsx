import { Slides } from "./Slides";

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="relative group overflow-hidden rounded-md shadow-lg">
      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full transition-transform duration-300 transform group-hover:scale-110"
      />
      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default function Projects() {
  const cards = [
    {
      id: 1,
      imageSrc: '/images/Calendar.PNG',
      title: 'Dashboard',
      description: 'After Schools Management. http://estem.guru/',
    },
    {
      id: 2,
      imageSrc: '/images/Dashboard.PNG',
      title: '',
      description: '',
    },
    {
      id: 3,
      imageSrc: '/images/GradingEmail.PNG',
      title: '',
      description: '',
    },
    {
      id: 2,
      imageSrc: '/images/SendNotify.PNG',
      title: '',
      description: '',
    },

  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {cards.map((card) => (
          <Card
            key={card.id}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );

  // return <Slides />
  // return <>
  //   <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  //     <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/images/avatar.jpg" alt="" width="384" height="512" />
  //     <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
  //       <blockquote>
  //         <p class="text-lg font-medium">
  //           “Tailwind CSS is the only framework that I've seen scale
  //           on large teams. It’s easy to customize, adapts to any design,
  //           and the build size is tiny.”
  //         </p>
  //       </blockquote>
  //       <figcaption class="font-medium">
  //         <div class="text-sky-500 dark:text-sky-400">
  //           Sarah Dayan
  //         </div>
  //         <div class="text-slate-700 dark:text-slate-500">
  //           Staff Engineer, Algolia
  //         </div>
  //       </figcaption>
  //     </div>
  //   </figure></>
  return <>
    <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
      <div>
        <img src="/images/avatar.jpg" alt="" loading="lazy" />
      </div>
      <div class="col-start-3">
        <img src="/images/avatar.jpg" alt="" loading="lazy" />
      </div>
      <div>
        <img src="/images/avatar.jpg" alt="" loading="lazy" />
      </div>
      <div>
        <img src="/images/avatar.jpg" alt="" loading="lazy" />
      </div>
      <div class="row-start-1 col-start-2 col-span-2">
        <img src="/images/avatar.jpg" alt="" loading="lazy" />
      </div>
    </div>
  </>
}
