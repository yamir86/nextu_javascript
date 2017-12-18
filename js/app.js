var nuevo="";
var ant=0;
var op="";
var res=0;
var indicador=false;
var panel=document.getElementById("display");
var teclas=document.getElementsByClassName("tecla");
for(i=0;i<teclas.length;i++){
  teclas[i].addEventListener("click",function(event){
      id=event.target.getAttribute('id');
      alto=event.target.style.width;
      ancho=event.target.style.height;
      event.target.style.width="21%";
      event.target.style.width="50px";
      function cambio(){
                event.target.style.width=alto;
                event.target.style.height=ancho;
        };
            setTimeout (cambio, 100);
      switch(id){
          case "on":
              panel.innerHTML="0";
              ant=0;
              nuevo="";
              indicador=false;
              break;
          case "mas":
              if(res!==0){
                  ant=parseFloat(res);
              }
              else{
                  ant=parseFloat(nuevo);
              }
              nuevo="";
              panel.innerHTML=nuevo;
              op="mas";
              break;
          case "menos":
              if(res!==0){
                  ant=parseFloat(res);
              }
              else{
                  ant=parseFloat(nuevo);
              }
              nuevo="";
              panel.innerHTML=nuevo;
              op="menos";
              break;
          case "por":
              if(res!==0){
                  ant=parseFloat(res);
              }
              else{
                  ant=parseFloat(nuevo);
              }
              nuevo="";
              panel.innerHTML=nuevo;
              op="por";
              break;
          case "dividido":
              if(res!==0){
                  ant=parseFloat(res);
              }
              else{
                  ant=parseFloat(nuevo);
              }
              nuevo="";
              panel.innerHTML=nuevo;
              op="dividido";
              break;
          case "igual":
              if(indicador===true){
                  if(op==="mas"){
                res=parseFloat(nuevo)+parseFloat(ant);
                }
                if(op==="menos"){
                    res=parseFloat(nuevo)-parseFloat(ant);
                }
                if(op==="por"){
                    res=parseFloat(nuevo)*parseFloat(ant);
                }
                if(op==="dividido"){
                    res=parseFloat(nuevo)/parseFloat(ant);
                }
                nuevo=res;
              }
              else{
                ant=nuevo;
                nuevo=res;
                indicador=true;
                }
                res=res.toString();
                if(res.length>7){
                    res=parseFloat(res);
                    res=res.toExponential(2);
                    panel.innerHTML=res;
                }
                else{
                    panel.innerHTML=res;
                }
              break;
          case "sign":
              if(panel.innerHTML!=="0"||panel.innerHTML!==""){
                  if(nuevo!==""){
                  nuevo=parseFloat(nuevo);
                  nuevo=-nuevo;
                  panel.innerHTML=nuevo;
                  }
              }
              break;
          case "punto":
              id=".";
              for(i=0;i<nuevo.length;i++){
                  if(nuevo[i]==="."){
                      id="";
                  }
              }
              if(panel.innerHTML!=="0"){
              nuevo=nuevo+id;
              panel.innerHTML=nuevo;};
              break;
        default:
            indicador=false;
            nuevo=nuevo.toString();
            if(nuevo.length<=7){
                if(panel.innerHTML==="0" && id==="0"){}
                else{
                nuevo=nuevo+id;
                panel.innerHTML=nuevo;}
            }
            ///////////////////////////////
            if(op==="mas"){
                res=ant+parseFloat(nuevo);
              }
              if(op==="menos"){
                  res=ant-parseFloat(nuevo);
              }
              if(op==="por"){
                  res=ant*parseFloat(nuevo);
              }
              if(op==="dividido"){
                  res=ant/parseFloat(nuevo);
              }
            break;
      }
  });
};
