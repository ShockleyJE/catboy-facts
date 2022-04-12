const catboyUrl = 'https://api.catboys.com/img';
const catfactUrl = 'https://meowfacts.herokuapp.com/';


function updateAll(){
    updateCatboy();
    updateCatfact();
}


function updateCatboy(){
    
    let imgUrl;

    fetch(catboyUrl)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      //console.log(data);
      imgUrl = data.url;
      catboyImageElement = document.getElementById('catboy')
    catboyImageElement.src = imgUrl;
      //console.log(imgUrl);
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
    
};

let fact;
function updateCatfact(){
    

    fetch(catfactUrl)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data);
      fact = data.data[0].replace('cat', 'catboy');
      catfactParagraphElement = document.getElementById('catfact')
      catfactParagraphElement.innerHTML = fact;
      console.log(fact);
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
    
};

updateCatboy();
updateCatfact();

document.getElementById('catboy').addEventListener("click", updateAll)
