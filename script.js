function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  arrayOfhealthWishes = [
    "I wish you strong health and strength!",
   "May illnesses stay away from you.",
    "I wish you true love that will always be by your side!",
    "Live without stress and in harmony with your soul.",
    "May every day bring you joy!",
  ];

  
    document.getElementById("btn_health_wishes").addEventListener("click", () => {
    document.getElementById("p-health-wishes").innerHTML = arrayOfhealthWishes[getRandomInt(4)];
    });
  
    const arrayOfImages = [
      "1.jpg",
      "2.jpg",
      "3.jpg"
    ]
  
    let countOfpills = 5;
    document.getElementById("count-of-tablets").innerText = "💊".repeat(
      countOfpills
    );
    document.getElementById("btn_health_wishes").addEventListener("click", () => {
      let index = Math.floor(Math.random() * arrayOfhealthWishes.length);
      document.getElementById("p-health-wishes").innerText =
        arrayOfhealthWishes[index];
    
      countOfpills--;
      console.log(countOfpills);
      document.getElementById("count-of-tablets").innerText =
        "💊".repeat(countOfpills) + "❌".repeat(5 - countOfpills);
      console.log("💊".repeat(countOfpills) + "❌".repeat(5 - countOfpills));
      if (countOfpills === 0) {
        console.log("countOfpills = 0");
        document.getElementById("btn_health_wishes").style.display = "none";
      }
    });
    
    document.getElementById("btn-buy-tablets").addEventListener("click", () => {
      countOfpills = 5;
      console.log(countOfpills);
      document.getElementById("count-of-tablets").innerText = "💊".repeat(
        countOfpills
      );
      document.getElementById("btn_health_wishes").style.display = "inline-block";
    });
    
    let galleryImage = 1
  
    document.getElementById("main-image").setAttribute("src",`img/gallery/${arrayOfImages[galleryImage-1]}`)
      
      document.getElementById("right-arrow").addEventListener('click', ()=>{
        galleryImage++
        console.log(galleryImage)
      
        if(galleryImage == 4)
           {galleryImage = 1}
  
        document.getElementById("main-image").setAttribute("src",`img/gallery/${arrayOfImages[galleryImage-1]}`)
      })
  
      document.getElementById("left-arrow").addEventListener('click', ()=>{
        galleryImage++
        console.log(galleryImage)
      
        if(galleryImage == 4)
           {galleryImage = 1}
  
        document.getElementById("main-image").setAttribute("src",`img/gallery/${arrayOfImages[galleryImage-1]}`)
      })

      function amin(galleryImage) {
  const mainImage = document.getElementById('main-image');
  mainImage.style.opacity = '0'; // Почати з прозорості
  mainImage.setAttribute('src', `img/gallery/${arrayOfGalleryImages[galleryImage]}`);
  setTimeout(() => {
    mainImage.style.opacity = '1'; // Показати зображення
  }, 300); // Час анімації має співпадати з transition у CSS
}

      
const arrayOfVitamins = [
  {
    id:"001",
    title:"Аевіт",
    photo:"vitamin.png",
    description:"Aevit is a vitamin supplement containing A (retinol) and E (tocopherol). It supports skin, vision, immunity, and has antioxidant properties. Used for vitamin deficiency, skin, and eye health. Contraindicated in hypervitaminosis, pregnancy, and liver or kidney issues. Take as prescribed.",
    rating:2,
    type:"Crystalline"
  },
  {
    id:"002",
    title:"Вітімін С",
    photo:"vitamin-c.png",
    description:"Vitamin C (ascorbic acid) is a powerful antioxidant that supports the immune system, skin health, and wound healing. It aids collagen production, enhances iron absorption, and protects cells from damage. Found in citrus fruits, berries, and vegetables. Deficiency can cause scurvy.",
    rating:4,
    type:"Water-soluble"
  },
  {
    id:"003",
    title:"Вітамін D",
    photo:"vitamin-d.png",
    description:"Vitamin D is essential for calcium absorption, bone health, and immune function. It helps prevent rickets and osteoporosis. The body produces it through sunlight exposure, and it is also found in fish, eggs, and fortified foods. Deficiency can lead to weak bones and immunity issues.",
    rating:3,
    type:"Crystalline"
  },
  {
    id:"004",
    title:"Вітамін B3",
    photo:"vitamins-B3.png",
    description:"Vitamin B3 (niacin) supports energy production, metabolism, and nervous system health. It helps lower cholesterol and improve skin function. Found in meat, fish, nuts, and whole grains. Deficiency can cause pellagra, leading to dermatitis, diarrhea, and dementia.",
    rating:1,
    type:"Water-soluble"
  },
  {
    id:"005",
    title:"Омега-3",
    photo:"omega-3.png",
    description:"Omega-3 fatty acids are essential fats that support heart, brain, and joint health. They reduce inflammation, improve cholesterol levels, and aid in cognitive function. Found in fatty fish, flaxseeds, and walnuts. Deficiency may lead to heart issues, fatigue, and dry skin.",
    rating:4,
    type:"Water-soluble"
  },
  {
    id:"006",
    title:"Magnesium",
    photo:"magneum.png",
    description:"Magnesium is a vital mineral that supports muscle and nerve function, heart health, and energy production. It helps regulate blood pressure, bone strength, and stress levels. Found in nuts, seeds, whole grains, and leafy greens. Deficiency may cause muscle cramps, fatigue, and anxiety.",
    rating:5,
    type:"Crystalline"
  }
]

console.log(arrayOfVitamins)

arrayOfVitamins.forEach((item,index) =>{
  //console.log("елемент №",index.item)

  let divVitamin = document.createElement('div')
  //divVitamin.innerText = item.title 
  
  divVitamin.innerHTML = `
          <p>${item.id}</p>
          <h3>${item.title}</h3>
          <hr>
          <img src="img/vitamins/${item.photo}" alt="">
          <p>${item.description}</p>
          <p>${"💚". repeat(item.rating)+'🤍'.repeat(5-item.rating)}</p>
          <p>${item.type}</p>
          </div>
          `
  divVitamin.classList.add('vitamin')

  document.getElementById("p-vitamins").appendChild(divVitamin)
})