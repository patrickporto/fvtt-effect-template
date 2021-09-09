import initModuleSettings from "./settings.js";
import EffectTemplateButton from "./effectTemplateButton.js";

Hooks.once('init', async function() {
    initModuleSettings()
});

Hooks.once('ready', async function() {

});

Hooks.on(`renderItemSheet`, async (app, html, data) => {
  const effectTemplateButton = new EffectTemplateButton(app, html)
  effectTemplateButton.render()
});
