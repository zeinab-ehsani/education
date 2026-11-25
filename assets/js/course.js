const welcomeSwiper = new Swiper('.welcome-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    640: { slidesPerView: 3 },
    1024: { slidesPerView: 3 },

  },
  navigation: {
    nextEl: '.welcome-next',
    prevEl: '.welcome-prev',
  },

});
// end swiper welcome

let showeDetaswiperwelcom = () => {
  let xml = new XMLHttpRequest()
  xml.open("get", "http://localhost:3000/welcomeCourses")
  xml.responseType = "json"
  xml.onload = () => {


    xml.response.forEach((elem) => {
      document.querySelector("div.swiper-wrapper").innerHTML += `
                    

           <div class="swiper-slide h-auto">
           <a href="./course-full-view.html">
  <div class="h-full flex flex-col gap-2 md:gap-3 bg-white rounded-[20px] p-3 md:p-4 2xl:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">

    <img class="w-full rounded-xl aspect-[3/2] object-cover"
         src=${elem.image} alt="">

    <h3 class="text-sm md:text-base 2xl:text-xl font-medium text-[#252641]">
     ${elem.title}
    </h3>

    <div class="flex items-center gap-2">
      <img class="w-6 h-6 md:w-8 md:h-8 2xl:w-[42px] 2xl:h-[42px] rounded-full"
           src="./assets/img/Course/linaprofile.svg" alt="">
      <span class="text-xs md:text-sm 2xl:text-base text-[#252641]">Lina</span>
    </div>

     <div class="w-full">
    <progress class="progress progress-accent w-56" value="${elem.completed}" max="${elem.total}"></progress>

    <p class="text-[10px] md:text-xs text-right text-[#696984]">Lesson  ${elem.total} of  ${elem.completed}</p>

    </div>
  </div>
      </a>

</div>

    
    
    
    
    `
    });
  }

  xml.onerror = () => {
    console.log("hey ")
  }
  xml.send(null)
}
showeDetaswiperwelcom()

// end swiper welcome


// start section category

let showeDetaCategory = () => {
  let xml = new XMLHttpRequest()
  xml.open("get", "http://localhost:3000/categories")
  xml.responseType = "json"
  xml.onload = () => {
    xml.response.forEach((elem) => {
      document.querySelector("div.category").innerHTML += `
  
<a href="./search.html" class="card-category w-full sm:w-[calc((100%_-_var(--gap))/2)] lg:w-[calc((100%_-_3*var(--gap))/4)]
            bg-white dark:shadow-[0_0_0_1px_#ff1493,0_0_8px_#ff1493,0_0_20px_#ff149388,0_0_40px_#ff149344] rounded-[20px] flex flex-col justify-center items-center gap-2 md:gap-3 p-4 md:p-6 2xl:p-[30px] shadow text-center">

  <div class="flex items-center justify-center rounded-[4px] w-14 h-14 md:w-[70px] md:h-[70px] xl:w-20 xl:h-20 2xl:w-[90px] 2xl:h-[90px]"
       style="background-color:${elem.color}">
    <img class="w-6 h-6 md:w-8 md:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10" src="${elem.img}" alt="${elem.name}">
  </div>

  <h3 class="text-lg md:text-xl xl:text-2xl 2xl:text-[30px] font-semibold text-[#010514]">${elem.name}</h3>
  <p class="text-xs md:text-sm xl:text-base 2xl:text-[18px] text-[#696984]">${elem.description}</p>
</a>  
  `
    })
  }
  xml.onerror = () => {
    console.log("error")
  }
  xml.send(null)
}

showeDetaCategory()
// end section category

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


// start swiper recommend

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








// end swiper recommend
// start choice



