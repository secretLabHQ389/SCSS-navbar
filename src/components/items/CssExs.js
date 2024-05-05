import React from 'react'
import './CssExs.scss'
import PlaceholdImg from '../../assets/placeholderImg.jpg'

const CssExs = () => {
  return (
    <>
      <div className={'grid'}>
        <div className={'grid-item'}></div>
        <div className={'grid-item'}></div>
        <div className={'grid-item'}></div>
        <div className={'grid-item'}></div>
        <div className={'grid-item'}></div>
        <div className={'grid-item'}></div>
        <div className={'grid-item'}></div>
        <div className={'grid-item'}></div>
        <div className={'grid-item'}></div>
        <div className={'grid-item'}></div>
        <div className={'grid-item'}></div>
      </div>

      <img className={'masked'} src={PlaceholdImg} alt='webcam photo to use as example of CSS masking' />

      <div className={'manual-center'} />

      <div className={'align-vertically'}>Vertically align flexbox.</div>
    </>
  )
}

export default CssExs
