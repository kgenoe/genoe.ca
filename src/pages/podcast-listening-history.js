import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PodcastItem from "../components/podcast-item"

export default ({ data }) => {
    return (
        <Layout>
            <SEO title="Kyle Genoe's Podcast Listening History" />
            <h3>Podcast Listening History</h3>
            This is a automatically generated roundup of all the podcasts
            I've listened to in the past week. A spreadsheet of my full podcast
            listening history can be viewed <a href="https://docs.google.com/spreadsheets/d/1ydv8bwYzAyNYQKklA7fqgxfrjxZdB0s2yboLNqTqA-s/edit?usp=sharing">
            here</a>. Feel free to give me recommendations or feedback on <a href="https://twitter.com/KyleGenoe">
            twitter</a>.
            <br/><br/>
            This list was inspired by Wil Williams' "This Week in Podcast" series.
            If you want a much more informed view on podcasting you should check out her work <a href="https://wilwilliams.reviews">
            here</a>.

            <br/>
            <br/>
            <br/>


            {itemsFromData(data)}
        </Layout>
    )
}

export const query= graphql`
    {
        allGoogleSheetSheet1Row(limit: 100) {
            edges {
                node {
                    show
                    episode
                    releasedate
                    listeneddate
                }
            }
        }
    }
`


function itemsFromData(data) {
    const posts= [];
    data.allGoogleSheetSheet1Row.edges.forEach(( { node }) => {
        posts.push(
            <PodcastItem 
                show={node.show}
                episode={node.episode}
                rating={node.rating}
                releasedate={node.releasedate}
                listeneddate={node.listeneddate}
            />
        )
    });
    return posts;
  }