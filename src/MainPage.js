import React from "react";

function MainPage() {

  const PublicFolderContent = () => {

    console.log(process.env.PUBLIC_URL)
  };

  function ButtonNavigation() {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>

        <p><a href="/">Info</a></p>
        <p><a href="/">Gelleries</a></p>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', minHeight: '90vh'}}>
      <div className="conteneur-page">
        <div className="nev-bar">
          <h1 style={{ font: 'Monospace' }}>Hugo Segato</h1>
          <ButtonNavigation />
        </div>
        <PublicFolderContent />
      </div>
    </div>
  );
}

export default MainPage;
