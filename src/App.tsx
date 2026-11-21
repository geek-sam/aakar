import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Homepage from "./components/pages";
import Layout from "./Layout/Layout";
import Blogs from "./components/pages/blogs";
import AboutPage from "./components/pages/about";
import ProjectsPage from "./components/pages/projects";
import ServicesPage from "./components/pages/services";
import ContactPage from "./components/pages/contatct";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <section className="section project-details">
      <div className="container">
        <Link to="/projects" className="text-link">
          ← Back to Projects
        </Link>

        <div className="project-detail-header">
          <span className="section-label">{project.category}</span>
          <h1>{project.name}</h1>
          <p>{project.location}</p>
        </div>

        <div className="project-detail-image">
          <img src={project.image} alt={project.name} />
        </div>

        <div className="project-detail-description">
          <h2>A space designed with intention.</h2>
          <p>
            This project explores the relationship between materials, light,
            functionality, and contemporary Indian living. Detailed project
            information, design process, and additional photography can be added
            here.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   404 PAGE
========================================= */

function NotFound() {
  return (
    <section className="section not-found">
      <div className="container">
        <span className="section-label">404 — Page Not Found</span>
        <h1>This space doesn't exist.</h1>
        <p>The page you're looking for may have moved or no longer exists.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home ↗
        </Link>
      </div>
    </section>
  );
}

function BlogDetails() {
  return <section></section>;
}

/* =========================================
   APP ROUTER
========================================= */

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
