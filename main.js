//huge thanks to StellarX20 for helping with code!



// variables

let time = 0;
let quarks = 0;
let gluons = 0;
let photons = 0;
let protons = 0;
let electrons = 0;

let quarkMult = 1;
let timeMult = 1;
let photonMult = 1;
let gluonMult = 1;

let difficulty = 1;

//display html element as variable or string

function displayElementAsVariable(elementId, displayVariable) {
    var elementVariable = document.getElementById(elementId);
    elementVariable.innerHTML = displayVariable
}

//hide html element

function hide(elementId) {
      elementId.style.display = "none";
  }

//show html element

function show(elementId) {
      elementId.style.display = "block";
  }

//show string on log element

function log(string) {
    displayElementAsVariable("log", string);
}

//increase mult variable

function increaseMult(mult, increaseAmount) {
    mult += increaseAmount;
}

//change difficulty

function difficulty(dif) {
    var difficulty = dif;
}

//increment functions

function incrementTime(IncreaseNum) {
    time += IncreaseNum * timeMult;
    console.log('Time: ', time);
    displayElementAsVariable("timecounter", time);
}
function incrementQuarks(IncreaseNum) {
    if (photons >= (IncreaseNum * difficulty)) {
        quarks += (IncreaseNum * quarkMult);
        photons -= (IncreaseNum * difficulty);
        displayElementAsVariable('photoncounter', photons);
        displayElementAsVariable('quarkcounter', quarks);
    }
    else {
        console.log("Not enough resources to increment quarks.")
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
    if (gluons >= (3 * difficulty) &&  quarks >= (3 * difficulty)) {
    photons += IncreaseNum;
    gluons -= (IncreaseNum * 3 * difficulty);
    quarks -= (IncreaseNum * 3 * difficulty);
    displayElementAsVariable('gluoncounter', gluons);
    displayElementAsVariable('quarkcounter', quarks);
    displayElementAsVariable('protoncounter', protons);
    }
    else {
        console.log("Not enough resources to increment protons.");
    }
}

//upgrade functions mult

function buyUpgrade(upgradeID) {
    if (upgradeID = 'timeDilation' && quarks >= (25 * difficulty)) {
        quarks -= (25 * difficulty);
        displayElementAsVariable('quarkcounter', quarks);
        increaseMult(timeMult, .1)
        log("Somehow, after colliding a few dozen quarks, time now runs 10% faster.")
    }

    if (upgradeID = 'electroMagnetism' && electrons >= (5 * difficulty) && protons >= (5 * difficulty)) {
        electrons -= (5 * difficulty);
        protons -= (5 * difficulty);
        log("Particles now repel and attract. Maybe you can combine larger things with this?");
    }

    if (upgradeID = 'quarkMultiplication' && quarks >= 50) {
        quarks -= (50 * difficulty);
        increaseMult(quarkMult, 1);
        log("After studying how quarks work (didn't you create them?), you can now turn photons into pairs of quarks.");
    }

    if (upgradeID = 'lighterPhotons' && photons >= (25 * difficulty) && electrons >= (25 * difficulty)) {
        quarks -= (50 * difficulty);
        increaseMult(photonMult, 1)
        log("After tinkering with photons, you can now produce 2 per click!");
    }
}