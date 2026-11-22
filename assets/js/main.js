let pairs = [
  ["bg-white", "bg-[#0A0A0A]"],

  // ["bg-white", "bg-[#161A20]"],
  ["bg-bg-blue", "bg-[#1B2A41]"],
  ["text-dark2", "text-[#f5f5f5]"],
  ["text-dark", "text-[#ff1493]"],

  // ["text-dark", "text-[#f5f5f5]"],
  ["text-[#010514]", "text-[#f5f5f5]"],
  ["text-[#010514CC]", "text-[#f5f5f5CC]"],

  //  ["text-white", "text-[#ff1493]"],

  ["text-white", "text-[#161A20]"],
  ["text-[#252641]", "text-[#f5f5f5]"],  
["text-[#696984]", "text-[#b8b8c8]"],   
["text-[#5F5F7E]", "text-[#b8b8c8]"],
]
let header=document.querySelector("header")
let groups = pairs.map(function (pair) {
  return document.querySelectorAll("." + CSS.escape(pair[0]))


})

dark.addEventListener("click", function () {
  document.documentElement.setAttribute("data-theme", "dark")
  header.style.backgroundImage="url('assets/img/img-home/header.dark3.png')"
  pairs.forEach(function (pair, i) {
    groups[i].forEach(el => el.classList.replace(pair[0], pair[1]))
  })
})

light.addEventListener("click", function () {
  document.documentElement.setAttribute("data-theme", "light")
  header.style.backgroundImage="url('assets/img/img-home/Header\ \(1\)new.svg')"
  pairs.forEach(function (pair, i) {
    groups[i].forEach(el => el.classList.replace(pair[1], pair[0]))
  })
})


// let bgItems = document.querySelectorAll(".bg-white")
// let textItems = document.querySelectorAll(".text-white")

// function setTheme(bg, text) {
//     bgItems.forEach(function (item) {
//         item.classList.remove("bg-white", "bg-[#2b2b2b]", "bg-[#faf7f5]")
//         item.classList.add(bg)
//     })

//     textItems.forEach(function (item) {
//         item.classList.remove("text-white", "text-black")
//         item.classList.add(text)
//     })
// }

// light.addEventListener("click", function () {
//     setTheme("bg-white", "text-white")
// })

// dark.addEventListener("click", function () {
//     setTheme("bg-[#2b2b2b]", "text-dark")
// })

// cupcake.addEventListener("click", function () {
//     setTheme("bg-[#faf7f5]", "text-black")
// })




// const modal = document.getElementById('video_modal');
// const frame = modal.querySelector('iframe');
// const src = frame.src;

// modal.addEventListener('close', () => {
//     frame.src = '';
//     frame.src = src;
// });


// const localModal = document.getElementById('local_modal');
// const localVideo = document.getElementById('local_video');

// localModal.addEventListener('close', () => {
//     localVideo.pause();
//     localVideo.currentTime = 0;
// });


// let showeDeta = () => {
//     let xml = new XMLHttpRequest()
//     xml.open("get", "http://localhost:3000/products")
//     xml.responseType = "json"
//     xml.onload = ()=> {

//  products = xml.response;
// // xml.response.forEach((elem)=>{
// // document.querySelector("div.open-box").innerHTML+=`
// // <div class="details-book1 border-[3px] border-[#599BA9] shrink-0 w-[300px] md:w-[460px] xl:w-[560px] 2xl:w-[684px] p-3 md:p-4 2xl:p-5 bg-white gap-4 md:gap-6 xl:gap-8 2xl:gap-10">
// //   <img class="w-full lg:w-[40%]" src="${elem.img}" alt="${elem.titleDetails}">
// //   <div class="w-full lg:w-[50%] flex flex-col gap-1.5 justify-between">
// //     <h1 class="text-lg md:text-xl xl:text-3xl 2xl:text-[36px] font-bold title-details">${elem.titleDetails}</h1>
// //     <p class="text-details text-sm md:text-base xl:text-xl 2xl:text-[22px] text-[#696984]">${elem.textDetails}</p>
// //     <span class="flex flex-row justify-between items-center">
// //       <span class="text-[#FFC107] text-sm md:text-base xl:text-lg">
// //         <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
// //       </span>
// //       <span class="text-base md:text-lg xl:text-xl 2xl:text-[20px] font-bold price">${elem.price}</span>
// //     </span>
// //     <a href="./course-detail.html" class="text-[#00BCD4] course-open-btn block text-center font-semibold no-underline rounded-xl border border-[#00BCD4] py-2 md:py-3 text-sm md:text-base xl:text-lg hover:opacity-90">EXPLORE</a>
// //   </div>
// // </div>



// // })
//     }
//     xml.onerror=()=>{
//         console.log("error")
//     }
//     xml.send(null)
// }

// showeDeta()



// const books = document.querySelectorAll(".book");

