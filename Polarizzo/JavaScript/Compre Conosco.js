function verificarNome(nomeId){
	let aux = document.getElementById(nomeId).value;
	aux = aux.toUpperCase();
	aux = aux.trim();
	while(aux.includes("  ")){
	aux = aux.replace("  "," ");
	}
	if(aux==""){
		document.getElementById(nomeId+"Erro").innerHTML = "Preencha o campo vazio acima."
		document.getElementById(nomeId+"Erro").style.color = "red";
        document.getElementById(nomeId).style.border = "2px solid red";
		}else{
            if(aux.includes("0")||aux.includes("1")||aux.includes("2")||aux.includes("3")||aux.includes("4")||
            aux.includes("5")||aux.includes("6")||aux.includes("7")||aux.includes("8")||aux.includes("9")||aux.includes("-")
            ||aux.includes(".")||aux.includes("?")||aux.includes(",")||aux.includes("/")||aux.includes("+")||aux.includes("-")||aux.includes("=")
            ||aux.includes("@")||aux.includes("!")){
			document.getElementById(nomeId + "Erro").innerHTML = "Voce digitou caracteres inválidos.";
		    document.getElementById(nomeId + "Erro").style.color = "red";
		    document.getElementById(nomeId).style.border = "2px solid red"
			    }else{
                    if(!aux.includes(" ")){
                        document.getElementById(nomeId+"Erro").innerHTML = "Digite o seu nome completo.";
                        document.getElementById(nomeId+"Erro").style.color = "red";
                        document.getElementById(nomeId).style.border = "2px solid red";
                            }
                            else{
				                document.getElementById(nomeId + "Erro").innerHTML = "";
			                    document.getElementById(nomeId + "Erro").style.color = "green";
			                    document.getElementById(nomeId).style.border = "2px solid green"
			        }
                }
                }
	document.getElementById(nomeId).value = aux;
}


function verificarRG(nomeId){
    let aux = document.getElementById(nomeId).value;
    aux = aux.trim().toUpperCase();
    while(aux.includes(" ")){
	aux = aux.replace(" ","");
	}
    while(aux.includes(".")){
        aux = aux.replace(".","");
    }
    while(aux.includes("-")){
        aux = aux.replace("-","");
    }
    if(aux==""){
		document.getElementById(nomeId+"Erro").innerHTML = "Preencha o campo vazio acima."
		document.getElementById(nomeId+"Erro").style.color = "red";
        document.getElementById(nomeId).style.border = "2px solid red";
    }else{
            if(aux.length>10||aux.length<9&&aux.length>0){
                document.getElementById(nomeId+"Erro").innerHTML = "O número de caracteres é inválido.";
                document.getElementById(nomeId+"Erro").style.color = "red";
                document.getElementById(nomeId).style.border = "2px solid red";
            }else{
                if(aux.includes("A")||aux.includes("B")||aux.includes("C")||aux.includes("D")||aux.includes("E")||aux.includes("F")||aux.includes("G")||aux.includes("H")||aux.includes("I")||aux.includes("J")||aux.includes("K")||aux.includes("L")||aux.includes("M")||
                aux.includes("N")||aux.includes("O")||aux.includes("P")||aux.includes("Q")||aux.includes("R")||aux.includes("S")||aux.includes("T")||aux.includes("U")||aux.includes("V")||aux.includes("W")||aux.includes("X")||aux.includes("Y")||aux.includes("Z")
                ||aux.includes("@")||aux.includes("!")||aux.includes(",")||aux.includes("?")||aux.includes("#")){
                        document.getElementById(nomeId+"Erro").innerHTML = "Voce digitou caracteres inválidos."
                        document.getElementById(nomeId+"Erro").style.color = "red";
                        document.getElementById(nomeId).style.border = "2px solid red";
                    }else{
                        if(aux.length==9||aux.length==10){
                            aux = aux.substring(0,2)+"."+aux.substring(2,5)+"."+aux.substring(5,8)+"-"+aux.substring(8);
                            document.getElementById(nomeId+"Erro").innerHTML = "";
                            document.getElementById(nomeId+"Erro").style.color = "green";
                            document.getElementById(nomeId).style.border = "2px solid green";
                        }
                    }
                }
    
        document.getElementById(nomeId).value = aux;
    }
}

