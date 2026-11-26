// start search js
let allProducts =[]


let fetchData =async()=>{
    try {
        let res=await fetch("http://localhost:3000/allProducts")
        let data=await res.json()
        allProducts=data
        render(allProducts)
    } 
    
catch (err) {
    console.error(err)
}}
function render(products){
    let container=document.querySelector(".cards-search")
    container.innerHTML=""

    products.forEach((elem) => {
        container.innerHTML+=`
          <a href="./course-detail.html?id=${elem.id}"
   class="flex-none w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.34px)] xl:w-[calc(25%-15px)]">
    <div class="h-full bg-white dark:bg-[#0A0A0A]  rounded-[20px] p-3 md:p-4 2xl:p-[18px] shadow-[0px_19px_47px_#2F327D1A] dark:shadow-none flex flex-col gap-2 md:gap-3">

      <img class="w-full rounded-[15px] aspect-[4/3] object-cover transition-all duration-500 ease-out hover:scale-105" src="${elem.img}" alt="${elem.title}">

      <div class="flex items-center justify-between text-[10px] md:text-xs 2xl:text-sm text-[#696984]">
        <span class="flex items-center gap-1">
          <svg class="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
          </svg>
          ${elem.category}
        </span>
        <span class="flex items-center gap-1">
          <svg class="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
          </svg>
          ${elem.duration}
        </span>
      </div>

      <h3 class="text-base md:text-lg 2xl:text-xl font-medium  text-[#252641] dark:text-[#f5f5f5]">${elem.title}</h3>
      <p class="text-xs md:text-sm 2xl:text-base  text-[#696984] dark:text-[#b8b8c8] line-clamp-3">${elem.description}</p>

      <div class="mt-auto flex items-center justify-between">
        <span class="flex items-center gap-2">
          <img class="w-6 h-6 md:w-7 md:h-7 2xl:w-9 2xl:h-9 rounded-full transition-all duration-500 ease-out hover:scale-105" src="${elem.teacherImage}" alt="${elem.teacher}">
          <span class="text-xs md:text-sm 2xl:text-base text-[#252641]">${elem.teacher}</span>
        </span>
        <span class="flex items-baseline gap-2">
          <s class="text-[10px] md:text-xs 2xl:text-sm text-[#696984] ">$${elem.oldPrice}</s>
          <b class="text-sm md:text-base 2xl:text-xl text-[#49BBBD]">$${elem.price}</b>
        </span>
      </div>
    </div>
  </a>`
  

        
        
        
    });
}
let input =document.querySelector(".input-search")
input.addEventListener("input",(e)=>{
let harchi=e.target.value.toLowerCase().trim()

let filteredProducts=allProducts.filter(product=>

product.title.toLowerCase().includes(harchi)
)
render(filteredProducts)

})
fetchData()






// start recommend deta
let showeDetaswiperRecommend=()=>{
let xml=new XMLHttpRequest()
xml.open("get","http://localhost:3000/courses")
xml.responseType="json"
xml.onload=()=>{
xml.response.forEach((elem)=>{
  document.querySelector("div.swiper-wrapper-recommend").innerHTML+=
  `
  
   <a href="./course-detail.html?id=${elem.id}" class="swiper-slide h-auto swiper-slide !h-auto !flex">
    <div class="h-full bg-white rounded-[20px] p-3 md:p-4 2xl:p-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col gap-2 md:gap-3">

      <img class="w-full rounded-[15px] aspect-[4/3] object-cover" src="${elem.img}" alt="${elem.title}">

      <div class="flex items-center justify-between text-[10px] md:text-xs 2xl:text-sm text-[#696984]">
        <span class="flex items-center gap-1">
          <svg class="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
          </svg>
          ${elem.category}
        </span>
        <span class="flex items-center gap-1">
          <svg class="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
          </svg>
          ${elem.duration}
        </span>
      </div>

      <h3 class="text-base md:text-lg 2xl:text-xl font-medium text-[#252641]">${elem.title}</h3>
      <p class="text-xs md:text-sm 2xl:text-base text-[#696984] line-clamp-3">${elem.description}</p>

      <div class="mt-auto flex items-center justify-between">
        <span class="flex items-center gap-2">
          <img class="w-6 h-6 md:w-7 md:h-7 2xl:w-9 2xl:h-9 rounded-full" src="${elem.teacherImage}" alt="${elem.teacher}">
          <span class="text-xs md:text-sm 2xl:text-base text-[#252641]">${elem.teacher}</span>
        </span>
        <span class="flex items-baseline gap-2">
          <s class="text-[10px] md:text-xs 2xl:text-sm text-[#696984]">$${elem.oldPrice}</s>
          <b class="text-sm md:text-base 2xl:text-xl text-[#49BBBD]">$${elem.price}</b>
        </span>
      </div>
    </div>
  </a>`
  
  
  
  
})
}
xml.onerror=()=>{
console.log("error")
}
xml.send(null)
}

