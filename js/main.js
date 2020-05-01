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
    btn.click(function(){
        if (form.val()=="8520"){
            btn.attr("href", "home.html");
        }
        else{
            btn.attr("href", "#");
            $(".massage").addClass("massage-active");
        }
    })
    $("body").keypress(function(e) {
        if (e.which == 13) {
            if (form.val()=="8520"){
                $(location).attr("href", "home.html");
            }
            else{
                btn.attr("href", "#");
                $(".massage").addClass("massage-active");
            }
        }
   });
});
