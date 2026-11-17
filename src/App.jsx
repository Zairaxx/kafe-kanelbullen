import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Contact from "./pages/Contact.jsx";
import "./App.css";

// TODO 2: Importera Routes och Route från "react-router-dom"

export default function App() {
  return (
    <>
      {/* Header och Footer ligger UTANFÖR <Routes> – de syns på alla sidor */}
      <Header />

      <main className="app-main">
        {/* TODO 2: Byt ut raden nedan mot <Routes> med en <Route> per sida:
              "/"        -> <Home />
              "/meny"    -> <Menu />
              "/kontakt" -> <Contact />
            TODO 4: Lägg till "/om-oss" -> <About />
            TODO 5: Lägg till "*" -> <NotFound /> */}
        <Home />
      </main>

      <Footer />
    </>
  );
}
