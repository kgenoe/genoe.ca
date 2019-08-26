import React from "react"

const PodcastItem = props => {
    return (
        <div>
            <b>{props.episode}</b> - <i>{props.show}</i><br/>
            Published {props.releasedate}<br/>
            <br/>
        </div>
    )
};

export default PodcastItem;