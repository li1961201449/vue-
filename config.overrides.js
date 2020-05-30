const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
    // 针对antd 的按需打包，根据import来打包
    fixBabelImports('import',{
        libraryName:'antd',
        libraryDirectory:'es',
        style:'css',  //自动打包相关的样式
    }),

    addLessLoader({
        javascriptEnabled:true,
        modifyVars:{'@primay-color':'#1DA57A'},
    })
)