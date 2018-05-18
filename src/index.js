import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import CardList from './CardList'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {robots} from './robots';


//Creating my card Component
ReactDOM.render(
           <CardList robots={robots}/>, 
                
document.getElementById('root'));

registerServiceWorker();
