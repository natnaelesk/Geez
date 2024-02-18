
import Baner from "./components/Baner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import Scroll from "./components/scroll";
import banner1 from "./components/images/lighter.jpeg"
import banner2 from "./components/images/pexels-terje-sollie-298864.jpg"
import kl from "./components/images/longBoots/long boots one/brown.jpg"
import kl1 from "./components/images/longBoots/long boots one/black.jpg"
import kl2 from "./components/images/longBoots/long boots one/lightblue.jpg"

function App() {
  const longBoots = {
    "title":"Long Boots Collection",
    "bannerPic": banner1 ,
    "description":"Treat your feet to the best with our Ge’ez leather long boots. Handcrafted with love and attention to detail, these boots are sure to become your new favorite✨",
    "btn":"Explore Collection",
    "lists":[
      {
        "picBrown":kl,
        "picBlack":kl1,
        "picBlue":kl2,
        "color":["black","blue","brown"],
        "id":1

      },
      {
        "picBrown":kl,
        "picBlack":kl1,
        "picBlue":kl2,
        "color":["black","blue","brown"],
        "id":1

      },
      {
        "picBrown":kl,
        "picBlack":kl1,
        "picBlue":kl2,
        "color":["black","blue","brown"],
        "id":1

      },
      {
        "picBrown":kl,
        "picBlack":kl1,
        "picBlue":kl2,
        "color":["black","blue","brown"],
        "id":1

      },
      {
        "picBrown":kl,
        "picBlack":kl1,
        "picBlue":kl2,
        "color":["black","blue","brown"],
        "id":1

      },
      {
        "picBrown":kl,
        "picBlack":kl1,
        "picBlue":kl2,
        "color":["black","blue","brown"],
        "id":1

      },
      {
        "picBrown":kl,
        "picBlack":kl1,
        "picBlue":kl2,
        "color":["black","blue","brown"],
        "id":1

      },
      {
        "picBrown":kl,
        "picBlack":kl1,
        "picBlue":kl2,
        "color":["black","blue","brown"],
        "id":1

      },
      {
        "picBrown":kl,
        "picBlack":kl1,
        "picBlue":kl2,
        "color":["black","blue","brown"],
        "id":1

      },
      {
        "picBrown":kl,
        "picBlack":kl1,
        "picBlue":kl2,
        "color":["black","blue","brown"],
        "id":1

      },
      {
        "picBrown":kl,
        "picBlack":kl1,
        "picBlue":kl2,
        "color":["black","blue","brown"],
        "id":1

      },
      {
        "picBrown":kl,
        "picBlack":kl1,
        "picBlue":kl2,
        "color":["black","blue","brown"],
        "id":1

      },
    ]
  }
  const casual = {
    "title":"Casual Shoes Collection",
    "bannerPic": banner2 ,
    "description":"we’ve got a style for every men. Whether you’re looking for a new go-to shoe or something special to add to your wardrobe, our leather shoes are sure to please.",
    "btn":"Explore Collection",
    "lists":[
      {
        "pic":"url",
        "color":["1","2","3"],
        "id":1

      },
    ]
  }

  

  return (
    <div className="App bg-secondary-white  ">
      <Header data />
      <NavBar />
      <Hero   />

      <div className="mb-10">
        <Baner banner={longBoots.bannerPic}  />
        <Title longBoots={longBoots} />
        <Scroll lists={longBoots.lists} />
      </div>
      <div className="mb-10">
        <Baner banner={casual.bannerPic}  />
        <Title longBoots={casual} />
        <Scroll lists={longBoots.lists} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
