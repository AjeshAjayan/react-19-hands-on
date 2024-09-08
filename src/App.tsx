import './App.scss'
import { TopNavigation } from './components/TopNavigation'
import { Router } from './router/RouterContext'
import { Outlet } from './components/Outlet'

function App() {

  return (
    <Router>
      <header>
        <nav>
          <TopNavigation />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </Router>
  )
}

export default App
