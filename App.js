import React from 'react';

function App() {
    return <ConnectAtoA />;
  }

function PrimaryArtistSearch(){
    return (
    <form>
        <input type="text" placeholder="Enter First Artist" />
    </form>
    );
}

function SecondaryArtistSearch(){
    return (
    <form>
        <input type="text" placeholder="Enter Second Artist" />
        <label>
            <input type="checkbox" />
            {' test '}
            Use genre instead
        </label>
    </form>
    );
}


function ConnectAtoA() {
    return (
        <div>
            <PrimaryArtistSearch />
            <SecondaryArtistSearch />
        </div>
    );
}

export default App