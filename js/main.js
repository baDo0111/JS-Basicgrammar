'use strict';
	// 'use strict'は、厳密なエラーチェックをするためのもので、
	// 書いておくとエラーが発見しやすくなるので、書いた方が良い。

	console.log('Hello World from main.js!');
	/*コメント
	コメント
	コメント
	*/
	// 複数行コメントにする場合は上記のようにコメントを行う。
	console.log("it's me!");
	// javascriptでは'(シングルクォーテーション)か、"(ダブルクォーテーション)どちらも同じ意味で、
	// 使うことができるが、文字列の中に'、"が入る場合は、文字列の終わりだと認識されてしまうので注意が必要。
	// また、it\'s me!と書くと\直前の'や"は文字列の末端ではなく単なる文字列として認識される。
	// ちなみに\(バックスラッシュ)はoptionキー＋￥キーで入力する。
	console.log('Hel\nlo Wo\trld');
	// \nで改行、\tでタブをいれることできる。
	console.log('Hello' + 'World');

	/*数値の計算（演算子）*/
	console.log(10 + 3); // 13 足し算
	console.log(10 - 3); // 7　引き算
	console.log(10 * 3); // 30　掛け算
	console.log(10 / 3); // 3.333....　割り算
	console.log(10 % 3); // 1　整数の割り算の余り
	console.log(10 ** 3); // 1000　べき乗

	console.log(2 + 10 * 3); // 32 掛け算は足し算よりも優先度が高いので、2＋30＝32になる。
	console.log((2 + 10) * 3); // 36 2＋10が先に計算され12*3＝36になる。

	/*定数*/

	// 定数＝const
	// 変数＝let　ver
	// 変数にはvarというキーワードもあるが、varは古い書き方で、良くないとされる理由は以下の2つ。
	// 1. 変数を簡単に書き換えられてしまうと、意図しないバグが発生するため。
	// 2. letやconstに比べて、varは巻き上げ時のバグを生み出しやすいため。
	// 巻き上げってなんやねん。。と思ったら、、
	// https://qiita.com/taiju_suzuki/items/49ed558bd837452353b8
	// https://qiita.com/39_isao/items/d9d80e98b5bd1938bc1d
	// 定数や変数の名前の付け方のルール
	// 使える文字は、英数字、＄、_　のみで数値から始めることはできない。
	// よくある間違いとして、-(ハイフン)を使ってしまうミスがあるので注意する。
	// JavaScriptでは大文字、小文字は厳密に区別されるので'myname'と'myName'は別のものとして扱われる。
	// また、予約語と呼ばれるJavaScriptが命令として持っているキーワードも使うことができない。
	// 例えば'const'も予約語なので'let const'という変数を定義することはできない。

	let price = 150;
	// =の意味は数学でいうところの等しいという意味ではなく、右の値を左の定数に割り当てるという意味になる。
	// このように値を割り当てることを、代入と呼ぶので用語として覚えておく。
	// 定数を使うことでプログラムが変更に強くなるというメリットがある。
	// 値段が変わった時に定数を定義しておくことで修正箇所を少なくし、ミスをしにくくなる。
	console.log(price * 140);
	console.log(price * 160);

	price = 170;

	console.log(price * 140);
	console.log(price * 160);
	// 定数と変数の使い分け方は、ある名前に割り当てた値がころころと変わると分かりづらいので、
	// なるべくconstを使いつつ、どうしても必要な時にletを使う方法が執られる。

	// もう少し詳しい変数を使った計算

	let nedan = 500;

	// nedan = nedan + 100;
	nedan += 100; // 上のコメントされた式と同じ意味を持つ　A. 500+100=600

	// nedan = nedan * 2;
	nedan *= 2; // 上のコメントと同じ意味を持つ　A. 600*2=1200

	// nedan = nedan + 1;
	// nedan += 1;
	nedan++; // 上のコメントと同じ意味を持つ　A. 1200+1=1201

	// price -= 1;
	nedan--; // 上のコメントと同じ意味を持つ　A. 1201-1=1200

	console.log(nedan);

	// javaScriptのデータ型

	// 文字列(String)ー'hello',"世界"
	// 数値(Number)ー5 4.3 -20 -1.8
	// UndefinedーUndefined
	// Nullーnull
	// 真偽値(Boolean)ーtrue false
	// オブジェクト(Object)ー{a:3, b:5}

	console.log(typeof 'hello');
	console.log(typeof 5);
	console.log(typeof true);
	console.log(typeof undefined);
	console.log(typeof null);

	// 数字からなる文字列を扱ってみよう

	console.log('5' * 3);
	console.log('5' + 3);
	console.log(parseInt('5', 10) + 3);

	console.log(parseInt('hello', 10)); //コンソールログではNaNとなる。
	// NaNとは、数値にしようとしたけどできなかった場合にこうした値が出てくる。

	//比較演算子を使ってみよう

	const a = 1200;

	console.log(a > 1000); //true 何々より大きいは>
	console.log(a < 1000); //false 何々より小さいは<
	console.log(a >= 1000); //true 何々より以上は>=
	console.log(a >= 1000); //false 何々以下は<=
	console.log(a === 1000); //false 何々と等しいは===
	console.log(a !== 1000); //true 何々と異なるは!==
	// 間違いやすい点として、比較する時は===, 代入する時は= なので区別する。

	console.log(Boolean(0));
	console.log(Boolean('hello'));

	// ifで条件分岐をしてみよう

	// 構文1）if (条件式) {
	// 	trueだったときの処理
	// }

	// 構文2）if (条件式A) {
	//  Aがtrueだったときの処理
	// } else if (条件式B) {
	//  AがfalseでBがtrueだったときの処理
	// } else {
	//  それ以外の場合の処理
	// }

	const score = 81;

	if (score >= 80) {
		console.log('Great!');
	}

	if (score >= 80) {
		console.log('Great!');
	} else if (score >= 60 ) {
		console.log('Good');
	} else {
		console.log('OK...');
	}
	// {}で囲った部分をブロックと呼ぶ、命令の終わりには；をつけるルールだが、命令がブロックで終わる場合には；をつけない。

	//条件演算子を使ってみよう
	const tokuten = 85;

	// if (tokuten >= 80) {
	// 	console.log('Great!');
	// } else if (score >= 60 ) {
	// 	console.log('Good');
	// } else {
	// 	console.log('OK...');
	// }

	tokuten >= 80 ? console.log('Great!') : console.log('OK...');
	// この構文は短く書けるという利点の一方で、場合によってはコードが読みにくくなるという欠点もあります。
	// 使用するときは読みやすさとのバランスを考えて使う

	//　論理演算子を使ってみよう

	const tensuu = 60;
	const name = 'taguti';

	// if (score >= 50) {
	// 	if (name === 'taguti') {
	// 		console.log('Good job!');
	// 	}
	// }

	// &&　なおかつ(ANDの論理演算子と呼ばれる)
	// ||　もしくは(ORの論理演算子と呼ばれる)
	// !　 〜ではない(NOTの論理演算子と呼ばれる)

	if (score >= 50 && name === 'taguti') {
		console.log('Good job!！');
	}

	// このように、論理演算子を使うと複雑な条件もスッキリ書くことができる

	// forを使ったループ処理を使ってみよう
	// helloと１０回表示させるにはどうしたらよいか
	for (let i = 1; i <= 10; i++) {
		// console.log('hello');
		// console.log('hello' + i);コンソールでは少しわかりづらいのでカウンターの値も処理をさせてみる
		console.log(`hello ${i}`);
	}
	// let i = 1,カウンターとして使う変数を宣言して初期化をする。iは1ずつ増やしながら再代入していくのでletを使用する。
	// i <= 10,iが1から10以下である間
	// iを1ずつ増やしながら次の処理をしてねと書く

	// `hello ${i}` テンプレートリテラルを使うにはシングルクォーテーションの代わりに｀バッククオートという記号を使う
	// バッククオートはshift + @ = ``で入力することができる。

	// whileを使ったループ処理をしよう
	// 指定した条件が満たされている間、特定の処理を繰り返すためにwhileを使用してみる
	// 例として、ゲームなどでHP、体力が100あるキャラクターがいて、体力がある間15ずつダメージを与える処理を書いていく

	let hp = 100;

	while (hp > 0) {
		console.log(`${hp} HP left!`);
		hp -= 15;
	}
	// HPが100から始まり、15ずつ減っていって10になった時に15引かれこの条件がfalseになるので処理が止まる。
	// while文は注意が必要で今回の'hp -= 15;'の条件に関する処理を書き忘れると、
	// HPはずっと０より大きいままになり無限ループに陥る。その場合、最悪ブラウザやPCの再起動などが必要になってしまう

	// continue,breakを使ってみよう
	// forやwhile文で特定の回だけ処理をスキップしたい、という場合を書いていく

	for (let i = 1; i <= 10; i++) {
		// if (i === 4) {
		if (i % 3 === 0) {
			continue;
		}
		console.log(i);
	}
	// i === 4 は4の時に処理をスキップする
	// iを3で割ったときの余が0かどうかで判定すれば良いので％演算子を使用する
	// continueはループを一回スキップするための命令だが、ループを途中で終了させたいときは'break'を使用する
	for (let i = 1; i <= 10; i++) {
		if (i === 4) {
			break;
		}
		console.log(i);
	}
	// iが4になったらbreakされそれ以降の処理は実行されない

	// 関数で処理をまとめてみよう

	//次のような文章が表示されるプログラムを書いていたとして、合間に広告を挟みたくなったとする
	//次のように同じコードが何度も出てくると、広告を変えたくなった時に全てを直す必要があり、修正漏れが発生する可能性がある。
	//このような場合に関数を使って処理をまとめてあげると良い。

	function showAd() {
		console.log('--------');
		console.log('---ad---');
		console.log('--------');
	}

	showAd();
	console.log('Tom is great!');
	console.log('Bob is great!');
	showAd();
	console.log('Steve is great!');
	console.log('Richard is great!');
	showAd();

	// functionというキーワードを書いて、これに処理につけたい名前を書く、今回はshowAにする。
	// これでshowAdという名前で呼び出すことができるようになったので呼び出したいところでshowAd()とすれば良い。
	// 関数で処理をまとめると、コードを書く量が減り、処理の内容を変更したくなった時にはfunctionの内容を修正すれば済む。