// this import is here just so it doesn't show an error (bc there has to be an import or export present in any ts file)
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Slider from "features/Event/components/EventSlider/EventSlider";

const Home = () => {
    return (
        <>
            <div className="page-cont">
                <Navbar activePage='home' />
                <Slider />
            </div>
            <Footer />
        </>






    )
}

export default Home