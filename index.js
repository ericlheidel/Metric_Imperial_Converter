/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let num = 0
let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthString = document.getElementById("length-string")
let volumeString = document.getElementById("volume-string")
let massString = document.getElementById("mass-string")

convertBtn.addEventListener("click", function() {
    num = inputEl.value
    convertLength()
    convertVolume()
    convertMass()
})


function convertLength() {
    if (num === "") {
        lengthString.textContent = `0 meters = 0.000 feet | 0 feet = 0.000 meters`
    } else {
        let feet = (num * 3.281).toFixed(3)
        let meters = (num / 3.281).toFixed(3)
        lengthString.textContent = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`
    }
}

function convertVolume() {
    if (num === "") {
        volumeString.textContent = `0 liters = 0.000 gallons | 0 gallons = 0.000 liters`
    } else {
        let gallons = (num * 0.264).toFixed(3)  
        let liters = (num / 0.264).toFixed(3)
        volumeString.textContent = `${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters`
    }
}

function convertMass() {
    if (num === "") {
        massString.textContent = `0 kilos = 0.000 pounds | 0 pounds = 0.000 kilos`
    } else {
        let pounds = (num * 2.204).toFixed(3)
        let kilos = (num /2.204).toFixed(3)
        massString.textContent = `${num} kilos = ${pounds} pounds | ${num} pounds = ${kilos}`
    }
}