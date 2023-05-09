
// navbar
let navbar = document.querySelector('.navbar')
// let h1=document.querySelector('.a')
let lastScrollTop = 0;
let element = document.querySelector('.navbar');
let hiddenNavbar = document.querySelector('.menuInMd')
let showMdNavbar = document.getElementById('showMdNavbar')
let closeNavbar = document.getElementById('closeNav');

window.addEventListener('scroll', function () {
  let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollTop > lastScrollTop) {
    // Scrolling down
    element.classList.remove('show-navbar')
    // console.log("down");
  } else {
    // Scrolling up
    element.classList.add('show-navbar')
    // console.log('up')
  }
  lastScrollTop = currentScrollTop;
});
//navbar
//show navbar in mobile screen when click on the icon
showMdNavbar.onclick = function (e) {
  e.preventDefault();
  
 
  hiddenNavbar.style.transform = 'scale(1)';
  document.body.style.overflow = 'hidden';
  element.classList.remove('show-navbar')
}

// close navbar in mobile screen when click on the (x)icon
closeNavbar.onclick = function (e) {
  e.preventDefault()
  element.classList.add('show-navbar')
  hiddenNavbar.style.transform = 'scale(0)';
  document.body.style.overflow = 'auto';
  document.body.style.height = 'auto';
}
///////////////////////////l///

// let objectArray = []
// objectArray = JSON.parse(localStorage.getItem('key1'))
// console.log(objectArray);
// for (let i = 0; i < objectArray.length; i++) {
//   document.getElementById('a').innerHTML += `
//     <div class="col-md-4 my-5">
//       <div class=" pastries flex-column d-flex justify-content-center align-items-center">
//         <div class="pastrie-img">
//           <img src="${objectArray[i].src}" alt="" class="w-100">
//           <div class="add-btn text-center ">
//             <button class="px-5 py-2" id="add" ">Add to card</button>
//           </div>
//         </div>
//         <div class="pastrie-name text-center jost mt-3  ">
//           <p class="m-0">${objectArray[i].namee}</p>
//           <span class="mt-2">$${objectArray[i].price}</span>
//         </div>
//       </div>
//     </div>        
//     `
// }


