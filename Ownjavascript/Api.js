console.log("Api classes ❤️❤️❤️");


// *** Fetch Api (Application programming interface);

const URL = "https://cat-fact.herokuapp.com/facts"

const factPara = document.querySelector("#fact");

const btn = document.querySelector("#btn")



// let promise = fetch(URL);
// console.log(promise);

// const getFact = async()=>{
//     console.log("getting data.....")
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     factPara.innerText = data[1].text;

function getFact(){
    fetch(URL).then((response)=>{
      return response.json();
    }).then((data)=>{
        console.log(data);
        factPara.innerText = data[2].text;
    });

}


btn.addEventListener("click",getFact)