function verificarCPF(nomeId){
    let aux = document.getElementById(nomeId).value;
    aux = aux.trim().toUpperCase();
    while(aux.includes(" ")){
	aux = aux.replace(" ","");
	}
    while(aux.includes(".")){
        aux = aux.replace(".","");
    }
    while(aux.includes("-")){
        aux = aux.replace("-","");
    }
    if(aux==""){
		document.getElementById(nomeId+"Erro").innerHTML = "Preencha o campo vazio acima."
		document.getElementById(nomeId+"Erro").style.color = "red";
        document.getElementById(nomeId).style.border = "2px solid red";
    }else{
            if(aux.length>11||aux.length<11&&aux.length>0){
                document.getElementById(nomeId+"Erro").innerHTML = "O número de caracteres é inválido.";
                document.getElementById(nomeId+"Erro").style.color = "red";
                document.getElementById(nomeId).style.border = "2px solid red";
            }else{
                if(aux.includes("A")||aux.includes("B")||aux.includes("C")||aux.includes("D")||aux.includes("E")||aux.includes("F")||aux.includes("G")||aux.includes("H")||aux.includes("I")||aux.includes("J")||aux.includes("K")||aux.includes("L")||aux.includes("M")||
                    aux.includes("N")||aux.includes("O")||aux.includes("P")||aux.includes("Q")||aux.includes("R")||aux.includes("S")||aux.includes("T")||aux.includes("U")||aux.includes("V")||aux.includes("W")||aux.includes("X")||aux.includes("Y")||aux.includes("Z")
                    ||aux.includes("@")||aux.includes("!")||aux.includes(",")||aux.includes("?")||aux.includes("#")){
                        document.getElementById(nomeId+"Erro").innerHTML = "Voce digitou caracteres inválidos."
                        document.getElementById(nomeId+"Erro").style.color = "red";
                        document.getElementById(nomeId).style.border = "2px solid red";
                    }else{
                        if(aux.length==11){
                            aux = aux.substring(0,3)+"."+aux.substring(3,6)+"."+aux.substring(6,9)+"-"+aux.substring(9);
                            document.getElementById(nomeId+"Erro").innerHTML = "";
                            document.getElementById(nomeId+"Erro").style.color = "green";
                            document.getElementById(nomeId).style.border = "2px solid green";
                        }
                    }
                }
    
        document.getElementById(nomeId).value = aux;
    }
}


function verificarTelefone(nomeId){
    let aux = document.getElementById(nomeId).value;
    aux = aux.trim().toUpperCase();
    while(aux.includes(" ")){
	aux = aux.replace(" ","");
	}
    while(aux.includes("-")){
        aux = aux.replace("-","");
    }
    while(aux.includes("(")){
        aux = aux.replace("(","");
    }
    while(aux.includes(")")){
        aux = aux.replace(")","");
    }
    if(aux==""){
		document.getElementById(nomeId+"Erro").innerHTML = "Preencha o campo vazio acima."
		document.getElementById(nomeId+"Erro").style.color = "red";
        document.getElementById(nomeId).style.border = "2px solid red";
    }else{
        if(aux.length>11||aux.length<11&&aux.length>9||aux.length<9){
            document.getElementById(nomeId+"Erro").innerHTML = "O número de caracteres é inválido.";
            document.getElementById(nomeId+"Erro").style.color = "red";
            document.getElementById(nomeId).style.border = "2px solid red";
        }else{
            if(aux.includes("A")||aux.includes("B")||aux.includes("C")||aux.includes("D")||aux.includes("E")||aux.includes("F")||aux.includes("G")||aux.includes("H")||aux.includes("I")||aux.includes("J")||aux.includes("K")||aux.includes("L")||aux.includes("M")||
            aux.includes("N")||aux.includes("O")||aux.includes("P")||aux.includes("Q")||aux.includes("R")||aux.includes("S")||aux.includes("T")||aux.includes("U")||aux.includes("V")||aux.includes("W")||aux.includes("X")||aux.includes("Y")||aux.includes("Z")
            ||aux.includes("@")||aux.includes("!")||aux.includes("#")){
                    document.getElementById(nomeId+"Erro").innerHTML = "Voce digitou caracteres inválidos."
                    document.getElementById(nomeId+"Erro").style.color = "red";
                    document.getElementById(nomeId).style.border = "2px solid red";
                }else{
                    if(aux.length==11){//(21)99999-9999
                        aux = "("+aux.substring(0,2)+")"+aux.substring(2,7)+"-"+aux.substring(7);
                        document.getElementById(nomeId+"Erro").innerHTML = "";
                        document.getElementById(nomeId+"Erro").style.color = "green";
                        document.getElementById(nomeId).style.border = "2px solid green";
                    }else{
                        if(aux.length==9){
                            aux = "("+""+")"+aux.substring(0,5)+"-"+aux.substring(5);
                            document.getElementById(nomeId+"Erro").innerHTML = "Favor informar o DDD."
                            document.getElementById(nomeId+"Erro").style.color = "red";
                            document.getElementById(nomeId).style.border = "2px solid red";
                        }
                    }
                }
            }
        }
    document.getElementById(nomeId).value = aux;
}


