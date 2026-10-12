import { Link, Outlet } from "react-router";

function EditorLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projetos</Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default EditorLayout;