// books.forEach((book) => {
//   book.addEventListener("click", () => {
//     const elem =products[book.dataset.index];
//     const box = book.nextElementSibling;

//     document.querySelectorAll(".open-box").forEach((o) => (o.innerHTML = ""));

//     box.innerHTML = `
//       <div class="details-book1 border-[3px] border-border shrink-0 w-[684px] p-sp-20 bg-white gap-sp-40">
//         <img class="w-[40%]" src="${elem.img}" alt="${elem.titleDetails}">
//         <div class="w-[50%] flex flex-col gap-1.5 justify-between">
//           <h1 class="text-font-36 font-bold title-details">${elem.titleDetails}</h1>
//           <p class="text-details text-font-22 text-p">${elem.textDetails}</p>
//           <span class="flex flex-row justify-between items-center">
//             <span class="text-[#FFC107]">
//               <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
//             </span>
//             <span class="text-font-20 font-bold price">${elem.price}</span>
//           </span>
//           <a href="./course-detail.html" class="text-cyan course-open-btn block text-center font-semibold no-underline rounded-xl border border-[var(--color-cyan)] py-3 hover:opacity-90">EXPLORE</a>
//         </div>
//       </div>
//     `;
//   });
// });





// let products = [];

// let showeDeta = () => {
//   let xml = new XMLHttpRequest();
//   xml.open("get", "http://localhost:3000/products");
//   xml.responseType = "json";
//   xml.onload = () => {
//     products = xml.response;
//   };
//   xml.onerror = () => {
//     console.log("error");
//   };
//   xml.send(null);
// };

// showeDeta(); 

// const books = document.querySelectorAll(".book");

// books.forEach((book) => {
//   book.addEventListener("click", () => {

//  console.log("clicked", book.dataset.index, products);
//   const eleme = products[book.dataset.index];
//   if (!elem) return;


//     const elem = products[book.dataset.index];
//     if (!elem) return; 

//     const box = book.nextElementSibling;

//     document.querySelectorAll(".open-box").forEach((o) => (o.innerHTML = ""));

//     box.innerHTML = `
//       <div class="details-book1 flex flex-col lg:flex-row border-[3px] border-[#599BA9] shrink-0 w-[300px] md:w-[460px] xl:w-[560px] 2xl:w-[684px] p-3 md:p-4 2xl:p-5 bg-white gap-4 md:gap-6 xl:gap-8 2xl:gap-10">
//         <img class="w-full lg:w-[40%]" src="${elem.img}" alt="${elem.titleDetails}">
//         <div class="w-full lg:w-[50%] flex flex-col gap-1.5 justify-between">
//           <h1 class="text-lg md:text-xl xl:text-3xl 2xl:text-[36px] font-bold title-details">${elem.titleDetails}</h1>
//           <p class="text-details text-sm md:text-base xl:text-xl 2xl:text-[22px] text-[#696984]">${elem.textDetails}</p>
//           <span class="flex flex-row justify-between items-center">
//             <span class="text-[#FFC107] text-sm md:text-base xl:text-lg">
//               <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
//             </span>
//             <span class="text-base md:text-lg xl:text-xl 2xl:text-[20px] font-bold price">${elem.price}</span>
//           </span>
//           <a href="./course-detail.html" class="text-[#00BCD4] course-open-btn block text-center font-semibold no-underline rounded-xl border border-[#00BCD4] py-2 md:py-3 text-sm md:text-base xl:text-lg hover:opacity-90">EXPLORE</a>
//         </div>
//       </div>
//     `;
//   });
// });









const bookImages = document.querySelectorAll(".labrary1 .book");
const openBoxes = document.querySelectorAll(".labrary1 .open-box");

let booksData = [];

async function loadBooks() {
  try {
    const res = await fetch("http://localhost:3000/products");
    booksData = await res.json();
  } catch (err) {
    console.error("Error loading books:", err);
  }
}
loadBooks();

function createCard(book) {
  return `
     <div class="details-book1  relative z-20 flex  lg:flex-row border-[3px] border-[#599BA9] shrink-0 w-[100%] md:w-[100%] lg:w-[440px]  xl:w-[560px] 2xl:w-[684px] p-3 md:p-4 2xl:p-5  gap-4 md:gap-6 xl:gap-8 2xl:gap-10 rounded-[30px] bg-white">

         <img
  class="w-[45%] h-full md:w-[40%] lg:w-[40%] lg:aspect-[3/4] lg:object-cover rounded-xl"
  src="${book.img}"
  alt="${book.titleDetails}"
>
         <div class="w-full  flex flex-col gap-1.5 justify-between">
           <h1 class="text-lg md:text-xl xl:text-2xl 2xl:text-[36px] font-bold title-details">${book.tabTitle}</h1>
          <p class="text-details text-sm md:text-base xl:text-xl 2xl:text-[22px] text-[#696984]">${book.textDetails}</p>
           <span class="flex flex-row justify-between items-center">
            <span class="text-[#FFC107] text-sm md:text-base xl:text-lg">
               <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>            </span>
            <span class="text-base md:text-lg xl:text-xl 2xl:text-[20px] font-bold price">${book.price}</span>
          </span>
           <a href="./course-detail.html" class="text-[#00BCD4] course-open-btn block text-center font-semibold no-underline rounded-xl border border-[#00BCD4] py-2 md:py-3 text-sm md:text-base xl:text-lg hover:opacity-90">EXPLORE</a>
         </div>
      </div>
  `;
}

