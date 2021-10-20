var lista = [];
lista.push("imagens/imagem10.jpeg");
lista.push("imagens/imagem1.JPG");
lista.push("imagens/imagem2.JPG");
lista.push("imagens/imagem3.JPG");
lista.push("imagens/imagem4.JPG");
lista.push("imagens/imagem5.JPG");
lista.push("imagens/imagem6.JPG");
lista.push("imagens/imagem7.jpeg");
lista.push("imagens/imagem8.jpeg");
lista.push("imagens/imagem9.jpeg");

var lista2 = [];
lista2.push("imagens/imagem1.JPG");
lista2.push("imagens/imagem2.JPG");
lista2.push("imagens/imagem3.JPG");
lista2.push("imagens/imagem4.JPG");
lista2.push("imagens/imagem5.JPG");
lista2.push("imagens/imagem6.JPG");
lista2.push("imagens/imagem7.jpeg");
lista2.push("imagens/imagem8.jpeg");
lista2.push("imagens/imagem9.jpeg");
lista2.push("imagens/imagem10.jpeg");

var lista3 = [];
lista3.push("imagens/imagem2.JPG");
lista3.push("imagens/imagem3.JPG");
lista3.push("imagens/imagem4.JPG");
lista3.push("imagens/imagem5.JPG");
lista3.push("imagens/imagem6.JPG");
lista3.push("imagens/imagem7.jpeg");
lista3.push("imagens/imagem8.jpeg");
lista3.push("imagens/imagem9.jpeg");
lista3.push("imagens/imagem10.jpeg");
lista3.push("imagens/imagem1.JPG");



var lista4 = [];
lista4.push("10/10");
lista4.push("1/10");
lista4.push("2/10");
lista4.push("3/10");
lista4.push("4/10");
lista4.push("5/10");
lista4.push("6/10");
lista4.push("7/10");
lista4.push("8/10");
lista4.push("9/10");

var lista5 = [];
lista5.push("1/10");
lista5.push("2/10");
lista5.push("3/10");
lista5.push("4/10");
lista5.push("5/10");
lista5.push("6/10");
lista5.push("7/10");
lista5.push("8/10");
lista5.push("9/10");
lista5.push("10/10");

var lista6 = [];
lista6.push("2/10");
lista6.push("3/10");
lista6.push("4/10");
lista6.push("5/10");
lista6.push("6/10");
lista6.push("7/10");
lista6.push("8/10");
lista6.push("9/10");
lista6.push("10/10");
lista6.push("1/10");


var i=0;
var j=0;
var k=0;
var l=0;
var m=0;
var n=0;

function avancar(nomeId){
    if(i==9 && j==9 && k==9 && l==9 && m==9 && n==9){
        i = lista.length-10;
        j = lista2.length-10;
        k = lista3.length-10;
        l = lista4.length-10;
        m = lista5.length-10;
        n = lista6.length-10;

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