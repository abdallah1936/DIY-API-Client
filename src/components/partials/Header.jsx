import { Link } from "react-router-dom"

export default function Header() {
  return (
    <nav>
      <ul>
        <li
          style={{
            listStyleType: "none",
            textDecoration: "none"
          }}>
          <Link to="/">Blogs Home</Link>
        </li>
      </ul>
    </nav>
  )
}