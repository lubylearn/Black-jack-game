// let featuredPosts = ["check out my netflix clone", "here is code for my project", "i have relaunched my portfolio"]

// featuredPosts(featuredPosts[0])

// let myLife = ["am 21", "student", "frontend", "people counter"]

// comfirmation push and pop ---------------------------------------------

// let cards = [7, 4]

// cards.push(6)

// console.log(cards)

// let messages = ["hola muy bien", "el hotel esta cerrado", "tu tren esta aqui"]


// let newMessages = "hola que pasa"

// messages.push(newMessages)
// console.log(messages)

// messages.pop()
// console.log(newMessages)

// counting --------------------------------------

// for (let count =10; count < 21; count +=1){

//     console.log(count)
// }

// loop -----------------------------------------
// for (let i = 0; i < 6; i+=1) {
//     console.log(i)
// }

// for (let i = 10; i < 101; i+=10) {
//     console.log(i)
// }

// let cards = [7, 3, 9]

// for (let i = 0; i < cards.length; i ++) {
//     console.log(cards[i])
// }

// let sentence = ["hello", "my", "name", "is", "per"]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++){
//     greetingEl.textContent += sentence[i] + ""
// }


// Return values -----------------------------------
// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//     if (player1Time < player2Time){
//         return player1Time
//     } else if (player2Time < player1Time){
//         return player2Time 
//     }else {
//         return player1Time
//     }

// }

// let fastestRace = getFastestRaceTime()
//  console.log(fastestRace)

// function totalRaceTime() {
//     return player1Time + player2Time
// }

// let totalTime = totalRaceTime()

// console.log(totalTime)

// math Random --------------------------------------

// let randomNumber = Math.random() * 6

// console.log(randomNumber)

// let flooredNumber = Math.floor(3.45632)

// console.log(flooredNumber)

// let randomNumber = Math.floor(Math.random() * 6) + 1
// console.log(randomNumber)

// function rollDice () {
//     let randomNumber = Math.floor(Math.random() * 6) + 1
//     return randomNumber
// }
// console.log(rollDice())

// logical operator------------------------------------

// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate ===true) {
//         generateCertificate()
// }

// function generateCertificate() {
//     console.log("generating certificate....")
// }
// ==================================
// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if (hasSolvedChallenge === false && hasHintsLeft === false){
//     showSolution()
// }

// function showSolution() {
//     console.log("show solution...........")
// }

// =======================================

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if (hasSolvedChallenge === true || hasHintsLeft === false ){
//     showSolution()
// }

// function showSolution() {
//     console.log("show solution...........")
// }

// ----------------------------------------------
// let likesDocumentaries = true
// let likesStartups = false

// if (likesDocumentaries === true || likesStartups === true)
// recommendMovie()

// function recommendMovie() {
//     console.log("alaye you nor like watch this movie e nice")
// }


// objects ---------------------------------------------

// let course = {
//     title: "learn css grid course for free",
//     lessons: 16,
//     creator: "emoghene",
//     length: 63,
//     level: 2, 
//     isFree: true,
//     tags: ["html", "css"]
// }

// console.log(course.tags)

// let groundbnb = {
//     hotel1: "westland hotel",
//     price: 67,
//     time: 4,
//     location: "ughelli",
//     flexing: ["girls", "highness"]
// }

// console.log(groundbnb.flexing)

// --------------- Practice Zone -------------------------//

// object ====================================
//  let person = {
//     name: "Ejeta Kelvin Emoghene",
//     age: 20,
//     country: "Nigeria"
//  }

//  function logData() {
//     console.log(person.name + " is " + person.age + " and leaves in " + person.country)
//  }

// logData()

// if and else statement=================================
// let age = 89

// if (age < 6 ){
//     console.log("free transport")
// } else if (age < 18){
//     console.log("child discount")
// }else if(age < 27){
//     console.log("student discount")
// }else if(age < 67){
//     console.log("full price")
// }else {
//     console.log("senior citizen discount")
// }

// Loop and Arrays===================================
// let largeCountries = ["China", "india", "USA", "Indonesia", "pakistan"]

// console.log("largest countries in the world")

// for (let i = 0; i < largeCountries.length; i++){
//     console.log("- " + largeCountries[i])
// }

// push pop shift and unshift ======

// let largeCountries = ["Tuvalu", "india", "USA", "Indonesia", "Monaco"]

// console.log("largest countries in the world")
// largeCountries.pop()
// largeCountries.push("pakistan")
// largeCountries.shift(0)
// largeCountries.unshift("China")


// for (let i = 0; i < largeCountries.length; i++){
// console.log("- " + largeCountries[i])
// }

// Logical Operators ===============================================
// let monthDays = 13
// let weekday = "friday"

// if (monthDays === 13 && weekday === "friday"){
//     console.log("😲😱😱")
// }

// let hands = ["rock", "paper", "scissor"]

// function getHand() {
//     let randomIndex = Math.floor(Math.random() * 3) 
//     return hands[randomIndex]
// }

// console.log( getHand())

// Sorting fruits ==================================================


// let fruits = ["🍎", "🍊", "🍊", "🍎", "🍎"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// function sortFruit() {
// for (i = 0; i < fruits.length; i++){
//   if (fruits[i] === "🍎") {
//     appleShelf.textContent += "🍎"
//   } else if (fruit[i] === "🍊"){
//     orangeShelf.textContent += "🍊"
//   }
// }
// }