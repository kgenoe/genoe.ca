import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div 
        style={{
          textAlign: "center",
          maxWidth: 400, 
          marginLeft: "auto",
          marginRight: "auto",
        }}>

        If you'd like to work with me, or just want to chat, feel free to reach out using the options below.
        
        <div 
        style={{ 
          maxWidth: 160, 
          justifyContent: 'center',
          marginLeft: "auto",
          marginRight: "auto",
        }}>
          <br/>
          <br/>
          <ContactItem 
            img={data.emailImg.childImageSharp.fixed}
            link="mailto:kyle@genoe.ca"
            text="kyle@genoe.ca"
          />
          <br/>
          <ContactItem 
            img={data.githubImg.childImageSharp.fixed}
            link="https://github.com/kgenoe"
            text="GitHub"
          />
          <br/>
          <ContactItem 
            img={data.linkedinImg.childImageSharp.fixed}
            link="https://www.linkedin.com/in/kyle-genoe/"
            text="LinkedIn"
          />
          <br/>
          <ContactItem 
            img={data.resumeImg.childImageSharp.fixed}
            link="Kyle-Genoe-Resume.pdf"
            text="Résumé"
          />
        </div>
      </div>
    </Layout>
  )
}


const ContactItem = props => {
  return (
      <header>
          <div style={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <Img fixed={props.img} style={{marginRight:10}}/>
            <a href={props.link} target="_blank">{props.text}</a>
          </div>
      </header>
  )
};





export const contactIconImage = graphql`
  fragment contactIconImage on File {
    childImageSharp {
      fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
      }
    }
  }
`;

export const query = graphql`
  query {
    emailImg: file(base: {eq: "contactEmail.png"}) {
      ...contactIconImage
    }
    githubImg: file(base: {eq: "contactGithub.png"}) {
      ...contactIconImage
    }
    linkedinImg: file(base: {eq: "contactLinkedin.png"}) {
      ...contactIconImage
    }
    resumeImg: file(base: {eq: "contactResume.png"}) {
      ...contactIconImage
    }
  }
`