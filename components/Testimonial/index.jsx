import TestimonialGrid from "./TestimonialGrid";

const Testimonial = () => {
  return (
    <>
      <section id="testimonial">
        <div className=" responsive-container flex flex-col items-center justify-center px-[10px] md:px-[20px] py-[114px]">
          {/* <div className=" bg-gradient-to-l from-red-500 to-orange-500 responsive-container flex flex-col items-center justify-center px-[10px] md:px-[20px] py-[114px]"> */}
          <h1 className=" mb-16 w-full py-1 leading-tight text-center text-balance bg-gradient-to-l from-indigo-900/95 to-purple-950/95 bg-clip-text text-transparent text-3xl font-semibold md:text-4xl">
            What People Say
          </h1>
          <TestimonialGrid />
        </div>
      </section>
    </>
  );
};

export default Testimonial;
