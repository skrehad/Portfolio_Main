/* eslint-disable react/no-unescaped-entities */
"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Image from "next/image";
import image from "../../assets/rehad2.jpg";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <section className="section pb-20 md:pb-10 lg:pb-20" id="about" ref={ref}>
      <div className="text-center pb-5">
        <h1 className="text-2xl md:text-3xl text-orange-300 font-bold">
          About Me
        </h1>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
          {/* Image Section */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <Image
              src={image}
              alt="About Me"
              width={450}
              height={400}
              objectFit="cover"
              className="rounded-xl"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="mb-6 text-xl leading-relaxed text-gray-300">
              I'm a passionate{" "}
              <span className="text-orange-300 font-semibold">
                Full Stack Developer
              </span>{" "}
              from Dhaka, Bangladesh📍, skilled in building robust and dynamic
              web applications using the{" "}
              <span className="text-orange-300 font-semibold">MERN stack</span>{" "}
              and modern frameworks like{" "}
              <span className="text-orange-300 font-semibold">Next.js</span>. I
              have hands-on experience with both{" "}
              <span className="text-orange-300 font-semibold">
                NoSQL (MongoDB, Mongoose)
              </span>{" "}
              and <span className="text-orange-300 font-semibold">SQL</span>{" "}
              databases using tools like{" "}
              <span className="text-orange-300 font-semibold">Prisma ORM</span>.
              I'm driven by curiosity and always eager to turn ideas into
              scalable and efficient solutions with a focus on performance and
              clean code.
            </p>

            {/* Stats Section */}
            <div className="flex justify-center lg:gap-20 gap-10 text-center text-white">
              <div>
                <div className="text-[40px] font-bold text-orange-200">
                  {inView ? <CountUp start={0} end={20} duration={4} /> : null}+
                </div>
                <p className="text-sm tracking-wide">
                  Projects <br /> Completed
                </p>
              </div>
              <div>
                <div className="text-[40px] font-bold text-orange-200">
                  {inView ? <CountUp start={0} end={10} duration={4} /> : null}+
                </div>
                <p className="text-sm tracking-wide">
                  Technologies <br /> Learned
                </p>
              </div>
              <div>
                <div className="text-[40px] font-bold text-orange-200">
                  {inView ? <CountUp start={0} end={2} duration={4} /> : null}+
                </div>
                <p className="text-sm tracking-wide">
                  Ongoing <br /> Projects
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
