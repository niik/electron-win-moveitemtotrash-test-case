// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const { shell, remote } = require('electron')

const appExePath = remote.app.getPath('exe');
console.log(`Attempting to move the current process exe (${appExePath}) to trash, should fail`)
console.assert(!shell.moveItemToTrash(appExePath), `moveItemToTrash returned true`)