function verificarEmail(nomeId){
    let aux = document.getElementById(nomeId).value;
    aux = aux.trim().toUpperCase();
    while(aux.includes(" ")){
        aux = aux.replace(" ","");
    }
    while(aux.includes("@@")){
        aux = aux.replace("@@","@");
    }
    
    verify = aux.substring(aux.indexOf("@"),aux.length);
    verify2 = aux.substring(0, aux.indexOf("@"));

                if(verify.includes("0")||verify.includes("1")||verify.includes("2")||verify.includes("3")||verify.includes("4")||
                verify.includes("5")||verify.includes("6")||verify.includes("7")||verify.includes("8")||verify.includes("9")||verify.includes("!")
                ||verify.includes("?")||verify.includes(",")||verify.includes("W")||verify.includes("X")||verify.includes("Q")||verify.includes("K")
                ||verify.includes("-")||verify.includes("+")||verify.includes("=")||verify.includes("#")){
                    document.getElementById(nomeId+"Erro").innerHTML = "Digite um endereço de email válido"
                    document.getElementById(nomeId+"Erro").style.color = "red";
                    document.getElementById(nomeId).style.border = "2px solid red";
                }else{
                    if(verify2.length<5){
                        document.getElementById(nomeId+"Erro").innerHTML = "Digite um endereço de email válido"
                        document.getElementById(nomeId+"Erro").style.color = "red";
                        document.getElementById(nomeId).style.border = "2px solid red";
                    }else{
                        if(aux.includes("@GMAIL.COM")||aux.includes("@HOTMAIL.COM")){
                            document.getElementById(nomeId + "Erro").innerHTML = "";
                            document.getElementById(nomeId + "Erro").style.color = "green";
                            document.getElementById(nomeId).style.border = "2px solid green"
                            }else{
                                if(aux==""){
                                    document.getElementById(nomeId+"Erro").innerHTML = "Preencha o campo vazio acima."
                                    document.getElementById(nomeId+"Erro").style.color = "red";
                                    document.getElementById(nomeId).style.border = "2px solid red";
                                    }else{
                                        document.getElementById(nomeId + "Erro").innerHTML = "Voce digitou caracteres inválidos.";
                                        document.getElementById(nomeId + "Erro").style.color = "red";
                                        document.getElementById(nomeId).style.border = "2px solid red"
                                    }
                            }
                    }
                }
    
	document.getElementById(nomeId).value = aux;
}

function verificarData(nomeId){
    let aux = document.getElementById(nomeId).value;
    if(aux==""){
        document.getElementById(nomeId+"Erro").innerHTML = "Preencha o campo vazio";
        document.getElementById(nomeId+"Erro").style.color = "red";
        document.getElementById(nomeId).style.border = "2px solid red";
    }else{
        document.getElementById(nomeId+"Erro").innerHTML = "";
        document.getElementById(nomeId+"Erro").style.color = "green";
        document.getElementById(nomeId).style.border = "2px solid green";
    }
    document.getElementById(nomeId).value = aux;
}


function verificarEstado(nomeId){
    let aux = document.getElementById(nomeId).value;
    if(aux==""){
        document.getElementById(nomeId+"Erro").innerHTML = "Preencha o campo vazio";
        document.getElementById(nomeId+"Erro").style.color = "red";
        document.getElementById(nomeId).style.border = "2px solid red";
    }else{
        document.getElementById(nomeId+"Erro").innerHTML = "";
        document.getElementById(nomeId+"Erro").style.color = "green";
        document.getElementById(nomeId).style.border = "2px solid green";
    }
    document.getElementById(nomeId).value = aux;
}

function verificarCEP(nomeId){
    let aux = document.getElementById(nomeId).value;
    aux = aux.trim().toUpperCase();
    while(aux.includes(" ")){
	aux = aux.replace(" ","");
	}
    while(aux.includes("-")){
        aux = aux.replace("-","");
    }
    if(aux==""){
		document.getElementById(nomeId+"Erro").innerHTML = "Preencha o campo vazio acima."
		document.getElementById(nomeId+"Erro").style.color = "red";
        document.getElementById(nomeId).style.border = "2px solid red";
    }else{
            if(aux.length>8||aux.length<8&&aux.length>0){
                document.getElementById(nomeId+"Erro").innerHTML = "O número de caracteres é inválido.";
                document.getElementById(nomeId+"Erro").style.color = "red";
                document.getElementById(nomeId).style.border = "2px solid red";
            }else{
                if(aux.includes("A")||aux.includes("B")||aux.includes("C")||aux.includes("D")||aux.includes("E")||aux.includes("F")||aux.includes("G")||aux.includes("H")||aux.includes("I")||aux.includes("J")||aux.includes("K")||aux.includes("L")||aux.includes("M")||
                    aux.includes("N")||aux.includes("O")||aux.includes("P")||aux.includes("Q")||aux.includes("R")||aux.includes("S")||aux.includes("T")||aux.includes("U")||aux.includes("V")||aux.includes("W")||aux.includes("X")||aux.includes("Y")||aux.includes("Z")
                    ||aux.includes("@")||aux.includes("!")||aux.includes("#")){
                        document.getElementById(nomeId+"Erro").innerHTML = "Voce digitou caracteres inválidos."
                        document.getElementById(nomeId+"Erro").style.color = "red";
                        document.getElementById(nomeId).style.border = "2px solid red";
                }else{
                    if(aux.length==8){
                        aux = aux.substring(0,5)+"-"+aux.substring(5);
                        document.getElementById(nomeId+"Erro").innerHTML = "";
                        document.getElementById(nomeId+"Erro").style.color = "green";
                        document.getElementById(nomeId).style.border = "2px solid green";
                    }
                }
            }
    
        document.getElementById(nomeId).value = aux;
    }
}   

