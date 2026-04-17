import { Outlet } from 'react-router-dom'
import SiteHeader from './SiteHeader'
import { useTheme } from '../hooks/useTheme'

function SiteLayout() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="app-shell">
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} />
      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}

export default SiteLayout
