let arr = [
  {
    src: "assets/img/prodect1.jpg",
    namee: "Crepe Cake",
    price: 39.0,
    id: 1,
  },
  {
    src: "assets/img/about-sec3-img-1-683x1024.jpg",
    namee: "Fruit Cake",
    price: 49.0,
    id: 2,
  },
  {
    src: "assets/img/shoping 5.jpg",
    namee: "Macaron Collection",
    price: 100.0,
    id: 3,
  },
  {
    src: "assets/img/shoping 6.jpg",
    namee: "Madeleine",
    price: 21.0,
    id: 4,
  },
  {
    src: "assets/img/shoping 7.jpg",
    namee: "Signature Macarons",
    price: 80.0,
    id: 5,
  },
  {
    src: "assets/img/shoping3.jpg",
    namee: "Chocolate Cookies",
    price: 35.0,
    id: 6,
  },
    {
      src: "assets/img/shoping1.jpg",
      namee: "Brown Cookies",
      price: 40.0,
      id: 7,
    }
  
];
// let data = JSON.parse(localStorage.getItem("key1")) || [];

//= JSON.parse(localStorage.getItem("key1")) ?? [];
let data 
if(JSON.parse(localStorage.getItem('key1')===null))
{
  data =[];
}
else
{
  data = JSON.parse(localStorage.getItem("key1")) ?? [];
}

for (let i = 0; i < arr.length; i++) {
  console.log(i+1)
  console.log(arr[i].src);
}

let availableProduct = document.getElementById("availableProduct");
function displayInAdminPage() {
  document.getElementById("b").innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i].src);
    document.getElementById("b").innerHTML += `
        <div class="col-md-4 my-5">
          <div class=" pastries flex-column d-flex justify-content-center align-items-center">
            <div class="pastrie-img">
              <img src="${arr[i].src}" alt="" class="w-100">
              <div class="add-btn text-center ">
                <button class="px-5 py-2" id="add" onclick="display(${i})">Add to Shop</button>
                <button class="px-5 py-2 mt-2 Update1" onclick="updateData(${arr[i].id})" data-food-index="${i}" id="Update">Update</button>
              </div>
            </div>
            <div class="pastrie-name text-center jost mt-3  ">
              <p class="m-0">${arr[i].namee}</p>
              <span class="mt-2">$${arr[i].price}</span>
            </div>
           
          </div>
        </div>        
        `;
    Setavaliable();
  }
  //
}
// for (let i = 0; i < data.length; i++) {
//   console.log(i+1)
//   console.log(data[i].src);
// }

displayInAdminPage();

function display(i) {
  // console.log(i);
  data.push(arr[i]);
  // console.log(data);
  localStorage.setItem("key1", JSON.stringify(data));

  Setavaliable();
}

function Setavaliable() {
  availableProduct.innerHTML = "";
  for (let j = 0; j < data.length; j++) {
    availableProduct.innerHTML += `
    
    <div class=" Available my-5 d-flex justify-content-between align-items-center">
    <div class="apastries  d-flex justify-content-between align-items-center">
     <div class="apastrie-img"><img src="${data[j].src}" class="w-100" alt=""></div>
     <div class="apastrie-name"> <span>${data[j].namee}</span> </div>
     <div class="apastrie-price"><span>$${data[j].price}</span></div> 
    </div>
     <div class="buttons">
     <button class="btn btn-outline-secondary me-2 "  id="clear" onclick="deleteItem(${j})">delete</button>
     </div>
   </div>`;
  }
} //<button class="btn btn-outline-secondary me-2 Update1"  id="Update" onclick="deleteItem(${j})">Update</button>

Setavaliable();


function deleteItem(index) {
  data.splice(index, 1);

  localStorage.setItem("key1", JSON.stringify(data));
  Setavaliable();
}

function clear(index) {
  data.splice(index, 1);
  // console.log("aaaaaaaa");
  localStorage.setItem("courses", JSON.stringify(data));
  Setavaliable();
}

////////////////////////////
function updateData(id) {
  // let food = arr[i];
  const product = arr.find((item) => id === item.id);

  document.querySelector("#updateDiv").style.display = "block";
  document.querySelector("#foodNameInput").value = product.namee;
  document.querySelector("#foodPriceInput").value = product.price;

  document.querySelector("#saveButton").onclick = function (e) {
    e.preventDefault();
    const products = localStorage.getItem("products") ?? [];
    
    data.forEach((item) => {
      if (id === item.id) {
        item.namee = document.querySelector("#foodNameInput").value;
        item.price = document.querySelector("#foodPriceInput").value;
      }
      return item;
    });
    // arr[i].namee = data[i].namee;
    document.querySelector("#updateDiv").style.display = "none";
    localStorage.setItem("key1", JSON.stringify(data));
    displayInAdminPage();
    Setavaliable();
  };
}


document.getElementById('claseUpdate').onclick=function(e){
  e.preventDefault();
  document.querySelector("#updateDiv").style.display = "none";
}