function verificarUF(nomeId){
    let aux = document.getElementById(nomeId).value;
    if(aux==""){
        document.getElementById(nomeId+"Erro").innerHTML = "Preencha o campo vazio";
        document.getElementById(nomeId+"Erro").style.color = "red";
        document.getElementById(nomeId).style.border = "2px solid red";
    }else{
        document.getElementById(nomeId+"Erro").innerHTML = "";
        document.getElementById(nomeId+"Erro").style.color = "green";
        document.getElementById(nomeId).style.border = "2px solid green";
    }
    document.getElementById(nomeId).value = aux;
}

function verificarBairro(nomeId){
    let aux = document.getElementById(nomeId).value;
    aux = aux.trim().toUpperCase();
    while(aux.includes("  ")){
        aux = aux.replace("  "," ");
    }
    if(aux==""){
        document.getElementById(nomeId+"Erro").innerHTML = "Preencha o campo vazio acima";
        document.getElementById(nomeId+"Erro").style.color = "red";
        document.getElementById(nomeId).style.border = "2px solid red";
    }else{
        if(aux.includes("0")||aux.includes("1")||aux.includes("2")||aux.includes("3")||aux.includes("4")||
        aux.includes("5")||aux.includes("6")||aux.includes("7")||aux.includes("8")||aux.includes("9")||aux.includes("-")
        ||aux.includes(".")||aux.includes("?")||aux.includes(",")||aux.includes("/")||aux.includes("+")||aux.includes("-")||aux.includes("=")
        ||aux.includes("@")||aux.includes("!")){
            document.getElementById(nomeId+"Erro").innerHTML = "Voce digitou caracteres inválidos.";
            document.getElementById(nomeId+"Erro").style.color = "red";
            document.getElementById(nomeId).style.border = "2px solid red";
        }else{
            document.getElementById(nomeId+"Erro").innerHTML = "";
            document.getElementById(nomeId+"Erro").style.color = "green";
            document.getElementById(nomeId).style.border = "2px solid green";
        }
    }
    document.getElementById(nomeId).value = aux;
}

function verificarEndereco(nomeId){
    let aux = document.getElementById(nomeId).value;
    aux = aux.trim().toUpperCase();
    while(aux.includes("  ")){
        aux = aux.replace("  "," ");
    }
    if(aux==""){
    document.getElementById(nomeId+"Erro").innerHTML = "Preencha o campo vazio acima."
    document.getElementById(nomeId+"Erro").style.color = "red";
    document.getElementById(nomeId).style.border = "2px solid red";
    }else{
        if(aux.includes("0")||aux.includes("1")||aux.includes("2")||aux.includes("3")||aux.includes("4")||
        aux.includes("5")||aux.includes("6")||aux.includes("7")||aux.includes("8")||aux.includes("9")||aux.includes("-")
        ||aux.includes(".")||aux.includes("?")||aux.includes(",")||aux.includes("/")||aux.includes("+")||aux.includes("-")||aux.includes("=")
        ||aux.includes("@")||aux.includes("!")){
            document.getElementById(nomeId + "Erro").innerHTML = "Voce digitou caracteres inválidos.";
            document.getElementById(nomeId + "Erro").style.color = "red";
            document.getElementById(nomeId).style.border = "2px solid red"
        }else{
            document.getElementById(nomeId + "Erro").innerHTML = "";
            document.getElementById(nomeId + "Erro").style.color = "green";
            document.getElementById(nomeId).style.border = "2px solid green"
        }
    }
  document.getElementById(nomeId).value = aux;
}

