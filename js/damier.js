var nbImeuble = 0;
var valImeuble = 50;
var pollution = 0;
var indicePollImeuble = 5;

$(document).ready(function() {
    
    console.log('test');
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
        cell.setAttribute("onMouseOver", "position("+i+","+j+")");
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


document.getElementById('but1').click(function() {
  alert( "oeoe" );
  console.log('voiture');
});


function position(l,c) {
    console.log(l,c);
}


function onClick(l,c){
    //console.log("click en "+l+" "+c);
    var typeBat = document.getElementById('selectButton').innerText;
    if (typeBat == "imeuble") {
        document.getElementById(l+","+c).classList = "imeuble";
        nbImeuble += 1;
        var send = nbImeuble*valImeuble;
        document.getElementById('scorePopulation').innerText = send;
        
    
        var sendPollu = nbImeuble*indicePollImeuble;
        document.getElementById('scorePollution').innerText = sendPollu+"%";
    }
    if (typeBat == "maison") { // changement stat
      document.getElementById(l+","+c).classList = "maison";
      nbImeuble += 1;
      var send = nbImeuble*valImeuble;
      document.getElementById('scorePopulation').innerText = send;
      
  
      var sendPollu = nbImeuble*indicePollImeuble;
      document.getElementById('scorePollution').innerText = sendPollu+"%";
  }

  if (typeBat == "route") { // change stat
    document.getElementById(l+","+c).classList = "route";
    nbImeuble += 1;
    var send = nbImeuble*valImeuble;
    document.getElementById('scorePopulation').innerText = send;
    

    var sendPollu = nbImeuble*indicePollImeuble;
    document.getElementById('scorePollution').innerText = sendPollu+"%";
}

if (typeBat == "arbre") { // change stat
  document.getElementById(l+","+c).classList = "arbre";
  nbImeuble += 1;
  var send = nbImeuble*valImeuble;
  document.getElementById('scorePopulation').innerText = send;
  

  var sendPollu = nbImeuble*indicePollImeuble;
  document.getElementById('scorePollution').innerText = sendPollu+"%";
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







