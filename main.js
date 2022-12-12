//huge thanks to StellarX20 for helping with code!

// variables

let timeToQuarkMultiplier = 10
let time = 0
let quarks = 0
let quarkReq = 25
let timeMult = 1
let quarkMult = 1

//other functions

function displayElementAsVariable(elementId, displayVariable) {
    var elementVariable = document.getElementById(elementId)
    elementVariable.innerHTML = displayVariable
}

//increment functions

function incrementTime(timeIncreaseNum) {
    time += timeIncreaseNum * timeMult;
    console.log('Time: ', time);
    displayElementAsVariable("timecounter", time);
}
function incrementQuarks(quarkIncreaseNum) {
    if (time >= timeToQuarkMultiplier) {
        var quarkElement = document.getElementById("quarkcounter");
        quarks = Number(quarkElement.innerHTML);
        quarks += quarkIncreaseNum * quarkMult;
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

//upgrade functions

function buyUpgrade(upgradeID) {
    if (upgradeID = 'timeDilation' && quarks >= 50) {
        var quarks = quarks - 50;
        var quarkElement = document.getElementById("quarkcounter");
        console.log(`Upgrade Bought.`);
        alert(`Upgrade bought.`);
        increaseTimeMult(quarks/10)
    } 
}

// mult functions

function increaseTimeMult(mult) {
    timeMult += mult;
}

function increaseQuarkMult(mult) {
    quarkMult += mult;
}