import '@fontsource/pt-serif/latin-400.css';
import '@fontsource/pt-serif/latin-700.css';
import './index.css';
import './background.js';

document.getElementById('age').textContent =
    new Date(Date.now() - new Date('2002-07-01').getTime()).getFullYear() - 1970;
