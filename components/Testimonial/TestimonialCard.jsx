// Design from
// https://www.material-tailwind.com/docs/html/card#testimonial-card

import Link from "next/link";

const TestimonialCard = ({ name, photo, jobTitle, source, review }) => {
  return (
    <>
      {/* <div class="flex w-full p-4 max-w-lg flex-col rounded-lg bg-white shadow-sm border border-slate-200 my-6 h-full w-full"> */}
      {/* <div className="flex p-4 max-w-lg flex-col rounded-lg bg-white shadow-sm border border-slate-200 mx-auto h-auto w-full"> */}
      <div className="h-full flex justify-center items-center">
        <Link href={source}>
          <div className="cursor-pointer flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-[20rem] md:w-[24rem] p-6 hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="flex items-center gap-4 text-slate-800">
              <img
                src={photo}
                alt={name}
                className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
              />
              <div className="flex w-full flex-col">
                <div className="flex items-center justify-between">
                  <h5 className="text-xl font-semibold text-slate-800">
                    {name}
                  </h5>
                </div>
                <p className="text-xs uppercase font-bold text-slate-500 mt-0.5">
                  {jobTitle}
                </p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-base text-slate-600 font-light leading-normal whitespace-pre-line">
                {review}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default TestimonialCard;
