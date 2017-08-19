## 项目生成第三方包sj-react-component-module

<br />

<dl>
<dt>代码做线上打包发布到npm</dt>
<dd>npm publish</dd>
</dl>

- * 1. npm install
- * 2. npm start

<dl>
<dd>build  为打包后的组件文件</dd>
<dd>bin    为打包组件 用于n生成build文件</dd>
<dd>app    用户测试组件</dd>
</dl>

<br />

基于react-boilerplate项目

<dl>
<dt>package</dt>
<dd>注释掉了 "postinstall": "npm run build:dll"， 添加了"prepublish": "npm run build",</dd>
<dd>install不执行build，</dd>
<dd>publish 之前执行。</dd>
<dd>添加了main入口，</dd>


<dt>webapck</dt>
<dd>中修改了entry 和output；</dd>
<dd>注释掉了html-webpack-plugin 和 offline-plugin</dd>
<dd>output中添加了</dd>
<dd>library: 'componentLib',   // 组件采用UMD格式打包</dd>
<dd>libraryTarget: 'umd',  // 组件名称</dd>
</dl>

<br />

发布（发布前自动打包）之后使用改组件：
<dl>
<dd>install sj-react-component-module --save</dd>
<dd>import { InputSearchCom } from 'sj-react-component-module';</dd>
<br />
InputSearchCom value={'here'} placeholder="搜搜" onSearch={(value) => alert(value)}
</dl>
