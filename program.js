//====================================
//
//超簡単職務経歴書エディタ
//Toshihide Iizuka
//
//2021/03/17
//
//====================================

//Main
//読み取り配列の準備
var resumedata = new Array();
        
function init() {
    var initdata = "1,2018年4月~2021年3月,飯塚開発社,システム開発,総務省のシステム開発・設計　担当：設計/開発,Mac/Swift/XCode,開発/設計,3000万円\n2,2011年4月~2018年3月,飯塚出版,出版会社,出版社の印刷データの管理など,Illustlator/Photoshop,出版物管理,300万円";
    //var initotherdata = "■ 保有資格 なし\n■ テクニカルスキル\nMac、Windows、Linuxなど アプリ開発に必要なスキル(Objective-C、Swiftなど) デザインスキル(Adobe Photoshop、SketchAppなど) サーバ設定から運用経験(Web、Ftp、Mail、Apache、DBなど) Webサイト制作に必要なスキル(Html、JavaScript、Cなど) Web開発に必要なスキル(Html、Perlなど) ドキュメント作成(Word、Excel、Poweroint)\n■ 得意分野 設計・開発・企画・交渉、iOS分野は得に強いです\n■ 趣味 音楽制作、作曲、写真撮影など\n■ 自己PR 私はこれまで一貫して自己目標実現のために未知への領域へ踏み込み続け、挑戦を続けてきました。 IT関連業種への転職を志して以来様々なコンピューターに関わる仕事に携わりiOS(iPhone、iPadなど)向けシステム開発に携わっておりましたが近年では様々なシステム開発、特に総務省の開発にも招かれた経験は大きいかと存じます。また、これまで様々な業態での仕事経験の中でいずれの場所・場面でも積極的に行動して職務を遂行し、良い結果をもたらすよう努めてまいりました。\n仕事以外にも積極的な活動を行う中で勉強会の主催やアプリのリリースなども多数行ってまいりました。また企業主催のハッカソンなどにも参加し度々リーダーを担当し、主にメンバーをまとめる力や、成果へとつなげる力、目標の実現について事実上でも単なる偶然とは言い難い数々の実績を残してきていると自負しております。また、熱意と実現力、実行力においては誰にも負けないエネルギーを持っていると自負しております。\n近年はより質の高い開発を目指すためにデザイン分野への取り組みやコンサルタントやアドバイザーとしても活動しております。企業分析を元に 適切な戦略仮説を立案し、それに基づく戦略、サービス、システム、デザインの提案と分析の結果から一貫して総合的に考えることができる点で強みがあると思っています。なおかつ、趣味と仕事が一致しておりものを生み出すことが大変好きです。将来的にはより社会に貢献できるサービスの立案や実現がしたいと考えています。\n今後はこれまでの経験を活かし、御社へ貢献し私も共々一層の成長と活躍ができるよう取り組んで参りたいと考えております。何卒よろしくお願い致します。";
    
    var edit = document.getElementById("edit");
    var sample = document.getElementById("sample");
    //var edit2 = document.getElementById("edit2");
    edit.value = initdata;
    sample.value = initdata;
    //edit2.value = initotherdata;
}
        
function drawresume() {
    var name = document.getElementById("name");
    var edit = document.getElementById("edit");

    //本日
    var date = dateToFormatString(new Date(), '%YYYY%年%MM%月%DD%日');
    
    //データ初期化
    resumedata = new Array();
    
    if ( name.value != "" && edit.value != "" ) {
        
        //info表示
        info(name.value, date);
        
        //データ取得
        var resArray = edit.value.split("\n");

        //1行目を無視して読み込み
        for ( var y=0; y<resArray.length; y++ ) {
            resumedata.push(resArray[y]);
        }
        
        //概要表示
        about();
        
        //詳細表示
        description();
        
        return;
    }
    
    alert("実行できません");
}

function info(name, date) {
    
    //テキスト生成
    var html = date + "<br/>";
    html = html + name + "<br/>";

    var info = document.getElementById("info");
    info.innerHTML = html;
}
        
function about() {
    //表示
    var html = "<table>";
     html = html + "<tr><th>期間</th><th>会社名</th><th>職務概要</th><th>年収など</th></tr>";
    
    //行の描画
    for ( var y=0; y<resumedata.length; y++ ) {
        var data = resumedata[y].split(",");
        
        html = html + "<tr>";
        
        //列の描画
        //1~3行目を表示する
        for ( var x=0; x<data.length; x++ ) {
            
            switch (x) {
                case 1:
                case 2:
                case 3:
                case 7:
                    var obj = data[x].replace( /¥改行¥/g , '<br/>');
                    html = html + "<td>" + obj + "</td>";
                    break;
                case 4:
                case 5:
                case 6:
                    break;
            }
        }
        html = html + "</tr>";
    }
    
    html = html + "</table>";
    
    var aboutel = document.getElementById("about");
    aboutel.innerHTML = html;
}
        
function description() {
    //表示
    var html = "<table>";

     html = html + "<tr><th>期間</th><th>会社名</th><th>担当業務(プロジェクト内容)</th><th>開発環境等</th><th>役割</th></tr>";

    //行の描画
    for ( var y=0; y<resumedata.length; y++ ) {
        var data = resumedata[y].split(",");

        html = html + "<tr>";

        //列の描画
        //1~2行目,4~6行目を表示する
        for ( var x=1; x<data.length; x++ ) {
            var obj = data[x].replace( /¥改行¥/g , '<br/>');
            switch (x) {
                case 1:
                case 2:
                case 4:
                    html = html + "<td>" + obj + "</td>";
                    break;
                case 5:
                case 6:
                    obj = obj.replace( /\//g , '<br/>');
                    html = html + "<td>" + obj + "</td>";
                case 0:
                case 3:
                case 7:
                    break;
            }
        }

        html = html + "</tr>";
    }

    html = html + "</table>";

    var descriptionel = document.getElementById("description");
    descriptionel.innerHTML = html;
}
     

var cacheotherhtml = "";
function drawother() {    
    var edit2 = document.getElementById("edit2");
    var other = document.getElementById("other");
    
    //キャッシュに記憶する
    cacheotherhtml = other.innerHTML;
    
    other.innerHTML = "<p>" + edit2.value + "</p><button onclick='draweditother();'>編集に戻る</button>";
}
        
function draweditother() {
    var other = document.getElementById("other");
    other.innerHTML = cacheotherhtml;
}
  
function removehtml(str) {
    return str.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'');
}
        
