$('.carousel').carousel({
    interval: 2000
    })
    
    $(function(){
    $(".header").load('/sys/header.html');
    $(".footer").load('/sys/footer.html');
    $(".head").load('/sys/head.html');
    });
    
    //History&Awards JavaScript Start//
    ///////////////////////////////////

    //-----History Year Switch function start-----//
    //현재 display되는 게 뭔지 구별하는 전역변수
    var isHistoryYear1On = 1;
    var isHistroyYear2On = 0;
    var isHistoryYear3On = 0;

    //selection animation
    function doHisYear1Display(){
        var his1 = document.getElementById("historyYear1");
        var his2 = document.getElementById("historyYear2");
        var his3 = document.getElementById("historyYear3");
    
        var hisContainer1 = document.getElementById("historyContainer_1");
        var hisContainer2 = document.getElementById("historyContainer_2");
        var hisContainer3 = document.getElementById("historyContainer_3");

        isHistoryYear1On = 1;
        isHistroyYear2On = 0;
        isHistoryYear3On = 0;

        //his1의 background, font color 변경.
        his1.style.backgroundColor = "#b2c55f";
        his1.style.color = "#ffffff";
        //his2 and his3's background, font color change to default value
        his2.style.backgroundColor = "#ffffff";
        his2.style.color = "#111";
        his3.style.backgroundColor = "#ffffff";
        his3.style.color = "#111";

        hisContainer1.style.display = 'block';
        hisContainer2.style.display = 'none';
        hisContainer3.style.display = 'none';


    }

    function doHisYear2Display(){
        var his1 = document.getElementById("historyYear1");
        var his2 = document.getElementById("historyYear2");
        var his3 = document.getElementById("historyYear3");
    
        var hisContainer1 = document.getElementById("historyContainer_1");
        var hisContainer2 = document.getElementById("historyContainer_2");
        var hisContainer3 = document.getElementById("historyContainer_3");

        isHistoryYear1On = 0;
        isHistroyYear2On = 1;
        isHistoryYear3On = 0;

        //his2의 background, font color 변경.
        his2.style.backgroundColor = "#b2c55f";
        his2.style.color = "#ffffff";
        //his1 and his3's background, font color change to default value
        his1.style.backgroundColor = "#ffffff";
        his1.style.color = "#111";
        his3.style.backgroundColor = "#ffffff";
        his3.style.color = "#111";

        hisContainer1.style.display = 'none';
        hisContainer2.style.display = 'block';
        hisContainer3.style.display = 'none';

    }

    function doHisYear3Display(){
        var his1 = document.getElementById("historyYear1");
        var his2 = document.getElementById("historyYear2");
        var his3 = document.getElementById("historyYear3");
    
        var hisContainer1 = document.getElementById("historyContainer_1");
        var hisContainer2 = document.getElementById("historyContainer_2");
        var hisContainer3 = document.getElementById("historyContainer_3");

        isHistoryYear1On = 0;
        isHistroyYear2On = 0;
        isHistoryYear3On = 1;

        //his3의 background, font color 변경.
        his3.style.backgroundColor = "#b2c55f";
        his3.style.color = "#ffffff";
        //his1 and his2's background, font color change to default value
        his1.style.backgroundColor = "#ffffff";
        his1.style.color = "#111";
        his2.style.backgroundColor = "#ffffff";
        his2.style.color = "#111";

        hisContainer1.style.display = 'none';
        hisContainer2.style.display = 'none';
        hisContainer3.style.display = 'block';

    }

    //hover animation
    function mHistoryYear1Over(){
        var hisSelect = document.getElementById("historyYear1");
        if(isHistoryYear1On == 0){
            //마우스 올리면 컬러 변경.
            hisSelect.style.backgroundColor = "#b2c55f"
            hisSelect.style.color = "#ffffff"
        }
    }

    function mHistoryYear1Out(){
        var hisSelect = document.getElementById("historyYear1");
        if(isHistoryYear1On == 0){
            //default value로 변경.
            hisSelect.style.backgroundColor = "#ffffff"
            hisSelect.style.color = "#111";
        }
    }    

    function mHistoryYear2Over(){
        var hisSelect = document.getElementById("historyYear2");
        if(isHistroyYear2On == 0){
            //마우스 올리면 컬러 변경.
            hisSelect.style.backgroundColor = "#b2c55f"
            hisSelect.style.color = "#ffffff"
        }
    }

    function mHistoryYear2Out(){
        var hisSelect = document.getElementById("historyYear2");
        if(isHistroyYear2On == 0){
            //default value로 변경.
            hisSelect.style.backgroundColor = "#ffffff"
            hisSelect.style.color = "#111";
        }
    }  

    function mHistoryYear3Over(){
        var hisSelect = document.getElementById("historyYear3");
        if(isHistoryYear3On == 0){
            //마우스 올리면 컬러 변경.
            hisSelect.style.backgroundColor = "#b2c55f"
            hisSelect.style.color = "#ffffff"
        }
    }

    function mHistoryYear3Out(){
        var hisSelect = document.getElementById("historyYear3");
        if(isHistoryYear3On == 0){
            //default value로 변경.
            hisSelect.style.backgroundColor = "#ffffff"
            hisSelect.style.color = "#111";
        }
    }  

    //-----History Year Switch function end-----//

    //-----History&Awards Switch function start-----//
     
    var isHistoryOn = 1;

    function doAwardDisplay(){
        var his = document.getElementById("historyContainer");
        var award = document.getElementById("awardContainer");
    
        var hisSelect = document.getElementById("hisSelect");
        var awardSelect = document.getElementById("awardsSelect");

        award.style.display = 'block';
        his.style.display = 'none';

        awardSelect.style.color = "rgb(172, 128, 34)";
        awardSelect.style.borderBottomColor = "#b2c55f";
        hisSelect.style.color = "rgb(29, 28, 28)";
        hisSelect.style.borderBottomColor = "#5b678d";
        
        isHistoryOn = 0;

    }
    
    function doHistoryDisplay(){
        var his = document.getElementById("historyContainer");
        var award = document.getElementById("awardContainer");

        var hisSelect = document.getElementById("hisSelect");
        var awardSelect = document.getElementById("awardsSelect");

        award.style.display = 'none';
        his.style.display = 'block';

        awardSelect.style.color = "rgb(29, 28, 28)";
        awardSelect.style.borderBottomColor = "#5b678d";
        hisSelect.style.color = "rgb(172, 128, 34)";
        hisSelect.style.borderBottomColor = "#b2c55f";
    
        isHistoryOn = 1;
    }

    function mHistoryOver(){
        var hisSelect = document.getElementById("hisSelect");
        if(isHistoryOn == 0){
            hisSelect.style.color = "rgb(172, 128, 34)";
            hisSelect.style.borderBottomColor = "#b2c55f";
        }
    }

    function mHistoryOut(){
        var hisSelect = document.getElementById("hisSelect");
        if(isHistoryOn == 0){
            hisSelect.style.color = "rgb(29, 28, 28)";
            hisSelect.style.borderBottomColor = "#5b678d";
        }
    }

    function mAwardsOver(){
        var awardSelect = document.getElementById("awardsSelect");
        if(isHistoryOn == 1){
            awardSelect.style.color = "rgb(172, 128, 34)";
            awardSelect.style.borderBottomColor = "#b2c55f";
        }        
    }

    function mAwardsOut(){
        var awardSelect = document.getElementById("awardsSelect");
        if(isHistoryOn == 1){
            awardSelect.style.color = "rgb(29, 28, 28)";
            awardSelect.style.borderBottomColor = "#5b678d";
        }
    }
    
    //------Hisory&Awards Switch function end------//

    //History&Awards JavaScript End//
    /////////////////////////////////