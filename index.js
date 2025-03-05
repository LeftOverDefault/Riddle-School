const { app, BrowserWindow } = require('electron/main');
const path = require('node:path');

function createWindow() {
    const window = new BrowserWindow({
        width: 800,
        height: 450 + 30,
        autoHideMenuBar: true,
        title: 'Launcher',
        icon: './icon.ico',
        webPreferences: {
            devTools: true,
            // preload: path.join(__dirname, 'preload.js')
        }
    })

    // window.loadFile("./launcher/index.html");
    window.loadFile('game/prototype/index.html');
    window.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow()
    
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})
