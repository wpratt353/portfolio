import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>About</h2>
          {/* <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure> */}
          <h3>Personal Profile</h3>
          <p>
            Independently motivated team player with strong tech skills aiming
            to find stable employment in Austin, TX. I want to transition from
            working mostly solo, and I am interested in being a part of a team
            in a growing company. Core skills include data management, digital
            advertising, and web development.
          </p>
          <h3>Core Competencies</h3>
          <ul>
            <li>Frontend web development</li>
            <li>Copywriting</li>
            <li>Database management</li>
            <li>Advertising and social media management</li>
            <li>Adobe Photoshop</li>
            <li>MS Office Suite, including Excel</li>
            <li>HTML5, CSS3, PHP, FTP</li>
            <li>Familiarity with: Javascript, Jquery, Git repositories</li>
          </ul>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        locale
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
