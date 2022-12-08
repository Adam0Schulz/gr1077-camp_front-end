import "./PostHeader.css";
import {useEventById} from "features/Event/hooks/UseAllEvents";
import {useParams} from "react-router-dom";
import {FormEvent, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowButton from "components/ArrowButton/ArrowButton"
import { BlogPost, Event } from "api/models";

interface Props {
    page: Event | BlogPost,
}

const PostHeader = ({page}: Props) => {

        return (
            <div className="post-header">
                    <div className="post-header__arrow-btn" >
                        <ArrowButton direction="left" color="red" link={'events'} text={'All Events'} />
                    </div>
                    <div className="post-header__textarea">
                        {'room' in page && 
                            <>
                                <h4 className="post-header__page">Event:</h4>
                                <h2 className="post-header__heading" >{(page as Event).name}</h2>
                            </>
                        }
                    </div>

            </div>
        );
    }
    export default PostHeader;