import React from "react"

const PodcastItem = props => {
    return (
        <div>
            <b>{props.episode}</b>
            <br/>
            <i>{props.show}</i>
            <br/>
            {/* Released - {props.releasedate}
            <br/>
            Listened - {props.listeneddate}  
            <br/> */}
            <br/>
        </div>
    )
};

export default PodcastItem;