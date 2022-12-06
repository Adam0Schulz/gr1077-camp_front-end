import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import HeroSlider from "../../features/Home/components/HeroSlider";

export const HomePage = () => {
    return(
        <>
            <Navbar activePage={"home"}/>
            <HeroSlider/>
            <div className={"page-cont"}>

            </div>
            <Footer/>
        </>

    )
}