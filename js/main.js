$(()=>{
    // preloader
    setInterval(() => {
        let plr = $(".preloader");

        plr.css('opacity', 0);
        setTimeout(() => {
            if (plr.css('opacity', 0))
            plr.remove();
        }, 300);
    }, 1000);

    // button home
    let btn = $(".btn-start");
    let form = $(".form");

    setInterval(() => {
        if (form.val() != ""){
            btn.addClass("btn-start--active");          
        }
        else{
            btn.removeClass("btn-start--active");
        }
    }, 100);

    // при нажатии на кнопку или enter
    let n = 0;

    function buttonClick(){
        if (form.val()=="8520"){
            btn.attr("href", "home.html");
        }
        else{
            n++;
            if (n == 3)
                $(location).attr("href", "https://www.xvideos.com/tags/gay-porn");  
            if (n == 2)
                $(".massage").text("пароль опять не верный, уходи предупреждаю !!!");
            btn.attr("href", "#");
            $(".massage").addClass("massage-active");
        }
    }

    btn.click(function(){
        buttonClick();
    })

    $("body").keypress(function(e) {
        if (e.which == 13) {
            if (form.val()=="8520"){
                $(location).attr("href", "home.html");
            }
            else{
                n++;
                if (n == 3)
                    $(location).attr("href", "https://www.xvideos.com/tags/gay-porn");
                btn.attr("href", "#");
                $(".massage").addClass("massage-active");
            }
        }
   });

   //nice dick

   let tuch = 0;

   $(".nice-dick__img").click(function(){
        tuch++;
        switch (tuch) {
            case 1:
                $(".nice-message__text").text("О да еще!");
                break;
            case 2:
                $(".nice-message__text").text("хочешь развлечся ?");
                break;
            case 3:
                $(".nice-message__text").text("тронь меня еще");
                break;
            case 4:
                $(location).attr("href", "https://www.xvideos.com/tags/gay-porn");
        }
   })

});
