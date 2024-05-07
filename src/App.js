import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Projects from "./components/pages/Projects";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import {Route, Routes, useLocation} from "react-router-dom";

import {AnimatePresence} from "framer-motion";

function App() {
    const location = useLocation()

    return (

        <div className="App">
            <div className='container'>
                <Navbar/>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/resume" element={<Resume/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>

                </AnimatePresence>
            </div>
        </div>

    )
}

export default App;
