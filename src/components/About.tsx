import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-black text-white" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                As a Computer Science Engineering student and Budget Director, I
                bring a unique blend of technical expertise and leadership
                skills to the table.
              </p>
              <p className="text-lg text-gray-300">
                My passion lies in app development, research papers, and human
                behavior analysis. I believe in creating technology that not
                only solves problems but also enhances human experiences.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=1000"
                  alt="Developer workspace"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
