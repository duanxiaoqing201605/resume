~function (desW) {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desW * 100 + "px";
}(750);

/*~function(){
    var step = 0,divList=null;
    var swp=new Swiper(".swiper-container",{
        loop:true,
        direction:"vertical",
        onSlidePrevEnd: function () {
            step--;
            change();
            if (step === 0) {
                step = 6;
            }
        },
        onSlideNextEnd: function () {
            step++;
            change();
            if (step === 7) {
                step = 1;
            }
        }
    });
    function change(){
        divList=document.querySelectorAll(".swiper-slide");
        [].forEach.call(divList,function(curDiv,index){
            curDiv.id=index===step?curDiv.getAttribute("trueId"):null;
        })
    }

}();*/
~function (){ // 让每个页面自动切换,使用swiper内置属性
    var swp = new Swiper('.swiper-container',{
        loop:true,
        direction:'vertical',

        onSlidePrevEnd: function (swiper) {
            var a = swiper.slides;
            var index = swiper.activeIndex;
            for (var i = 0; i < a.length; i++) {
                a[i].id = null;
            }
            swiper.slides[index].id = swiper.slides[index].getAttribute("trueId");
        },
        onSlideNextEnd: function (swiper) {
            var a = swiper.slides;
            var index = swiper.activeIndex;
            for (var i = 0; i < a.length; i++) {
                a[i].id = null;
            }
            swiper.slides[index].id = swiper.slides[index].getAttribute("trueId");
        }
    })
}();


~function(){
    var audioBox=document.querySelector(".audio"),myAudio=audioBox.getElementsByTagName("audio")[0];
    window.setTimeout(function(){
        myAudio.play();
        myAudio.addEventListener("canplay",function(){
            audioBox.style.display="block";
            audioBox.className+=" audioMove";
        },false);
    },1000);
    audioBox.addEventListener("click",function(){
        if(myAudio.paused){
            myAudio.play();
            audioBox.className="audio audioMove";
            return;
        }
        myAudio.pause();
        audioBox.className="audio";
    },false);
}();