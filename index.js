let light = false;
function toggleTheme() {
    if (light) {
        light = false;
        document.documentElement.style.setProperty('--bg-colour', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--text-colour', 'rgb(255, 255, 255)');
        document.getElementById("dark-mode").style.display = "none";//hide
        document.getElementById("light-mode").style.display = "block";//show
    } else {
        light = true;
        document.documentElement.style.setProperty('--bg-colour', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--text-colour', 'rgb(0, 0, 0)');
        document.getElementById("light-mode").style.display = "none";//hide
        document.getElementById("dark-mode").style.display = "block";//show
    }
}