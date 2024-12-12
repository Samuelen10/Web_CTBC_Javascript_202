console.log("這是外部的 JS");

// 變數 variable (會變的數值)
// 儲存網站內的資料，例如: 顏色 字體大小 元素 使用者資訊

// 變數語法
// let 變數名稱 (指定 預設值 --> "=");

//變數名稱命名習慣（守則）
//1. 不會使用中文命名
//2. 不使用數字開頭
//3.不使用全形符號©
//4. 空格 test 1
//5.保留字（有作用的關鍵字）if let

// 建議命名方式：（駝峰式命名）
//1.多個單字構成
//2.開頭使用小寫
//3.單字相建字首用大寫
//4.用有意義的名稱命名

let test = 7;
let fontColor = "#f63";

// 取得變數 get
console.log(test);
console.log(fontColor);

//設定變數 set
test = 9;
console.log(test);

// 資料類型 
let varNumber = 1.5; // 數值
let varString = "字串";  // 字串
let varBool = true;  // 布林值 (true false)

console.log(varNumber);
console.log(varString);
console.log(varBool);

// typeof 獲得資料類型
console.log(typeof varNumber);
console.log(typeof varString);
console.log(typeof varBool);

// 運算子
// 加減乘除餘次方
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);
console.log(10 ** 3);

// 指定運算子（指定符號=）
// 1+2=3 數學內的等號，左右兩邊一定相等，由左至右執行
// = 指定，左右兩邊不一定相等，由右至左執行
let numberTest = 99 + 1;
console.log(numberTest);
numberTest++;
console.log(numberTest);
numberTest--;
console.log(numberTest);
numberTest += 10;  // 適用於+-*/% (加減乘除和百分比)
console.log(numberTest);
numberTest -= 10;
console.log(numberTest);

console.log("%c比較運算子", "color: gold");

// > < >= <= === !== (執行結果是布林值)
console.log(100 > 1);
console.log(100 < 1);
console.log(100 === 1);  //等於 F
console.log(100 !== 1);  //不等於 T

// == 與 === (嚴格比較，數值與類型都要相同)
let varNumber10 = 10;
let varString10 = "10";

console.log(varNumber10 == varString10);
console.log(varNumber10 === varString10);  //嚴格比較，資料類型不同，結果為 false

console.log("%c判斷式", "color: gold");
// 判斷式語法
// if (布林值) {布林值等於 true 執行此區塊 block }
if(true) {
    console.log("這裡是判斷式")
}

let score =85;

// if 要在最上面
// else if 無限次數
// else 要在最下方
if(score >= 60 ){
    console.log("及格，可以放假囉~");
}
else if (score >= 50){
    console.log("來補考囉~~");
}
else{
    console.log("耶~~被當囉");
}
