import Navbar from "../../components/Navbar";
import Researcher from "../../features/Researcher/components/Researcher";
import {useResearchers} from "../../features/Researcher/hooks/UseResearchers";
import ResearcherCard from "../../features/Researcher/components/Researcher";
import './Researchers.css'
import Separator from "../../components/Separator/Separator";
import Footer from "../../components/Footer";

const Researchers = () => {

    const {
        data : researcher,
        isLoading,
        isError } = useResearchers();

    if (isLoading) return <>Loading...</>

    if (isError) return <>Oopsie! Something went wrong!</>


    return (
        <>
            <div className='page-cont'>
                <Navbar activePage={'researchers'}/>
                <h2 className='page-heading researchers-heading' >Researchers</h2>
                <Separator/>
                <div className='researchers-background-rectangle'></div>
                <div className='researchers-flex-box'>

                    {researcher?.map((researcher) => {
                        return (
                            <ResearcherCard researcher={researcher}/>
                        )
                    })}
                </div>
            </div>
            <Footer/>
        </>

    )
}

export default Researchers;