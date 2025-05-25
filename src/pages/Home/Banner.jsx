import React from "react";
import { motion } from "motion/react";
import teamOne from "../../assets/team/team-one.jpg";
import teamTwo from "../../assets/team/team-two.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{ y: [100, 150, 100] }}
            transition={{ duration: 4, repeat: Infinity }}
            src={teamOne}
            className="max-w-sm rounded-[70px] rounded-bl-none border-8 border-t-0 border-r-0 border-[#138d75] shadow-2xl"
          />

          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 5, delay: 3, repeat: Infinity }}
            src={teamTwo}
            className="max-w-sm rounded-[70px] rounded-bl-none border-8 border-t-0 border-r-0 border-[#138d75] shadow-2xl"
          />
        </div>
        <div className="flex-1">
          {/* <motion.h1
            animate={
              { 
                rotate: 360,
                 x: 150,
                  transition: { duration: 3 }
                 }
                }
            className="text-5xl font-bold"
          >
            Latest job for you!
          </motion.h1> */}

          <motion.h1
            initial={{
              scale: 0,
            }}
            animate={{ scale: 1, transition: { duration: 3 } }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{
                color: ["#5dade2", "#5d6d7e", "#196f3d"],
                transition: { duration: 3, repeat: Infinity },
              }}
            >
              job
            </motion.span>{" "}
            for you!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
