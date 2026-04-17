import { Link } from 'react-router-dom'

function SiteHeader({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <Link to="/" className="site-title">My Blog</Link>
      <button className="theme-toggle" onClick={onToggleTheme} type="button">
        {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      </button>
    </header>
  )
}

export default SiteHeader
