// variables
let timeToQuarkMultiplier = 10
let time = 0
let quarks = 0
let quarkReq = 25
//other functions
function displayElementAsVariable(elementId, displayVariable) {
    var elementVariable = document.getElementById(elementId)
    elementVariable.innerHTML = displayVariable
}
//increment functions
function incrementTime(timeIncreaseNum) {
    time += timeIncreaseNum;
    console.log('Time: ', time);
    displayElementAsVariable("timecounter", time);
}
function incrementQuarks(quarkIncreaseNum) {
    if (time >= timeToQuarkMultiplier) {
        var quarkElement = document.getElementById("quarkcounter");
        quarks = Number(quarkElement.innerHTML);
        quarks += quarkIncreaseNum;
        time = time - (quarkIncreaseNum*timeToQuarkMultiplier);
        displayElementAsVariable("timecounter", time);
        console.log('Time: ', time);
        console.log('Quarks: ', quarks);
        quarkElement.innerHTML = quarks;
    }
    else {
        alert(`Not enough time.`);
    }
}
function playWithQuarks() {
    if (quarks >= quarkReq) {
        incrementTime(10);
        if (Math.random() < 0.1) {
            incrementQuarks(-1)
        }
        ++quarkReq
    }
    else {
      if (quarks > 0) {
        alert(`The quarks bore you.`);
        incrementTime(1);
      }
      else {
        alert(`You don't have any quarks.`);
      }
    }
}
