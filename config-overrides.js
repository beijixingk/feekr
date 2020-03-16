const { 
   override, 
   fixBabelImports, //按需加载
   addWebpackAlias,//起别名
   addDecoratorsLegacy //使用装饰器
} = require('customize-cra')

const path = require('path')

module.exports = override(
   fixBabelImports('import', {
    libraryName: 'antd-mobile',
     style: 'css',
   }),
   addWebpackAlias({
      assets:path.resolve(__dirname,'./src/assets'),
      components:path.resolve(__dirname,'./src/components'),
      pages:path.resolve(__dirname,'./src/pages'),
      utils:path.resolve(__dirname,'./src/utils')
   }),
   addDecoratorsLegacy()
);