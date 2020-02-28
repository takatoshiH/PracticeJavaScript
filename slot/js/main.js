// パネルクラスの作成
class Panel {
  // コンストラクタ
  constructor() {
    const section = document.createElement('section');
    //パネルクラスの追加
    section.classList.add('panel');

    //イメージの挿入
    this.img = document.createElement('img');
    this.img.src = this.getRandomImage();

    this.timeoutId = undefined;

    //STOPボタン関連の処理
    this.stop = document.createElement('div');
    this.stop.textContent = 'STOP';

    //初期値はinactiveにしておく
    this.stop.classList.add('stop', 'inactive');

    //ボタンのイベントリスナーの作成
    this.stop.addEventListener('click', () => {
      //inactiveの場合は処理を止める
      if (this.stop.classList.contains('inactive')) {
        return;
      }
      //ボタンが押されるとinactiveにする
      this.stop.classList.add('inactive');

      //ローテーションを止める
      clearTimeout(this.timeoutId);

      //動いているパネルの数
      panelsLeft--;

      //すべてが止まった場合の処理
      if (panelsLeft === 0) {
        checkResult();
        spin.classList.remove('inactive');
        panelsLeft = 3;
      }
    });

    //sectionに２つの子要素を追加する
    section.appendChild(this.img);
    section.appendChild(this.stop);

    //mainにsection要素を追加する
    const main = document.querySelector('main');
    main.appendChild(section);
  }

  //定期的にランダムな画像を取得する部分
  getRandomImage() {
    const images = [
      'img/seven.png',
      'img/bell.png',
      'img/cherry.png',
    ];
    return images[Math.floor(Math.random() * images.length)];
  }

  //実際に回転させる部分
  spin() {
    this.img.src = this.getRandomImage();
    this.timeoutId = setTimeout(() => {
      this.spin();
    }, 50);
  }

  isUnmatched(p1, p2) {
    return this.img.src !== p1.img.src && this.img.src !== p2.img.src;
  }

  //画像が一致していない部分の処理
  unmatch() {
    this.img.classList.add('unmatched');
  }

  //画像が一致した時の処理
  activate() {
    this.img.classList.remove('unmatched');
    this.stop.classList.remove('inactive');
  }
}

function checkResult() {
  if (panels[0].isUnmatched(panels[1], panels[2])) {
    panels[0].unmatch();
  }
  if (panels[1].isUnmatched(panels[0], panels[2])) {
    panels[1].unmatch();
  }
  if (panels[2].isUnmatched(panels[0], panels[1])) {
    panels[2].unmatch();
  }
}

const panels = [
  new Panel(),
  new Panel(),
  new Panel(),
];

let panelsLeft = 3;

const spin = document.getElementById('spin');
spin.addEventListener('click', () => {
  if (spin.classList.contains('inactive')) {
    return;
  }
  spin.classList.add('inactive');

  panels.forEach(panel => {
    panel.activate();
    panel.spin();
  });
});