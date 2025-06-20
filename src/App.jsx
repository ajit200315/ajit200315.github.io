import "./App.css";
import { Background } from "./Component/Background";
import GlassmorphicNavbar from "./Component/Navbar";
import { ContainerTextFlip } from "./Component/HomePageTextAnimation";
import { Carousel } from "./Component/ProjectCards";
import { CardSpotlight } from "./Component/CardSpotlight";
import { ContactForm } from "./Component/ContactForm";
import Footer from "./Component/Footer";

function App() {

  const slideData = [
    {
      title: "Currency Converter",
      button: (
        <a
          href="https://github.com/ajit200315/Currency-exchange-"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-transparent hover:bg-clip-text"
        >
          View Repo
        </a>
      ),
      src: "/Photos/Project1.png",
    },
    {
      title: "Tic Tac Toe",
      button: (
        <a
          href="https://github.com/ajit200315/Tic-Tac-Toe"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:bg-gradient-to-r from-green-400 to-blue-500 hover:text-transparent hover:bg-clip-text"
        >
          View Repo
        </a>
      ),
      src: "/Photos/Project2.png",
    },
    // …any other slides
  ];

  return (
    <>
      <GlassmorphicNavbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-6xl text-white font-bold">Ajit.</h1>
        <img
          src="/Photos/git-original.svg"
          alt="GitHub"
          className="h-8 w-8 mt-6"
        />
      </section>

      {/* Projects Carousel */}
      <section id="projects" className="py-20 bg-gray-900">
        <h2 className="text-4xl text-white text-center mb-8">My Projects</h2>
        <Carousel slides={slideData} />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col lg:flex-row items-center px-8">
        <div className="w-full lg:w-1/2">
          <img
            src="/Photos/about picture.png"
            alt="My Picture(2nd)"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl object-contain mix-blend-lighten"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed text-lg sm:text-xl md:text-2xl">
            I’m a Computing Science student at SFU with a passion for building…
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text mb-10">
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <img src="/Photos/c-original.svg" alt="C" className="h-12 w-12" />
          <img src="/Photos/cplusplus-original.svg" alt="C++" className="h-12 w-12" />
          <img src="/Photos/html5-original.svg" alt="HTML5" className="h-12 w-12" />
          <img src="/Photos/css3-original.svg" alt="CSS3" className="h-12 w-12" />
          <img src="/Photos/javascript-original.svg" alt="JavaScript" className="h-12 w-12" />
          <img src="/Photos/react.png" alt="React JS" className="h-12 w-12" />
          <img src="/Photos/python-original.svg" alt="Python" className="h-12 w-12" />
          <img src="/Photos/Tailwind.png" alt="Tailwind CSS" className="h-12 w-12" />
          <img src="/Photos/git-original.svg" alt="Git" className="h-12 w-12" />
          <img src="/Photos/github-mark-white.png" alt="GitHub" className="h-12 w-12" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-800 px-4">
        <h2 className="text-4xl text-white mb-6">Get In Touch</h2>
        <div className="flex gap-6 mb-8">
          <img src="/Photos/email-icon.png" alt="Email Icon" className="h-8 w-8" />
          <img src="/Photos/location.png" alt="Location Icon" className="h-8 w-8" />
        </div>
        <ContactForm />
      </section>

      <div className="flex justify-center mt-12">
        <Footer />
      </div>

      <Background />
    </>
  );
}

export default App;
