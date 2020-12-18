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

	