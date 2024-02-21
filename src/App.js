
import Baner from "./components/Baner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import Scroll from "./components/scroll";
import banner1 from "./components/images/lighter.jpeg"
import banner2 from "./components/images/pexels-terje-sollie-298864.jpg"
import long from "./long.json"
// import Recordes from "./recordes.json"

function App() {

  const longBoots = 
  {
    "title":"Long Boots Collection",
    "bannerPic": banner1 ,
    "description":"Treat your feet to the best with our Ge’ez leather long boots. Handcrafted with love and attention to detail, these boots are sure to become your new favorite✨",
    "btn":"Explore Collection",
  }
  
  const casual = {
    "title":"Casual Shoes Collection",
    "bannerPic": banner2 ,
    "description":"we’ve got a style for every men. Whether you’re looking for a new go-to shoe or something special to add to your wardrobe, our leather shoes are sure to please.",
    "btn":"Explore Collection",
    
  }

  

  return (
    <div className="App bg-secondary-white  ">
      <Header data />
      <NavBar />
      <Hero   />
      <div className="mb-10">
        <Baner banner={longBoots.bannerPic}  />
        <Title longBoots={longBoots} />
        <Scroll Data={long}  />
      </div>
      <div className="mb-10">
        <Baner banner={casual.bannerPic}  />
        <Title longBoots={casual} />
        <Scroll Data={long} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
