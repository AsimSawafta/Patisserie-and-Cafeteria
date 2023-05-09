
let objectArray 
if(JSON.parse(localStorage.getItem('key1')===null))
{
  objectArray =[];
}
else
{
  objectArray = JSON.parse(localStorage.getItem('key1'))
}

// let objectArray = []
// objectArray = JSON.parse(localStorage.getItem('key1'))
console.log(objectArray);
for (let i = 0; i < objectArray.length; i++) {
  document.getElementById('a').innerHTML += `
    <div class="col-md-4 my-5">
      <div class=" pastries flex-column d-flex justify-content-center align-items-center">
        <div class="pastrie-img">
          <img src="${objectArray[i].src}" alt="" class="w-100">
          <div class="add-btn text-center ">
            <button class="px-5 py-2" id="add" ">Add to card</button>
          </div>
        </div>
        <div class="pastrie-name text-center jost mt-3  ">
          <p class="m-0">${objectArray[i].namee}</p>
          <span class="mt-2">$${objectArray[i].price}</span>
        </div>
      </div>
    </div>        
    `
}