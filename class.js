//クラス宣言
class Rectagle {
  //インスタンスのプロパティはクラスメソッドの中で定義しなければならない
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

//ゲッター
  get area() {
    return this.clacArea();
  }

  //メソッド
  calcArea() {
    return this.height * this.width;
  }

  //静的メソッド
  //静的メソッドはクラスのインスタンス化なしで呼ばれ、インスタンス化されているとよぶことがでない
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const square = new Rectagle(10, 10);
console.log(square.area);

//コンストラクタ
//classによって生成されるオブジェクトの生成、初期化を行う特別なメソッド