import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/NavBar'
import Search from './Pages/Entities/Search';
import Maintenance from './Pages/Entities/Maintenance';
import { SBProvider } from './Context'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element: <Home /> },
    { path:'/entity-search', element: <Search /> },
    { path:'/entity-maintenance', element: <Maintenance /> },
    { path:'/entity-maintenance/:id', element: <Maintenance /> }
  ])

  return routes
}

function App() {
  return (
    <>
    <SBProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </SBProvider>
    </>
  )
}

export default App