function verificarNumero(nomeId){
    let aux = document.getElementById(nomeId).value;
    aux = aux.trim().toUpperCase();
    if(aux==""){
    document.getElementById(nomeId+"Erro").innerHTML = "Preencha o campo vazio acima."
    document.getElementById(nomeId+"Erro").style.color = "red";
    document.getElementById(nomeId).style.border = "2px solid red";
    }else{
        if(aux.includes("A")||aux.includes("B")||aux.includes("C")||aux.includes("D")||aux.includes("E")||aux.includes("F")||aux.includes("G")||aux.includes("H")||aux.includes("I")||aux.includes("J")||aux.includes("K")||aux.includes("L")||aux.includes("M")||
        aux.includes("N")||aux.includes("O")||aux.includes("P")||aux.includes("Q")||aux.includes("R")||aux.includes("S")||aux.includes("T")||aux.includes("U")||aux.includes("V")||aux.includes("W")||aux.includes("X")||aux.includes("Y")||aux.includes("Z")
        ||aux.includes("@")||aux.includes("!")||aux.includes(".")||aux.includes(",")||aux.includes("?")||aux.includes("#")){
            document.getElementById(nomeId+"Erro").innerHTML = "Voce digitou caracteres inválidos"
            document.getElementById(nomeId+"Erro").style.color = "red";
            document.getElementById(nomeId).style.border = "2px solid red";
        }else{
            document.getElementById(nomeId+"Erro").innerHTML = "";
            document.getElementById(nomeId+"Erro").style.color = "green";
            document.getElementById(nomeId).style.border = "2px solid green";
            }
        }
    document.getElementById(nomeId).value = aux;
}

function verificarComplemento(nomeId){
    let aux = document.getElementById(nomeId).value;
    aux = aux.trim().toUpperCase();
    if(aux==""){
    document.getElementById(nomeId+"Erro").innerHTML = "Preencha o campo vazio acima."
    document.getElementById(nomeId+"Erro").style.color = "red";
    document.getElementById(nomeId).style.border = "2px solid red";
    }else{
        if(aux.includes("@")||aux.includes("!")||aux.includes("?")||aux.includes("#")){
            document.getElementById(nomeId+"Erro").innerHTML = "Voce digitou caracteres inválidos"
            document.getElementById(nomeId+"Erro").style.color = "red";
            document.getElementById(nomeId).style.border = "2px solid red";
        }else{
            document.getElementById(nomeId+"Erro").innerHTML = "";
            document.getElementById(nomeId+"Erro").style.color = "green";
            document.getElementById(nomeId).style.border = "2px solid green";
            }
        }
    document.getElementById(nomeId).value = aux;
}

function verificarQntFotos(){
            let qnt;
            let valor;
            let aux1 = document.getElementById("iCheck1").value;
            let aux2 = document.getElementById("iCheck2").value;
            let aux3 = document.getElementById("iCheck3").value;

           qnt =  ((aux1*2)/2 + (aux2*2)/2+ (aux3*2)/2);
           document.getElementById("iCheckTotal").value = qnt;
           valor = (aux1*0.9) + (aux2*2) + (aux3*1.8);
           valor = valor.toFixed(1)
           document.getElementById("iCheckValor").value = valor + " R$";
           if(document.getElementById("iCheckTotal").value==0 || document.getElementById("iCheckTotal").value<=0){
            document.getElementById("iCheckValor").value = "";
           }
           if(aux1<10&&aux1>0){
            document.getElementById("iCheckTotal").style.border = "2px solid red";
            document.getElementById("iCheckTotal").style.color = "red";
            document.getElementById("iCheck1").style.border = "2px solid red";
           }else{
               if(aux2<2&&aux2>0){
                document.getElementById("iCheckTotal").style.border = "2px solid red";
                document.getElementById("iCheckTotal").style.color = "red";
                document.getElementById("iCheck2").style.border = "2px solid red";
               }else{
                   if( aux3<2&&aux3>0){
                    document.getElementById("iCheckTotal").style.border = "2px solid red";
                    document.getElementById("iCheckTotal").style.color = "red";
                    document.getElementById("iCheck3").style.border = "2px solid red";
                   }else{
                        if(qnt<=0){
                         document.getElementById("iCheckTotal").value = "";
                         document.getElementById("iCheckTotal").style.border = "2px solid rgb(131, 107, 23)";
                         document.getElementById("iCheck1").style.border = "2px solid rgb(131, 107, 23)";
                            document.getElementById("iCheck2").style.border = "2px solid rgb(131, 107, 23)";
                            document.getElementById("iCheck3").style.border = "2px solid rgb(131, 107, 23)";
                        }else{
                            document.getElementById("iCheckTotal").style.border = "2px solid rgb(131, 107, 23)";
                            document.getElementById("iCheckTotal").style.color = "black";
                            document.getElementById("iCheck1").style.border = "2px solid rgb(131, 107, 23)";
                            document.getElementById("iCheck2").style.border = "2px solid rgb(131, 107, 23)";
                            document.getElementById("iCheck3").style.border = "2px solid rgb(131, 107, 23)";
                         }
                    }
                }
            }
           
}

