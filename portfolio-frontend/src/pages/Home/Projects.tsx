// src/pages/Home/ProjectsPreview.tsx

function Projects() {
  return (
    <section className="max-w-2xl mx-auto text-center space-y-6">
      <h2 className="text-3xl font-light">Projects</h2>

      <div className="space-y-4 text-left">
        <div>
          <h3>
            <a href="https://github.com/moosewithwolf/portfolio" className="text-lg font-light underline">
              Home Server Setup
            </a>
          </h3>
          <p className="text-gray-700">
            Self-hosted this portfolio using an old laptop with Ubuntu-Server. Covered
            setup, deployment, and security using GitHub Actions.
          </p>
        </div>

        <div>
          <h3> <a  className="text-lg font-light underline" href="#">C++ Route Finder</a></h3>
          <p className="text-gray-700">
            Agile-based school project to compute optimal truck routes. Led
            system design, testing, and team coordination.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
