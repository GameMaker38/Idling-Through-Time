<<<<<<< HEAD

//huge thanks to StellarX20 for helping with code!

// variables

let timeToQuarkMultiplier = 10
let time = 0
let quarks = 0
let quarkReq = 25
let antiquarks = 0
let photons = 0
let gluons = 0
let photonToGluonReq = 10
let quarkMult = 1
let timeMult = 1
let photonMult = 1
let gluonMult = 1

//other functions

function displayElementAsVariable(elementId, displayVariable) {
    var elementVariable = document.getElementById(elementId)
    elementVariable.innerHTML = displayVariable
}
function quarkToTimeDynamicReq() {
    if (photons/3 < timeToQuarkMultiplier) {
        return timeToQuarkMultiplier - Math.floor(photons/3)
    }
    else {
        return 1
    }
}

//increment functions

function incrementTime(IncreaseNum) {
    time += IncreaseNum * timeMult;
    console.log('Time: ', time);
    displayElementAsVariable("timecounter", time);
}
function incrementQuarks(IncreaseNum) {
    if (time >= quarkToTimeDynamicReq()) {
        var quarkElement = document.getElementById("quarkcounter");
        quarks += IncreaseNum * quarkMult;
        time = time - (IncreaseNum*timeToQuarkMultiplier);
        displayElementAsVariable("timecounter", time);
        console.log('Time: ', time);
        console.log('Quarks: ', quarks);
        quarkElement.innerHTML = quarks;
    }
    else {
        alert(`Not enough time.`);
    }
}

function incrementAntiQuarks(IncreaseNum) {
    if (time >= quarkToTimeDynamicReq()) {
        var antiQuarkElement = document.getElementById("antiquarkcounter");
        antiquarks += IncreaseNum * quarkMult;
        time = time-(IncreaseNum*quarkToTimeDynamicReq());
        displayElementAsVariable("timecounter", time);
        console.log('Time: ', time);
        console.log('Antiquarks: ', antiquarks);
        antiQuarkElement.innerHTML = antiquarks;
    }
    else {
        alert(`Not enough time.`)
    }
}

function incrementPhotons(IncreaseNum) {
    photons += IncreaseNum * photonMult;
    console.log('Photons: ', photons)
    displayElementAsVariable('photoncounter', photons)
}

function incrementGluons(IncreaseNum) {
    if (photons >= photonToGluonReq) {
        gluons += IncreaseNum * gluonMult;
        photons -= (IncreaseNum*photonToGluonReq)
        console.log('Gluons: ', gluons)
        console.log('Photons: ', photons)
        displayElementAsVariable('photoncounter', photons)
        displayElementAsVariable('gluoncounter', gluons)
    }
    else {
        alert(`Not enough photons.`)
    }
}

//upgrade functions

function buyUpgrade(upgradeID) {
    if (upgradeID = 'timeDilation' && quarks >= 50) {
        quarks -=50;
        displayElementAsVariable('quarkcounter', quarks);
        console.log(`Upgrade Bought.`);
        alert(`Upgrade bought.`);
        increaseTimeMult(quarks/10);
    }
}

// mult functions

function increaseTimeMult(mult) {
    timeMult += mult;
}

function increaseQuarkMult(mult) {
    quarkMult += mult;
}

function increasePhotonMult(mult) {
    photonMult += mult
}

function increaseGluonMult(mult) {
    gluonMult += mult
}    

//playing with quarks

function playWithQuarks() {
    if (quarks + antiquarks >= quarkReq) {
        incrementTime(10);
        if (Math.random() < 0.1) {
            quarkChanceResult()
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
function quarkChanceResult() {
    if (Math.random() < 0.9) { 
        if (Math.random() < 0.5) {
            incrementQuarks(-1)
        }
        else {
            incrementAntiQuarks(-1)
        }
    }
    else if (quarks > 0 & antiquarks > 0) {
        incrementQuarks(-1)
        incrementAntiQuarks(-1)
        incrementPhotons(1)
        alert(`Your quarks annihilated eachother!`)
    }
}


>>>>>>> 0152e3624b6700755296e7f5a11d5f60112bb15a
