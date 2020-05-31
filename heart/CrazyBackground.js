
document.addEventListener("keydown", function keyPush(event){
    switch (event.code) {
        case "Space":
            if(flag!=2){
                flag=2;
            } else {
                flag = 3;
            }
        break;
    }
});
  
function RespondClick(){ 
    flag = 1;
};

function DBRespondClick(){ 
        flag = 0;
};


var intervalo = window.setInterval(function() {
    if(flag == 2){
    // cor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    // document.body.style.backgroundColor = cor;
    
    cor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    document.getElementById("first").style.backgroundColor = cor;
    
    cor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    document.getElementById("second").style.backgroundColor = cor;
    
    cor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    document.getElementById("third").style.backgroundColor = cor;

    cor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    document.getElementById("fourth").style.backgroundColor = cor;

    cor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    document.getElementById("fifth").style.backgroundColor = cor;

    cor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    document.getElementById("sixth").style.backgroundColor = cor;

    
    }

    if(flag == 1){
            function colors(){
                choose = Math.floor(Math.random() * 10) + 1; 

                if(choose == 1){
                    color = "invert(9%) sepia(91%) saturate(7047%) hue-rotate(2deg) brightness(100%) contrast(125%)"; // red
                }

                if(choose == 2){
                    color = "invert(78%) sepia(46%) saturate(3129%) hue-rotate(125deg) brightness(100%) contrast(101%)"; // blue
                }

                if(choose == 3){
                    color = "invert(94%) sepia(69%) saturate(2120%) hue-rotate(11deg) brightness(110%) contrast(110%)"; //yellow
                }

                if(choose == 4){
                    color = "invert(55%) sepia(70%) saturate(3301%) hue-rotate(86deg) brightness(110%) contrast(130%)"; //green
                }

                if(choose == 5){
                    color =  "invert(71%) sepia(39%) saturate(5487%) hue-rotate(0deg) brightness(103%) contrast(105%)"; //orange
                }

                if(choose == 6){
                    color =  "invert(71%) sepia(12%) saturate(1652%) hue-rotate(304deg) brightness(97%) contrast(110%)"; //pink
                }

                if(choose == 7){
                    color =  "invert(23%) sepia(76%) saturate(5017%) hue-rotate(273deg) brightness(107%) contrast(118%)"; //purple
                }

                if(choose == 8){
                    color =  "invert(32%) sepia(3%) saturate(22%) hue-rotate(66deg) brightness(95%) contrast(85%;"; //gray
                }

                if(choose == 9){
                    color =  "invert(8%) sepia(95%) saturate(7074%) hue-rotate(242deg) brightness(100%) contrast(132%)"; // dark blue
                }

                if(choose == 10){
                    color =  "invert(87%) sepia(37%) saturate(4528%) hue-rotate(6deg) brightness(100%) contrast(104%)"; // medium yellow
                }

                return color;
            }
            

            document.getElementById("1").style.webkitFilter = colors();

            document.getElementById("2").style.webkitFilter = colors();

            document.getElementById("3").style.webkitFilter = colors();

            document.getElementById("4").style.webkitFilter = colors();

            document.getElementById("5").style.webkitFilter = colors();

            document.getElementById("6").style.webkitFilter = colors();
    }

}, 500);

