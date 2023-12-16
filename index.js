// let data=fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>console.log(data))
//     .catch(error=>console.error(error))
let root=document.getElementById('root')


async function getData(){
    try{
        let res= await fetch('https://restcountries.com/v3.1/all')
        let data=await res.json()
        return data
        }
    catch(error){
            console.log(error)
    }
    finally{
        console.log("finally done")
    }
}

async function constructur(){
 let data=await getData()
 console.log(data)
 data.forEach(e => {
    let div=document.createElement('div')
    div.innerHTML=`<div class="card card-wrapper" style="width: 18rem;">
    <img src="${e.flags.svg}" class="card-img-top" alt="${e.flags.alt}">
    <div class="card-body">
      <h4 class="card-title">COUNTRY: ${e.name.common}</h4>
      <h5 class="card-text">CAPITAL: ${e.capital?e.capital[0]:""}</h5>
    </div>
  </div>
  `
  
  
    root.appendChild(div)
    
 });
}constructur()

let Paginat=document.createElement('div')
  Paginat.innerHTML=`<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>`
document.body.appendChild(Paginat)