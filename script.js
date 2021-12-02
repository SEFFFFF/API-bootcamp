// Fetch connected to button that console logs translated response
document.querySelector("button").addEventListener("click", ()=>{
    console.debug("Doing some magic");
    console.log(fetch("http://universities.hipolabs.com/search?name=korea").then
    ((response)=>{
        return response.json();
    }).then((data)=>{
        data.forEach(university => {
            console.log(university.name);
            let div=document.createElement("div");
            div.innerHTML=university.name;
            document.querySelector("main").appendChild(div);
        });
    })
    );
});
