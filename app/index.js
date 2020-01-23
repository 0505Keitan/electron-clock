const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;
app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 1024, height: 768});
  mainWindow.loadURL('file://' + __dirname + '/time.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

