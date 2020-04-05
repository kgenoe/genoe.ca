import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PodcastItem from "../components/podcast-item"
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";

export default ({ data }) => {
    return (
        <Layout>
            <SEO title="This Week's Podcasts" />
            <h3>This Week's Podcasts</h3>
            This is a roundup of all the podcasts I've listened to in the past week.
            The list is automatically generated every Sunday for the previous week.
            A spreadsheet of my full podcast listening history can be viewed <a 
            href="https://docs.google.com/spreadsheets/d/1ydv8bwYzAyNYQKklA7fqgxfrjxZdB0s2yboLNqTqA-s/edit?usp=sharing" target="_blank">
            here</a>. Feel free to give me recommendations or feedback on <a href="https://twitter.com/KyleGenoe" target="_blank">
            twitter</a>.
            <br/><br/>
            This list was inspired by Wil Williams' "This Week in Podcast" series.
            If you want to read smart things about podcasts, you should check out her work <a href="https://wilwilliams.reviews" target="_blank">
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
        allGoogleSheetSheet1Row(limit: 500) {
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

    // get most recent sunday, and sunday before it
    var sunday = new Date();
    sunday.setDate(sunday.getDate() - sunday.getDay());
    var lastSunday = new Date();
    lastSunday.setDate(sunday.getDate() - 7);

    // group records based on the day they were listened
    // 0 = sunday, 1 = monday, etc.
    var daySorted = [[], [], [], [], [], [], []];

    // reverse data so that first listened show up at top of days
    var rows = data.allGoogleSheetSheet1Row.edges.reverse()
    rows.forEach(( { node }) => {

        // only include dates in the last week
        var date = new Date(node.listeneddate) 
        if(lastSunday < date && date < sunday) {
            var day = date.getDay()
            daySorted[day].push(node)
        }
    });

    // move sunday to the end of the week
    let sundayItems = daySorted.shift()
    daySorted.push(sundayItems)

    // the views that will makeup the html body
    var views = [];

    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    var i;
    for (i = 0; i < daySorted.length; i++) { 
        
        // only add days where episodes have been listened to
        if(daySorted[i].length == 0) {
            continue
        }
       
        // add day/date header from the `days` array 
        var date = new Date(daySorted[i][0].listeneddate)
        views.push(<h3>{days[i]} - {dateString(date)}</h3>)

        // add a podcast item for each podcast for the ith day
        daySorted[i].forEach(( item ) => {
            views.push(
                <PodcastItem 
                    show={item.show}
                    episode={item.episode}
                    rating={item.rating}
                    releasedate={item.releasedate}
                    listeneddate={item.listeneddate}
                />
            );
        });

        views.push(<br/>)
    }

    return views;
  }


function dateString(date) {
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}