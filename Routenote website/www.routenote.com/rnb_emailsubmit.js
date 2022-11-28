window.rnb_onEmailSignup = function (email, success, fail) {
    
    // you can implement the email signup here, and if an error occurs, you can display it using:
    // fail() or success() to complete the process
	
	if( validateEmail(email)){
		//alert(email)
		
		$.ajax({
                url: "https://www.routenote.com/rn/subscribe_mail_validation.php?mail="+email,
                type: "GET",
               	async:true, 
				cache:false,
                success: function(d) {
				//alert(d)
				 var json = $.parseJSON(d);
				//alert(json.risk);
				if(json.risk == "low" || json.risk == "medium"){
					//alert(email)
                     subscribe();
				}
				else if(json.risk == "high"){
					//alert(email)
                     fail()
				}else if(json.risk == "unknown"){
				  if(json.reason.length == 0){
					  subscribe();
				  }else{
					fail()
				  }
				}else{
					subscribe();
				}
                },
				error: function(d){
					fail()
				}
            });
			function subscribe(){
				 $.ajax({
						url: "https://www.routenote.com/rn/subscribe_api.php?email="+email,
						type: "GET",
						async:true, 
						cache:false,
						success: function(d) {
						//alert(d)
						 var json = $.parseJSON(d);
						//alert(json.message);
						if(json.message == "Email Subscribed"){
							//alert(email)
							 success()
						}else{
						 fail()
						}
						},
						error: function(d){
							fail()
						}
					}); 
			}
	}else{
	
		fail()	
	}
	
   
}

function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}
