//本来の書き方
function fn(number) {
  return number * 2;
}

console.log(fn(2));

const fnArrow = (number) => {
  return number * 2;
}

console.log(fnArrow(2));

/*
この中にクラスを予習した分も書いてもOK
コメントも必ず書く.

-----------------------------------------------
★★クラスについて★★
  クラスとは設計図やひな形のようなもの。
  例えば、
  「car」というクラス→車の設計図
  「people」というクラス→人の設計図
  「gamePlayer」というクラス→プレイヤーの設計図
  ★こういった設計図があれば、同じ仕組みを持ったモノをいくつも作れる。

  (例)
  appleというクラス
  ・色
  ・大きさ
  ・重さ
  ・味
  この情報をまとめたのがまさにクラス
  そこから実際のリンゴを作ったものがオブジェクト（実体）←これよく聞くやつ

💡jsで書くとすればこうなる💡

class Player {
  constructor(name) {
    this.name = name;
    this.hp = 100;
  }

  attack() {
    console.log(`${this.name} が攻撃した！`);
  }
}

const player1 = new Player("Tomy");
player1.attack();

★★ポイント★★
  class Player →設計図
  constructor →作る時に初期設定する場所（Javaの時にめっちゃ使ったやつ。ただ、分かってない）
  this.name など→プレイヤーが持つデータ
  attack() →プレイヤーが出来る動き
  new Player("Tomy") →設計図から実体を作る

⭐ まとめ
🔹 クラス = 設計図
🔹 オブジェクト = 設計図から作られた実物
🔹 役割
・似た性質のデータをまとめる
・動き（関数）も一緒にまとめる
・大きなプログラムを整理しやすくする

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

クラスを作っておくと、毎回処理を書くときにいちいち書かなくても読み込むだけでよい。
もっというと、読み込んで使える以上に、共通の性質と動きをまとめることもできる！
例えばプレイヤーというクラスを作っておけば、
・名前
・HP
・攻撃する
・回復する
という性質や動きも一つに整理してまとめることが出来る！！！！

また、クラスから必要な分だけ実体を作れる。
const p1 = new Player("Tomy");
const p2 = new Player("Alice");
const p2 = new Player("Bob");
とか何体もプレイヤーを作れる。

そして「変更に強い」

もし、
・HPの初期値を100→150に変えたい
・攻撃処理を少し変えたい

こういう時も
🔻 クラスの中だけ直せば
🔺 すべてのプレイヤーに反映される

毎回コピペしたコードを探して直す必要なし。
これがめちゃくちゃ助かるポイント！

★★アロー関数について★★

【生のjsの書き方】
function add(a, b) {
  return a + b;
}

【アロー関数の書き方】
const add = (a, b) => {
  return a + b;
};

※functionは関数を作る為のキーワード
※constは変数をつくるためのキーワード。しかも再代入ができないので安全に処理が出来る

①そのままの値を返すだけの処理なら短く書くことも可能
const add = (a, b) => a + b;

②引数が１つだけのとき
const double = x => x * 2;

③引数がない時
const sayHello = () => {
  console.log("Hello");
};

④複数行の処理を返すとき
const calc = (a, b) => {
  const result = a + b;
  return result * 2;
};

アロー関数を使う事で処理を短く書けるので可読性と作業スピードが上がる
とくにReactは関数だらけの処理になるのでアロー関数を使う利点になる
配列処理は全部アロー関数で書くのが基本でコールバック関数との相性も抜群にいい

★★DOMについて★★
htmlのタグをjsから操作するときに使用するもの
htmlではタグは使用できないのでDOMを通してオブジェクトとして操作できるように使用する事が出来る

例
<h1>title</h1>

const h1Element = document.querySelector('h1');
console.dir(h1Element); ※titleとコンソールに表示
console.log(h1Element.textContent); ※changed titleと表示
h1Element.textContent = 'changed title'

上記のコードだと元に記述していたh1タグのタイトルを、「changed title」に変更する事が出来る

・イベントリスナーについて
何かをトリガーとして処理が発火する事が出来る動き

例
<button>click</button>

const btnEl = querySelector('button'); ※クエリセレクタとしてbuttonタグを指定
btnEl.addEventListener('click', () => { ※イベントリスナーにクリックしたときにhelloとコンソール表示するように処理を書いている
  console.log('hello')
})

addEventListenerでイベントリスナーとして中に処理を書く（今回はクリックイベントを使用してクリックしたときの動きを書いている）

イベントに伴う情報を取得したい場合は、下記の記述で取得可能
今回は、eという引数からtargetというプロパティを通して情報を取得している
const btnEl = querySelector('button');
btnEl.addEventListener('click', (e) => {
  console.dir(e.target);
  console.log('hello')
})

・配列のmap,filterについては理解しているので割愛

・分割代入について
配列を変数に代入し取得する事が出来る

例
const [a , , c ] = ["obj1", "obj2", "obj3"];
console.log(a); ※obj1が取得される
console.log(c); ※obj3が取得される
★この場合、取得するプロパティの順番が重要になる。

const {z , x } = {x: "obj1", y: "obj2", z: 'obj3};
console.log(x); ※obj1が取得される
console.log(z); ※obj3が取得される

例2
配列の分割代入
const fnArr = ([country, state, city ]) => {
  console.log("-配列-");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city});
};

変数の分割代入
const fnObj = ({ country, state }) => {
  console.log("-obj-");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  cityのプロパティを使わない場合、書かなくてもよい。

・スプレッド演算子について

例
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1];
let newArr1 = arr1;
newArr.push(4)
console.log(newArr);
この場合、スプレッド演算子で取得されるため、pushで4を代入されていたとしても、
元のarr1の「1,2,3」しか取得されない。
newArrはarr1と全く別の新しい配列として扱われるため。

console.log(arr1)
この場合、arr1に定義されている値を丸ごと取ってくるので、pushで4が代入されていてもコンソールには「1,2,3,4」が取得される

let newArr = [...arr1, ...arr2];
と宣言する事により、
console.log(newArr);
で結果を取得すると、[1, 2, 3, 4, 5, 6]と結合させて取得する事もできる
};
*/