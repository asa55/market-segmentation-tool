import React from "react"
import PropTypes from "prop-types"
import sidebarcontentcolumntitlesStyles from "../components/sidebar.content.columntitles.module.css"

const SidebarContentColumnTitles = ({ colTitleLeft, colTitleRight }) => (
  <div className={sidebarcontentcolumntitlesStyles.sidebarContentColumnTitles} style={{ borderBottom: '2px #222222 solid' }}>
    <div style={{ borderRight: '1px #222222 solid' }}>
      {colTitleLeft}
    </div>
    <div style={{ borderLeft: '1px #222222 solid' }}>
      {colTitleRight}
    </div>
  </div>
)

SidebarContentColumnTitles.propTypes = {
  colTitleLeft: PropTypes.string,
  colTitleRight: PropTypes.string,
}

SidebarContentColumnTitles.defaultProps = {
  colTitleLeft: ``,
  colTitleRight: ``,
}

export default SidebarContentColumnTitles