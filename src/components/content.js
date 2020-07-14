import React from "react"
import contentStyles from "./content.module.css"
import ContentText from "../components/content.text"
import ContentVisual from "../components/content.visual"

const Content = () => (
  <section className={contentStyles.content} style={{ display: 'flex', flexDirection: 'column' }}>
    <ContentVisual />
    <ContentText />
  </section>
)

export default Content
