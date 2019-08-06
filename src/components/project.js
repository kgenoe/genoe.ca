import React from "react"
import Img from "gatsby-image"
import Link from "../components/link"

const Project = props => {
    return (
        <header>
            <div>
                <Link
                    to={props.slug}
                    activeStyle={{ color: `darkGray` }}
                    style={{ 
                      textDecoration: `none`,
                      color: `black`,
                      margin: `0 0.5rem 0 0`,
                    }}
                >
                    <h3 style={{textAlign: "center" }}>
                        {props.title}
                    </h3>
                    <Img 
                        fixed={props.img}
                        style={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            display: "block",
                        }}
                    /> 
                </Link>
                <br/>
                <p>{props.description}</p>
                <br/>
            </div>
        </header>
    )
};

export default Project;