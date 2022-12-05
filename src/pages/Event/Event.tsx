import {Presenters} from "../../features/Event/components/Presenters/Presenters";
import "./Event.css"
import HeroEvent from "../../features/Event/components/HeroEvent/HeroEvent";


const Event = () => {
    return (
        <div>
            <div className="rowEvent">
                <div className="leftEvent" >
                    <HeroEvent/>
                </div>
                <div className="rightEvent">
                    <Presenters/>
                </div>
            </div>

        </div>
    )
}
export default Event;
