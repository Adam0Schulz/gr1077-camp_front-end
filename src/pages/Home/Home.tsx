// this import is here just so it doesn't show an error (bc there has to be an import or export present in any ts file)
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Slider from "../../features/Event/components/EventSlider/EventSlider";
import HeroSlider from "../../features/Home/components/HeroSlider";

const Home = () => {
    return (
        <>
            <div className="page-cont">
                <Navbar activePage='home'/>
            </div>
            <HeroSlider/>
            <div className="page-cont">
                <Slider/>
            </div>
            <Footer/>
        </>


    )
}

export default Home