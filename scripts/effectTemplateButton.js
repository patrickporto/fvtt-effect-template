import {EffectTemplateItemSettings} from "./effectTemplateItemSettings.js";

class EffectTemplateButton {
  constructor(app, html) {
    this.app = app
    this.html = html
  }

  _userCanView() {
    return game.user.isGM || !game.settings.get("effecttemplate", "hideFromPlayers")
  }

  _handleButtonClick = () => {
    new EffectTemplateItemSettings(this.app.document, {}).render(true);
  }

  render() {
    if (!this._userCanView()) {
        return;
    }

    const button = $(`<a class="effect-template-item-settings" title="Effect Template"><i class="fas fa-magic"></i>Effects</a>`);
    button.click(this._handleButtonClick);
    this.html.closest('.app').find('.effect-template-item-settings').remove();
    const titleElement = this.html.closest('.app').find('.window-title');
    button.insertAfter(titleElement);
  }
}

export default EffectTemplateButton
