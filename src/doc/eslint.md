#### eslint配置经验

#### vscode
+ 
+ 默认只匹配js文件，如果加vue支持，需添加配置
```  
"eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        "vue"
    ],
```


##### ESlint心得
+ 编辑器部份
    - 编辑器安装eslint插件
    - node安装全局eslint工具包
    - 编辑器配置需要检查的文件
+ 项目部份
    - 项目安装依赖包
    - 配置文件配置规则