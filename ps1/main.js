let score = 0;
//I used chatGPT and copy/pasted each of these functions separately to understand what they were doing line by line

function getRandomUnwhackedHoleId() {
    const inactiveHoles = document.querySelectorAll('.hole:not(.needs-whack)');  // Selects elements that have class "hole" but **not** "needs-whack"

    if(inactiveHoles.length === 0) {
        return null;
    } else {
        const randomIndex = Math.floor(Math.random() * inactiveHoles.length);
        return inactiveHoles[randomIndex].getAttribute('id');
    }
}

function getAllHoleIds() {
    const allHoles = document.querySelectorAll('.hole'); 
    const ids = [];
    for(const hole of allHoles) {
        ids.push(hole.getAttribute('id'));
    }
    return ids;
}
// Write code that *every second*, picks a random unwhacked hole (use getRandomUnwhackedHoleId)
// and adds the "needs-whack" class
const interval = setInterval(() => {
    console.log('TODO: Add the "needs-whack" class to a random hole');
    console.log(getRandomUnwhackedHoleId());
    const holeId = getRandomUnwhackedHoleId();
    console.log('calling holeId:' + holeId);
    const holeElement = document.getElementById(holeId);
    console.log('hole Element:' + holeElement);
    holeElement.classList.add('needs-whack');
    // }
}, 1000);

for(const id of getAllHoleIds()) {

    // Write code that adds a "click" listener to the element with this id
    //     When the user clicks on it, *if* the element has class "needs-whack" then:
    //          1. Remove the "needs-whack" class
    //          2. Add the "animating-whack" class *for 500 milliseconds*
    //          3. Increment the score by 1 (and update the score display)
    //          4. If the score is 45 or higher, stop the game (by clearing the interval)
    //I used chatGPT to help me figure out the structure of the code below in the if statement
    console.log(`TODO: Add a click listener for #${id} here`);
    console.log(id);
    const elementwhack = document.getElementById(id);
    elementwhack.addEventListener("click", function(){
        if (elementwhack.classList.contains("needs-whack")){
            elementwhack.classList.remove("needs-whack");
            elementwhack.classList.add("animating-whack");
            setTimeout(function() {
                elementwhack.classList.remove("animating-whack");
            }, 500);
        
        score ++ ;
        console.log("score" + score)
        document.getElementById("score").innerText = score;
            if (score >= 44){
                console.log("Game over");
                clearInterval(interval)
            }

        }
    ;  
    


/**
 * @returns a random ID of a hole that is "idle" (doesn't currently contain a mole/buckeye). If there are none, returns null
 */
// function getRandomUnwhackedHoleId() {
//     const inactiveHoles = document.querySelectorAll('.hole:not(.needs-whack)');  // Selects elements that have class "hole" but **not** "needs-whack"

//     if(inactiveHoles.length === 0) {
//         return null;
//     } else {
//         const randomIndex = Math.floor(Math.random() * inactiveHoles.length);
//         return inactiveHoles[randomIndex].getAttribute('id');
//     }
// }

/**
 * @returns a list of IDs (as strings) for each hole DOM element
 */
// function getAllHoleIds() {
//     const allHoles = document.querySelectorAll('.hole'); 
//     const ids = [];
//     for(const hole of allHoles) {
//         ids.push(hole.getAttribute('id'));
//     }
//     return ids;
// }})}
    })}