import React from "react";
import ImageStar from './imageStar/ImageStar'

function MainPage() {


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '90vh' }}>
      <div className="conteneur-page">
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
          <div style={{ width: '100%', overflow: 'hidden' }}>
            <ImageStar />
          </div>
        </div>
      </div>
      <footer>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          v0.06 © HUGO SEGATO - all Rights reserved
        </div>
      </footer>
    </div>
  );
}

export default MainPage;
