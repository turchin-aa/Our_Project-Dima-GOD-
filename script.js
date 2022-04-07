$(document).ready(function() {
    
    $('.open').hide(10)

    $(document).delegate('.open', 'click', function(event){
        $(this).addClass('oppenned');
        event.stopPropagation();
    })
    $(document).delegate('body', 'click', function(event) {
        $('.open').removeClass('oppenned');
    })
    $(document).delegate('.cls', 'click', function(event){
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });

    $(window).resize(function() {
        if ($(window).width() <= '688'){
        $('.open').show(10)
        return this;
        }
        else {
            $('.open').hide(10)
        }
    });
});











