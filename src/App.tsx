import { Routes, Route } from "react-router";
import SiteLayout from "./layouts/SiteLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import Certificates from "./pages/Certificates";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects/:slug" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
