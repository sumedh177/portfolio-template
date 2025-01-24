import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
      <p className="text-center mb-4">
        I am a passionate frontend developer skilled in modern web technologies.
      </p>
      <div className="flex justify-center space-x-6 text-4xl text-blue-500">
        <FaReact title="React" />
        <FaHtml5 title="HTML5" />
        <FaCss3Alt title="CSS3" />
        <FaJsSquare title="JavaScript" />
      </div>
    </section>
  );
}
