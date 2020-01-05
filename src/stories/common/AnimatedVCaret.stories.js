import React, { useState } from 'react'

//import { action } from '@storybook/addon-actions'

import { AnimatedVCaret } from 'ui'

export default {
  title: 'common|AnimatedVCaret',
  component:AnimatedVCaret,
  parameters: {
    decorators: [
      //storyfn => <div className="">{ storyfn }</div>,
    ]
  }
}

export const Default = () => {
  const [active, setActive] = useState(false)
  return(
    <AnimatedVCaret
      active={ active }
      setActive={ setActive }
      id='myarrow'
      width='200px'
    />

  )}

export const ColorVariant = () => {
  const [active, setActive] = useState(false)
  return(
    <AnimatedVCaret
      active={ active }
      setActive={ setActive }
      id='myarrow'
      className='c-yellow'
    />

  )}

export const SizeVariant = () => {
  const [active, setActive] = useState(false)
  const [active2, setActive2] = useState(false)
  return(
    <>
      <AnimatedVCaret
        active={ active }
        setActive={ setActive }
        id='myarrow'
        className='c-yellow'
        height='120px'
      />
      <AnimatedVCaret
        active={ active2 }
        setActive={ setActive2 }
        id='myarrow2'
        className='c-green'
        height='200px'
        width='200px'
      />
    </>

  )}

export const Bolder = () => {
  const [active, setActive] = useState(false)
  return(
    <AnimatedVCaret
      active={ active }
      setActive={ setActive }
      id='myarrow'
      className='c-violet'
      strokeWidth='20'
      width='300px'
    />

  )}


export const Speed = () => {
  const [active, setActive] = useState(false)
  return(
    <AnimatedVCaret
      active={ active }
      setActive={ setActive }
      id='myarrow'
      className='c-red'
      duration='5s'
      width='400px'
    />

  )}

