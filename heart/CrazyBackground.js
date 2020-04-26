document.addEventListener("click", function(){
    flag = 1;
});
document.addEventListener("dblclick", function(){
    flag = 0;
});

var intervalo = window.setInterval(function() {
    if(flag == 1){
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
}, 500);