showeDetaswiperRecommend()


// end recommend deta
const recommendSwiper = new Swiper('.recommend-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    640:  { slidesPerView: 2, spaceBetween: 20 },
  1024: { slidesPerView: 3, spaceBetween: 24 },
  1280: { slidesPerView: 4, spaceBetween: 24 },

  },
  navigation: {
    nextEl: '.recommend-next',
    prevEl: '.recommend-prev',
  },

});
// start techer section js

let showeDatatecher=()=>{
  let xml=new XMLHttpRequest()
  xml.open("get","http://localhost:3000/instructors")
  xml.responseType="json"
  xml.onload=()=>{
    xml.response.slice(0, 6).forEach((elem)=>{
      document.querySelector("div.instructors-details ").innerHTML+=`
      
      <a href="" class="block w-full max-w-sm sm:w-[calc(50%-0.75rem)] sm:max-w-none lg:w-[calc(33.333%-1rem)]">
            <div
                class="relative bg-white px-4 pb-6 pt-[70px] text-center shadow-[0_0_4px_rgba(0,0,0,0.25)] md:px-6 md:pb-8 md:pt-20 xl:pt-[88px]">
                <img src=${elem.image} alt=${elem.name}
                    class="absolute left-1/2 top-0 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 object-cover md:h-[120px] md:w-[120px] xl:h-[138px] xl:w-[138px]" />
                <h1 class="name-techer text-[24px] text-[#252641] font-medium">${elem.name}</h1>
                <p class="text-[18px] text-[#696984]">
                ${elem.description}
                    
                    </p>
            </div>
            </a>
      
      
      `
    })
  }


  xml.onerror=()=>{

    console.log("errore")
  }
  xml.send(null)
}
showeDatatecher()



// start section offers-list

let showeDataoffers=()=>{
  let xml=new XMLHttpRequest()

  xml.open("get","http://localhost:3000/courses")
  xml.responseType="json"
  xml.onload=()=>{
    xml.response.slice(0,3).forEach((elem)=>{
      document.querySelector("div.offers-list").innerHTML+=`
      <a href="course-detail.html?id=${elem.id}"
   class="block  h-72 w-full max-w-md shrink-0 overflow-hidden rounded-[20px] bg-cover bg-center sm:h-80 sm:w-[calc(50%-0.75rem)] sm:max-w-none lg:h-64 lg:w-[calc(33.333%-1rem)] xl:h-72 2xl:h-[420px] transition-all duration-500 ease-out hover:scale-105"
   style="background-image: url('${elem.img}');">

  <div class="flex h-full flex-col  bg-black/40 p-8 text-white lg:p-5 xl:p-6 2xl:p-10 ">
    <span class="flex h-20 w-20 shrink-0 items-center justify-center rounded-[10px] bg-[#4DBFBA] text-[32px] font-semibold lg:h-14 lg:w-14 lg:text-2xl xl:h-16 xl:w-16 xl:text-[28px] 2xl:h-24 2xl:w-24 2xl:text-[40px]">${elem.count}%</span>
    <p class="mt-6 text-xl font-semibold lg:mt-4 lg:text-base xl:mt-5 xl:text-lg 2xl:text-2xl mt-[20px]">${elem.title}</p>
    <p class="mt-2 line-clamp-4 text-sm lg:text-xs xl:text-[13px] 2xl:text-base">${elem.description}</p>
  </div>
</a>




      
      `
    })
  }
  xml.onerror=()=>{


    console.log("errore")
  }
  xml.send(null)
}

showeDataoffers()

// end section offers-list