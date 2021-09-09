const initModuleSettings = () => {
  game.settings.register('effecttemplate', 'targetingOnSelect', {
    name: game.i18n.localize('EFFECTTEMPLATE.SettingtargetingOnSelect'),
    hint: game.i18n.localize('EFFECTTEMPLATE.SettingtargetingOnSelectHint'),
    default: true,
    scope: 'world',
    type: Boolean,
    config: true,
  })
  game.settings.register('effecttemplate', 'autoTargeting', {
    name: game.i18n.localize('EFFECTTEMPLATE.SettingTemplateAutoTargeting'),
    hint: game.i18n.localize('EFFECTTEMPLATE.SettingTemplateAutoTargetingHint'),
    default: false,
    scope: 'world',
    type: Boolean,
    config: true,
  })
  game.settings.register('effecttemplate', 'autoRemove', {
    name: game.i18n.localize('EFFECTTEMPLATE.SettingTemplateAutoRemove'),
    hint: game.i18n.localize('EFFECTTEMPLATE.SettingTemplateAutoRemoveHint'),
    default: true,
    scope: 'world',
    type: Boolean,
    config: true,
  })
  game.settings.register('effecttemplate', 'hideFromPlayers', {
    name: game.i18n.localize('EFFECTTEMPLATE.SettingTemplateAutoRemove'),
    hint: game.i18n.localize('EFFECTTEMPLATE.SettingTemplateAutoRemoveHint'),
    default: true,
    scope: 'world',
    type: Boolean,
    config: true,
  })
}

export default initModuleSettings
