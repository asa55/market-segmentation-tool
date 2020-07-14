import React from "react"
import SidebarContent from "../components/sidebar.content"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const ToggleSidebarVisibility = ({ sidebarVisible, toggleSidebarVisibile }) => (
  <div style={{ display: 'flex' }}>
    <div style={{display: (sidebarVisible) ? 'flex' : 'none' }}>
      <SidebarContent />
    </div>
    <button onClick={toggleSidebarVisibile}    
    style={{ padding: '4px', backgroundColor: '#aaaaaa', borderRadius: '4px', height: '100%', minHeight: '91vh' }}
    >
      ||
    </button>
  </div>
)

ToggleSidebarVisibility.propTypes = {
  sidebarVisible: PropTypes.bool.isRequired,
  toggleSidebarVisibile: PropTypes.func.isRequired,
}

const mapStateToProps = ({ sidebarVisible }) => {
  return { sidebarVisible }
}

const mapDispatchToProps = dispatch => {
  return { toggleSidebarVisibile: () => dispatch({ type: `TOGGLE` }) }
}

const ConnectedToggleSidebarVisibility = connect(mapStateToProps, mapDispatchToProps)(ToggleSidebarVisibility)

function Sidebar() {
    return (
      <ConnectedToggleSidebarVisibility />
    )
}

export default Sidebar
