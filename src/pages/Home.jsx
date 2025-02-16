import "../styles/_home.scss";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>
        This is my new portfolio, currently a work in progress. I'm actively building new features and improving the design.  
      </p>
      <p>
        Please use the navigation bar to see what's being worked on.  
        In the meantime, you can check out my current portfolio here:{" "}
        <a
          href="https://samnoble118.github.io/Portfolio-V2/"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-link"
        >
          Portfolio V2
        </a>.
      </p>
    </div>
  );
}
