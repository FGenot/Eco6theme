//////////// Imeube
var nbImeuble = 0; // nombre imeubles
var valPopImeuble = 10; // valeur population imeuble
var indicePollImeuble = 13; // indice pollution imeube

//////////// Maison
var nbMaison = 0; // nombre Maisons
var valPopMaison = 5; // valeur population maisons
var indicePollMaison = 7; // indice pollution maisons

//////////// Route
var nbRoute = 0; // nombre Routes
var valPopRoute = 0; // valeur population Route
var indicePollRoute = 1; // indice pollution Route

//////////// Arbre
var nbArbre = 0; // nombre Arbres
var valPopArbre = 0; // valeur population Arbre
var indicePollArbre = -5; // indice pollution Arbre

/////// pollution
var pollution = 0; // score pollution 
var send = 0;
var sendPollu = 0;

$(document).ready(function() {
    
   
    // récup de la div
    
    var div = document.getElementById("idContainer");
    var body = document.getElementById("contentPlateau");
    
   
    // création table et tbody 
    var tbl = document.createElement("table");
  
    var tblBody = document.createElement("tbody");
   
    // boucle ligne
    for (var i = 0; i < 16; i++) {
      // création ligne
      var row = document.createElement("tr");
   
      //boucle colonne
      for (var j = 0; j < 16; j++) {
        //création cellule avec attribut
        var cell = document.createElement("td");
        cell.setAttribute("id",i+","+j);
        cell.setAttribute("onclick", "onClick("+i+","+j+")");
        //cell.setAttribute("onMouseOver", "position("+i+","+j+")");
        cell.classList.add("case");
        
        row.appendChild(cell);
      }
   
      // Ajoute la ligne au tbody
      tblBody.appendChild(row);
    }
   
    // ajoute le tbody a la table
    tbl.appendChild(tblBody);
    // ajoutz table a div
    body.appendChild(tbl);
    // ajoute attribut border à tbl;
    tbl.setAttribute("border", "1");
    tbl.style.height = "600px";
    tbl.style.width = "600px";

    div.style.backgroundColor = "lightgray";
    div.style.marginTop = "20px";
    div.style.paddingTop = "10px";
    div.style.paddingBottom = "10px";
    div.style.marginBottom = "30px";
  
});



function onClick(l,c){
  ElementTab(l,c); 
  suppElement(l,c);

}

function ChangeAffichage(nbElement,valPop,Indice){ 

  if (sendPollu + Indice > 100){
    alert('Impossible Pollution trop importante');
  
  }
  else if (sendPollu < 0 ){
    document.getElementById('scorePollution').innerText = "0%";
    console.log("ererurururu");
  }
  else {
    send = send + valPop;
    document.getElementById('scorePopulation').innerText = send;
    sendPollu = sendPollu + Indice;
    document.getElementById('scorePollution').innerText = sendPollu+"%";

  }
}

function ElementTab (l,c){

  var typeBat = document.getElementById('selectButton').innerText;
  if (document.getElementById(l+","+c).className == "case"){

    if (typeBat == "imeuble") { //Imeuble
      document.getElementById(l+","+c).classList = "imeuble";
      nbImeuble += 1;
      ChangeAffichage(nbImeuble,valPopImeuble,indicePollImeuble);
    }

    if (typeBat == "maison") { // Maison
      document.getElementById(l+","+c).classList = "maison";
      nbMaison += 1;
      ChangeAffichage(nbMaison,valPopMaison,indicePollMaison);
    }

    if (typeBat == "route") { // Route
      document.getElementById(l+","+c).classList = "route";
      nbRoute += 1;
      ChangeAffichage(nbRoute,valPopRoute,indicePollRoute);
    }

    if (typeBat == "arbre") { // Arbre
      document.getElementById(l+","+c).classList = "arbre";
      nbArbre += 1;
      ChangeAffichage(nbArbre,valPopArbre,indicePollArbre);
    }


  }
}

function suppElement (l,c){

  var typeBat = document.getElementById('selectButton').innerText;
  if (typeBat == "supp") { // supp
    var element = document.getElementById(l+","+c);
  
  
    if(element.className == "imeuble"){ // suppression imeuble
      element.classList = "case";
      send = send - valPopImeuble;
      nbImeuble --;
      document.getElementById('scorePopulation').innerText = send;
      sendPollu = sendPollu - indicePollImeuble;
      document.getElementById('scorePollution').innerText = sendPollu;
    }
  
    if(element.className == "maison"){ // suppression maison
      element.classList = "case";
      send = send - valPopMaison;
      nbMaison --;
      document.getElementById('scorePopulation').innerText = send;
      sendPollu = sendPollu - indicePollMaison;
      document.getElementById('scorePollution').innerText = sendPollu;
    }
  
    if(element.className == "route"){ // suppression route
      element.classList = "case";
      nbRoute --;
      sendPollu = sendPollu - indicePollRoute;
      document.getElementById('scorePollution').innerText = sendPollu;
    }
  
    if(element.className == "arbre"){ // suppression arbre
      element.classList = "case";
      send = send - valPopArbre;
      nbArbre --;
      document.getElementById('scorePopulation').innerText = send;
  
      sendPollu = sendPollu - indicePollArbre;
      document.getElementById('scorePollution').innerText = sendPollu;
    }
  }
}


  
  
    


function btImeuble() {
  document.getElementById('selectButton').innerText = 'imeuble';
}

function btMaison() {
  document.getElementById('selectButton').innerText = 'maison';
}

function btRoute() {
  document.getElementById('selectButton').innerText = 'route';
}

function btArbre() {
  document.getElementById('selectButton').innerText = 'arbre';
}

function btSupp() {
  document.getElementById('selectButton').innerText = 'supp';
}







