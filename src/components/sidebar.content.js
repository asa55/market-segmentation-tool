import React from "react"
import sidebarcontentStyles from "./sidebar.content.module.css"
import SidebarData from "../components/sidebar.content.data"
import SidebarImage from "../components/sidebar.content.image"
import SidebarColumnTitles from "./sidebar.content.columntitles"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import sidebarcontentdataStyles from "../components/sidebar.content.data.module.css"

const RenderSidebarContent = ({dataStack, updateDataStack, rowPush, rowPop }) => (
  <section className={sidebarcontentStyles.sidebarContent}>
    <SidebarImage />
    <SidebarColumnTitles colTitleLeft={'market'} colTitleRight={'population'} />
    <SidebarData rowTitlePlaceholder={'USA'} rowInputPlaceholder={'330M'}  />
    <SidebarColumnTitles colTitleLeft={'category'} colTitleRight={'percent'} />
    {dataStack.map( e =>
    <section className={sidebarcontentdataStyles.sidebarContentData}>
      <div>
        <input
          type="text"
          name="key"
          placeholder=''
          >
        </input>
        <input
            type="number"
            name="value"
            placeholder=''
            >
        </input>
      </div>
    </section>
    )}
    <button onClick={rowPop} style={{display: (dataStack.length>1) ? 'flex' : 'none' }}>Delete Row</button>
    <button onClick={rowPush}>Add Row</button>
    <button onClick={updateDataStack}>Submit</button>
  </section>
)

RenderSidebarContent.propTypes = {
  dataStack: PropTypes.array.isRequired,
  updateDataStack: PropTypes.func.isRequired,
  rowPush: PropTypes.func.isRequired,
  rowPop: PropTypes.func.isRequired,
}

const mapStateToProps = ({ dataStack }) => {
  return { dataStack }
}

const mapDispatchToProps = dispatch => {
  return {
    updateDataStack: () => dispatch({ type: `UPDATE` }),
    rowPush: () => dispatch({ type: `PUSH` }),
    rowPop:  () => dispatch({ type: `POP`  }),
  }
}

const ConnectedRenderSidebarContent = connect(mapStateToProps, mapDispatchToProps)(RenderSidebarContent)

function SidebarContent() {
  return (
    <ConnectedRenderSidebarContent />
  )
}

export default SidebarContent
