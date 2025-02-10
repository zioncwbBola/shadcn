const PortPage = () => {
  const projects = [
    { title: 'Project 1', description: 'Description of project 1', tech: 'React, Node.js' },
    { title: 'Project 2', description: 'Description of project 2', tech: 'Next.js, PostgreSQL' },
    { title: 'Project 3', description: 'Description of project 3', tech: 'TailwindCSS, DaisyUI' },
  ];

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-black/70 text-green-300 p-4 rounded-lg shadow-lg hover:shadow-green-400 hover:scale-105 transition-transform"
        >
          <h2 className="text-xl font-bold">{project.title}</h2>
          <p className="mt-2">{project.description}</p>
          <span className="block mt-4 text-sm text-green-500">Tech Stack: {project.tech}</span>
        </div>
      ))}
    </div>
  );
};

export default PortPage;
