import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Carrer from "./components/Carrer";

function App() {
  return (
    <>
      {/* Container with dark mode classes */}
      <div className="overflow-x-hidden text-slate-300  antialiased">
        {/* Background wrapper */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>

        {/* Your other components */}
        <div className="container mx-auto px-8">
          <Nav />
          <Hero />
          <Technologies />
          <Projects />
          <Carrer />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
