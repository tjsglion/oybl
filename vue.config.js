let path = require('path')
let glob = require('glob')
//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
    let entries = {},
        basename, tmp, pathname, appname;

    glob.sync(globPath).forEach(function(entry) {
        basename = path.basename(entry, path.extname(entry));
        // console.log(entry)
        tmp = entry.split('/').splice(-3);
        pathname = basename; // 正确输出js和html的路径

        // console.log(pathname)
        entries[pathname] = {
            entry:'src/'+tmp[0]+'/'+tmp[1]+'/'+tmp[1]+'.js',
            template:'src/'+tmp[0]+'/'+tmp[1]+'/'+tmp[2],
            filename:tmp[2]
        };
    });
    return entries;
}

let resolve = dir => path.resolve(__dirname, dir)
let htmls = getEntry('./src/pages/**/*.html');
//配置end

module.exports = {
    pages:htmls,
    baseUrl: '',
    devServer: {
        index:'index.html',//默认启动serve 打开page1页面
        open: process.platform === 'darwin',
        host: '',
        port: 8088,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://47.105.190.85',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/wa/': {
                target: 'http://api.match.hexun.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/wa': ''
                }
            }
        }, // 设置代理
        before: app => { }
    },
    chainWebpack: config => {
        config.module
          .rule('images')
          .use('url-loader')
          .loader('url-loader')
          .tap(options => {
              // 修改它的选项...
              options.limit = 10000
              return options
          })
        config.resolve.alias
          .set('@', resolve('src'))
          .set('_c', resolve('src/components'))
          .set('_s', resolve('src/style'))
    }
}
