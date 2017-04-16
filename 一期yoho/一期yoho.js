var topLeft=document.getElementsByClassName("topLeft")[0];
var topLeftbottom=document.getElementsByClassName("topLeft-bottom")[0];
function timeyo () {
    topLeftbottom.style.display="none";
}

topLeft.onmouseover=function () {
    topLeftbottom.style.display="block";
    topLeft.style.background="#dcdcdc";
    window.clearTimeout(time1);
}
var time1;
topLeft.onmouseout=function () {
    time1=window.setTimeout(timeyo,1000);
}

topLeftbottom.onmouseover=function () {

    window.clearTimeout(time1);
    // topLeftbottom.style.display="block";
}

topLeftbottom.onmouseout=function () {
    time1=window.setTimeout(timeyo,1000);
}



var buycar=document.getElementsByClassName("buycar")[0];
var buycar2=document.getElementsByClassName("buycar2")[0];
buycar.onmouseover=function () {
    buycar2.style.display="block";
}
buycar.onmouseout=function () {
    buycar2.style.display="none";
}



var boy=document.getElementsByClassName("boy")[0];
var girl=document.getElementsByClassName("girl")[0];
var kids=document.getElementsByClassName("kids")[0];
var nav=document.getElementsByClassName("nav")[0];
// var boy1=document.getElementsByClassName("boy1")[0];
// var boy2=document.getElementsByClassName("boy2")[0];
// var girl1=document.getElementsByClassName("girl1")[0];
// var girl2=document.getElementsByClassName("girl2")[0];
// var kids1=document.getElementsByClassName("kids1")[0];
// var kids2=document.getElementsByClassName("kids2")[0];
var BOY1=document.getElementsByClassName("BOY1")[0];
var BOY2=document.getElementsByClassName("BOY2")[0];
var GIRL1=document.getElementsByClassName("GIRL1")[0];
var GIRL2=document.getElementsByClassName("GIRL2")[0];
var KIDS1=document.getElementsByClassName("KIDS1")[0];
var KIDS2=document.getElementsByClassName("KIDS2")[0];

boy.onclick=function () {
    boy.style.backgroundColor="black";
    BOY1.style.color="white";
    BOY2.style.color="white";
    girl.style.backgroundColor="white";
    GIRL1.style.color="BLACK";
    GIRL2.style.color="gray";
    kids.style.backgroundColor="white";
    KIDS1.style.color="black";
    KIDS2.style.color="gray";
    nav.style.background="black";
}
girl.onclick=function () {
    boy.style.backgroundColor="white";
    BOY1.style.color="black";
    BOY2.style.color="gray";
    girl.style.backgroundColor="red";
    GIRL1.style.color="white";
    GIRL2.style.color="white";
    kids.style.backgroundColor="white";
    KIDS1.style.color="black";
    KIDS2.style.color="gray";
    nav.style.background="red";
}
kids.onclick=function () {
    boy.style.backgroundColor="white";
    BOY1.style.color="black";
    BOY2.style.color="gray";
    girl.style.backgroundColor="white";
    GIRL1.style.color="black";
    GIRL2.style.color="gray";
    kids.style.backgroundColor="yellow";
    KIDS1.style.color="white";
    KIDS2.style.color="white";
    nav.style.background="yellow";
}



var navCloth=document.getElementsByClassName("navCloth")[0];
var mydiv=document.getElementsByClassName("mydiv")[0];

function aa() {
    mydiv.style.display="none";
}

navCloth.onmouseover=function () {
    mydiv.style.display="block";
    window.clearTimeout(time2);
}

var time2;
navCloth.onmouseout=function () {
    time2=window.setTimeout(aa,1000);
}
mydiv.onmouseover=function () {
    window.clearTimeout(time2);
}
mydiv.onmouseout=function () {
    time2=window.setTimeout(aa,1000);
}



var picture=document.getElementsByClassName("picture")[0];
var picLeft=document.getElementsByClassName("picLeft")[0];
var picRight=document.getElementsByClassName("picRight")[0];
var picture1=document.getElementsByClassName("picture1")[0];
var picture2=document.getElementsByClassName("picture2")[0];
var i=1;
var v;
    function picChange() {
        picture.style.background = "url(image/index" + i + ".jpg) ";
        picture.style.backgroundSize = "100% 100% ";
        i++;
        if (i > 2) {
            i = 1;
        }
        v = i;
}
var time3;
time3 =setInterval(picChange,1000);


picLeft.onclick=function () {
    picture.style.background="url(image/index"+v+".jpg) " ;
    picture.style.backgroundSize="100% 100% " ;
    v--;
    if(v==1){
        v=2;
    }
}
picRight.onclick=function () {
    picture.style.background="url(image/index"+v+".jpg) " ;
    picture.style.backgroundSize="100% 100% " ;
    v++;
    if(v==2){
        v=1;
    }
}

picture1.onclick=function () {
    picture.style.background="url(image/index1.jpg) " ;
    picture.style.backgroundSize="100% 100% " ;
    picChange();
}
picture2.onclick=function () {
    picture.style.background="url(image/index2.jpg) " ;
    picture.style.backgroundSize="100% 100% " ;
    picChange();
}



var c=document.getElementsByClassName("c");
var j=1;
function run () {

        for(var i=0;i<3;i++){
            if(i==j){
                c[i].style.display="block";
            }else{
                c[i].style.display="none";
            }
        }
        j++;

        if(j==3){
            j=0;
        }
    }

    window.setInterval(run,1000);








var footEndradio1=document.getElementsByClassName("footEnd-radio1")[0];
var footEndradio2=document.getElementsByClassName("footEnd-radio2")[0];
var footEndradio3=document.getElementsByClassName("footEnd-radio3")[0];
var footCenterdiv1=document.getElementsByClassName("footCenter-div1")[0];
var footCenterdiv2=document.getElementsByClassName("footCenter-div2")[0];
var footCenterdiv3=document.getElementsByClassName("footCenter-div3")[0];

footEndradio1.onclick=function () {
        footEndradio1.checked="checked";
        footEndradio2.checked="";
        footEndradio3.checked="";
        footCenterdiv1.style.display="block";
        footCenterdiv2.style.display="none";
        footCenterdiv3.style.display="none";
    }

footEndradio2.onclick=function () {
    footEndradio1.checked="";
    footEndradio2.checked="checked";
    footEndradio3.checked="";
    footCenterdiv1.style.display="none";
    footCenterdiv2.style.display="block";
    footCenterdiv3.style.display="none";
}
footEndradio3.onclick=function () {
    footEndradio1.checked="";
    footEndradio2.checked="";
    footEndradio3.checked="checked";
    footCenterdiv1.style.display="none";
    footCenterdiv2.style.display="none";
    footCenterdiv3.style.display="block";
}




