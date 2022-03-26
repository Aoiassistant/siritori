/*=====================================================================================*/
/*しりとりモード
/*=====================================================================================*/

var Gojuon;
Gojuon = 'あ/い/う/え/お/か/き/く/け/こ/さ/し/す/せ/そ/な/に/ぬ/ね/の/は/ひ/ふ/へ/ほ/ま/み/む/め/も/';
Gojuon += 'や/ゆ/よ/ら/り/る/れ/ろ/わ/を';
var GojuonArr = Gojuon.split("/");

var siritoriWord = {
    ['あ']: 'あひる', ['い']: 'いか🦑', ['う']: 'うさぎ', ['え']: 'えんとつ', ['お']: 'おこのみやき',
    ['か']: 'かに', ['き']: 'きく', ['く']: 'くり', ['け']: 'けんだま', ['こ']: 'ころっけ',
    ['さ']: 'さいふ', ['し']: 'しらす', ['す']: 'すいか', ['せ']: 'せんせい', ['そ']: 'そり',
    ['た']: 'たたみ', ['ち']: 'ちーず', ['つ']: 'つみき', ['て']: 'てにす', ['と']: 'とけい',
    ['な']: 'なまえ', ['に']: 'にぼし', ['ぬ']: 'ぬいぐるみ', ['ね']: 'ねこ', ['の']: 'のこぎり',
    ['は']: 'はさみ', ['ひ']: 'ひとで', ['ふ']: 'ふうしゃ', ['へ']: 'へみず', ['ほ']: 'ほっとどっぐ🌭',
    ['ま']: 'まり', ['み']: 'みく', ['む']: 'むし', ['め']: 'めだか', ['も']: 'もも',
    ['や']: 'やきとり', ['ゆ']: 'ゆでたまご', ['よ']: 'ようかい',
    ['ら']: 'らっこ', ['り']: 'りんご', ['る']: 'るーぺ', ['れ']: 'れんげ(△)', ['ろ']: 'ろば🐎',
    ['わ']: 'わに', ['を']: 'お(を)に',
    ['が']: 'がむ', ['ぎ']: 'ぎんこう', ['ぐ']: 'ぐるめ', ['げ']: 'げーむ', ['ご']: 'ごま',
    ['ざ']: 'ざいす', ['じ']: 'じきゅうそう', ['ず']: 'ずこう', ['ぜ']: 'ぜりー', ['ぞ']: 'ぞう',
    ['だ']: 'だんご', ['ぢ']: 'ぢらー🦑ち', ['づ']: 'づんだもち', ['で']: 'でーと', ['ど']: 'どみの',
    ['ば']: 'ばなな', ['び']: 'びんてーじぎたー🎸', ['ぶ']: 'ぶちょう', ['べ']: 'べーす🎸', ['ぼ']: 'ぼーかろいど',
    ['ぱ']: 'ぱんつ💛', ['ぴ']: 'ぴーなっつ', ['ぷ']: 'ぶっちょ', ['ぺ']: 'ぺこら', ['ぽ']: 'ぽにーてーるq(≧▽≦q)'
};

var siritoriWord2 = {
    ['あ']: 'あーと', ['い']: 'いんこ', ['う']: 'うなぎ', ['え']: 'えび', ['お']: 'おむらいす😍',
    ['か']: 'かさご', ['き']: 'きむち', ['く']: 'くすり', ['け']: 'けいと', ['こ']: 'ここあ☕',
    ['さ']: 'さくら', ['し']: 'しまうま', ['す']: 'すし', ['せ']: 'せいと', ['そ']: 'そうじき',
    ['た']: 'たにし', ['ち']: 'ちーずはっとっぐ', ['つ']: 'つらら', ['て']: 'てんと', ['と']: 'といれ',
    ['な']: 'ななし', ['に']: 'にるばぁーな', ['ぬ']: 'ぬま', ['ね']: 'ねんど', ['の']: 'のり',
    ['は']: 'はと', ['ひ']: 'ひる', ['ふ']: 'ふうすい', ['へ']: 'へび', ['ほ']: 'ほっとあいす🌭',
    ['ま']: 'まる', ['み']: 'みみずく', ['む']: 'むさし', ['め']: 'めるる', ['も']: 'もか',
    ['や']: 'やっぱりココアはもりなが', ['ゆ']: 'ゆーりんち', ['よ']: 'よるしか',
    ['ら']: 'らいばる', ['り']: 'りーんふぉーす', ['る']: 'るる', ['れ']: 'れむ(△)', ['ろ']: 'ろうそく🕯',
    ['わ']: 'わたがし', ['を']: 'をたく',
    ['が']: 'がいちゅう', ['ぎ']: 'ぎんざ', ['ぐ']: 'ぐんま', ['げ']: 'げる', ['ご']: 'ごりら',
    ['ざ']: 'ざこう', ['じ']: 'じむ', ['ず']: 'ずり', ['ぜ']: 'ぜうす', ['ぞ']: 'ぞぞ',
    ['だ']: 'だいち', ['ぢ']: 'ぢらーちのなか', ['づ']: 'づんだ', ['で']: 'でーとあらいぶ', ['ど']: 'どみのぴざ',
    ['ば']: 'ばばろあ🍰', ['び']: 'びーる🍺', ['ぶ']: 'ぶし', ['べ']: 'べむ🎸', ['ぼ']: 'ぼかろ',
    ['ぱ']: 'ぱみゅぱみゅ💛', ['ぴ']: 'ぴすたちお', ['ぷ']: 'ぷーま', ['ぺ']: 'ぺる', ['ぽ']: 'ぽぷらq(≧▽≦q)'
};
// var siritoriWord = {['あ']: 'あひる'}; 

