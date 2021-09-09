import config from "./config.js";

export class EffectTemplateItemSettings extends FormApplication {
  static TEMPLATE_NAME = "item-settings.html"

  constructor() {
    super(...arguments);
    this.flags = this.object.data.flags.effecttemplate
  }

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      template: `${config.TEMPLATE_PATH}/${this.TEMPLATE_NAME}`,
      id: 'effect-template-item-settings',
      title: game.i18n.localize("EFFECTTEMPLATE.WindowTitle"),
      resizable: true,
      width: 600,
      height: "auto",
      closeOnSubmit: true,
      tabs: [{ navSelector: ".tabs", contentSelector: ".content", initial: "general" }]
    });
  }
}
