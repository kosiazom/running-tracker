document.addEventListener("DOMContentLoaded", function(e) {
    console.log("The Dom has Loaded.")
});



let entries = [ ];
const ul = document.getElementById('entries')


function addNewEntry(newEntry){
    //so before you add an entry you want to remove the first child
ul.removeChild(ul.firstElementChild)
  const li =  document.createElement('li')
li.innerText = newEntry
// li.appendChild(liValue);
ul.append(li)

};

const form = document.querySelector('form')
form.addEventListener('submit', function(e) {
    e.preventDefault()
    handleSubmit()
});

function handleSubmit() {
    let inputEntry = Number(document.getElementById('entry').value) //user input

    if (!inputEntry) return; //if no entry has been made then reset form and push into the empty array
     form.reset();
     entries.push(inputEntry) //updates with the user input 
    addNewEntry(inputEntry)
};

