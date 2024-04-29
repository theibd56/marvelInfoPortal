import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import MarvelService from './services/MarvelService';
import './style/style.scss';

const marvelService = new MarvelService()
const root = ReactDOM.createRoot(document.getElementById('root'));

marvelService.getAllCharacters().then(res => res.data.results.forEach(item => console.log(item.name)));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);