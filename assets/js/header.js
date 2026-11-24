















document.getElementById("header-placeholder").innerHTML=`


    <!-- start menu light-->
    <section class="menu-light">

        <div class="navbar bg-white justify-between w-full  px-4 md:px-8 xl:px-16 2xl:px-[120px]">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="-1"
                    class="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a href="./index.html">Home</a></li>

                    <li><a>Courses</a></li>
                    <li><a>Careers</a></li>

                    <li><a href="./blog.html">Blog</a></li>
                    <li><a>About Us</a></li>
                </ul>
            </div>
            <div class="navbar-start">

                <a href=""><img src="./assets/img/course/logo.lightmenu.svg" alt=""></a>
            </div>

            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1 gap-2 xl:gap-5 2xl:gap-8">
                    <li><a href="./index.html">Home</a></li>

                    <li><a href="./course.html">Courses</a></li>
                    <li><a>Careers</a></li>

                    <li><a href="./blog.html">Blog</a></li>
                    <li><a>About Us</a></li>
                </ul>
            </div>
           <div class="dropdown dropdown-end mx-0 lg:mx-2">
          <button tabindex="0" class="btn btn-ghost btn-circle btn-sm md:btn-md" aria-label="Change theme">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="swap-off lucide lucide-sun preview-icon  ">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </button>

          <ul tabindex="0"
            class="dropdown-content menu bg-base-100 text-base-content rounded-box z-20 mt-3 w-40 p-2 shadow">
            <li><button id="light" data-set-theme="light">Light</button></li>
            <li><button id="dark" data-set-theme="dark">Dark</button></li>
            <li><button id="cupcake" data-set-theme="cupcake">Cupcake</button></li>
          </ul>
        </div>
            <div class="dropdown dropdown-end mx-0 lg:mx-2 ">
                <button tabindex="0" class="btn btn-ghost btn-circle btn-sm md:btn-md" aria-label="Change theme">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-globe preview-icon ">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                    </svg>

                </button>

                <ul tabindex="0"
                    class="dropdown-content menu bg-base-100 text-base-content rounded-box z-20 mt-3 w-40 p-2 shadow">
                    <li><button>english</button></li>
                    <li><button>فارسی</button></li>
                </ul>
            </div>

            <div class="dropdown dropdown-end">
                <div class="flex flex-row gap-1.5 items-center" tabindex="0" role="button">

                    <div class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="./assets/img/course/linaprofile.svg" />
                        </div>
                    </div>
                    <span>lina</span>


                    <img src="./assets/img/course/chevron-down.svg" alt="" class="w-3 h-3 shrink-0">

                </div>
                <ul tabindex="-1"
                    class="menu menu-sm dropdown-content bg-[#ffffff] rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                        <a class="justify-between">
                            Profile

                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>

        </div>

    </section>



    <!-- end menu light -->


`





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
["bg-[#252641]", "bg-[#161A20]"],
]


let dark=document.querySelector("#dark")
let header=document.querySelector("header")
let groups = pairs.map(function (pair) {
  return document.querySelectorAll("." + CSS.escape(pair[0]))


})

dark.addEventListener("click", function () {
  document.documentElement.setAttribute("data-theme", "dark")
//   header.style.backgroundImage="url('assets/img/img-home/header.dark3.png')"
  pairs.forEach(function (pair, i) {
    groups[i].forEach(el => el.classList.replace(pair[0], pair[1]))
  })
})

light.addEventListener("click", function () {
  document.documentElement.setAttribute("data-theme", "light")
//   header.style.backgroundImage="url('assets/img/img-home/Header\ \(1\)new.svg')"
  pairs.forEach(function (pair, i) {
    groups[i].forEach(el => el.classList.replace(pair[1], pair[0]))
  })
})

