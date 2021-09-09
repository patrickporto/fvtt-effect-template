import config from "./config.js";

export class EffectTemplateItemSettings extends FormApplication {
  static TEMPLATE_NAME = "item-settings.html"

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

  getData() {
    return {
      ...this.object.data,
      templateShapes: config.SHAPES
    }
  }

  async _updateObject(event, formData) {
    formData = expandObject(formData);
    if (!formData.changes) {
      formData.changes = [];
    }
    formData.changes = Object.values(formData.changes);
    for (let c of formData.changes) {
        //@ts-ignore
        if (Number.isNumeric(c.value))
            c.value = parseFloat(c.value);
    }
    return this.object.update(formData);
  }
}
