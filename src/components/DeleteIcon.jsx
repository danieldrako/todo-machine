import React from 'react'
import {RxCross1} from 'react-icons/rx'

const DeleteIcon = (props) => {
    const {className, onClick} = props
  return (
    <RxCross1
        className={className}
        onClick={onClick}
    />
  )
}

export {DeleteIcon}