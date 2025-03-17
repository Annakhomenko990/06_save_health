const arrayOfhealthWishes = [
    "Exercise regularly – At least 30 minutes a day.",
    "Get enough sleep – Aim for 7–9 hours per night.",
    "Manage stress – Try meditation or deep breathing.",
    "Maintain hygiene – Wash hands and keep clean.",
    "MStay active – Avoid sitting for long periods.",
    "Have regular check-ups – Visit your doctor yearly.",
    "Think positive – A healthy mind means a healthy body.",
];

let countofpills = 5
document.getElementById('count-of-tablets').innerText ="💊".repeat(countofpills)


document.getElementById('btn_health_wishes').addEventListener('click', () => {
let index = Math.floor(Math.random()* arrayOfhealthWishes.length)
document.getElementById('p-health-wishes').innerText = arrayOfhealthWishes[index]

countofpills--
console.log(countofpills)

document.getElementById('count-of-tablets').innerText="💊".repeat(countofpills) + "❌".repeat(5-countofpills);
console.log("💊".repeat(countofpills) + "❌".repeat(5-countofpills));

if (countofpills == 0){
console.log("countofpills = 0");
document.getElementById('btn_health_wishes').style.display = 'none';
 }

});

const arrayOfImages= [
    "1.jpg",
    "2.jpg", 
    "3.jpg",
    "4.jpg"
]

document.getElementById('btn_health_wishes').addEventListener('click', () => {
    let index = Math.floor(Math.random() * arrayOfHealthWishes.length)
    document.getElementById('p-health-wishes').innerText = arrayOfHealthWishes[index]
})

document.getElementById("main-image").setAttribute('src', `img/gallery/${arrayOfImages[galleryImage-1]}`)

document.getElementById("right-arrow").addEventListener('click', () => {
    galleryImage++
    console.log(galleryImage)

    if(galleryImage == arrayOfImages.length + 1) galleryImage = 1

    document.getElementById("main-image").setAttribute('src', `img/gallery/${arrayOfImages[galleryImage-1]}`)
})

document.getElementById("left-arrow").addEventListener('click', () => {
    galleryImage--
    console.log(galleryImage)

    if (galleryImage == 0) galleryImage = 3

    document.getElementById("main-image").setAttribute('src', `img/gallery/${arrayOfImages[galleryImage-1]}`)
})
