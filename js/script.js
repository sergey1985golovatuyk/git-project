function SetImg(selected_url) {
   var item = document.getElementById('preview');
    item.src=selected_url;
}

function SubmitForm(name, tel, car) {
    $.ajax(
        {
            method: "POST",
            url:"/Home/Order",
            data:{Name:name,Tel:tel,Car:car}
        }).fail(function() {
            alert("Error occured while data transfer!");
    }).done(function(context) {
        alert(context);
    });
}

$(document).ready(function(){
    $('#header').fadeTo(2000,0.3,function(){
        $('html, body').animate(
            {scrollTop:$('#content').offset().top},3000
            );
    });
});

$(document).on('submit','form',function(){
    var Username=$('input[name=Name]').val();
    var UserTel=$('input[name=Tel]').val();
    var Car=$('select[name=Car]').val();
    // Input Data Validation
    // Check Name
    if(Username.length>0)
        {
            
            // Check Tel
            var regular = /^\8-[0-9]{3}-[0-9]{3}-[0-9]{4}/;
            if(regular.test(UserTel)==true)
                {
                    alert("Well Good!");
                    //SubmitForm(UserName,UserTel,Car);
                }
            else{
                alert("Please, check is your Tel. correct or not")
            }
        }
    else {
        alert("Please, input your name!");
    }  
    
});