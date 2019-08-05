import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem`}}>
      <Link 
          to={props.to}
          activeStyle={{ color: `black` }}
          style={{ 
            textDecoration: `none`,
            color: `darkGray`,
            margin: `0 0.5rem 0 0`,
          }}
        >{props.children}</Link>
    </li>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        textAlign: `center`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `2.5rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div style={{textAlign: `center`}}>
      <ul style={{listStyle: `none`}}>
        <ListLink to="/posts/">POSTS</ListLink>
        <ListLink to="/projects/">PROJECTS</ListLink>
        <ListLink to="/about/">ABOUT</ListLink>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
