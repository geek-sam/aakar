import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/pages";
import Layout from "./Layout/Layout";
import Blogs from "./components/pages/blogs";
import AboutPage from "./components/pages/about";
import ProjectsPage from "./components/pages/projects";
import ServicesPage from "./components/pages/services";
import ContactPage from "./components/pages/contatct";
import BlogDetails from "./components/pages/blogDetails";
import ProjectDetails from "./components/pages/projectDetails";
import ScrollManager from "./components/common/ScrollManager";

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

/* =========================================
   APP ROUTER
========================================= */

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetails />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
