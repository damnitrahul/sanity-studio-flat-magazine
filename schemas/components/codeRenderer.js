import React from 'react'
import PropTypes from 'prop-types'
function CodeRenderer (props) {
  return (
    <span>
      <pre>{props.children}</pre>
    </span>
  )
}
CodeRenderer.propTypes = {
  children: PropTypes.node.isRequired
}
export default CodeRenderer
