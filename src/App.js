import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Projects from "./components/pages/Projects";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

import { Route, Routes }  from "react-router-dom";
import Footer from "./components/Footer";

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
        <Footer/>
        </div>
    );
}

export default App;
