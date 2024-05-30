/**
 * const,letなどの変数宣言
 */
// var val1="var変数";
// console.log(val1);

// // var変数は上書き可能
// val1="var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1="var変数を再宣言";
// console.log(val1);

// let val2="let変数";
// console.log(val2);

// // letは上書き可能
// val2="let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2="let変数を再宣言";

// const val3="const変数";
// console.log(val3);

// // const変数は上書き不可
// val3="const変数を上書き";

// // constは再宣言不可能
// const val3="const変数を再宣言";

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4={
//   name:"じゃけぇ",
//   age:31
// };
// val4.name="jak";
// val4.address="Hiroshima";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5=["dog","cat"];
// val5[0]="bird";
// val5.push("monkey");
// console.log(val5);


/**
 * テンプレート文字列 ``
 */
// const name="じゃけぇ";
// const age=31;

// 「私の名前はじゃけぇです。年齢は31歳です。」
// // 従来の方法
// const message1="私の名前は"+name+"です。年齢は"+age+"歳です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2=`私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);


/**
 * アロー関数
 */
// 従来の関数
// function func1(str){
//   return str;
// }
// const func1=function(str){
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {
//   return str;
// };

// // 引数が1つの場合はかっこを省略可能
// const func2 = str => {
//   return str;
// };

// // 関数内の処理が単一式の場合は波括弧とreturnを省略可能で1行で書ける
// const func2 = (str) => str;
// console.log(func2("func2です"));
// const func3 = (num1,num2) => num1+num2;

// 返却値が複数行に渡る場合は括弧で囲むと返却できる(オブジェクトなど)
// const func3 = (num1,num2) => ({
//  hoge:num1,
//  huga:num2
// });
// console.log(func3(10,20));


/**
 * 分割代入
 */
// const myProfile={
//   name:"じゃけぇ",
//   age:31
// };
// const message1=`名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message1);

// オブジェクトの分割代入はプロパティの名前を設定して取り出す必要がある
// const {name,age}=myProfile;
// const message2=`名前は${name}です。年齢は${age}歳です。`
// console.log(message2);

// const myProfile=["じゃけぇ",31];
// const message3=`名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// console.log(message3);

// 配列の分割代入は取り出すときに好きな変数名を設定できる
// const [name,age]=myProfile;
// const message4=`名前は${name}です。年齢は${age}歳です。`
// console.log(message4);


/**
 * デフォルト値(引数、分割代入)
 */
// const sayHello = (name="ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("じゃけぇ");
// sayHello();

// const myProfile={
//   age:31
// };
// const {age,name="ゲスト"}=myProfile;
// console.log(age);
// console.log(name);


/**
 * オブジェクトの省略記法
 */
// const name="じゃけぇ";
// const age=31;

// // プロパティ名と設定する値の変数名が同じ場合、値を省略できる
// const myProfile={ name, age};
// console.log(myProfile);


/**
 * スプレッド構文 ...
 */
// // 配列の展開
// const arr1=[1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc=(num1,num2)=>console.log(num1+num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// // まとめる
// const arr2=[1,2,3,4,5];
// const [num1,num2,...arr3]=arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合
// const arr4=[10,20];
// const arr5=[30,40];

// // arr4とarr6は全く別の配列として定義されている
// const arr6=[...arr4];
// arr6[0]=100
// console.log(arr6);
// console.log(arr4);

// const arr7=[...arr4,...arr5];
// console.log(arr7);

// // 以下の配列コピーの方法はよくない(同じ中身を参照しているのでarr4の中身も書き変わる)
// const arr8=arr4;
// arr8[0]=100;
// console.log(arr4);


/**
 * mapやfilterを使った配列の処理
 */
// const nameArr=["田中","山田","じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(`${index+1}番目は${nameArr[index]}です`);
// }

// nameArr.map((name)=>console.log(name));
// // mapは第2引数にインデックスをとれる
// nameArr.map((name,index)=>console.log(`${index+1}番目は${name}です`));

// // mapで新しい配列を生成できる
// const nameArr2=nameArr.map((name)=>{
//     return name;
// });
// console.log(nameArr2);

// // filterはreturnの後に条件式を書く
// const numArr=[1,2,3,4,5];
// const newNumArr=numArr.filter((num)=>{
//     return num%2===1;
// });
// console.log(newNumArr);

// const newNameArr=nameArr.map((name)=>{
//     if(name==="じゃけぇ"){
//         return name;
//     }else{
//         return `${name}さん`;
//     }
// })
// console.log(newNameArr);


/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1=1>2 ? "trueです" : "falseです";
// console.log(val1);

// const num=1300;
// console.log(num.toLocaleString());

// // typeofは型の判定ができる
// const formattedNum=typeof num==='number' ? num.toLocaleString(): "数値を入力してください";
// console.log(formattedNum);

// const checkSum=(num1,num2)=>{
//     return num1+num2>100 ? "100を超えています!":"許容範囲内です";
// }
// console.log(checkSum(60,50));


/**
 * 論理演算子の本当の意味を知ろう $$ ||
 */
// truthy,falsyについて
// "ABC" 0 10 undefined null false NaN "" [] {}
// どれがtruthyでどれがfalsyか理解しておこう
// const val="ABC";
// if(val){
//     console.log("valはtruthyです");
// }else{
//     console.log("valはfalsyです");
// }

const flag1=true;
const flag2=false;
if(flag1 || flag2){
    console.log("1か2はtrueになります");
}
if(flag1 && flag2){
    console.log("1も2もtrueになります");
}

// || は左側がtruthyの時その時点で返却する
const num=undefined;
const fee=num || "金額未設定です";
console.log(fee);

// && は左側がfalsyの時その時点で返却する
const num2="ABC";
const fee2=num2 && "何か設定されました";
console.log(fee2);