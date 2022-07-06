//変数
let unko = 'こんにちは';

//定数
const bigUnko = 'さあどうしようかな';

//配列
const haruto = ['メッシ','イニエスタ','シャビ','ブスケツ','プジョル'];

//ループ文
let index = 0;
while(index < haruto.length){ //=4
  // 繰り返したい命令
  console.log(haruto[index]);
  index++; //index = 5
}

//if / else
if(haruto.length > 6){
  console.log('バルセロナ！');
} else {
  console.log('バルサ！');
}

//関数
const test = (arg) => {
  //ここに実行したい命令を書く
  if(haruto.length > arg){
    console.log('レアル・マドリード！');
  } else {
    console.log('レアル！');
  }
};

//オブジェクト
const unko2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  goToilet: () => {
    console.log('Hello world!');
  }
};

document.getElementsByTagName('button')[1].addEventListener('click', ()=> {
  //命令を書く
  window.alert('atcoder難しいよね！');
});

document.getElementsByTagName('button')[2].addEventListener('click', ()=> {
    //命令を書く
    window.alert('３D制作できるパソコン欲しい！');
  });

document.getElementsByTagName('button')[3].addEventListener('click', ()=> {
    //命令を書く
    window.alert('AmazonとかAWSとかでインターン60ドルってすげ！');
  });