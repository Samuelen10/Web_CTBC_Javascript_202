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


//練習題目 說明4

let Hp =70;

if(Hp <= 0 ){
    console.log("死亡Dead");
}
else if (Hp <= 60){
    console.log("警告");
}
else{
    console.log("安全Safe");
}


let hpTest =59;
// && 並且
// 如果hpTest 小於等於100 並且 hpTest 大於等於60 就代表安全

if (hpTest >= 60 && hpTest <= 100) {
    console.log("安全Safe");
}
else if (hpTest <= 60 && hpTest > 0){
    console.log("警告");
}
else{
    console.log("死亡Dead");
}

console.log("%c迴圈", "color: gold");
// for 迴圈
// for 語法:
// for (初始值;  條件; 迭代器) { 程式區塊 }
for  (let index = 0; index < 10; index++) {
    console.log("迴圈", index);
    // alert("嗨 ~~")
}

// 變數
let letCount = 1;
letCount = 2;
letCount = 3;
// 常數 (不可變的數值)
const constCount = 1;
// constCount = 2;               // 產生錯誤，原因:常數不可改變

// 不可重新定義
// let letCount = 10;            // 產生錯誤，原因: 重複宣告
// const constCount = 10;        // 產生錯誤，原因: 重複宣告

// 常數命名習慣會使用全大寫並使用底線區隔
const PI = 3.14;
const WEB_FONT_SIZE = 24; //(用於定義不同的值)

// 變數 var (variable)
var varCount = 1;
varCount = 123;     // 可重新賦予值
var varCount = 3;   // 可重新定義 (不建議)
console.log(varCount);

// 作用域 Scope {}   // 代表程式作用的範圍(通常指大括號)
// let 與 const 的作用域都在 {} 區塊內
{
    let letTest = 1;
    const constTest = 1;
    var varTest = 1;
    console.log("let:", letTest);
    console.log("const:", constTest);
    console.log("var:", varTest);
}

//  console.log("let:", letTest);         // 錯誤 : 超出作用域
//  console.log("const:", constTest);     // 錯誤 : 超出作用域
console.log("var:", varTest);  // 在區塊外只有var可以正常使用

console.log("%cfunction 函式，方法或功能" , "color: gold");
// 函式語法

// function 函式名稱() { }
function logLine() {
    console.log("%c----我是分隔線----", "color: gold");
}

// 函式需要被呼叫: 函式名稱():
logLine();
logLine();
logLine();
logLine();
logLine();

//    2024/12/27 上課內容

// 對照組 (比較不適合的寫法)
function logLineRed() {
    console.log("%c----我是分隔線----", "color: red");
}

function logLineGreen() {
    console.log("%c----我是分隔線----", "color: green");
}

logLineRed();
logLineGreen();

// 程式要注意的事情: 思考未來的維護性 , 擴充性 , 可讀性

// (比較適合的寫法)
// function 函式名稱(參數) { }

function logLineWithColor(color) {
    console.log("%c----我是分隔線----", `color:  ${color}`);
}

logLineWithColor("blue");
logLineWithColor("black");

// 參數的預設值

function logLongLineWithColor(color = "gold") {
    console.log("%c-------我是分隔線------", `color:  ${color}`);
}

logLongLineWithColor("red");
// 不給參數會直接使用預設值
logLongLineWithColor();

console.log("%c表達式函式", "color: gold");


// 表達式函式語法
// const 變數 = 函式 (參數) {}
const print = function (color = "red") {
    console.log("%c測試", `color:  ${color}`);
}

// 變數名稱 ( 參數 )
print("green");
print("gray");

// 多個參數 
const printMessage = function (color = "red" ,message = "這是預設文字") {
    console.log(`%c${message}`, `color:  ${color}`);
}

printMessage();
printMessage("gold");
printMessage("gold", "訊息");

// 想要使用預設顏色，文字要使用 "訊息"

printMessage("訊息");                    // 錯誤
printMessage(undefined, "訊息");         // 正確結果

console.log("%c函式傳回值" , "color: gold");


// 有傳回值的函式， 必須使用一個 return 關鍵字僵值傳回
function double(number) {
    return number * 2;
}

// 使用方式 1 : 用變數將傳回值儲存
const result = double(10);
console.log(result);
// 使用方式 2 : 直接將傳回函式當作數值使用
console.log(double(7));

// 表達式傳回函式
// 平方函式
const square = function (number) {
    return number * number;
}

console.log(square(8));
console.log(square(225));

// 練習題計算 BMI

