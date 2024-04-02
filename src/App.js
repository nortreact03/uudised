import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Post from './pages/Post';
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import {useState, useEffect} from "react"
import { loeUudised } from "./uudised"

function App() {
  const [postitused, setPostitused] = useState([]);

  useEffect(() => {
    const tootle = async () => {
     const {authors, blogPosts} = await loeUudised()
     setPostitused(blogPosts)
    }
    tootle()
      
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs postitused={postitused} />} />
          <Route path="contact" element={<Contact />} />
          <Route path="post/:postId" element={<Post postitused={postitused} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
