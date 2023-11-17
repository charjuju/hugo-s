import React from "react";
import ImageStar from './imageStar/ImageStar'

function MainPage() {


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '80vh' }}>
      <div className="conteneur-page">
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
          <div style={{ width: '100%', overflow: 'hidden' }}>
            <ImageStar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
