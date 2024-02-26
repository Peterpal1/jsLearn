//parameters in the url
const accesskey = "123";
const page = "1";
const keyword = "nature";
//promise
async function getimage(){
    const res = await fetch
    (
       ` https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`
    );
    console.log(res)
}
getimage();