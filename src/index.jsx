import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from './header';

window.addEventListener('DOMContentLoaded', (event) => {
    ReactDOM.render(<Header />, document.getElementById('react_root'));
})
