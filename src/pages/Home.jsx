import { motion } from "framer-motion";
import "../styles/_home.scss";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <motion.div
      className="home"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h1 variants={itemVariants}>Welcome to My Portfolio</motion.h1>
      <motion.p variants={itemVariants}>
        This is my new portfolio, currently a work in progress. I'm actively
        building new features and improving the design.
      </motion.p>
      <motion.p variants={itemVariants}>
        Please use the navigation bar to see what's being worked on. In the
        meantime, check out my previous portfolio here:{" "}
        <a
          href="https://samnoble118.github.io/Portfolio-V2/"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-link"
        >
          Portfolio V2
        </a>.
      </motion.p>

      <motion.div className="highlighted-projects" variants={containerVariants}>
        <motion.h2 variants={itemVariants}>Highlighted Projects</motion.h2>
        <motion.div className="projects-grid">
          <motion.div className="project-card" variants={itemVariants}>
            <h3>Pokédex App</h3>
            <p>A React-based Pokédex with search and filtering.</p>
            <a href="https://github.com/samnoble118/pokedex" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </motion.div>

          <motion.div className="project-card" variants={itemVariants}>
            <h3>E-Commerce Store</h3>
            <p>Custom Shopify theme with API integrations.</p>
            <a href="https://github.com/samnoble118/ecommerce" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </motion.div>

          <motion.div className="project-card" variants={itemVariants}>
            <h3>Portfolio v2</h3>
            <p>Previous portfolio built with React and styled components.</p>
            <a href="https://samnoble118.github.io/Portfolio-V2/" target="_blank" rel="noopener noreferrer">
              View Live
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
