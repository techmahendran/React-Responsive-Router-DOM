import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(1);
  const [navbarActive, setNavbarActive] = useState(false);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [navContent, setNavContent] = useState(false);

  const activeRoute = (index) => {
    setIsActive(index);
    console.log(index);
  };

  const hamburgerMenu = () => {
    setNavbarActive(!navbarActive);

    setToggleBtn(!toggleBtn);

    setNavContent(!navContent);
  };

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Header
            isActive={isActive}
            activeRoute={activeRoute}
            hamburgerMenu={hamburgerMenu}
            navbarIsActive={navbarActive}
            toggleBtn={toggleBtn}
          />

          <Routes>
            <Route path="/" index element={<Home navContent={navContent} />} />
            <Route path="/about" element={<About navContent={navContent} />} />
            <Route path="/work" element={<Work navContent={navContent} />} />
            <Route
              path="/contact"
              element={<Contact navContent={navContent} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
