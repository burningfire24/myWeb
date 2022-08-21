const contentEl=document.querySelector(".tabs");
const btnEl=document.querySelectorAll(".button");
const articles=document.querySelectorAll(".content");



contentEl.addEventListener("click",(event)=>{
    const id=event.target.dataset.id;
    if(id){
        btnEl.forEach((btn)=>{
            btn.classList.remove('live');
            event.target.classList.add("live");
        })
        articles.forEach((p)=>{
            p.classList.remove('live');
        })
        const element= document.getElementById(id);
        element.classList.add("live");
    }
})

