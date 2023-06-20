import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'


const DeleteIcon = ({onClick}) => {
  return (
    <span
        className='span-icon-close'
        onClick={onClick}>
            <AiOutlineCloseCircle/>
    </span>
  )
}

export {DeleteIcon}