
var kidsad=document.getElementById("kidsad");
var time=window.setInterval("show()",5000);

var index=1;

function show(id) {
    if(Number(id)){
        clearInterval(time);
        index=id;
    }else{
        index=index%4+1;
    }

    document.getElementById("kidsad").setAttribute("src","image/kidsad"+index+".jpg");
    var lis=document.getElementsByTagName("li");
    for(var i=1;i<=4;i++){
        lis[i].setAttribute("class","scroll_number_out");
        if(index==i+1){
            lis[i].setAttribute("class","scroll_number_over");
        }
    }
}

function start() {
    time=window.setInterval("show()",5000);
}

var btn1=document.getElementsByClassName("btn_a")[0];
var btn2=document.getElementsByClassName("btn_a")[1];

btn1.onclick=function () {

    if(index==1){
        index=4;
    }else{
        index--;
    }
    kidsad.src="image/kidsad"+index+".jpg";
}
btn2.onclick=function () {

    if(index==4){
        index=1;
    }else{
        index++;
    }
    kidsad.src="image/kidsad"+index+".jpg";
}




