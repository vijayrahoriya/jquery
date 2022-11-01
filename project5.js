$(document).ready(function(){
    $(".toggle").click(function(e){
        e.preventDefault();
       let p = $('#pass').attr('type');
       if(p == 'password'){
        $('#pass').attr('type','text')
        $(this).text('Hide');
       }
       else{
        $('#pass').attr('type','password')
        $(this).text('Show')
       }
    })
})