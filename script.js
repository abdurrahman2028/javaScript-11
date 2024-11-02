

let info = document.querySelector('#info')
let btn = document.querySelector('button')
let URL = 'https://cat-fact.herokuapp.com/facts';

function getFacts(){
    return fetch(URL).then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        info.innerText = data[3].text
    })
}
btn.addEventListener('click', getFacts)









































