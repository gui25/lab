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
    document.getElementById("left-up").style.backgroundColor = cor;
    
    cor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    document.getElementById("right-up").style.backgroundColor = cor;

    cor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    document.getElementById("left-down").style.backgroundColor = cor;
    
    cor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    document.getElementById("right-down").style.backgroundColor = cor;

    
    }
}, 500);