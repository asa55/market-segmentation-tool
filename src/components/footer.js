import React from "react"
import footerStyles from "./footer.module.css"

const Footer = () => (
  <footer className={footerStyles.footer}>
    <div>
      © {new Date().getFullYear()} Alexander S. Augenstein,
      {` `}
      <a href="https://github.com/asa55/market-segmentation-tool">Site License on GitHub</a>
    </div>
  </footer>
)

export default Footer
