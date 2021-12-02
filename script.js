let mainelement=document.querySelector("main");

// Fetch connected to button that console logs translated response
document.querySelector("button").addEventListener("click", ()=>{
    console.debug("Doing some magic");
    console.log(fetch("http://universities.hipolabs.com/search?name=korea").then
    ((response)=>{
        return response.json();
    }).then((data)=>{
        // Adds divs with name and website of university to main
        mainelement.innerHTML="";
        data.forEach(university => {
            console.log(university);
            
            let div=document.createElement("div");
            let title=document.createElement("div");
            let content=document.createElement("div");

            div.classList.add("box");
            title.innerHTML=university.name;
            title.classList.add("title");
            content.innerHTML="<a href=\""+university.web_pages[0]+"\" target=\"_blank\">Website</a>";
            content.classList.add("content");

            div.appendChild(title);    
            div.appendChild(content); 
            mainelement.appendChild(div);       
        })
    })
    );
});
