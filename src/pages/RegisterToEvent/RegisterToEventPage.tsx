import {RegisterToEventForm} from "../../features/Event/components/RegisterToEventForm/ResigterToEventForm";
import 'App.css'
import './RegisterToEventPage.css'
import Navbar from "components/Navbar";
import Footer from "components/Footer";

export const RegisterToEventPage = () => {

    return (
        <div>
            <div className={"page-cont"}>
                <Navbar activePage={'events'}/>
                <RegisterToEventForm/>
            </div>
            <Footer/>
        </div>
    )
}