function comprarFotos() {
            let slider = document.getElementById("comprar-slide");
            let aux1 = document.getElementById("iCheckTotal").value;
            let aux2 = document.getElementById("iCheckValor").value;
            let aux3 = document.getElementById("iCheck1").value;
            let aux4 = document.getElementById("iCheck2").value;
            let aux5 = document.getElementById("iCheck3").value;
            
            if(aux3<10&&aux3>0 || aux4<2&&aux4>0 || aux5<2&&aux5>0 || aux1==""){
                slider.style.marginLeft = "-1310px";
                document.getElementById("blur").style.marginTop = "-952px";
                document.getElementById("iTable").style.filter = "blur(0px)";
                document.getElementById("iTable").style.filter = "blur(0px)";
                document.getElementById("insta").style.filter = "blur(0px)";
                document.getElementById("email").style.filter = "blur(0px)";
                document.getElementById("iP1").style.filter = "blur(0px)";
                document.getElementById("iP2").style.filter = "blur(0px)";
                document.getElementById("iCheckTotal").style.filter = "blur(0px)";
                document.getElementById("iCheckValor").style.filter = "blur(0px)";
                document.getElementById("iCheckT").style.filter = "blur(0px)";
                document.getElementById("iCheckV").style.filter = "blur(0px)";
                document.getElementById("comprar").style.filter = "blur(0px)";
                document.getElementById("cancelar").style.filter = "blur(0px)";
                document.getElementById("logo").style.filter = "blur(0px)";
                document.getElementById("paginainicial").style.filter = "blur(0px)";
                document.getElementById("quemsomos").style.filter = "blur(0px)";
                document.getElementById("fotos").style.filter = "blur(0px)";
                document.getElementById("videos").style.filter = "blur(0px)";
                document.getElementById("compreconosco").style.filter = "blur(0px)";
                document.getElementById("if10").style.filter = "blur(0px)";
                document.getElementById("iErro").innerHTML = "Número de fotos é inferior ao requerido";
                document.getElementById("iErro").style.color = "red";
                document.getElementById("iCheckTotal").style.border = "2px solid red"
            }else{
                    if(slider.style.marginLeft == "0px") {
                slider.style.marginLeft = "-1310px";
                document.getElementById("blur").style.marginTop = "-952px";
                document.getElementById("iTable").style.filter = "blur(0px)";
                document.getElementById("insta").style.filter = "blur(0px)"
                document.getElementById("email").style.filter = "blur(0px)"
                document.getElementById("iP1").style.filter = "blur(0px)"
                document.getElementById("iP2").style.filter = "blur(0px)"
                document.getElementById("iCheckTotal").style.filter = "blur(0px)"
                document.getElementById("iCheckValor").style.filter = "blur(0px)";
                document.getElementById("iCheckT").style.filter = "blur(0px)"
                document.getElementById("iCheckV").style.filter = "blur(0px)"
                document.getElementById("comprar").style.filter = "blur(0px)"
                document.getElementById("cancelar").style.filter = "blur(0px)"
                document.getElementById("logo").style.filter = "blur(0px)";
                document.getElementById("paginainicial").style.filter = "blur(0px)";
                document.getElementById("quemsomos").style.filter = "blur(0px)";
                document.getElementById("fotos").style.filter = "blur(0px)";
                document.getElementById("videos").style.filter = "blur(0px)";
                document.getElementById("compreconosco").style.filter = "blur(0px)";
                document.getElementById("if10").style.filter = "blur(0px)";
                slider.style.display = "flex";
                    }else{
                slider.style.marginLeft = "420px";
                document.getElementById("blur").style.marginTop = "-180px";
                document.getElementById("iTable").style.filter = "blur(5px)";
                document.getElementById("insta").style.filter = "blur(5px)";
                document.getElementById("email").style.filter = "blur(5px)";
                document.getElementById("iP1").style.filter = "blur(5px)";
                document.getElementById("iP2").style.filter = "blur(5px)";
                document.getElementById("iCheckTotal").style.filter = "blur(5px)";
                document.getElementById("iCheckValor").style.filter = "blur(5px)";
                document.getElementById("iCheckT").style.filter = "blur(5px)";
                document.getElementById("iCheckV").style.filter = "blur(5px)";
                document.getElementById("comprar").style.filter = "blur(5px)";
                document.getElementById("cancelar").style.filter = "blur(5px)";
                document.getElementById("logo").style.filter = "blur(5px)";
                document.getElementById("paginainicial").style.filter = "blur(5px)";
                document.getElementById("quemsomos").style.filter = "blur(5px)";
                document.getElementById("fotos").style.filter = "blur(5px)";
                document.getElementById("videos").style.filter = "blur(5px)";
                document.getElementById("compreconosco").style.filter = "blur(5px)";
                document.getElementById("if10").style.filter = "blur(5px)";
                slider.style.transitionDuration = "3s";
                document.getElementById("iTable").style.transitionDuration = "1s";
                document.getElementById("insta").style.transitionDuration = "1s";
                document.getElementById("email").style.transitionDuration = "1s";
                document.getElementById("iP1").style.transitionDuration = "1s";
                document.getElementById("iP2").style.transitionDuration = "1s";
                document.getElementById("iCheckTotal").transitionDuration = "1s";
                document.getElementById("iCheckValor").transitionDuration = "1s";
                document.getElementById("iCheckT").style.transitionDuration = "1s";
                document.getElementById("iCheckV").style.transitionDuration = "1s";
                document.getElementById("comprar").style.transitionDuration = "1s";
                document.getElementById("cancelar").style.transitionDuration = "1s";
                document.getElementById("logo").style.transitionDuration = "1s";
                document.getElementById("blur").style.transitionDuration = "1s";
                slider.style.display = "flex";
                document.getElementById("iFF").innerHTML = aux1;
                document.getElementById("iFV").innerHTML = aux2;
                document.getElementById("iErro").innerHTML = "";
                document.getElementById("iCheckTotal").style.border = "2px solid rgb(131, 107, 23)";
                document.getElementById("iCheck1").setAttribute("readonly", true);
                document.getElementById("iCheck2").setAttribute("readonly", true);
                document.getElementById("iCheck3").setAttribute("readonly", true);
                document.getElementById("iCheck4").setAttribute("readonly", true);
                document.getElementById("iCheck5").setAttribute("readonly", true);
                document.getElementById("iCheck6").setAttribute("readonly", true);
                document.getElementById("iCheck7").setAttribute("readonly", true);
                document.getElementById("iCheck8").setAttribute("readonly", true);
                document.getElementById("iCheck9").setAttribute("readonly", true);
            }
        }
}

