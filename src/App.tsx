import { useEffect } from "react"
import Home from "./components/home"
import Nav from "./components/nav"
import './index.css'
import ScrollTrigger from "gsap/ScrollTrigger"

export default function App() {
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh()) 
    return () => cancelAnimationFrame(id)
  })
  return (
    <div style={{ position: 'relative' }}>
      <Nav />
      <Home />
    </div>
  )
}
