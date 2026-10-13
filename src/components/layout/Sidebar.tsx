import { Link, Outlet } from "react-router";

function Sidebar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/projects">Projetos</Link>
    </nav>
  );
}

export default Sidebar;
