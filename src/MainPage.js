import React from "react";
import ImageStar from './imageStar/ImageStar'

function MainPage() {
  function NavBar() {
    function ButtonNavigation() {
      return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p><a href="/">Info</a></p>
          <p><a href="/Gelleries">Gelleries</a></p>
        </div>
      )
    }

    return (
      <div className="nev-bar">
        <h1 style={{ font: 'Monospace' }}>Hugo Segato</h1>
        <ButtonNavigation />
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '90vh' }}>
      <div className="conteneur-navbar">
        <NavBar />
      </div>
      <div className="conteneur-page">
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
          <div style={{ width: '100%', overflow: 'hidden' }}>
            <ImageStar />
          </div>
        </div>
      </div>
      <footer>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          v0.03 © HUGO SEGATO - all Rights reserved
        </div>
      </footer>
    </div>
  );
}

export default MainPage;
