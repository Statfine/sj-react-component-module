改项目生成第三方包sj-react-component-module

代码做线上打包发布到npm
npm publish

1. npm install
2. npm start

build  为打包后的组件文件
bin    为打包组件 用于n生成build文件
app    用户测试组件

*
基于react-boilerplate项目
package
注释掉了 "postinstall": "npm run build:dll"， 添加了"prepublish": "npm run build",
install不执行build，
publish 之前执行。
添加了main入口，

webapck
中修改了entry 和output；
注释掉了html-webpack-plugin 和 offline-plugin
output中添加了
library: 'componentLib',   // 组件采用UMD格式打包
libraryTarget: 'umd',  // 组件名称


发布（发布前自动打包）之后使用改组件：
install sj-react-component-module --save
import { InputSearchCom } from 'sj-react-component-module';
<InputSearchCom value={'here'} placeholder="搜搜" onSearch={(value) => alert(value)} />
