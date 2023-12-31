//huge thanks to StellarX20 for helping with code!



// variables

let time = 0
let quarks = 0
let gluons = 0
let photons = 0
let protons = 0
let electrons = 0

let quarkMult = 1
let timeMult = 1
let photonMult = 1
let gluonMult = 1

//display html element as variable or string

function displayElementAsVariable(elementId, displayVariable) {
    var elementVariable = document.getElementById(elementId);
    elementVariable.innerHTML = displayVariable
}

//increment functions

function incrementTime(IncreaseNum) {
    time += IncreaseNum * timeMult;
    console.log('Time: ', time);
    displayElementAsVariable("timecounter", time);
}
function incrementQuarks(IncreaseNum) {
    if (photons >= IncreaseNum) {
        quarks += IncreaseNum * quarkMult;
        photons -= IncreaseNum;
        displayElementAsVariable('quarkcounter', quarks);
    }
}
function incrementPhotons(IncreaseNum) {
    photons += IncreaseNum * photonMult;
    displayElementAsVariable('photoncounter', photons);
}

function incrementGluons(IncreaseNum) {
    gluons += IncreaseNum * gluonMult;
    displayElementAsVariable('gluoncounter', gluons);
}

function incrementElectrons(IncreaseNum) {
    electrons += IncreaseNum;
    displayElementAsVariable('electroncounter', electrons);
}

function incrementProtons(IncreaseNum) {
    photons += IncreaseNum;
    gluons -= IncreaseNum * 3;
    quarks -= IncreaseNum * 3;
    displayElementAsVariable('gluoncounter', gluons);
}

//upgrade functions

function buyUpgrade(upgradeID) {
    if (upgradeID = 'timeDilation' && quarks >= 50) {
        quarks -=50;
        displayElementAsVariable('quarkcounter', quarks);
        increaseTimeMult(.1);
        displayElementAsVariable('log', "Somehow, after colliding a few dozen quarks, time now runs 10% faster.")
    }

    if (upgradeID = 'electroMagnetism' && electrons >= 5 && protons >= 5) {
        electrons -=5;
        protons -=5;
        displayElementAsVariable('log', "Particles now repel and attract. Maybe you can combine larger things with this?");
    }

    if (upgradeID = 'quarkMultiplication' && quarks >= 50) {
        quarks -=50;
        quarkMult += 1
        displayElementAsVariable('log', "After studying how quarks work (didn't you create them?), you can turn photons into pairs of quarks.");
    }
}

// multiplier functions

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