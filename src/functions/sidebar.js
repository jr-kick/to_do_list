import arrow_right from '../images/arrow_right.png';
import arrow_down from '../images/arrow_down.png';

export const dropMenu = () => {

    const settings = document.querySelector('#settings');
    const projects = document.querySelector('#projects');

    const arrowTurn = (e) => {

        var parent = e.target;
    
        while (parent.className !== 'main-btn') {
            parent = parent.parentElement;
        };
        
        var arrow_img = parent.querySelector('img');
    
        if (parent.parentElement.slot === 'OFF') {
            arrow_img.src = arrow_down;
        } else arrow_img.src = arrow_right;
    
        if (parent.value === 'settings') {
            drop.showSettings();
        };

        if (parent.value === 'projects') {
            drop.showProjects();
        };
    };

    var settings_drop = document.createElement('div');
    var option1 = document.createElement('button');
    option1.textContent = 'Option 1';
    settings_drop.appendChild(option1);

    const showSettings = () => {
        if (settings.slot === 'ON') {
            settings.removeChild(settings_drop);
            settings.slot = 'OFF';
        } else {
            settings.appendChild(settings_drop);
            settings.slot = 'ON';
        }
    };

    const showProjects = () => {

    };

    return {
        arrowTurn,
        showSettings,
        showProjects
    };
};

const drop = dropMenu();

export const setDefaultState = (() => {

    const btn = document.querySelectorAll('.main-btn');
    const settings = document.querySelector('#settings');
    const projects = document.querySelector('#projects');

    btn.forEach((e) => {
        e.addEventListener('mousedown', (e) => {
            drop.arrowTurn(e);
        });
        var arrow_div = e.querySelector('.arrow');
        var arrow_img = new Image();
        arrow_img.src = arrow_right;

        arrow_div.appendChild(arrow_img);

        settings.slot = 'OFF';
        projects.slot = 'OFF';
    });
})();