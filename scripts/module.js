import initModuleSettings from "./settings.js";
import EffectTemplateButton from "./effectTemplateButton.js";
import {EffectMeasuredTemplate} from "./effectMeasuredTemplate.js";

let profile = null

Hooks.once('init', async function() {
  initModuleSettings()
  CONFIG.MeasuredTemplate.defaults.angle = 53.13
});

Hooks.once('ready', async function() {
  game[game.system.id].canvas['EffectMeasuredTemplate'] = EffectMeasuredTemplate
  const Profile = (await import(`./systems/${game.system.id}.js`)).default;
  profile = new Profile()
});

Hooks.on('renderItemSheet', async (app, html, data) => {
  const effectTemplateButton = new EffectTemplateButton(app, html)
  effectTemplateButton.render()
});

Hooks.on("EffectTemplate.PlaceMeasuredTemplate", (item, callback) => {
  const template = EffectMeasuredTemplate.fromItem(item)
  if (template) {
    template.onSubmit(callback)
    template.drawPreview()
  }
});

Hooks.on('preCreateChatMessage', (document, data, options, userId) => {
  if (data?.flags?.effectTemplate?.forceCreate) {
    return
  }
  const item = profile.getItemByChatMessage(data)
  if (item) {
    Hooks.call("EffectTemplate.PlaceMeasuredTemplate", item, () => {
      ChatMessage.create({
        ...data,
        flags: {
          ...data.flags,
          effectTemplate: {
            forceCreate: true
          }
        }
      })
    })
    return false
  }
})
