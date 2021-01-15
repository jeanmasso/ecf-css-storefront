$(document).ready(function () {

    $(".article-2, #articleOption").mouseover(function(){
        $("#articleOption").attr('hidden',false);
    });
    $(".article-2, #articleOption").mouseout(function(){
        $("#articleOption").attr('hidden',true);
    });

    window.addEventListener('resize', function () {
        if (window.matchMedia('(max-width: 1080px)').matches) {
            $("#shopCart").replaceWith( "<svg id=\"shopCart\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill-rule=\"evenodd\" d=\"M6 9V7.25C6 3.845 8.503 1 12 1s6 2.845 6 6.25V9h.5a2.5 2.5 0 012.5 2.5v8a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 19.5v-8A2.5 2.5 0 015.5 9H6zm1.5-1.75C7.5 4.58 9.422 2.5 12 2.5c2.578 0 4.5 2.08 4.5 4.75V9h-9V7.25zm-3 4.25a1 1 0 011-1h13a1 1 0 011 1v8a1 1 0 01-1 1h-13a1 1 0 01-1-1v-8z\"></path></svg>" );
        } else {
            $("#shopCart").replaceWith( "<span id=\"shopCart\">My cart </span>" );
        }
    });

})