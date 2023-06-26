import Nav from "./components/Nav/Nav.js";
import Footer from "./components/Footer/Footer.js";
import Introduction from "./components/Introduction/Introduction.js";
import Works from "./components/Works/Works.js";
import Contact from "./components/Contact/Contact.js";

import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Introduction />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
