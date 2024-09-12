function set_dynamic_data(type)
{
  sessionStorage.clear();
  if(type=='prepaid')
  {
 var session_data = {
        service_type: 'PREPAID',
        redirect_url: 'https://portal2.bsnl.in/myportal/quickrecharge.do'
    }
    $(".dynamic_button").html('').html('Recharge')
   $(".dynamic_data").html('').html('<div class="input_value"><input class="rechargeInput mobile_no number" name="mobile_no" type="tel" maxlength="10" placeholder="Enter mobile number" value=""></div>')
}
  else if(type=='postpaid')
  {
  var session_data = {
        service_type: 'GSM',
        redirect_url: 'https://portal2.bsnl.in/myportal/cm.do'
    }
     $(".dynamic_button").html('').html('Pay Bill')
$(".dynamic_data").html('').html('<div class="input_value"><input class="rechargeInput mobile_no number" name="mobile_no" type="tel" maxlength="10" placeholder="Enter mobile number" value=""></div>') 
  }
  else if(type=='landline_and_ftth')
  {
  var session_data = {
        service_type: 'CDR',
        redirect_url: 'https://portal2.bsnl.in/myportal/cfa.do'
    }
 $(".dynamic_button").html('').html('Pay Bill')
$(".dynamic_data").html('').html('<div class="input_value"><input class="rechargeInput landline_no number" name="landline_no" type="tel" maxlength="10" placeholder="Enter phone no. with STD code" value=""><span class="landline_text">Example: 402705xxxx</span></div>')
   
  }
 $('.number').on('input', function() {
            $(this).val($(this).val().replace(/[^0-9]/g, ''));
        }); 
  sessionStorage.setItem('session_data', JSON.stringify(session_data));

}

$(document).ready(function(){

set_dynamic_data('prepaid')
})



  $(document).on("click",".custom_button",function(){
    $('.custom_button').removeClass('active');
    var bill_type=$(this).attr('id')
    set_dynamic_data(bill_type)
    $(this).addClass('active')


  })
  function recharge_form_validate_submit()
  {
 var session_data = JSON.parse(sessionStorage.getItem('session_data'));
 var service_type=session_data.service_type;
    if(service_type=='PREPAID')
    {
   var mobile_no=$(".mobile_no").val()
  
    
   if(mobile_no=='')
   {

$(".mobile_no").css('border','2px solid red')
   }
   else
   {
 
$(".mobile_no").css('border','2px solid #006FC4')
var parameter_url=mobile_no+'|'+'|'+service_type;
var base64url = btoa(parameter_url);
var final_url=session_data.redirect_url+'?'+base64url;
console.log(final_url)
window.location.href = final_url;

   }

    }
    else if(service_type=='GSM')
    {
var mobile_no=$(".mobile_no").val()
  
    
   if(mobile_no=='')
   {

$(".mobile_no").css('border','2px solid red')
   }
   
   else
   {

$(".mobile_no").css('border','2px solid #006FC4')
var parameter_url=mobile_no+'|'+'|'+service_type;
var base64url = btoa(parameter_url);
var final_url=session_data.redirect_url+'?'+base64url;
console.log(final_url)
window.location.href = final_url;

   }

    }
    else if(service_type=='CDR')
    {
      var landline_no=$(".landline_no").val()
   
    
   if(landline_no=='')
   {
 $(".landline_no").css('border','2px solid red') 
   }
   
   else
   {
 
$(".landline_no").css('border','2px solid #006FC4')
var parameter_url=landline_no+'|'+'|'+service_type;
var base64url = btoa(parameter_url);
var final_url=session_data.redirect_url+'?'+base64url;
console.log(final_url)
window.location.href = final_url;

   }
    }
  }
$(document).on("click",".sub_button",function()
{

recharge_form_validate_submit()

})