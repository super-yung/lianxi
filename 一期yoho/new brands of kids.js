
var li14=document.getElementById("li14");
var fashionkids=document.getElementById("fashionkids");

var flag=false;
li14.onclick=function () {
    if(flag==true){
        fashionkids.style.display="none";
    }else{
        fashionkids.style.display="block";
    }
    flag=!flag;
}





var itemsSelected=document.getElementById("items_selected");
itemsSelected.style.display="none";
var boysClose=document.getElementById("boysClose");
var a=boysClose.style.display="none";

var girlsClose=document.getElementById("girlsClose");
var b=girlsClose.style.display="none";

function closeSelect() {
    itemsSelected.style.display="none";
}

function openSelect() {
    itemsSelected.style.display="inline-block";
    itemsSelected.style.float="left";
    boysClose.style.display="inline-block";
}
