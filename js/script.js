var selectField=document.getElementById("selectfield");selectText
var selectText=document.getElementById("selectText")
var options=document.getElementsByClassName("options")
var arrow=document.getElementById("arrow");
var list=document.getElementById("list")



arrow.onclick=function(){
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate")
  }


for(option of options){
    option.onclick= function(){
        selectText.innerHTML=this.textContent;
        list.classList.toggle("hide");
        arrow.classList.toggle("rotate")
    }
}




 