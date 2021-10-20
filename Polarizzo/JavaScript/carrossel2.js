var lista = [];
lista.push("videos/video1.mov");
lista.push("videos/video2.mp4");
lista.push("videos/video3.mp4");

var lista2 = [];
lista2.push("videos/video2.mp4");
lista2.push("videos/video3.mp4");
lista2.push("videos/video1.mov");

var lista3 = [];
lista3.push("videos/video3.mp4");
lista3.push("videos/video1.mov");
lista3.push("videos/video2.mp4");

var lista4 = [];
lista4.push("Caixa Luz");
lista4.push("Polaroids");
lista4.push("Memórias");

var lista5 = [];
lista5.push("Polaroids");
lista5.push("Memórias");
lista5.push("Caixa Luz");

var lista6 = [];
lista6.push("Memórias");
lista6.push("Caixa Luz");
lista6.push("Polaroids");

var i=0;
var j=0;
var k=0;
var l=0;
var m=0;
var n=0;

function avancar(nomeId){
    if(i==2 && j==2 && k==2 && l==2 && m==2 && n==2){
        i = lista.length-3;
        j = lista2.length-3;
        k = lista3.length-3;
        l = lista4.length-3;
        m = lista5.length-3;
        n = lista6.length-3;

    }else{
        i++;
        j++;
        k++;
        l++;
        m++;
        n++;
    }
    document.getElementById("iTela1").src = lista[i];
    document.getElementById("iTela2").src = lista2[j];
    document.getElementById("iTela3").src = lista3[k];
    document.getElementById("iParagrafo1").innerHTML = lista4[l];
    document.getElementById("iParagrafo2").innerHTML = lista5[m];
    document.getElementById("iParagrafo3").innerHTML = lista6[n];
    document.getElementById("ibot1").style.transform = "scale(0.95,0.95)";
    document.getElementById("ibot2").style.transform = "scale(0.95,0.95)";
    document.getElementById("ibot1").style.transitionDuration = "300ms";
    document.getElementById("ibot2").style.transitionDuration = "300ms";
}

function voltar(nomeId){
    if(i==0 && j==0 && k==0 && l==0 && m==0 && n==0){
        i = lista.length-1;
        j = lista2.length-1;
        k = lista3.length-1;
        l = lista4.length-1;
        m= lista5.length-1;
        n = lista6.length-1;
    }else{
        i--;
        j--;
        k--;
        l--;
        m--;
        n--;
    }
    document.getElementById("iTela1").src = lista[i];
    document.getElementById("iTela2").src = lista2[j];
    document.getElementById("iTela3").src = lista3[k];
    document.getElementById("iParagrafo1").innerHTML = lista4[l];
    document.getElementById("iParagrafo2").innerHTML = lista5[m];
    document.getElementById("iParagrafo3").innerHTML = lista6[n];
    document.getElementById("ibot1").style.transform = "scale(0.95,0.95)";
    document.getElementById("ibot2").style.transform = "scale(0.95,0.95)";
    document.getElementById("ibot1").style.transitionDuration = "300ms";
    document.getElementById("ibot2").style.transitionDuration = "300ms";
}

function mudarCorSair(nomeId){
    let aux = document.getElementById(nomeId).innerHTML;
    document.getElementById(nomeId).style.backgroundColor = "rgb(255, 255, 255)";
    document.getElementById(nomeId).style.border = "2px solid rgb(255, 255, 255)";
    document.getElementById(nomeId).style.transitionDuration = "700ms";
    document.getElementById(nomeId).innerHTML = aux;
    document.getElementById(nomeId).style.transform = "scale(1,1)";
}


function mudarCorPassar(nomeId){
    let aux = document.getElementById(nomeId).innerHTML;
    document.getElementById(nomeId).style.backgroundColor = "rgb(228, 188, 45)";
    document.getElementById(nomeId).style.border = "2px solid rgb(228, 188, 45)";
    document.getElementById(nomeId).style.transitionDuration = "700ms";
    document.getElementById(nomeId).innerHTML = aux;
}