- 安装 npm install -g typescript
- 编译 tsc helloworld.ts


------------------------------------------------------------------------
- [【Day 03】 TypeScript 編譯設定 - tsconfig.json](https://ithelp.ithome.com.tw/articles/10216636?sc=rss.iron)
- tsconfig.json 設定
```javascript
{
    "compilerOptions": {
        "target": "es5",  
        "module": "commonjs",
        "strict": true,    
        "esModuleInterop": true, 
    },
    "include":[
        "*.ts"
    ],
    "exclude":[
        "node_modules"
    ]
}
```
