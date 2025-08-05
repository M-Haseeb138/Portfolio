import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section id="work" className="py-24 px-6 md:px-16 bg-[#050414] font-sans text-white">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold tracking-tight">My Projects</h2>
        <div className="w-20 h-1 bg-purple-600 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
          Showcasing my work across various technologies and stacks.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, visibleCount).map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="bg-[#1c1b29] border border-[#2c2a40] rounded-3xl overflow-hidden shadow-lg hover:shadow-purple-500/40 transition-all hover:-translate-y-2 cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 object-fill"
            />
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-purple-900/30 text-purple-400 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < projects.length && (
        <div className="mt-12 text-center">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-full transition shadow-lg hover:shadow-purple-600"
          >
            Load More Projects
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1a1a2e] rounded-2xl shadow-2xl w-full max-w-4xl relative overflow-hidden animate-fadeIn">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white text-3xl hover:text-purple-500"
            >
              &times;
            </button>
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 w-full">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-l-2xl"
                />
              </div>

              <div className="lg:w-1/2 w-full p-6 space-y-6">
                <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
                <p className="text-gray-400 text-sm">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-800/30 text-purple-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
