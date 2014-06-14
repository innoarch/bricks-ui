import i18n from "./i18n-initialize";

/**
 * @description 向I18N注册模板
 * @param  {object} translation
 */
i18n.registerTranslation = function (translation) {
  Ember.assert('translation must be an object ,you passed ' + translation, typeof translation === 'object');
  Ember.merge(Ember.I18n.translations, translation);
};

/**
 * @description 获取客户端语言
 * @returns {string}
 */
i18n.getLanguage = function () {
  return (window.navigator.language || window.navigator.browserLanguage).toLowerCase();
};

/**
 * @description 将选择的语言类型持久化到cookie中
 * @param lang {string} 语言类型，如'zh-CN'等
 * @param langObject {object} i18n对象，为键值对形势
 */
i18n.setLanguage = function (lang, langObject,isPersistent) {
  i18n.registerTranslation(langObject);
  if(isPersistent){
    Ember.$.cookie('bricksui-lang', lang, { expires: 7 });
  }
};

/**
 * @description 初始化i18n
 * 传入一个回调函数，方法将会将语言代码传入回调函数中，回调函数需返回对应语言代码的语言对象
 * @param getLangObject {function}
 */
i18n.initialLanguage = function (getLangObject) {
  var langObject,
    lang = Ember.$.cookie('bricksui-lang') || i18n.getLanguage();

  langObject = getLangObject(lang);
  i18n.setLanguage(lang, langObject);
};