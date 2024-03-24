import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return(
        <div className='app'>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app-layout'));

root.render(<App />);
