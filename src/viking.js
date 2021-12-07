// Soldier
class Soldier {constructor(health, strength) {

  this.health = health;
  this.strength = strength;

  }

  attack ( ){

    return this.strength;

  }

  receiveDamage(damage){

    this.health = this.health - damage;

  }

}

// Viking
class Viking extends Soldier { constructor (name, health, strength) {

  super(health, strength);
  this.name = name;
  }
  receiveDamage (damage) {

    this.health = this.health - damage;
    return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    
  }

  battleCry() {

     return "Odin Owns You All!";

  }

}


// Saxon
class Saxon extends Soldier { 

  receiveDamage (damage) {

    this.health = this.health - damage;
    return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
    
  }

}

// War
class War   {  constructor (){

   this.vikingArmy = [];
   this.saxonArmy = [];

}
   
   addViking(viking){

      this.vikingArmy.push(viking); 

   }
  
   addSaxon(saxon){

    this.saxonArmy.push(saxon); 

 }

 vikingAttack(){
  let x = Math.floor(Math.random()*this.saxonArmy.length);
  let randoSaxon = this.saxonArmy[x];
  let y =[Math.floor(Math.random()*this.vikingArmy.length)];
  let randoViking = this.vikingArmy[y];
   let finalScores =  randoSaxon.receiveDamage(randoViking.strength);
   
  if (randoSaxon.health<=0) this.saxonArmy.splice(x, 1) ; 
   
   return finalScores ;

 }

saxonAttack(){
  let v = Math.floor(Math.random()*this.saxonArmy.length);
  let randoSaxon = this.saxonArmy[v];
  let w =[Math.floor(Math.random()*this.vikingArmy.length)];
  let randoViking = this.vikingArmy[w];
   let finalScore =  randoViking.receiveDamage(randoSaxon.strength);
   
  if (randoViking.health<=0) this.vikingArmy.splice(w, 1) ; 
   
   return finalScore ;
 }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
