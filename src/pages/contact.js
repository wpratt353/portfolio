import React from "react"
import { navigate, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <Layout title={siteTitle}>
      <SEO title="contact" />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <form
            name="contact"
            method="post"
            action="thanks"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="form-name"
                  id="form-name"
                  placeholder="Name"
                  onChange={handleChange}
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="form-email"
                  id="form-email"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <select
                  name="form-category"
                  id="form-category"
                  onChange={handleChange}
                >
                  <option value>- Category -</option>
                  <option value={1}>Manufacturing</option>
                  <option value={1}>Shipping</option>
                  <option value={1}>Administration</option>
                  <option value={1}>Human Resources</option>
                </select>
              </div>
              {/* Break */}
              <div className="col-12">
                <textarea
                  name="form-message"
                  id="form-message"
                  placeholder="Enter your message"
                  rows={6}
                  defaultValue={""}
                  onChange={handleChange}
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="primary"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <input type="reset" defaultValue="Reset" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
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
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
)
