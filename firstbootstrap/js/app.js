/**
 * Created by Administrator on 2018/1/27.
 */
$(function () {

    /*custom previous and next button be clicked*/
    $('.prev-slide').on('click',function(){
        $('#slideshow').carousel('prev');
    });
    $('.next-slide').on('click',function(){
        $('#slideshow').carousel('next');
    });

    /*keyboard prev/next pic control*/
    $(document).on('keydown',function(e){
        //console.log(e.which);
        switch (e.which){
            case 37:/*left key on keyboard*/
                $('#slideshow').carousel('prev');
                break;
            case 39:/*right key on keyboard*/
                $('#slideshow').carousel('next');
                break;
        }
    })

    /*pause and play*/
    var play = false;
    $('.play-and-stop').click(function(){
        if(!play){
            $('#slideshow').carousel('cycle');
            $(this).children('span').removeClass('glyphicon-play').addClass('glyphicon-pause');
        } else{
            $('#slideshow').carousel('pause');
            $(this).children('span').removeClass('glyphicon-pause').addClass('glyphicon-play');
        }
        play = !play;
    })
});