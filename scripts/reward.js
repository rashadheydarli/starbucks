const btn = document.querySelector('.button');

function buttonClick() {
    
}

btn.addEventListener("click", (event)=>{
    const hasActiveClass = event.target.classlist.contains("active");

    if(hasActiveClass){
        event.target.remove("active");
    }else{
        event.target.add("active");
    }
})