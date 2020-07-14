import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
import Content from "../components/content"

const IndexPage = () => (
  <>
    <Header />
    <SEO title="Home" />
    <section style={{ display: 'flex' }}>
      <Sidebar />
      <Content />
    </section>
    <Footer />
  </>
)

export default IndexPage
