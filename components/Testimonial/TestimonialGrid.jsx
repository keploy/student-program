import TestimonialCard from "./TestimonialCard";
import style from "./TestimonialGrid.module.css";
import reviews from "../../utils/testimonial-data";

const TestimonialGrid = () => {
  return (
    <>
      <div className={style.parent}>
        <div className={style.div1}>
          <TestimonialCard
            name={reviews[0].name}
            photo={reviews[0].photo}
            jobTitle={reviews[0].jobTitle}
            source={reviews[0].source}
            review={reviews[0].review}
          />
        </div>
        <div className={style.div2}>
          <TestimonialCard
            name={reviews[1].name}
            photo={reviews[1].photo}
            jobTitle={reviews[1].jobTitle}
            source={reviews[1].source}
            review={reviews[1].review}
          />
        </div>
        <div className={style.div3}>
          <TestimonialCard
            name={reviews[2].name}
            photo={reviews[2].photo}
            jobTitle={reviews[2].jobTitle}
            source={reviews[2].source}
            review={reviews[2].review}
          />
        </div>
        <div className={style.div4}>
          <TestimonialCard
            name={reviews[3].name}
            photo={reviews[3].photo}
            source={reviews[0].source}
            jobTitle={reviews[3].jobTitle}
            review={reviews[3].review}
          />
        </div>
        <div className={style.div5}>
          <TestimonialCard
            name={reviews[4].name}
            photo={reviews[4].photo}
            jobTitle={reviews[4].jobTitle}
            source={reviews[4].source}
            review={reviews[4].review}
          />
        </div>
      </div>
    </>
  );
};

export default TestimonialGrid;
