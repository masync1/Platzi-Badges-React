// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

import BadgeNew from './pages/BadgeNew'

import './global.css'
import 'bootstrap/dist/css/bootstrap.css';
// const element = <h1>Hello, Platzi Badges!</h1>;

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<BadgeNew/>
    , container);

    // <Badge 
    // firstName="Juan Manuel"
    // secondName="Patiño Valencia"
    // jobTitle="TI Especialist"
    // account="Masync1"
    // avatarURL="https://cdn.wallpapersafari.com/93/75/jb2pwy.png"/>