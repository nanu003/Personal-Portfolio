 import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Skills from "./pages/Skills/Skills"
import Projects from "./pages/Projects/Projects"
import Contact from "./pages/Contact/Contact"
import "./index.css"


function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/skills",
    element: <Skills />
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/contact",
    element: <Contact />
  }
])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
