const arrayOfLoveWishes = [
    "May every day bring you joy and warmth!",
    "Wishing you love and happiness!",
    "May your love be eternal!",
    "Wishing you lots of love and happiness!",
    "May love always be with you!",
    "Wishing you lots of love.",
    "May your love be eternal! ❤️",
];

let countofpills = 5
document.getElementById('count-of-tablets').innerText ="💊".repeat(countofpills)


document.getElementById('btn_love_wishes').addEventListener('click', () => {
let index = Math.floor(Math.random()* arrayOfLoveWishes.length)
document.getElementById('love-wishes').innerText = arrayOfLoveWishes [index]

countofpills--
console.log(countofpills)

document.getElementById('count-of-tablets').innerText="💊".repeat(countofpills) + "❌".repeat(5-countofpills)
console.log("💊".repeat(countofpills) + "❌".repeat(5-countofpills))

if (countofpills== 0){
countofpills.log("countofpills =0")
document.getElementById('btn_health_wishes').style.display = 'none'
 }

})

document.getElementById("btn-buy-tablets").addEventListener('click',() => {
countofpills = 5;
console.log(countofpills);
document.getElementById('count-of-tablets').innerText ="💊".repeat(countofpills);
document.getElementById('btn_health_wishes').style.display = 'inline-block';
    })