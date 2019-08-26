import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Project from "../components/project"
import SEO from "../components/seo"

const ProjectsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <div
          style={{
            margin: `0 auto`,
            maxWidth: 600,
            padding: `0.5rem 1.0rem`,
        }}
      >
        <Project
          title="Zoocasa iOS App"
          slug="https://www.zoocasa.com/download-app"
          img={data.zoocasaImg.childImageSharp.fixed}
          description="Zoocasa is a real estate website and brokerage that provides advanced search tools and data to empower Canadians to buy or sell their homes faster, easier and more successfully. For the past two years I've worked fulltime on Zoocasa's dev team as the sole developer of our iOS app."
        />
        <Project
          title="Refrain"
          slug="/projects/refrain"
          img={data.refrainImg.childImageSharp.fixed}
          description="Refrain is meant to be used to block unhelpful websites from your device. Block distracting websites to help you stay focused while working or block news or political websites to disconnect from the anxiety-inducing news cycle for a while."
        />
        <hr/>
        <Project 
          title="Drip - Hydration Tracking"
          slug="/projects/drip"
          img={data.dripImg.childImageSharp.fixed}
          description="Drip is a super simple way to log the water you drink. No account required, no annoying reminders, no excessive charts; just a way record each glass of water and get on with your life."
        />
        <hr/>
        <Project 
          title="Mutual Understanding"
          slug="https://www.mutualunderstanding.fm"
          img={data.muImg.childImageSharp.fixed}
          description="A podcast about two twentysomethings trying to better understand each other, and our realization that we have no idea what we’re doing in the adult world. Shows are released around every two weeks."
        />
        <hr/>
        <Project 
          title="Watcher"
          slug="/projects/watcher"
          img={data.watcherImg.childImageSharp.fixed}
          description="Watcher periodically checks websites for any changes in their HTML code. When the HTML changes, you will be notified based on the alert settings for that website. Inspiration for Watcher came from repeatedly checking John Gruber’s Daring Fireball for tickets to the live recording of The Talk Show to become available."
        />
        <hr/>
        <Project 
          title="Mood"
          slug="/projects/mood"
          img={data.moodImg.childImageSharp.fixed}
          description="Mood is an emotional health tracking app that periodically prompts you to enter your current emotional state. Over time, Mood can isolate trends in your emotional health in relation to time of day, physical activity, sleep and more."
        />
      </div>
    </Layout>
  )
}

export default ProjectsPage

export const fluidImage = graphql`
  fragment projectImage on File {
    childImageSharp {
      fixed(width: 180, height: 180) {
          ...GatsbyImageSharpFixed
      }
    }
  }
`;

export const query = graphql`
  query {
    zoocasaImg: file(base: {eq: "zoocasa.png"}) {
      ...projectImage
    }
    refrainImg: file(base: {eq: "refrain.png"}) {
      ...projectImage
    }
    dripImg: file(base: {eq: "drip.png"}) {
      ...projectImage
    }
    muImg: file(base: {eq: "mu.png"}) {
      ...projectImage
    }
    watcherImg: file(base: {eq: "watcher.png"}) {
      ...projectImage
    }
    moodImg: file(base: {eq: "mood.png"}) {
      ...projectImage
    }
  }
`