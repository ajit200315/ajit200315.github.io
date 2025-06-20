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
          <img
            src="Photos/github-original.svg"
            alt="GitHub"
            className="w-5 h-5"
          />
          <span>View on GitHub</span>
        </a>
      ),
      src: "Photos/Project1.png",
    },
  ];

  const slideData2 = [
    {
      title: "Tic Tac Toe",
      button: (
        <a
          href="https://github.com/ajit200315/Tic-Tac-Toe"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-transparent hover:bg-clip-text"
        >
          <img
            src="Photos/github-original.svg"
            alt="GitHub"
            className="w-5 h-5"
          />
          <span>View on GitHub</span>
        </a>
      ),
      src: "Photos/Project2.png",
    },
  ];

  return (
    <>
    <div className=" relative z-10">
          <GlassmorphicNavbar />
        </div>
      <div className="bg-black text-white overflow-x-hidden scale-z-50">
        {/* Header Section */}
        
        
<section id="home" className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 relative">
        <img src="Photos/icon.png" alt="" className="size-25 relative bottom-80 right-15"/>
        {/* Main Content Section */}
        
        <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:pl-27">
          <div className="w-full lg:w-1/2 z-10 order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="text-center lg:text-left space-y-4 md:space-y-6">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
                Hi There!
              </h1>

              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                I'm{" "}
                <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
                  Ajit Chauhan
                </span>
              </p>

              <div className="mt-6 md:mt-10">
                <ContainerTextFlip
                  words={["A Software Dev", "A CS Student", "A Chess Player"]}
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
            <img
              src="Photos/picture.png"
              alt="My Profile Picture"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl object-contain mix-blend-lighten"
            />
          </div>
        </div>
        </section>

        {/* About Me Section - Full Page */}
        <section id="about" className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 relative">
          {/* About Me Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
            <img
              src="Photos/about picture.png"
              alt="My Picture(2nd)"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl object-contain mix-blend-lighten"
            />
          </div>

          {/* About Me Content */}
          <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-12">
            <div className="text-center lg:text-left space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
                About Me
              </h2>

              <div className="space-y-4 text-gray-300">
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                  As a student passionate about software development, I love
                  tackling challenging problems and creating applications with
                  cutting-edge technologies. I'm always excited to expand my
                  knowledge and enhance my skills as a developer.
                </p>

                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                  When I'm not coding, you'll find me strategizing over a chess
                  board or exploring new technologies. I believe in continuous
                  learning and pushing the boundaries of what's possible.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 mt-8">
                {/* Email */}
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <img
                    src="Photos/email-icon.png"
                    alt="Email Icon"
                    className="size-10"
                  />
                  <a href="mailto:Ajitchauhan200315@gmail.com">
                    <p className="text-lg sm:text-xl md:text-2xl leading-relaxed hover:text-blue-400 transition-colors">
                      Ajitchauhan200315@gmail.com
                    </p>
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <img
                    src="Photos/location.png"
                    alt="Location Icon"
                    className="size-10"
                  />
                  <a href="https://www.google.com/maps/place/Vancouver,+BC/@49.2577062,-123.2063047,12z/data=!3m1!4b1!4m6!3m5!1s0x548673f143a94fb3:0xbb9196ea9b81f38b!8m2!3d49.2827291!4d-123.1207375!16zL20vMDgwaDI?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D">
                    <p className="text-lg sm:text-xl md:text-2xl leading-relaxed hover:text-pink-400 transition-colors">
                      Vancouver, Canada
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 relative">
          <div className="text-center">
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-600 font-bold">
              Check out my
            </p>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
              Projects
            </h1>

            <div className="overflow-hidden flex gap-10 m-5">
              <Carousel slides={slideData} />
              <Carousel slides={slideData2} />
            </div>
          </div>
        </section>

        {/* Project Section */}
        <section  id="skills" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 relative">
          <h2 className="text-6xl bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text mb-10">
            Tech Stack
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <CardSpotlight className="h-48 w-40 flex flex-col items-center justify-center text-center">
              <img
                src="Photos/c-original.svg"
                alt="C language icon"
                className="h-20 w-20 object-contain mb-2 scale-z-50"
              />
              <span className="text-sm font-medium text-white scale-z-50">
                C
              </span>
            </CardSpotlight>

            <CardSpotlight className="h-48 w-40 flex flex-col items-center justify-center text-center">
              <img
                src="Photos/cplusplus-original.svg"
                alt="Cpp language icon"
                className="h-20 w-20 object-contain mb-2 scale-z-50"
              />
              <span className="text-sm font-medium text-white scale-z-50">
                C++
              </span>
            </CardSpotlight>

            <CardSpotlight className="h-48 w-40 flex flex-col items-center justify-center text-center">
              <img
                src="Photos/git-original.svg"
                alt="Git"
                className="h-20 w-20 object-contain mb-2 scale-z-50"
              />
              <span className="text-sm font-medium text-white scale-z-50">
                Git
              </span>
            </CardSpotlight>

            <CardSpotlight className="h-48 w-40 flex flex-col items-center justify-center text-center">
              <img
                src="Photos/github-mark-white.png"
                alt="Github"
                className="h-20 w-20 object-contain mb-2 scale-z-50"
              />
              <span className="text-sm font-medium text-white scale-z-50">
                GitHub
              </span>
            </CardSpotlight>

            <CardSpotlight className="h-48 w-40 flex flex-col items-center justify-center text-center">
              <img
                src="Photos/html5-original.svg"
                alt="Html"
                className="h-20 w-20 object-contain mb-2 scale-z-50"
              />
              <span className="text-sm font-medium text-white scale-z-50">
                HTML
              </span>
            </CardSpotlight>

            <CardSpotlight className="h-48 w-40 flex flex-col items-center justify-center text-center">
              <img
                src="Photos/javascript-original.svg"
                alt="Javascript"
                className="h-20 w-20 object-contain mb-2 scale-z-50"
              />
              <span className="text-sm font-medium text-white scale-z-50">
                JavaScript
              </span>
            </CardSpotlight>

            <CardSpotlight className="h-48 w-40 flex flex-col items-center justify-center text-center">
              <img
                src="Photos/python-original.svg"
                alt="Python"
                className="h-20 w-20 object-contain mb-2 scale-z-50"
              />
              <span className="text-sm font-medium text-white scale-z-50">
                Python
              </span>
            </CardSpotlight>

            <CardSpotlight className="h-48 w-40 flex flex-col items-center justify-center text-center">
              <img
                src="Photos/react.png"
                alt="React JS"
                className="h-20 w-20 object-contain mb-2 scale-z-50"
              />
              <span className="text-sm font-medium text-white scale-z-50">
                React
              </span>
            </CardSpotlight>

            <CardSpotlight className="h-48 w-40 flex flex-col items-center justify-center text-center">
              <img
                src="Photos/css3-original.svg"
                alt="Css"
                className="h-20 w-20 object-contain mb-2 scale-z-50"
              />
              <span className="text-sm font-medium text-white scale-z-50">
                CSS
              </span>
            </CardSpotlight>

            <CardSpotlight className="h-48 w-40 flex flex-col items-center justify-center text-center">
              <img
                src="Photos/Tailwind.png"
                alt="Tailwind"
                className="h-20 w-20 object-contain mb-2 scale-z-50"
              />
              <span className="text-sm font-medium text-white scale-z-50">
                Tailwind CSS
              </span>
            </CardSpotlight>
          </div>
        </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen px-6 lg:px-20 flex flex-col items-center justify-center">
        <div className="flex">

        <div className="text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text mb-16 font-bold">
          <i>Let's connect!</i>
        </h2>
       <ContactForm/>
        </div>

        </div>
      </section>

      
        <div className="flex justify-center">
        <Footer/>
        </div>
        <Background />
      </div>
    </>
  );
}

export default App;
