$('.carousel').carousel({
    interval: 2000
    })
    
    $(function(){
    $(".header").load('/sys/header.html');
    $(".footer").load('/sys/footer.html');
    $(".head").load('/sys/head.html');
    });
    
    //-----Hisory&Awards Switch function start-----//
     
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