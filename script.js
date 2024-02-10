const navButton = document.getElementById("nav-button")
const navLinks= document.getElementById("nav-elements-div") 
const project_div = document.getElementById("project-div") 
const modalTrigger=document.querySelectorAll(".modal-trigger")
const close = document.querySelectorAll(".closeClass");
const closeBtn=document.querySelectorAll(".close")

// const projectArray = [
//     {
//        id:0,
//       name: "ShopVista",
//       img: "../public/assests/hero.jpg",
//       desc: "This a full Stack project it uses MERN"
//     },
//     {
//        id:1,
//       name: "TodoList",
//       img: "../public/assests/mumbai0.jpeg",
//       desc: "This a full Stack project it uses MERN"
//     },

    
//     {
//       id:2,
//       name: "ChatApp",
//       img: "../public/assests/hero.jpg",
//       desc: "This a full Stack project it uses MERN"
//     },
//     {
//       id:3,
//       name: "WeatherApp",
//       img: "../public/assests/hero.jpg",
//       desc: "This a full Stack project it uses MERN"
//     },

//   ] 

navButton.addEventListener("click", () => {
    navLinks.classList.toggle("hidden")
})

window.addEventListener("resize", () => {
  if (window.innerWidth > 764) {
      
        if (navLinks.classList.contains("hidden")) {
            navLinks.classList.remove("hidden")
        }
    }
    if (window.innerWidth <= 764) {
        navLinks.classList.add("hidden")
    }
    
})

let modalState="visible"
// project_div.style.display=

closeBtn.forEach((element) => {
  element.addEventListener("click", () => {
    closeModal(element)
  })
})

function closeModal(element) {
 
  const close = element.parentElement.parentElement.parentElement;
  
  close.style.display = "none"
  
}

function addmodal(element) {
  const close = element.parentElement.querySelector(".closeClass");
  
  close.style.display="flex"
}


modalTrigger.forEach(element => {
  element.addEventListener("click", () => {
    // console.log(element)
    addmodal(element)
  })
});




// document.addEventListener('click', function(event) {
//   const closeButtons =event.target.closest('.material-symbols-outlined');
//   // console.log(event.target.classList.contains('modal-trigger'))
//   const modalTrigger = event.target.closest('.modal-trigger');
    
//   if (modalTrigger) {
//       // Check if the clicked element or its ancestor has the class indicating it triggers the modal
//       addmodal(modalTrigger);
//   } else if (event.target.classList.contains('material-symbols-outlined') && closeButtons.length > 0) {
//       // Check if the clicked element is a close button
//       closeModal(closeButtons);
//   }
// });


// function div(elid) {
//   const newdiv = document.createElement("div")
//   newdiv.classList.add("closeClass")
//   newdiv.innerHTML = `
// <div class=" w-full h-screen bg-white flex overflow-hidden relative md:absolute left-0 top-0  ove z-10 scroll-none  justify-center align-middle  ">
// <div class=" bg-white w-[30rem] h-[33rem] rounded-lg m-12 shadow-xl  ">
//         <div class="flex justify-end">
//         <span class="material-symbols-outlined text-black text-3xl cursor-pointer " >
//         close
//           </span>
//         </div>
//         <div class=" w-full ">
//         <div class="">
//         <img src=${projectArray[elid].img} class=" w-full h-[19rem]" alt="" />
            
//         </div>
//         </div>
//         <div class=" px-3 py-2">
//         <h1 class="text-3xl font-sans font-light text-orange-700 text-center">${projectArray[elid].name}</h1>
//         <p >${projectArray[elid].desc}</p>
//         </div>
//         <button class=" bg-red-700 rounded-lg px-4 py-2 mt-3 ml-3 text-white font-sans hover:bg-red-500">
//         Code
//         </button>
//         <button class=" bg-red-700 rounded-lg px-4 py-2 mt-3 ml-3 text-white font-sans hover:bg-red-500">
//         Live
//         </button>
//         </div>
//         <div>
        
//         </div>
//         </div>
        
//         `
//   return (newdiv)
// }



// function addmodal(element) {
//   // console.log("chlsa");
//   let newelement=element
//   const elid = newelement.id
//   // console.log(elid)
//   console.log("addmodal");
//   let m = div(elid)
  
//   // console.log(m)
//   element.appendChild(m)
//   // document.body.appendChild(newdiv)
          
//         }
        
        
        
// projectArray.forEach((item) => {
//     project_div.innerHTML+=`<div class="w-[24rem] rounded-lg shadow-lg mt-3 my-auto modal-trigger" id=${item.id} ">
//     <div class=" cursor-pointer hover:scale-105 transition-all duration-500 relative  ">
    
    
//     <img src=${item.img} class="w-full h-[16rem] rounded-md " alt=""/>
//     <div class="absolute bg-black opacity-65 py-5 w-full bottom-0 "> <h1 class="text-2xl text-white">${item.name}</h1></div>
    
//   </div>
//   </div>`
//   console.log("array");
// })

