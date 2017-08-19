项目生成第三方包sj-react-component-module
```
<dl>
<dt>代码做线上打包发布到npm</dt>
<dd>npm publish</dd>
</dl>

- *1. npm install
- *2. npm start

<dl>
<dt>build  为打包后的组件文件</dt>
<dt>bin    为打包组件 用于n生成build文件</dt>
<dt>app    用户测试组件</dt>
</dl>


基于react-boilerplate项目
```
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


发布（发布前自动打包）之后使用改组件：
```
<dl>
<dt>install sj-react-component-module --save</dt>
<dt>import { InputSearchCom } from 'sj-react-component-module';</dt>
<dt><InputSearchCom value={'here'} placeholder="搜搜" onSearch={(value) => alert(value)} /></dt>
</dl>
