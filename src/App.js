import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import projects from "./pages/Projects";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import { Route, Routes }  from "react-router-dom";

function App() {

    return (
        <div className="App">
            <Navbar/>
            <div className='container'>
                <Routes>
                    <Route path ="/" element={ <Home/> }/>
                    <Route path ="/about" element={ <About/> }/>
                    <Route path ="/resume" element={ <Resume/> }/>
                    <Route path ="/projects" element={ <Projects/> }/>
                    <Route path ="/blog" element={ <Blog/> }/>
                    <Route path ="/contact" element={ <Contact/> }/>

                </Routes>
            </div>
        </div>
    );
}

export default App;
