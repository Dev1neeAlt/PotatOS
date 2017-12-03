const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;


app.on('ready', function() {
  const startWindow = new BrowserWindow({
    width: 300,
    height: 300,
    frame: false
  });
  startWindow.loadURL(`file://${__dirname}/start.html`);


  const shortcutsMenu = Menu.buildFromTemplate(shortcuts);
  Menu.setApplicationMenu(shortcutsMenu);

});

const shortcuts = [
  { 
    label: 'Quit',
    accelerator: 'Alt+F4',
    click() {
      app.quit();
    }
  }
];
