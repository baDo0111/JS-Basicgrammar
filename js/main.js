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