bookImages.forEach((img) => {
  img.addEventListener("click", () => {
    const index = Number(img.dataset.index);
    const box = img.parentElement.querySelector(".open-box");
    const book = booksData[index];

    if (!book) return;

    const isOpen = box.innerHTML.trim() !== "";

    openBoxes.forEach((b) => (b.innerHTML = ""));

    if (!isOpen) {
      box.innerHTML = createCard(book);


      let titleDetails = document.querySelectorAll(".title-details")

      titleDetails.forEach((elem) => {
        let text = elem.textContent.trim();
        elem.textContent = text.slice(0, 15) + ".."
      })

      let textDetails = document.querySelectorAll(".text-details");

      let maxLength = window.innerWidth < 640 ? 45 : 100;

      textDetails.forEach((elem2) => {
        let text2 = elem2.textContent.trim();
        elem2.textContent = text2.slice(0, maxLength) + "...";
      });
    }
  });
});
























const bookImages2 = document.querySelectorAll(".labrary2 .photo");
const openBoxes2 = document.querySelectorAll(".labrary2 .open-photo");

let booksData2 = [];

async function loadBooks2() {
  try {
    const res = await fetch("http://localhost:3000/cardBook2");
    booksData2 = await res.json();
  } catch (err) {
    console.error("Error loading books 2:", err);
  }
}
loadBooks2();

bookImages2.forEach((img) => {
  img.addEventListener("click", () => {
    const index = Number(img.dataset.index);
    const box = img.parentElement.querySelector(".open-photo");
    const book = booksData2[index];

    if (!book) return;

    const isOpen = box.innerHTML.trim() !== "";

    openBoxes2.forEach((b) => (b.innerHTML = ""));

    if (!isOpen) {
      box.innerHTML = createCard(book);

      const titleDetails = box.querySelector(".title-details");
      titleDetails.textContent = titleDetails.textContent.trim().slice(0, 15) + "..";

      const textDetails = box.querySelector(".text-details");
      const maxLength = window.innerWidth < 640 ? 45 : 100;
      textDetails.textContent = textDetails.textContent.trim().slice(0, maxLength) + "...";
    }
  });
});










const bookImages3 = document.querySelectorAll(".labrary3 .language");
const openBoxes3 = document.querySelectorAll(".labrary3 .open-lan");

let booksData3 = [];

async function loadBooks3() {
  try {
    const res = await fetch("http://localhost:3000/cardBook3");
    booksData3 = await res.json();
  } catch (err) {
    console.error("Error loading books 3:", err);
  }
}
loadBooks3();

bookImages3.forEach((img) => {
  img.addEventListener("click", () => {
    const index = Number(img.dataset.index);
    const box = img.parentElement.querySelector(".open-lan");
    const book = booksData3[index];

    if (!book) return;

    const maxLength = window.innerWidth < 640 ? 45 : 100;
    const isOpen = box.innerHTML.trim() !== "";

    openBoxes3.forEach((b) => (b.innerHTML = ""));

    if (!isOpen) {
      box.innerHTML = createCard(book);

      const titleDetails = box.querySelector(".title-details");
      titleDetails.textContent = titleDetails.textContent.trim().slice(0, 15) + "..";

      const textDetails = box.querySelector(".text-details");
      textDetails.textContent = textDetails.textContent.trim().slice(0, maxLength) + "...";
    }
  });
});


let btnSub = document.querySelector(".btn-sub")
let loading = document.querySelector(".loading")

let textFinally = document.querySelector(".text-sub-finally")

let inputSub = document.querySelector(".input-sub")

let textSub = document.querySelector(".text-sub")
let endSub = document.querySelector(".end-sub")
sub = true




btnSub.addEventListener("click", function () {


  if (inputSub.value.trim() === "") {
    console.log("hey")

  }

  else {

    if(sub===true){


    loading.classList.remove("hidden")
    textSub.classList.add("hidden")
    textFinally.classList.remove("hidden")
    sub=false
    
    setTimeout(function () {
      endSub.classList.remove("hidden")
      textFinally.classList.add("hidden")
      loading.classList.add("hidden")

    }, 3000);
    }
else{
      console.log("heyyyy")

}






  }

})