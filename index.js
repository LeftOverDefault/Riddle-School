const { app, BrowserWindow } = require('electron/main');
const path = require('node:path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1600,
        height: 900 + 30,
        autoHideMenuBar: true,
        title: 'Launcher',
        webPreferences: {
            // preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile("./launcher/index.html");
    // win.loadFile('game/episode_1/canvas.html');
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
