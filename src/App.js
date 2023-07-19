import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home/Home'
import About from './components/About/About';
import Footer from './components/Footer';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import CreatePost from './components/Blog/CreatePost';
import Blog from './components/Blog/Blog';


function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));


  return (
    <>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        <Route path='/create-post' element={<CreatePost isAuth={isAuth}/>} />
        <Route path='/blog' element={<Blog />} />
        

        
        <Route path='contact' element={<Contact />} />

      </Routes>
      <Footer />

    </>
  );
}

export default App;