function delayedCall(second, callBack){
    setTimeout(callBack, second * 1000);
}

function dateToFormatString(date, fmt, locale, pad) {
    // %fmt% を日付時刻表記に。
    // 引数
    //  date:  Dateオブジェクト
    //  fmt:   フォーマット文字列、%YYYY%年%MM%月%DD%日、など。
    //  locale:地域指定。デフォルト（入力なし）の場合はja-JP（日本）。現在他に対応しているのはen-US（英語）のみ。
    //  pad:   パディング（桁数を埋める）文字列。デフォルト（入力なし）の場合は0。
    // 例：2016年03月02日15時24分09秒
    // %YYYY%:4桁年（2016）
    // %YY%:2桁年（16）
    // %MMMM%:月の長い表記、日本語では数字のみ、英語ではMarchなど（3）
    // %MMM%:月の短い表記、日本語では数字のみ、英語ではMar.など（3）
    // %MM%:2桁月（03）
    // %M%:月（3）
    // %DD%:2桁日（02）
    // %D%:日（2）
    // %HH%:2桁で表した24時間表記の時（15）
    // %H%:24時間表記の時（15）
    // %h%:2桁で表した12時間表記の時（03）
    // %h%:12時間表記の時（3）
    // %A%:AM/PM表記（PM）
    // %A%:午前/午後表記（午後）
    // %mm%:2桁分（24）
    // %m%:分（24）
    // %ss%:2桁秒（09）
    // %s%:秒（9）
    // %W%:曜日の長い表記（水曜日）
    // %w%:曜日の短い表記（水）
    var padding = function(n, d, p) {
        p = p || '0';
        return (p.repeat(d) + n).slice(-d);
    };
    var DEFAULT_LOCALE = 'ja-JP';
    var getDataByLocale = function(locale, obj, param) {
        var array = obj[locale] || obj[DEFAULT_LOCALE];
        return array[param];
    };
    var format = {
        'YYYY': function() { return padding(date.getFullYear(), 4, pad); },
        'YY': function() { return padding(date.getFullYear() % 100, 2, pad); },
        'MMMM': function(locale) {
            var month = {
                'ja-JP': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                'en-US': ['January', 'February', 'March', 'April', 'May', 'June',
                          'July', 'August', 'September', 'October', 'November', 'December'],
            };
            return getDataByLocale(locale, month, date.getMonth());
        },
        'MMM': function(locale) {
            var month = {
                'ja-JP': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                'en-US': ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June',
                          'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
            };
            return getDataByLocale(locale, month, date.getMonth());
        },
        'MM': function() { return padding(date.getMonth()+1, 2, pad); },
        'M': function() { return date.getMonth()+1; },
        'DD': function() { return padding(date.getDate(), 2, pad); },
        'D': function() { return date.getDate(); },
        'HH': function() { return padding(date.getHours(), 2, pad); },
        'H': function() { return date.getHours(); },
        'hh': function() { return padding(date.getHours() % 12, 2, pad); },
        'h': function() { return date.getHours() % 12; },
        'mm': function() { return padding(date.getMinutes(), 2, pad); },
        'm': function() { return date.getMinutes(); },
        'ss': function() { return padding(date.getSeconds(), 2, pad); },
        's': function() { return date.getSeconds(); },
        'A': function() {
            return date.getHours() < 12 ? 'AM' : 'PM';
        },
        'a': function(locale) {
            var ampm = {
                'ja-JP': ['午前', '午後'],
                'en-US': ['am', 'pm'],
            };
            return getDataByLocale(locale, ampm, date.getHours() < 12 ? 0 : 1);
        },
        'W': function(locale) {
            var weekday = {
                'ja-JP': ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
                'en-US': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            };
            return getDataByLocale(locale, weekday, date.getDay());
        },
        'w': function(locale) {
            var weekday = {
                'ja-JP': ['日', '月', '火', '水', '木', '金', '土'],
                'en-US':  ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
            };
            return getDataByLocale(locale, weekday, date.getDay());
        },
    };
    var fmtstr = ['']; // %%（%として出力される）用に空文字をセット。
    Object.keys(format).forEach(function(key) {
        fmtstr.push(key); // ['', 'YYYY', 'YY', 'MMMM',... 'W', 'w']のような配列が生成される。
    })
    var re = new RegExp('%(' + fmtstr.join('|') + ')%', 'g');
    // /%(|YYYY|YY|MMMM|...W|w)%/g のような正規表現が生成される。
    var replaceFn = function(match, fmt) {
    // match には%YYYY%などのマッチした文字列が、fmtにはYYYYなどの%を除くフォーマット文字列が入る。
        if(fmt === '') {
            return '%';
        }
        var func = format[fmt];
        // fmtがYYYYなら、format['YYYY']がfuncに代入される。つまり、
        // function() { return padding(date.getFullYear(), 4, pad); }という関数が代入される。
        if(func === undefined) {
            //存在しないフォーマット
            return match;
        }
        return func(locale);
    };
    return fmt.replace(re, replaceFn);
}