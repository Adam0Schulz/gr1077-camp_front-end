// this import is here just so it doesn't show an error (bc there has to be an import or export present in any ts file)
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { EventsTimeline } from "features/Event";
import './style.css'
import AdminButton from "../../components/AdminButton/AdminButton";
import AdminBar from "../../components/AdminBar/AdminBar";
import {useState} from "react";
import TextInput from "components/Inputs/TextInput/TextInput";
import useDebounce from "hooks/useDebounce";

const Events = () => {

    
    const [searchKeyword, setSearchKeyword] = useState<string>("")
    const debouncedKeyword = useDebounce(searchKeyword, 400);

    return (
        <>
        <div className="page-cont">
            <Navbar activePage='events' />
            {/*localStorage.getItem('isAdmin') ? <>yes Admin bar</> : <>no Admin bar</>*/}
            <div className="page-heading">
                <h2>Events</h2>
                {/* input component here */}
                <div>
                    <TextInput search={true} label="" placeholder="Search" onChange={(text) => setSearchKeyword(text)} />
                </div>
            </div>

            {localStorage.getItem('isAdmin') ?  <AdminBar>
                <AdminButton text={'New event'} link={'/events/new'} color={'red'}/>
            </AdminBar> : <div/>}

            <EventsTimeline searchKeyword={debouncedKeyword}/>

        </div>
        <Footer />
        </>

    )
}

export default Events