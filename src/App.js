import Baner from "./components/Baner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import Scroll from "./components/scroll";


function App() {
  return (
    <div className="App bg-secondary-white  ">
      <Header />
      <NavBar />
      <Hero />
      <div className="mb-10">
        <Baner  />
        <Title />
        <Scroll />
      </div>
      
      <div className="mb-10">
        <Baner  />
        <Title />
        <Scroll />
      </div>
      <Footer />
    </div>
  );
}

export default App;
