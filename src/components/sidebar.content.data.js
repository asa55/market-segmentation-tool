import React from "react"
import PropTypes from "prop-types"
import sidebarcontentdataStyles from "../components/sidebar.content.data.module.css"

const SidebarContentData = ({rowTitlePlaceholder, rowInputPlaceholder}) => (
  <section className={sidebarcontentdataStyles.sidebarContentData}>
    <div>
      <input
        type="text"
        name="key"
        placeholder={rowTitlePlaceholder}
        >
      </input>
      <input
          type="number"
          name="value"
          placeholder={rowInputPlaceholder}
          >
      </input>
    </div>
  </section>
)

SidebarContentData.propTypes = {
  rowTitlePlaceholder: PropTypes.string,
  rowInputPlaceholder: PropTypes.string,
}

SidebarContentData.defaultProps = {
  rowTitlePlaceholder: ``,
  rowInputPlaceholder: ``,
}

export default SidebarContentData
