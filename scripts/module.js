import initModuleSettings from "./settings.js";

Hooks.once('init', async function() {
    initModuleSettings()
});

Hooks.once('ready', async function() {

});