function voltar(){
            let slider = document.getElementById("comprar-slide");
            
            if(slider.style.marginLeft == "0px") {
                slider.style.marginLeft = "420px";
                document.getElementById("blur").style.marginTop = "0px"
                document.getElementById("iTable").style.filter = "blur(5px)"
                document.getElementById("intsa").style.filter = "blur(5px)"
                document.getElementById("email").style.filter = "blur(5px)"
                document.getElementById("iP1").style.filter = "blur(5px)"
                document.getElementById("iP2").style.filter = "blur(5px)"
                document.getElementById("iCheckTotal").style.filter = "blur(5px)"
                document.getElementById("iCheckValor").style.filter = "blur(5px)";
                document.getElementById("iCheckT").style.filter = "blur(5px)"
                document.getElementById("iCheckV").style.filter = "blur(5px)"
                document.getElementById("comprar").style.filter = "blur(5px)"
                document.getElementById("cancelar").style.filter = "blur(5px)"
                document.getElementById("logo").style.filter = "blur(5px)";
                document.getElementById("paginainicial").style.filter = "blur(5px)";
                document.getElementById("quemsomos").style.filter = "blur(5px)";
                document.getElementById("fotos").style.filter = "blur(5px)";
                document.getElementById("videos").style.filter = "blur(5px)";
                document.getElementById("compreconosco").style.filter = "blur(5px)";
                document.getElementById("if10").style.filter = "blur(5px)";
            }else{
                slider.style.marginLeft = "-1310px";
                document.getElementById("blur").style.marginTop = "-952px";
                document.getElementById("iTable").style.filter = "blur(0px)";
                document.getElementById("insta").style.filter = "blur(0px)";
                document.getElementById("email").style.filter = "blur(0px)";
                document.getElementById("iP1").style.filter = "blur(0px)";
                document.getElementById("iP2").style.filter = "blur(0px)";
                document.getElementById("iCheckTotal").style.filter = "blur(0px)";
                document.getElementById("iCheckValor").style.filter = "blur(0px)";
                document.getElementById("iCheckT").style.filter = "blur(0px)";
                document.getElementById("iCheckV").style.filter = "blur(0px)";
                document.getElementById("comprar").style.filter = "blur(0px)";
                document.getElementById("cancelar").style.filter = "blur(0px)";
                document.getElementById("logo").style.filter = "blur(0px)";
                document.getElementById("paginainicial").style.filter = "blur(0px)";
                document.getElementById("quemsomos").style.filter = "blur(0px)";
                document.getElementById("fotos").style.filter = "blur(0px)";
                document.getElementById("videos").style.filter = "blur(0px)";
                document.getElementById("compreconosco").style.filter = "blur(0px)";
                document.getElementById("if10").style.filter = "blur(0px)";
                document.getElementById("insta").style.transitionDuration = "1.5s";
                document.getElementById("email").style.transitionDuration = "1.5s";
                document.getElementById("iP1").style.transitionDuration = "1.5s";
                document.getElementById("iP2").style.transitionDuration = "1.5s";
                document.getElementById("iCheckTotal").transitionDuration = "1.5s";
                document.getElementById("iCheckValor").transitionDuration = "1.5s";
                document.getElementById("iCheckT").style.transitionDuration = "1.5s";
                document.getElementById("iCheckV").style.transitionDuration = "1.5s";
                document.getElementById("comprar").style.transitionDuration = "1.5s";
                document.getElementById("cancelar").style.transitionDuration = "1.5s";
                document.getElementById("logo").style.transitionDuration = "1.5s";
                document.getElementById("paginainicial").transitionDuration = "1.5s";
                document.getElementById("quemsomos").style.transitionDuration = "1.5s";
                document.getElementById("fotos").style.transitionDuration = "1.5s";
                document.getElementById("videos").style.transitionDuration = "1.5s";
                document.getElementById("compreconosco").style.transitionDuration = "1.5s";
                slider.style.transitionDuration = "1.5s";
                document.getElementById("iTable").style.transitionDuration = "1.5s";
                document.getElementById("blur").style.transitionDelay = "200ms";
                document.getElementById("blur").style.transitionDuration = "2.5s";
                document.getElementById("iCheck1").removeAttribute("readonly", true);
                document.getElementById("iCheck2").removeAttribute("readonly", true);
                document.getElementById("iCheck3").removeAttribute("readonly", true);
                document.getElementById("iCheck4").removeAttribute("readonly", true);
                document.getElementById("iCheck5").removeAttribute("readonly", true);
                document.getElementById("iCheck6").removeAttribute("readonly", true);
                document.getElementById("iCheck7").removeAttribute("readonly", true);
                document.getElementById("iCheck8").removeAttribute("readonly", true);
                document.getElementById("iCheck9").removeAttribute("readonly", true);
            }
        }

