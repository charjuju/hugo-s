import React from 'react';
import jsonData from './gestionDesImages.json'
import { useNavigate } from "react-router-dom";

function Book() {
  const navigate = useNavigate();
  const bookPick = localStorage.getItem('Book') ? localStorage.getItem('Book') : '0'
  const bookInfo = jsonData[bookPick].book

  console.log(bookInfo)
  function GalerieImage() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        {bookInfo.map((data, index) => (
          <div onClick={() => {
            localStorage.setItem('Chapter', index)
            console.log(index)
            navigate('/Chapter')
          }} key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
            <div style={{
              backgroundColor: '#7db6dd',
              display: 'flex', backgroundImage: `url("${data.imageCover}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center',
              width: '400px', height: '250px', margin: '10px', overflow: 'hidden'
            }}>
            </div>
            <h2 style={{ marginTop: '0px' }}>{data.titre}</h2>
          </div>
        ))}
      </div>
    )
  }

  function GalerieImagePhone() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        {bookInfo.map((data, index) => (
          <div onClick={() => {
            localStorage.setItem('Chapter', index)
            console.log(index)
            navigate('/Chapter')
          }} key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
            <div style={{
              display: 'flex', backgroundImage: `url("${data.imageCover}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center',
              width: '90vw', height: '50vw', maxHeight: '70vh', margin: '10px', overflow: 'hidden'
            }}>
            </div>
            <h2 style={{ marginTop: '0px' }}>{data.titre}</h2>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <div className='pc-display'>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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

export default Book;
