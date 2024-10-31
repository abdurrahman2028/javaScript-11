

let URL = 'https://randomuser.me/api/?results=7';
let info = document.querySelector('#info');

let getInfo = async ()=>{
    let responds = await fetch(URL);
    console.log(responds)

    let data = await responds.json()
    info.innerText = data[0]
}
getInfo()




















