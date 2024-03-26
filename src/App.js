import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Post from './pages/Post';
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import {useState} from "react"

function App() {
  const [postitused, setPostitused] = useState([
    {
      id: '4rrffkd455',
      title: 'Minu esimene blogipostitus',
      content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et lorem vestibulum, laoreet massa eget, facilisis nulla. Donec nisi sem, placerat nec urna at, feugiat vulputate tortor. Mauris sed massa nec nisl faucibus aliquet. Maecenas eget semper odio, vel varius eros. Suspendisse libero enim, venenatis ac aliquet et, aliquam at ligula. Nunc ut consequat sapien. Suspendisse egestas arcu vitae nunc consequat, ac laoreet eros rhoncus. Donec lacus lacus, euismod in gravida ac, tempus at urna. Curabitur consectetur, purus ut vestibulum venenatis, quam ipsum auctor lacus,
      `
    },
    {
      id: 'uytuythjgjhg',
      title: 'Minu teine blogipostitus',
      content: `
      Curabitur non sem efficitur, hendrerit quam ac, malesuada purus. Integer ultricies tempor odio. Integer maximus erat ac lorem pellentesque imperdiet. Fusce vulputate, quam ac dapibus dapibus, felis erat convallis augue, ac ornare lacus lacus ut odio. Nunc euismod velit id lectus mollis laoreet eget eu ante. Curabitur consequat odio ac risus faucibus, nec commodo mi posuere. Ut gravida sit amet nisl eu condimentum. Vivamus a leo quis libero dictum elementum sit amet et ligula.
      `
    },
    {
      id: 'ytuytuytu',
      title: 'Minu kolmas blogipostitus',
      content: `
      Pellentesque volutpat porttitor orci vitae ultricies. Duis sed diam arcu. Phasellus enim mauris, cursus eu diam id, dignissim ultrices purus. Nullam aliquam posuere augue, rhoncus hendrerit ligula aliquam quis. In interdum felis aliquam nisi egestas dictum. Vivamus tortor turpis, posuere sit amet nisi non, maximus viverra nibh. Mauris euismod lacus id velit viverra, vel condimentum nunc semper. Etiam ornare posuere eros et pellentesque. Nam nec eros elementum nisi convallis lobortis. Fusce eros quam, pharetra at felis et, tincidunt porttitor nulla.
      `
    },
  ]);

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
