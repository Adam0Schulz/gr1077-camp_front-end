import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import HeroSlider from "../../features/Home/components/HeroSlider";

export const HomePage = () => {
    return(
        <>
            <div className={"pageContainer"}>
                <Navbar activePage={"home"}/>
                <HeroSlider/>
            </div>
            <Footer/>
        </>

    )
}