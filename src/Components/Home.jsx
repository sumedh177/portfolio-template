import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-800 text-white">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold">Hi, I'm Sumedh Chavan</h1>
        <p className="text-lg mt-4">Aspiring Frontend Developer</p>
        <a href="#projects" className="mt-6 inline-block bg-blue-600 px-6 py-2 rounded shadow hover:bg-blue-500">
          View My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
