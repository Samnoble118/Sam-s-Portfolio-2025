import { useState, useEffect } from "react";
import "../styles/_projects.scss";

export default function Projects() {
  const [repos, setRepos] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Samnoble118/repos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        return response.json();
      })
      .then((data) => {
        const sortedRepos = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setRepos(sortedRepos);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  },);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="projects">
      <h1>My GitHub Projects</h1>
      <div className="project-list">
        {repos.map((repo) => {
          const githubPagesUrl = `https://${repo.owner.login}.github.io/${repo.name}/`;

          return (
            <div key={repo.id} className="project-card">
              <div className="project-content">  {/* ADDED THIS WRAPPER */}
                <h2>{repo.name}</h2>
                <p>{repo.description || "No description available"}</p>
                <p>⭐ {repo.stargazers_count} | 🛠 {repo.language || "Unknown"}</p>
              </div> {/* END OF WRAPPER */}
              <div className="buttons">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn github-btn"
                >
                  View on GitHub
                </a>
                {repo.has_pages && (
                  <a
                    href={githubPagesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn live-demo-btn"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}