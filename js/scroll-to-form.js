const hirebtn1=document.getElementById('scroll1');
const form=document.getElementById('form-scroll');

hirebtn1.onclick = function(){
    form.scrollIntoView({behavior:'smooth'});
}
$('button[id="#scroll2"').on('click', function() {

    let id = $(this).attr('id');

    $('form').animate({
        scrollTop: $(id).offset().top
    });
    return false;
});