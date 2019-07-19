import React from "react"
import Img from "gatsby-image"

const Project = props => {
    return (
        <header>
            <div>
                <h3 style={{textAlign: "center" }}>
                    {props.title}
                </h3>
                <Img 
                    // fixed={data.image.childImageSharp.fixed}
                    fixed={props.img}
                    style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "block",
                    }}
                /> 
                <br/>
                <p>{props.description}</p>
                <br/>
            </div>
        </header>
    )
};

export default Project;