(function() {

    // Récupération des cases à clicker
    const items = document.getElementsByClassName('grid-item');
    let jeuActif="X"
let etatjeu=["","","","","","","","","",]


    function choiseCase(id) {
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6]
        [1,4,7]
        [2,5,8]
        [0,4,8]
        [2,4,6]

    }
    //Messages 
    const gagne =("") // 'Le joueur ${joueurActif} a gagné'
    const egalite=("")
    const tourjoueur=("") // joueurActif
    const gagne =("") // 'Le joueur ${joueurActif} a gagné'
    const egalite=("")
    const tourjoueur=("") // joueurActif
  
    // Vide le contenu de toute les cases
    function rest() {
        for (var i = 0; i < items.length; i++) {
            console.log(items[i]);
            items[i].textContent = ''
        }
     let tourGagnant=false

    for(let conditionsVictoire of conditionsVictoire){
        let val1 = etatjeu[conditionsVictoire[0]]
        let val2 = etatjeu[conditionsVictoire[1]]
        let val3 = etatjeu[conditionsVictoire[2]]
            
    }
    if(tourGagnant){
        statut.innerHTML=gagne()
        jeuActif=false
        return
    }
    if(!etatjeu.includes("")){
        statut.innerHTML=egalite()
        jeuActif=false
        return
    }

    joueurActif=joueurActif ==="x" ? "o" : "x"
    statut.innerHTML=tourjoueur()
}

})();