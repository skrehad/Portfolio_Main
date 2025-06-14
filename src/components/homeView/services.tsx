"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Link from "next/link";

const services = [
  {
    name: "Website Design and Development",
    description:
      "I provide professional and innovative website design and development services to help businesses establish a strong online presence and achieve their digital goals.",
  },
  {
    name: "Full-Stack Development",
    description:
      "As a Full-Stack Developer, I have successfully designed and implemented dynamic web applications, showcasing my proficiency in both front-end and back-end technologies.",
  },
  {
    name: "Responsive Web Design",
    description:
      "As a skilled web developer, I craft visually engaging and user-friendly websites through responsive design techniques.",
  },
  {
    name: "Website Maintenance and Support",
    description:
      "As a dedicated Website Maintenance and Support professional, I excel in providing assistance and ensuring seamless online experiences for clients.",
  },
];

const Services = () => {
  return (
    <section className="py-16 px-5" id="services">
      <div className="text-center pb-10">
        <h1 className="text-2xl md:text-3xl text-orange-300 font-bold">
          MY Services
        </h1>
      </div>

      <div className="container mx-auto">
        <div className="flex  flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Left Section */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-orange-200 mb-6">
              What I Do
            </h2>
            <h3 className="text-lg max-w-lg mx-auto lg:mx-0 mb-8">
              As a MERN stack developer, I specialize in building full-stack web
              applications using MongoDB, Express.js, React.js, and Node.js,
              seamlessly integrating the front-end and back-end to create robust
              and dynamic user experiences.
            </h3>
            <Link href="/projects">
              <button className="px-6 py-2 border-2 border-gray-300 text-gray-300 rounded-lg hover:border-orange-300 hover:text-orange-300 transition-all duration-300">
                See My Work
              </button>
            </Link>
          </motion.div>

          {/* Right Section */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  className="p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                  key={index}
                >
                  <h4 className="text-2xl text-orange-200 font-semibold mb-3">
                    {service.name}
                  </h4>
                  <p className="text-md leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
