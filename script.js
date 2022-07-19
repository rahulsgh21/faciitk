$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
});
var typed = new Typed(".typing",{
    strings: ["Welcome","To","Finance","And","Analytics","Club","Of","IITK"],
    typeSpeed: 60,
    backSpeed: 0,
    loop: true
})