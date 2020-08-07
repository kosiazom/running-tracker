document.addEventListener("DOMContentLoaded", function(e) {
    console.log("The Dom has Loaded.")
});

const goal = 30;
let entries = [ ];
const ul = document.getElementById('entries');
document.getElementById('target').innerText = goal;


function addNewEntry(newEntry){
        //so before you add an entry you want to remove the first elementchild
    ul.removeChild(ul.firstElementChild)
    const li =  document.createElement('li')
    li.innerText = newEntry.toFixed(1)
    // li.appendChild(liValue);
    ul.append(li)

};

const form = document.querySelector('form')
    form.addEventListener('submit', function(e) {
    e.preventDefault()
    handleSubmit()
});

function reducer(total, currentValue) {
    return total + currentValue
}

function calcTotal(entries) {
    const totalValue = entries.reduce(reducer).toFixed(1);
    let total = document.getElementById('total');
    total.innerText = totalValue;

    let progressTotal = document.getElementById('progressTotal');
    progressTotal.innerText = totalValue;
    console.log(total, progressTotal);
}

function calcAverage(){
        let avg = (entries.reduce(reducer)/entries.length).toFixed(1);
        document.getElementById('average').innerText = avg;
    }

function weekHigh() {
   const high =  Math.max(...entries) ;//its giving me a NaN because Math.max is expecting a seris of numbers but since you are passing an array use the spread operator which will extract all the values inside array
document.getElementById('high').innerText = high;

}

function calcGoal() {
    const totalValue = entries.reduce(reducer).toFixed(1)
    const completedPercent = totalValue / (goal / 100);
    const progressCircle = document.querySelector('#progressCircle')
    if (completedPercent > 100 ) completedPercent === 100;
    progressCircle.style.background = `conic-gradient(#70db70 ${completedPercent}%, #242c34 ${completedPercent}% 100%)`;
    
}

function handleSubmit() {
        let inputEntry = Number(document.getElementById('entry').value); //user input
        
        if (!inputEntry) return; //if no entry has been made then reset form and push into the empty array
        form.reset();
        entries.push(inputEntry); //updates with the user input 
        addNewEntry(inputEntry);
        calcTotal(entries);
        calcAverage();
        weekHigh();
        calcGoal()

};

