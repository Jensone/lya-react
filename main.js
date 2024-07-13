// Importation des modules ElectronJS
const { app, BrowserWindow, Tray, Menu, nativeImage } = require('electron');
const path = require('node:path');

const createWindow = () => {
    const win = new BrowserWindow({
        minWidth: 800,
        minHeight: 600,
        icon: path.join(__dirname, 'dist/logo.png'),
        titleBarStyle: 'hidden',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            openai: path.join(__dirname, 'openai.js')
        }
    });

    win.loadFile(path.join(__dirname,'dist/index.html'));
};

// Lancez l'application
app.whenReady().then(() => {
    createWindow()
    const icon = nativeImage.createFromPath(__dirname, 'dist/logo.png')
    tray = new Tray(icon)
});

// Fermez l'application pour Windows et Linux
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});
