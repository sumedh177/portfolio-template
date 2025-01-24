const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A responsive and modern portfolio website.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "A fully functional e-commerce web application.",
    image: "https://via.placeholder.com/300",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg overflow-hidden shadow-md"
          >
            <img src={project.image} alt={project.title} className="w-full" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
