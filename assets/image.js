//parameters in the url
const accesskey = "qqyaC6YzwEy2wdv9cuBYxi0NFlor3Ytu0BMTZ2ytEqw";
const page = "1";
const keyword = "nature";
//promise
async function getimage(){

const res = await fetch(
   
` https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`
);
const data = await res.json();
data.results.map((item)=>{
// console.log(item.urls.regular);
let img = document.createElement("img");
img.src = item.urls.regular;
img.appendChild(img);
});

console.log(res)
}
getimage();