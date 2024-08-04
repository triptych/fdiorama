import { generateSky } from './sky.js';
import { generateTerrain } from './terrain.js';
import { generateVegetation } from './vegetation.js';
import { generateCharacters } from './characters.js';

const diorama = document.getElementById('diorama');

const init = () => {
    const skyType = Math.random() < 0.33 ? 'day' : (Math.random() < 0.5 ? 'sunset' : 'night');
    generateSky(diorama, skyType);
    generateTerrain(diorama);
    generateVegetation(diorama);
    generateCharacters(diorama);
};

window.addEventListener('load', init);
window.addEventListener('resize', () => {
    diorama.innerHTML = '';
    init();
});