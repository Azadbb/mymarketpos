const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html'); // ئەڤە دێ فایلێ مە یێ وێب کەتە بەرنامە
}

app.whenReady().then(createWindow);