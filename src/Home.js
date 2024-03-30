import Baner from "./components/Baner";
import Hero from "./components/Hero";
import Title from "./components/Title";
import Scroll from "./components/scroll";
import Recordes from "./recordes.json"

const Home = () => {
    return ( <>
            <Hero />
            <div className="mb-10">
              <Baner banner={Recordes[0].bannerPic}  />
              <Title longBoots={Recordes[0]} link={"boots"} />
              <Scroll Data={Recordes[1]}  />
            </div>
            <div className="mb-10">
              <Baner banner={Recordes[2].bannerPic}  />
              <Title longBoots={Recordes[2]} link={"casual"} />
              <Scroll Data={Recordes[3]} />
            </div>
    </> );
}
 
export default Home;<>

</>