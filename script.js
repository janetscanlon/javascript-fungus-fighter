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

        // reassign value if userAP or fungusHP > 0
        if(userAP < 0 ){
            userAP = 0;
        }
        if(fungusHP < 0){
            fungusHP = 0;
        }
    renderAttack();

}


function onEntangle(){
        //update the state variables for the changes after Arcane Attack 
        fungusHP -= 9;
        userAP -= 23;

        // reassign value if userAP or fungusHP > 0
        if(userAP < 0 ){
            userAP = 0;
        }
        if(fungusHP < 0){
            fungusHP = 0;
        }
        
    renderAttack();

}


function onDragonBlade(){
        //update the state variables for the changes after Arcane Attack 
        fungusHP -= 47;
        userAP -= 38;

        // reassign value if userAP or fungusHP > 0
        if(userAP < 0 ){
            userAP = 0;
        }
        if(fungusHP < 0){
            fungusHP = 0;
        }
        
    renderAttack();

}

function onStarFire(){
        //update the state variables for the changes after Arcane Attack 
        fungusHP -= 25;
        userAP -= 33;

        // reassign value if userAP or fungusHP > 0
        if(userAP < 0 ){
            userAP = 0;
        }
        if(fungusHP < 0){
            fungusHP = 0;
        }
    
    renderAttack();
}

function renderAttack(){ 

    //select the user AP text
    let APAmount = document.getElementById('APAmount');
    
    //update the rendered APAmount with the new state variable 
    APAmount.textContent = userAP;
    
    //select the fungus HP text
    let fungusHPAmount = document.getElementById('fungusHPAmount');

    //update the rendered HPAmount with the new state variable 
    fungusHPAmount.textContent = fungusHP;

    // change class if fungusHP === 0 

    // if(fungusHP === 0){
    // // select the fungus class element 
    // let fungusClass = document.getElementById("freakyFungus")
    // //toggle the class with fungusdead element.classList.toggle("mystyle");
    
    // fungusClass.classList.toggle("freaky-fungus dead")
    // //fungusWalk.classList.toggle("freaky-fungus dead")
    // }

    if(userAP === 0){ 
        // add disabled attribute to all attack buttons 
        //select where to add the disabled attribute 
        let arcaneAttack = document.getElementsByClassName("attack-btn arcane-scepter")
        arcaneAttack.textContent= `<button disabled class="attack-btn arcane-scepter" onclick="onArcane()"></button>`
        
    }
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