// 宣告型別
const user_Name: string = "Amy";
const num: number = 0;
const bool: boolean = true;

const numberArr: number[] = [1, 2, 3];
// const arr:[] = []; //嚴格要求空數組
// let arr = []; //never[]
// arr.push(1);

const arr:number[]=[]
arr.push(1)
// arr.push('2');


// ================================================
// 1. 安裝typeScript
// 2. 基礎數據類型
// 3. typeScript接口拆解
// - [typescript 中文網](https://www.tslang.cn/)
// - 安装 
//   - npm install -g typescript => 全局安裝 ( 官方推建 )
//   - npm install typescript => 安裝在當前目錄
// - 编译 tsc helloworld.ts
// - 型別宣告
//   - 在編輯器和編譯階段都會有提示
//   - 宣告變數在賦值階段就會聲明型別 (TS會自動推斷型別)
// - TS 支援型別種類:string、number、boolean、any(EX:null，沒有類型約束)、array、object
//   - boolean 在寫代碼的時候，不支持隱式轉換
//   - object屬性在聲明的時候就要定義好=>已知物件
// - 接口文檔=>一定要要求後端清晰地描述接口文檔