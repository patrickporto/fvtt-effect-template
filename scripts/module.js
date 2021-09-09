import initModuleSettings from "./settings.js";
import EffectTemplateButton from "./effectTemplateButton.js";
import {EffectMeasuredTemplate} from "./effectMeasuredTemplate.js";

Hooks.once('init', async function() {
  initModuleSettings()
  CONFIG.MeasuredTemplate.defaults.angle = 53.13
});

Hooks.once('ready', async function() {
  game[game.system.id].canvas['EffectMeasuredTemplate'] = EffectMeasuredTemplate
});

Hooks.on(`renderItemSheet`, async (app, html, data) => {
  const effectTemplateButton = new EffectTemplateButton(app, html)
  effectTemplateButton.render()
});

Hooks.on("EffectTemplate.PlaceMeasuredTemplate", (item) => {
  const template = game[game.system.id].canvas['EffectMeasuredTemplate'].fromItem(item)
  if (template) {
    template.drawPreview()
  }
});
