import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import About from './pages/About'
import BlogHome from './pages/blog/index'
import SinglePost from './pages/blog/post'
import { MotionConfig } from "framer-motion"

export default function App() {


  return (
    <MotionConfig reducedMotion='user'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<BlogHome />} />
            <Route path="/blog/:slug" element={<SinglePost />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  )
}
