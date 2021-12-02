// Fetch connected to button that console logs response
document.querySelector("button").addEventListener("click", ()=>{
    console.debug("Doing some magic");
    console.log(fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects").then
    ((response)=>{
        console.log(response)
    }));
});
