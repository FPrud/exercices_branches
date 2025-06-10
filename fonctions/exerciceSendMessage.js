sendMessage("Je te rends visite la semaine prochaine", "Marc", "Linda");

function sendMessage(message, fromName, toName){
	console.log("From : " + fromName + " to : "/*ajout d'un espace avant "to"*/ + toName + " Message : " + message); //ajout d'une parenthèse pour fermer la commande log
}; //ajout d'une accolade qui ferme la fonction
// suppression de "sendMessage()" vide
sendMessage("Super on se voit mardi !", "Linda", "Marc"); //changement des crochets en parenthèses

let contactName = "Jean";
let myName = "Ada";
let myMessage = "Je t'apprends à coder tes premières fonctions";
sendMessage(myMessage, myName, contactName);