import React from 'react'
import {RxCheck} from 'react-icons/rx'
import { ImRadioChecked, ImRadioUnchecked } from 'react-icons/im'


const CompleteIcon = (props) => {
    const {className, onClick} = props
  return (
    <RxCheck
        className={className}
        onClick={onClick}
    />
  )
}

export {CompleteIcon}