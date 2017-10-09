fis.set('project.ignore', ['*.bat', '*.rar', 'node_modules/**', 'fis-conf.js', 'package.json', '*.sh']);
fis.set('project.fileType.text', 'es');
fis.set('statics', '/public/static'); //static目录
fis.set('url', '/static');
//FIS modjs模块化方案，您也可以选择amd/commonjs等

fis.hook('commonjs', {
  mod: 'amd',
  extList: ['.js', '.jsx', '.es', '.ts', '.tsx', 'vue'],
  paths: {
    'jquery': '/node_modules/jquery/dist/jquery.min.js',
    'vue': '/node_modules/vue/dist/vue.js',
    'Vue': '/node_modules/vue/dist/vue.min.js',
    'vue-router': '/node_modules/vue-router/dist/vue-router.min.js',
    'xss': '/node_modules/xss/dist/xss.min.js',
    'process/browser': '/node_modules/process/browser.js',
    'babel-polyfill': '/node_modules/babel-polyfill/dist/polyfill.min.js',
  }
});
fis.unhook('components')
fis.hook('node_modules', {
  shutup: true, //是否提示node_modules找不到

});


/*************************目录规范*****************************/
fis.match('**/*', {
    release: '${statics}/$&',
    url: '${url}$&'
  })
  .match('/node_modules/**.js', {
    isMod: true,
    useSameNameRequire: true,
    wrap: true,
  })
  .match(/^\/components\/([^\/]+)\/(.*)\.(es|js)$/i, {
    parser: fis.plugin('babel-5.x', {
      sourceMaps: false, //启用调试

      // blacklist: ['regenerator'],

      stage: 3 //ES7不同阶段语法提案的转码规则（共有4个阶段）

    }),
    isMod: true,
    id: '$1',
    rExt: 'js'
  })
  .match(/^\/(site)\/(.*)\.(es|js)$/i, {
    parser: fis.plugin('babel-5.x', {
      sourceMaps: false, //启用调试

      // blacklist: ['regenerator'],

      stage: 3 //ES7不同阶段语法提案的转码规则（共有4个阶段）

    }),
    isMod: true,
    id: '$2',
    rExt: 'js'
  })
  .match('/plugins/*', { //plugins不打包

    isMod: false,
    useHash: false
  }, true)
  .match('/plugins/kindeditor/kindeditor-min.js', {
    isMod: true,
    id: 'kindeditor'
  }, true)
  .match('/view/**.html', {
    useCache: false,
    release: '/$&'
  })
  .match('*.{js,jsx,ts,tsx,es}', {
    preprocessor: [
      fis.plugin('js-require-css'),
      fis.plugin('js-require-file', {
        useEmbedWhenSizeLessThan: 10 * 1024 // 小于10k用base64

      })
    ]
  })
  .match('**/*.less', { //编译less

    parser: fis.plugin('less'),
    rExt: '.css',
  })
  .match('**/*.scss', { //编译less

    parser: fis.plugin('node-sass'),
    rExt: '.css',
  })
  .match(/^(.*)mixin\.less$/i, {
    release: false
  })
  .match(/.*\.(html|jsp|tpl|vm|htm|asp|aspx|php)$/, {
    useCache: false
  });


fis.match('**/*.vue', {
    isMod: true,
    rExt: 'js',
    useSameNameRequire: true,
    parser: fis.plugin('vue-component', {
      cssScopeFlag: 'vuec'
    })
  })
  .match('**/*.vue:less', {
    rExt: 'css',
    parser: fis.plugin('less')
  })
  .match('**/*.vue:scss', {
    rExt: 'css',
    parser: fis.plugin('node-sass'),
  })
  .match('**/*.vue:js', {
    parser: [fis.plugin('babel-5.x', {
        sourceMaps: false, //启用调试

        // blacklist: ['regenerator'],

        stage: 3 //ES7不同阶段语法提案的转码规则（共有4个阶段）

      }),
      fis.plugin('translate-es3ify', null, 'append')
    ]
  });

fis.match('::packager', {
  postpackager: fis.plugin('loader', {
    resourceType: 'mod',
    obtainScript: true,
    allInOne: {
      ignore: ["jquery.js", "vue.js", 'jquery.flexslider.js', 'polyfill.min.js', 'vue-layer.js'],
      includeAsyncs: false //不包含异步依赖

    },
    useInlineMap: false, // 资源映射表内嵌

  }),
  packager: fis.plugin('map', {
    useTrack: false,
    // 'pkg/base.js': [ '/modules/layer/*.js', '/modules/pizzalayer/*.js', '/modules/pizzatools/*.js'],

    // 'pkg/base-a.js': ['/widget/globle/*.js', '/modules/pizzaui/pizza.ui.js', '/site/common/common.js'],

    // 'pkg/base.css': ['/css/pizza.css', '/css/iconfont.css'],

    // 'pkg/base-a.css': ['/css/amui.css', '/css/iconfont.css']

  }),
  spriter: fis.plugin('csssprites', {
    layout: 'matrix',
    margin: '15'
  })
});

fis.media('prod')
  .match('*.{js,jsx,ts,tsx,es,vue}', {
    optimizer: fis.plugin('uglify-js', {
      mangle: {
        except: 'exports, module, require, define', //export, module, require不压缩变量名

      },
      compress: {
        drop_console: true, //自动去除console.log等调试信息

      }
    })
  })
  .match('*.{css,less}', {
    optimizer: fis.plugin('clean-css', {
      'keepBreaks': false //保持一个规则一个换行

    })
  })
  .match('*.png', {
    optimizer: fis.plugin('png-compressor')
  })
  .match('::package', {
    packager: fis.plugin('map'),
    spriter: fis.plugin('csssprites', {
      layout: 'matrix',
      margin: '15'
    })
  })
  .match('*.{js,css,png,jpg,vue}', {
    useHash: true
  });
// .match(/^\/plugins\/(.*)\.(es|js|css)$/i, { //plugs不打包

//   isMod: false,

//   useHash: false

// });
