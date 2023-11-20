import React from "react";
import './info.css'

function Info() {
  function AboutMe() {
    function CarrePhoto() {
      return (
        <div className="shadow-pop-br" style={{
          backgroundImage: `url("/aboutMe/1700319823463.jpg")`, backgroundSize: 'cover',
          width: '60%',
          height: '50%',
          marginTop: '20px'
        }}>
        </div>
      )
    }

    return (
      <div style={{ display: 'flex', width: '70%', height: '70vh', flexWrap: 'wrap', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
          <div className="floating" style={{ width: '500px', height: '50%', backgroundColor: '#7db6dd' }}>
            <h1 style={{ color: 'white', fontSize: '35px', marginLeft: '10px' }}>CONTACT:</h1>
            <p style={{ color: 'white', fontSize: '22px', margin: '50px' }}>+33 7 77 76 15 94</p>
            <p style={{ color: 'white', fontSize: '22px', margin: '50px' }}>hugosegato@gmail.com</p>
          </div>
          <CarrePhoto />
        </div>
        <div style={{ height: '100%', width: '500px', backgroundColor: '#ff6923', margin: '10px' }}>
          <h1 style={{ color: 'white', fontSize: '35px', marginLeft: '10px' }}>SEGATO HUGO</h1>
          <p style={{ color: 'white', marginLeft: '50px', fontSize: '22px' }}>Journaliste Essayiste Automobile</p>
          <p style={{ color: 'white', marginLeft: '50px', fontSize: '22px' }}>Diplômé de l'ITM Graduate School Le Mans</p>
          <p style={{ color: 'white', marginLeft: '50px', fontSize: '22px' }}>Photographe professionnel</p>

        </div>
      </div>
    )
  }
  /*
  
              <div style={{width: '50%', minWidth: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
           <p>Contact:   +33 7 77 76 15 94  –  hugosegato@gmail.com</p>
           </div>

           */

  function Publication() {
    return (
      <div>

      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <h1 style={{fontSize: '40px'}}>About me</h1>
      <AboutMe />
      <Publication />
    </div>
  );
}

export default Info;
