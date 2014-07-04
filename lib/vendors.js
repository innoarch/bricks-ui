/**
 * 第三方插件配置
 * 配置项包括
 * config: exclusion-需要排除在打包程序的第三方插件
 * vendors: 各插件的具体配置信息，配置内容包括
 *          1.basePath 对应第三方插件的文件夹名称，如果不存在则以对应key为basePath
 *          2.scripts  对应所需引用的脚本
 *          3.styles   对应所需引用的样式文件
 *          4.vendor   对应所需引入的图片，字体等文件
 *          5.dependencies 依赖的第三方插件
 */
module.exports = {
  config:{
//    exclusion:['moment']
  },
  vendors:{
    "moment":{
      basePath:"moment",
      scripts:["min/moment-with-langs.js"]
    },
    "ember-i18n":{
      basePath:"ember-i18n",
      scripts:["lib/i18n.js"]
    },

    "ember-validations":{
      scripts:["index.js"],
      dependencies:["ember-i18n"]
    },

    "ember-easyForm":{
      scripts:["index.js"],
      dependencies:["ember-i18n","ember-validations"]
    },

    "jquery-cookie":{
      scripts:["jquery.cookie.js"]
    },

    "bootstrap3-datetimepicker":{
      scripts:["src/js/bootstrap-datetimepicker.js"],
      dependencies:["moment"]
    },

    "bootstrap-for-ember":{
      scripts:["dist/js/bs-ui.max.js"]
    },

    "bootstrap-daterangepicker":{
      scripts:["daterangepicker.js"],
      dependencies:["moment"]
    },

    "ztree_v3":{
      scripts:["js/jquery.ztree.all-3.5.js"],
      styles:["css/zTreeStyle/zTreeStyle.css"],
      vendor:["css/zTreeStyle/img/**/*.*"]
    },

    "chosen": {
      basePath:"chosen",
      scripts: ["chosen.jquery.js"],
      styles: ["chosen.css"],
      vendor: ["chosen-sprite.png","chosen-sprite@2x.png"]
    },

    "bootstrap":{
      basePath:"bootstrap",
      scripts:["dist/js/bootstrap.js"],
      styles:["dist/css/bootstrap.css"],
      vendor:["/fonts/**/*.*"]
    }
  }
}

//=require bootstrap3-datetimepicker/src/js/locales/bootstrap-datetimepicker.zh-CN.js
//=require bootstrap3-datetimepicker/src/js/locales/bootstrap-datetimepicker.zh-TW.js