function concluir() {
    let aux1 = document.getElementById("iNome").style.border;
    let aux2 = document.getElementById("iCPF").style.border;
    let aux3 = document.getElementById("iTelefone").style.border;
    let aux4 = document.getElementById("iEmail").style.border;
    let aux5 = document.getElementById("iEndereco").style.border;
    let aux6 = document.getElementById("iNumero").style.border;
    let aux7 = document.getElementById("iRG").style.border;
    let aux8 = document.getElementById("iData").style.border;
    let aux10 = document.getElementById("iEstado").style.border;
    let aux11 = document.getElementById("iUF").style.border;
    let aux12 = document.getElementById("iBairro").style.border;
    let aux13 = document.getElementById("iComplemento").style.border;
    let aux14 = document.getElementById("iCEP").style.border;
    if(aux1== "2px solid green" && aux2== "2px solid green" && aux3== "2px solid green" && aux4== "2px solid green" &&
    aux5== "2px solid green" && aux6== "2px solid green" && aux7== "2px solid green" && aux8== "2px solid green"&& aux10== "2px solid green" 
    && aux11== "2px solid green" && aux12== "2px solid green" && aux13== "2px solid green" && aux14== "2px solid green") {
        window.open("obrigado.html", "_self");
        document.getElementById("iConcluirErro").innerHTML = "";
    }else{
        document.getElementById("iConcluirErro").innerHTML = "Preencha corretamente os campos.";
        document.getElementById("iConcluirErro").style.color = "red";
    }
}

$("#iCEP").focusout(function(){
    let aux = document.getElementById("iEndereco").value;
    let aux2 = document.getElementById("iBairro").value;
    let aux3 = document.getElementById("iUF").value;
    //Início do Comando AJAX
    $.ajax({
        //O campo URL diz o caminho de onde virá os dados
        //É importante concatenar o valor digitado no CEP
        url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/unicode/',
        //Aqui você deve preencher o tipo de dados que será lido,
        //no caso, estamos lendo JSON.
        dataType: 'json',
        //SUCESS é referente a função que será executada caso
        //ele consiga ler a fonte de dados com sucesso.
        //O parâmetro dentro da função se refere ao nome da variável
        //que você vai dar para ler esse objeto.
        success: function(resposta){
            //Agora basta definir os valores que você deseja preencher
            //automaticamente nos campos acima.
            $("#iEndereco").val(resposta.logradouro);
            document.getElementById("iEndereco").style.border = "2px solid green";
            $("#iBairro").val(resposta.bairro);
            document.getElementById("iBairro").style.border = "2px solid green";
            $("#iUF").val(resposta.uf);
            document.getElementById("iUF").style.border = "2px solid green";
            //Vamos incluir para que o Número seja focado automaticamente
            //melhorando a experiência do usuário
            $("#iNumero").focus();
        }
    });
});