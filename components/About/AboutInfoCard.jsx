import style from "./AboutInfoCard.module.css"

const AboutInfoCard = ({ heading, description, children }) => {
  return (
    <>
      {/* <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-[20rem] md:w-96 lg:w-[18rem] p-6"> */}
      <div className={`relative flex flex-col my-6 bg-white ${style.cardGradient} shadow-sm border-orange-500 border rounded-lg w-[20rem] md:w-96 lg:w-[18rem] p-6 hover:scale-105 transition-all duration-300 ease-in-out`}>
        <div className="flex items-center mb-4">
          {children}
          <h5 className="ml-3 text-slate-800 text-2xl font-semibold">
            {heading}
          </h5>
        </div>
        {/* NOTE */}
        {/* whitespace-pre-line --> helps in redering new-line character */}
        <p className="block text-slate-600 leading-normal font-light mb-4 whitespace-pre-line">
          {description}
        </p>
        <div>
          <a
            href="#"
            className="text-slate-800 font-semibold text-sm hover:underline flex items-center"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutInfoCard;
