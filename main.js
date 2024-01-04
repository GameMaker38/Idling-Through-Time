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
    if (gluons >= 3 &&  quarks >= 3) {
    photons += IncreaseNum;
    gluons -= IncreaseNum * 3;
    quarks -= IncreaseNum * 3;
    displayElementAsVariable('gluoncounter', gluons);
    displayElementAsVariable('quarkcounter', quarks);
    displayElementAsVariable('protoncounter', protons);
    }
    else {
        console.log("Not enough resources to increment protons.");
    }
}

//upgrade functions

function buyUpgrade(upgradeID) {
    if (upgradeID = 'timeDilation' && quarks >= 25) {
        quarks -=25;
        displayElementAsVariable('quarkcounter', quarks);
        increaseTimeMult(.1);
        log("Somehow, after colliding a few dozen quarks, time now runs 10% faster.")
    }

    if (upgradeID = 'electroMagnetism' && electrons >= 5 && protons >= 5) {
        electrons -=5;
        protons -=5;
        log("Particles now repel and attract. Maybe you can combine larger things with this?");
    }

    if (upgradeID = 'quarkMultiplication' && quarks >= 50) {
        quarks -=50;
        quarkMult += 1
        log("After studying how quarks work (didn't you create them?), you can now turn photons into pairs of quarks.");
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