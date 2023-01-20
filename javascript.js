// document.getElementById("count").innerText = 5

// initialize count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count in the html to reflect the new count


let count = 0

let countEl = document.getElementById("count")

console.log(countEl)

function increment() {
    count += 1
    countEl.textContent = count 
}

saveEl = document.getElementById('save-el')

function save() {
    let paragraph = count + ' - '
    saveEl.textContent += paragraph 
    console.log(saveEl.innerText)

    count = 0
    countEl.textContent = count
}




