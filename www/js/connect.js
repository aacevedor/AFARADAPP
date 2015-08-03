
	function connect(){
	    console.log('si');
	}

	function login(user,pass){
        console.log("valor:"+ user+pass);
		var params = {identifier:user,password:pass}
		$.ajax({ 
		    url: "http://myafar.co:9000/auth/app",
		    type: 'POST',
		    dataType: 'json',
		    contentType: 'application/json',
		    processData: false,
		    data: JSON.stringify(params),  
		    success: function (data) {
		      //alert(JSON.stringify(data['todo']));
		      if(data['todo'] == "yes"){
		      	window.location.href = "indexapp.html";
		      }else{
		        alert("Usuario y/o contraseña no validos");

		      }
		    },
		    error: function(){
		      alert("Erro conectando con el servidor");
		    }
		});
	
	}