//ポストテキスト
var postText = "";
var lastText = "";
var lastName = "";

var siritorimode = false;
function siritori() {
    /*=====================================================================================*/
    //設定諸々
    var mode = 0;
    var textarea = document.getElementsByTagName('textarea')[mode];
    try { while (document.getElementsByClassName('dummy')[0].remove()); } catch (e) { }

    //自分のユーザーネームを取得
    var myName = document.getElementsByClassName('profname')[0].textContent;

    //文言の取得
    var talkItem = document.getElementById('talks').getElementsByClassName('body');
    var talklist = Array.from(talkItem);
    var talktext = talklist[0].innerText;

    console.log(siritorimode);
    //ユーザー名の取得
    var talks = document.getElementById('talks').getElementsByTagName('dl');
    var talkUser = Array.from(talks);
    var talkName = talkUser[0].querySelector('dt').textContent;

    //入退出ユーザー名の取得
    var InOutUserName = $('#talks div:first').text();
    var InUserName = InOutUserName.replace('さんが入室しました', '').replace('ーー ', '');
    var OutUserName = InOutUserName.replace('さんが退室しました', '').replace('ーー ', '');

    //入室・退室時に一時的に二重投稿防止を解除
    if (InOutUserName.startsWith('ーー ')) {
        lastInOutUserName = false;
    }

    //自分のレスに反応しないようにする。二重投稿防止用
    if (talkName == myName && lastInOutUserName) {
        return;
    }
    console.log(siritorimode + 'です');

    console.log(talkName + 'と' + myName);
    console.log(talklist);

    postText = "";


    // ====================================================================================*/
    console.log('しりとりモード' + siritorimode);
    //しりとりモードがTRUEの場合しりとりをする
    if (siritorimode) {
        //メッセージ語尾の文字を取得
        endStr = talktext.slice(-1);
        // console.log(siritoriWord[endstr] + '語尾');
        console.log(endStr + '語尾');
        console.log(siritoriWord[endStr] + '語尾');
        console.log(siritoriWord[endStr] + '存在チェック');
        //しりとりの結果を返信
        if (siritoriWord[endStr]) {
            console.log(siritoriWord[endStr] + 'wrwrwfrク');
            postText = siritoriWord[endStr];
            console.log('OK!!' + postText);
        } else if (endStr == 'ん') {
            postText = 'ん で終わったからしりとり終了～\nしりとりモードを終了するよ';
            siritorimode = false;
        } else {
            postText = talkName + 'さん、ひらがなで入力してね';
        }

        //一つ前に投稿した内容と被る場合はこちらを使用する
        if (siritoriWord[endStr] && (lastText == postText)) {
            postText = siritoriWord2[endStr];
        }
    } else {
        //どの条件にも満たされない場合はここの文言が返信としてPOSTされる
        postText = '【しりとりSTART】でしりとりモードを開始するよ！\n【しりとりEND】でしりとりモードを終了するよ！文字はひらがなで入力してね';
    }

    console.log('しりとりモード' + talktext);
    if (talktext == 'しりとりSTART') {
        siritorimode = true;
        postText = 'しりとりを開始するよ';
    } else if (talktext == 'しりとりEND') {
        siritorimode = false;
        postText = 'しりとりを終了するよ';
    }

    textarea.value = postText;

    //前回投稿したメッセージの場合POSTしない
    if (lastText != postText && lastName != talkName) {
        setInterval(document.getElementsByName('post')[mode].click(), 150);
        lastText = postText;
        lastInOutUserName = true;
    } else {
        textarea.value = "";
    }

}
