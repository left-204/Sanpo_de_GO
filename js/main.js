//APIキーの設定
let aKey = "40a02906910cd5b4d5bd87115f778b6db6b4c5bd096e6754885d54e1c468975a";
let cKey = "0677328ab255d58390710d47771195e531a67aaba111c13d6918e8cb8e3d1499";
//SDKの初期化
let ncmb = new NCMB(aKey,cKey);

function pushButton(){
    let MessageClass = ncmb.DataStore("MessageClass");
    let messageClass = new MessageClass();
    messageClass.set("message","ボタンが").save();
}

let fjct_latitude = 35.6665869;
let fjct_longitude = 139.76558690000002;
let fjct = new ncmb.GeoPoint(fjct_latitude,fjct_longitude);
/*
let Station = ncmb.DataStore("Station");
Station.withinKilometers("geoPoint",fjct,1)
       .fetchAll()
       .then(function(results){
           console.log(JSON.stringify(results));
            let TestClass2 = ncmb.DataStore("TestClass2");
            let testClass2 = new TestClass2();
            testClass2.set("message",results)
                        .save()
                        .then(function(object){
                            alert("保存成功:"+ JSON.stringify(object));
                        })
                        .catch(function(error){
                            alert("保存失敗:" + error + "," + JSON.stringify(error));
                        });
       });

*/