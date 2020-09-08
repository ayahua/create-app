import React from 'react'
import PropTypes from 'prop-types'

const Loading = ({ helperText }) => {
  return (
    <div>{helperText}</div>
  )
}

Loading.propTypes = {
  helperText: PropTypes.string
}

export default Loading
