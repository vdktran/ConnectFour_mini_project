// Création de la grille 10x10
var grille = [];
var valJoueur = 1;
var win = 0;

function creategrille() {
    for (let i = 0; i<10 ; i++) {
        
        grille[i] = [];

        for (let j = 0; j<10; j++){
            grille[i][j] = 0;
        }
    }
}

creategrille();

var Joueur = prompt("Entrez votre nom");

function checkvictoire(i,j) {

    // Check des conditions de victoire à la verticale
    if(i<7) {
        if( grille[i][j]===grille[i+1][j]
            && grille[i][j]===grille[i+2][j]
            && grille[i][j]===grille[i+3][j]) {
            if(valJoueur === 1) {
                console.log(Joueur+" a gagné verticalement!!");
                win = 1;
            }
            else {
                console.log("Le bot a gagné verticalement ...");
                win = 1;
            }
            // console.log("gagné verticalement !!!!!");
        }
    }

    // Check des conditions de victoire à l'horizontale
    if( (grille[i][j]===grille[i][j-1]
        && grille[i][j]===grille[i][j-2]
        && grille[i][j]===grille[i][j-3]) || 
        
            (grille[i][j]===grille[i][j+1]
            && grille[i][j]===grille[i][j+2]
            && grille[i][j]===grille[i][j+3]) ) {
        if(valJoueur ===1) {
            console.log(Joueur+" a gagné horizontalement!!");
            win = 1;
        }
        else {
            console.log("Le bot a gagné horizontalement...");
            win = 1;
        }
        // console.log("gagné horizontalement !!!!!")
    }


    // Check des conditions de victoire pour les diagonales vers le haut
    if( (grille[i][j]===grille[i-1][j+1]
        && grille[i][j]===grille[i-2][j+2]
        && grille[i][j]===grille[i-3][j+3]) || 
        
            (grille[i][j]===grille[i-1][j-1]
            && grille[i][j]===grille[i-2][j-2]
            && grille[i][j]===grille[i-3][j-3]) ) {
        if(valJoueur ===1) {
            console.log(Joueur+" a gagné diagonalement !!");
            win = 1;
        }
        else {
            console.log("Le bot a gagné diagonalement...");
            win = 1;
        }
    }

    // Check des conditions de victoire pour les diagonales vers le bas
    if(i<7) {
        if( (grille[i][j]===grille[i+1][j+1]
                && grille[i][j]===grille[i+2][j+2]
                && grille[i][j]===grille[i+3][j+3]) || 
                
                (grille[i][j]===grille[i+1][j-1]
                    && grille[i][j]===grille[i+2][j-2]
                    && grille[i][j]===grille[i+3][j-3]) ) {
                if(valJoueur === 1) {
                    console.log(Joueur+" a gagné diagonalement !!");
                    win = 1;
                }
                else {
                    console.log("Le bot a gagné diagonalement...");
                    win = 1;
                }
    }
}

}

function placement(colonne) {

    // Si la case la plus basse est vide alors on la remplit
    // Si elle n'est psa vide alors on passe à la case au dessus
    for (var i=9; i>=0; i--) {
        if(grille[i][colonne] === 0) {
            grille[i][colonne] = valJoueur;
            break;
        }
        console.log(i);

        // Si la colonne est pleine alors rejouez
        if(grille[colonne][0] !== 0) {
            if(valJoueur === 1){
                alert("rejouez!");
            }
            else {
                bot();
            }
        }
    };

    console.table(grille);

    // Check victoire
   checkvictoire(i, colonne);
}

function bot() {
    let rand = Math.floor(Math.random()*9);
    console.log("rand",rand);

    placement(rand);

}

function jouer(x) {

    placement(x);
    valJoueur = 2;
    bot();
    valJoueur = 1;
}


// On lance le jeu
while( win == 0 ) {
var jeton = prompt("saisissez une colonne");
jouer(jeton);
}