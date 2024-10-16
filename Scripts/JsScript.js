const btn =document.querySelector("button");
const divContainer=document.querySelector(".div-items-container");
const txt=document.querySelector("#txtItems");
const list =document.querySelector(".ulItem");


btn.addEventListener("click",function(){
   var i=txt.value;
   const item=document.createElement("li");
   const spText=document.createElement("span");
   const spClose=document.createElement("span");
   spClose.classList.add("spCls");
    spText.textContent=i;
    spClose.textContent="X";
   item.appendChild(spText);
   item.appendChild(spClose);
   list.appendChild(item);
   txt.value="";
   if(list.querySelectorAll("li").length > 0)
   divContainer.classList.add("active");
    else
    divContainer.classList.remove("active");
    return true;
});


