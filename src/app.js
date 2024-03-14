import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';

const App = () => {
    return(
        <div className='app'>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app-layout'));

root.render(<App />);
