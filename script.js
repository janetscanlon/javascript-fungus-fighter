// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

//create state variables: 
let fungusHP = 100;
let userAP = 100;


//create onAttack functions 

function onArcane(){
    //update the state variables for the changes after Arcane Attack 
    fungusHP -= 14;
    userAP -= 12; 
}
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that -> decrease user AP and decrese fungus HP depending on which attack user chose  
    // - Updates state which is -> Arcane Scepter
                // AP Cost: 12
                // HP Damage: 14
                // entangle Entangle
                // AP Cost: 23
                // HP Damage: 9
                // dragon blade Dragon Blade
                // AP Cost: 38
                // HP Damage: 47
                // star fire Star Fire
                // AP Cost: 33
                // HP Damage: 25
    // - Rendered to the DOM -> updated AP/HP counts and fungus class depending on if the user wins or loses 