let showeDetaswiperChoice=()=>{
let xml=new XMLHttpRequest()
xml.open("get","http://localhost:3000/courses")
xml.responseType="json"
xml.onload=()=>{
xml.response.forEach((elem)=>{
  document.querySelector("div.swiper-wrapper-choice").innerHTML+=
  `
  
   <a href="./course-detail.html?id=${elem.id}" class="swiper-slide h-auto swiper-slide !h-auto !flex">
    <div class="h-full bg-white dark:bg-[#0A0A0A] dark:border dark:border-[#00e5d4] rounded-[20px] p-3 md:p-4 2xl:p-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col gap-2 md:gap-3">

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

showeDetaswiperChoice()


// end choice deta


// start swiper choice

const choiceSwiper = new Swiper('.choice-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    640:  { slidesPerView: 2, spaceBetween: 20 },
  1024: { slidesPerView: 3, spaceBetween: 24 },
  1280: { slidesPerView: 4, spaceBetween: 24 },

  },
  navigation: {
    nextEl: '.choice-next',
    prevEl: '.choice-prev',
  },

});
// end swiper choice


// start development



let showeDetaswiperDevelopment=()=>{
let xml=new XMLHttpRequest()
xml.open("get","http://localhost:3000/development")
xml.responseType="json"
xml.onload=()=>{
xml.response.forEach((elem)=>{
  document.querySelector("div.swiper-wrapper-development").innerHTML+=
  `
  
   <a href="./course-detail.html?id=${elem.id}" class="swiper-slide h-auto swiper-slide !h-auto !flex ">
    <div class="h-full bg-white dark:bg-[#0A0A0A] dark:border dark:border-[#00e5d4] rounded-[20px] p-3 md:p-4 2xl:p-[18px] shadow-[0px_19px_47px_#2F327D1A]  flex flex-col gap-2 md:gap-3">

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

      <h3 class="text-base md:text-lg 2xl:text-xl font-medium text-[#252641]">${elem.title}</h3>
      <p class="text-xs md:text-sm 2xl:text-base text-[#696984] line-clamp-3">${elem.description}</p>

      <div class="mt-auto flex items-center justify-between">
        <span class="flex items-center gap-2">
          <img class="w-6 h-6 md:w-7 md:h-7 2xl:w-9 2xl:h-9 rounded-full" src="${elem.teacherImage}" alt="${elem.teacher}">
          <span class="text-xs md:text-sm 2xl:text-base text-[#252641]">${elem.teacher}</span>
        </span>
        <span class="flex items-baseline gap-2">
          <s class="text-[10px] md:text-xs 2xl:text-sm text-[#696984] ">$${elem.oldPrice}</s>
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

showeDetaswiperDevelopment()


// end development deta


// start swiper development

const developmentSwiper = new Swiper('.development-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    640:  { slidesPerView: 2, spaceBetween: 20 },
  1024: { slidesPerView: 3, spaceBetween: 24 },
  1280: { slidesPerView: 4, spaceBetween: 24 },

  },
  navigation: {
    nextEl: '.development-next',
    prevEl: '.development-prev',
  },

});
// end swiper development


// start viewing deta
let showeDetaswiperViewing=()=>{
let xml=new XMLHttpRequest()
xml.open("get","http://localhost:3000/studentViewing")
xml.responseType="json"
xml.onload=()=>{
xml.response.forEach((elem)=>{
  document.querySelector("div.swiper-wrapper-viewing").innerHTML+=
  `
  
   <a href="./course-detail.html?id=${elem.id}" class="swiper-slide h-auto swiper-slide !h-auto !flex  ">
    <div class="h-full bg-white dark:bg-[#0A0A0A]  rounded-[20px] p-3 md:p-4 2xl:p-[18px] shadow-[0px_19px_47px_#2F327D1A] dark:shadow-none flex flex-col gap-2 md:gap-3 ">

      <img class="w-full rounded-[15px] aspect-[4/3] object-cover transition-all duration-500 ease-out hover:scale-105" src="${elem.img}" alt="${elem.title}">

      <div class="flex items-center justify-between text-[10px] md:text-xs 2xl:text-sm text-[#696984] dark:text-[#b8b8c8]">
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

      <h3 class="text-base md:text-lg 2xl:text-xl font-medium text-[#252641] dark:text-[#f5f5f5]">${elem.title}</h3>
      <p class="text-xs md:text-sm 2xl:text-base text-[#696984] dark:text-[#b8b8c8] line-clamp-3">${elem.description}</p>

      <div class="mt-auto flex items-center justify-between">
        <span class="flex items-center gap-2">
          <img class="w-6 h-6 md:w-7 md:h-7 2xl:w-9 2xl:h-9 rounded-full transition-all duration-500 ease-out hover:scale-110" src="${elem.teacherImage}" alt="${elem.teacher}">
          <span class="text-xs md:text-sm 2xl:text-base text-[#252641] dark:text-[#f5f5f5]">${elem.teacher}</span>
        </span>
        <span class="flex items-baseline gap-2">
          <s class="text-[10px] md:text-xs 2xl:text-sm text-[#696984] dark:text-[#b8b8c8]">$${elem.oldPrice}</s>
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

showeDetaswiperViewing()


// end recommend deta


// start swiper recommend

const viewingSwiper = new Swiper('.viewing-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    640:  { slidesPerView: 2, spaceBetween: 20 },
  1024: { slidesPerView: 3, spaceBetween: 24 },
  1280: { slidesPerView: 4, spaceBetween: 24 },

  },
  navigation: {
    nextEl: '.viewing-next',
    prevEl: '.viewing-prev',
  },

});








// end swiper recommend
