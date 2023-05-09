$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;

let attackPower = 100;


function onReady() {
    $('.arcane-scepter').on('click', attackScepterbtn);
    $('.entangle').on('click', attackEntanglebtn);
    $('.dragon-blade').on('click', attackDragonBladebtn);
    $('.star-fire').on('click', attackStarFirebtn);

    

    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function showOnDom() {
    $('.ap-text').text(attackPower);
    $('.hp-text').text(fungusHP);
    fungusDead();


}


function attackScepterbtn(){
    attackPower-=12;
    fungusHP-=14
    if(attackPower<=0){
        attackPower=0
        
    };
    if(fungusHP<=0){
        fungusHP=0
        
    }
    showOnDom()



}
function attackEntanglebtn(){
   fungusHP-=9
   attackPower-=23
   if(attackPower<0){
    attackPower=0
   };
   if(fungusHP<0){
    fungusHP=0
   }
   showOnDom()
}
function attackDragonBladebtn(){
    fungusHP-=47;
    attackPower-=38
    if(attackPower<0){
        attackPower=0  
    };
    if(fungusHP<0){
        fungusHP=0
    }
    showOnDom()
}
function attackStarFirebtn(){
    fungusHP-=25;
    attackPower-=33
    if(attackPower<0){
        attackPower=0
    };
    if(fungusHP<0){
        fungusHP=0;
    }
    showOnDom();
}

function fungusDead(){





// step 1. get buttons to console.log
// step 2. get buttons to affect my ap
// step 3. get buttons to affect fungus health
// Last step. You may no longer attack, if AP is 0. 
//Give all of the attack buttons a disabled attribute, 
//so they may no longer be used.
