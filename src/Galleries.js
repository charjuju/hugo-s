import React from 'react';
import jsonData from './gestionDesImages.json'
import { useNavigate } from "react-router-dom";

function Galleries() {
  const navigate = useNavigate();

  function GalerieImage() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%'}}>
        <div onClick={() => {
          localStorage.setItem('Book', 0)
          navigate("/Book/")
        }} style={{
          display: 'flex', backgroundImage: `url("${jsonData[0].imageCover}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center',
          maxWidth: '520px', width: '100%', height: '500px', margin: '10px', cursor: 'pointer'
        }}>
          <h1 style={{ fontSize: '100px', color: '#ffffff', marginTop: '0' }}>{jsonData[0].titre}</h1>
        </div>
        {jsonData.map((data, index) => (
          index > 0 && (
            <div onClick={() => {
              localStorage.setItem('Book', index)
              navigate("/Book/")
            }} key={index} style={{
              display: 'flex', backgroundImage: `url("${data.imageCover}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center',
              width: '250px', height: '500px', margin: '10px', overflow: 'hidden', cursor: 'pointer'
            }}>
              <h1 style={{
                margin: '0',
                padding: '0',
                fontSize: '70px', color: '#ffffff', // vertical right-to-left
                writingMode: 'vertical-lr',
                textOrientation: 'upright',
              }}>{data.titre}</h1>
            </div>
          )))}
      </div>
    )
  }

  function GalerieImagePhone() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div onClick={() => {
          localStorage.setItem('Book', 0)
          navigate("/Book/")
        }} style={{
          display: 'flex', backgroundImage: `url("${jsonData[0].imageCover}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center',
          width: '100%', height: '100vw', maxHeight: '50vh', margin: '10px', cursor: 'pointer'
        }}>
          <h1 style={{ fontSize: '100px', color: '#ffffff', marginTop: '0' }}>{jsonData[0].titre}</h1>
        </div>
        {jsonData.map((data, index) => (
          index > 0 && (
            <div onClick={() => {
              localStorage.setItem('Book', index)
              navigate("/Book/")
            }} key={index} style={{
              display: 'flex', backgroundImage: `url("${data.imageCover}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center',
              width: '100%', height: '100vw', maxHeight: '50vh', margin: '10px', overflow: 'hidden', cursor: 'pointer'
            }}>
              <h1 style={{ fontSize: '100px', color: '#ffffff', marginTop: '0' }}>{data.titre}</h1>
            </div>
          )))}
      </div>
    )
  }

  return (
    <div>
      <div className='pc-display'>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{ width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <GalerieImage />
          </div>
        </div>
      </div>
      <div className='phone-display'>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <GalerieImagePhone />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Galleries;
