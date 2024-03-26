import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
<>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
        <div>siit algab sisu</div>
      <Outlet />
    </>
    )
}

export default Layout
