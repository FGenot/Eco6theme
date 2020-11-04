//////////// Imeuble
var nbImeuble = 0; // nombre imeubles
var valPopImeuble = 10; // valeur population imeuble
var indicePollImeuble = 13; // indice pollution imeuble
var coutImeuble = 6; // prix imeuble

//////////// Maison
var nbMaison = 0; // nombre Maisons
var valPopMaison = 5; // valeur population maisons
var indicePollMaison = 7; // indice pollution maisons
var coutMaison = 4; // prix maison

//////////// Route
var nbRoute = 0; // nombre Routes
var valPopRoute = 0; // valeur population Route
var indicePollRoute = 1; // indice pollution Route
var coutRoute = 1; // prix route

//////////// Arbre
var nbArbre = 0; // nombre Arbres
var valPopArbre = 0; // valeur population Arbre
var indicePollArbre = -5; // indice pollution Arbre
var coutArbre = 2; // prix arbre

/////// pollution
var pollution = 0; // score pollution 
var send = 0;
var sendPollu = 0;

/////// Badges
var nbBadges = 30;

$(document).ready(function() {
    console.log('coucou');
   
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
        cell.setAttribute("id",i+"-"+j);
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

    //div.style.backgroundColor = "lightgray";
    //div.style.marginTop = "20px";
    //div.style.paddingTop = "10px";
    //div.style.paddingBottom = "10px";
    //div.style.marginBottom = "30px";

    
});



function onClick(l,c){
  ElementTab(l,c); 
  suppElement(l,c);

}

function ChangeAffichage(nbElement,valPop,Indice,l,c,cout){ 

  if (sendPollu + Indice > 100){
    //console.log('trop haut pollution'+l+""+c);
    alert('pollutions trop importante');
    document.getElementById(l+"-"+c).className = "case";
    sendPollu = sendPollu - Indice;
    send = send - valPop;
  
  }
  if (sendPollu < 0 ){
    document.getElementById('pollu').innerText = "0%";
    console.log(sendPollu);
  }
  
    send = send + valPop;
    
    document.getElementById('people').innerText = send;
    sendPollu = sendPollu + Indice;
    document.getElementById('pollu').innerText = sendPollu+"%";
  
    ///// affichage badges
    nbBadges = nbBadges - cout;
    document.getElementById('badgesCount').innerText = nbBadges;
    
  
}

function ElementTab (l,c){

  var typeBat = document.getElementById('selectButton').innerText;
  console.log(document.getElementById(l+"-"+c).className);
  console.log(typeBat);
  if (document.getElementById(l+"-"+c).className == "case"){
    if (typeBat == "Imeuble" && nbBadges > coutImeuble) { //Imeuble
      document.getElementById(l+"-"+c).classList = "Imeuble";
      nbImeuble += 1;
      ChangeAffichage(nbImeuble,valPopImeuble,indicePollImeuble,l,c,coutImeuble);
    }
    

    if (typeBat == "Maison" && nbBadges > coutMaison) { // Maison
      document.getElementById(l+"-"+c).classList = "Maison";
      nbMaison += 1;
      ChangeAffichage(nbMaison,valPopMaison,indicePollMaison,l,c,coutMaison);
    }

    if (typeBat == "Route" && nbBadges > coutRoute) { // Route
      document.getElementById(l+"-"+c).classList = "Route";
      nbRoute += 1;
      ChangeAffichage(nbRoute,valPopRoute,indicePollRoute,l,c,coutRoute);
    }

    if (typeBat == "Arbre" && nbBadges > coutArbre) { // Arbre
      document.getElementById(l+"-"+c).classList = "Arbre";
      nbArbre += 1;
      ChangeAffichage(nbArbre,valPopArbre,indicePollArbre,l,c,coutArbre);
    }
  }

  function coutElementAlert(cout,element){
    if (nbBadges < cout){
      console.log('ttttt');
      alert("Vous ne disposez pas d'assez de badges pour acheter un.e "+element);
    }
  }
}



function suppElement (l,c){

  var typeBat = document.getElementById('selectButton').innerText;
  if (typeBat == "supp") { // supp
    var element = document.getElementById(l+"-"+c);
  
  
    if(element.className == "Imeuble"){ // suppression imeuble
      element.classList = "case";
      send = send - valPopImeuble;
      nbImeuble --;
      document.getElementById('people').innerText = send;
      sendPollu = sendPollu - indicePollImeuble;
      document.getElementById('pollu').innerText = sendPollu;
    }
  
    if(element.className == "Maison"){ // suppression maison
      element.classList = "case";
      send = send - valPopMaison;
      nbMaison --;
      document.getElementById('people').innerText = send;
      sendPollu = sendPollu - indicePollMaison;
      document.getElementById('pollu').innerText = sendPollu;
    }
  
    if(element.className == "Route"){ // suppression route
      element.classList = "case";
      nbRoute --;
      sendPollu = sendPollu - indicePollRoute;
      document.getElementById('pollu').innerText = sendPollu;
    }
  
    if(element.className == "Arbre"){ // suppression arbre
      element.classList = "case";
      send = send - valPopArbre;
      nbArbre --;
      document.getElementById('pollu').innerText = send;
  
      sendPollu = sendPollu - indicePollArbre;
      document.getElementById('pollu').innerText = sendPollu;
    }
  }
}


  
  
    


function btImeuble() {
  document.getElementById('selectButton').innerText = 'Imeuble';
}

function btMaison() {
  document.getElementById('selectButton').innerText = 'Maison';
}

function btRoute() {
  document.getElementById('selectButton').innerText = 'Route';
}

function btArbre() {
  document.getElementById('selectButton').innerText = 'Arbre';
}

function btSupp() {
console.log('tututututu');
  document.getElementById('selectButton').innerText = 'Supp';
}


///////////// Affichage dans modal /////////////////
function Malus(element){
  if(element == 'Arbre'){
    var retour = "";
    return retour
  }
  
  if(element == 'Route'){
    var retour = "+ 1 de pollution";
    return retour
  }
  
  if(element == 'Imeuble'){
    var retour = "+ 13 de pollutions";
    return retour
  }
  
  if(element == 'Maison'){
    var retour = "+ 7 pollutions";
    return retour
  }
  
  }


  function Bonus(element){
    if(element == 'Arbre'){
      var retour = "-5 de pollutions";
      return retour
    }
    
    if(element == 'Route'){
      var retour = "";
      return retour
    }
    
    if(element == 'Imeuble'){
      var retour = "+ 10 populations";
      return retour
    }
    
    if(element == 'Maison'){
      var retour = "+ 5 populations";
      return retour
    }
    
    }


    function MalusBadges(element) {
      if(element == 'Arbre'){
        var retour = "2 badges";
        return retour
      }
      
      if(element == 'Route'){
        var retour = "1 badge";
        return retour
      }
      
      if(element == 'Imeuble'){
        var retour = "6 Badges";
        return retour
      }
      
      if(element == 'Maison'){
        var retour = "4 Badges";
        return retour
      }
    }



