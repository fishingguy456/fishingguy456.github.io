let light;
window.addEventListener('load', (event) => {
    light = localStorage.getItem('light');
    if (light == 'false') { //dark in browser cache
        document.documentElement.style.setProperty('--bg-colour', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--text-colour', 'rgb(255, 255, 255)');
    } else { //light in browser cache
        document.documentElement.style.setProperty('--bg-colour', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--text-colour', 'rgb(0, 0, 0)');
        document.getElementById('light-mode').style.display = 'none'; //hide
        document.getElementById('dark-mode').style.display = 'block'; //show
    }
});

function toggleTheme() {
    light = localStorage.getItem('light');
    if (light == 'true') { //light to dark
        localStorage.setItem('light', 'false');
        document.documentElement.style.setProperty('--bg-colour', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--text-colour', 'rgb(255, 255, 255)');
        document.getElementById('dark-mode').style.display = 'none'; //hide
        document.getElementById('light-mode').style.display = 'block'; //show
    } else { //dark to light
        localStorage.setItem('light', 'true');
        document.documentElement.style.setProperty('--bg-colour', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--text-colour', 'rgb(0, 0, 0)');
        document.getElementById('light-mode').style.display = 'none'; //hide
        document.getElementById('dark-mode').style.display = 'block'; //show
    }
}