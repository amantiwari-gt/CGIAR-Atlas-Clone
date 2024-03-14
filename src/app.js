import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return(
        <div className='app'>
            <h1>Hello World!</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app-layout'));

root.render(<App />);
