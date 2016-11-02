		
			$(document).ready(function(){
				$(document).keypress(
					function(event){
						if (event.which == '13') {
							event.preventDefault();
						}				
				}); 
			});	
			
		
		
		
			function submitButton(){
				var val=document.getElementById("enterstuff").value;
				console.log("value of text submission is " + val);
				switch (val) {
				default: 
					document.getElementById("enterstuff").value="gone or here, please!";
				case 'gone':
					getEl(val);					
				case 'here':
					getEl(val);					
				case 'gh2':
					getEl(val);					
				case 'hh2':
					getEl(val);					
				};
			};
		
		
		
		
			function updatebar(){
				var innerText=document.getElementById("enterstuffprogress").value;
				console.log("the value of enterstuffprogress is " + innerText);
				if ($("p").is(":visible")){				
					switch(innerText){
						default:
							document.getElementById("progressbar1").style="width:0%;"
							document.getElementById("progressbartext").innerHTML="0% complete";
							document.getElementById("progressbarencouragement").innerHTML="";
							break;
						case 'g':	
							document.getElementById("progressbar1").style="width:25%;"
							document.getElementById("progressbartext").innerHTML="25% complete";
							document.getElementById("progressbarencouragement").innerHTML="hold on...";
							break;
						case 'go':
							document.getElementById("progressbar1").style="width:50%;"
							document.getElementById("progressbartext").innerHTML="50% complete";
							document.getElementById("progressbarencouragement").innerHTML="you're halfway there!";
							
							document.getElementById("progressbar1test").style="width:50%;"
							document.getElementById("progressbartexttest").innerHTML="test bar works!!!";
							
							break;
						case 'gon':
							document.getElementById("progressbar1").style="width:75%;"
							document.getElementById("progressbartext").innerHTML="75% complete";
							document.getElementById("progressbarencouragement").innerHTML="whoooooooa!";
							break;
						case 'gone':
							document.getElementById("progressbar1").style="width:100%;"
							document.getElementById("progressbartext").innerHTML="100% complete";
							document.getElementById("progressbarencouragement").innerHTML="livin' on a prayer!";
							getEl(innerText);
							setTimeout(function(){clear()}, 2000);													
							break;
					};
				} else if ($('p').is(":hidden")){
					switch(innerText){
						default:
							document.getElementById("progressbar1").style="width:0%;"
							document.getElementById("progressbartext").innerHTML="0% complete";
							document.getElementById("progressbarencouragement").innerHTML="";
							break;
						case 'h':	
							document.getElementById("progressbar1").style="width:25%;"
							document.getElementById("progressbartext").innerHTML="25% complete";
							document.getElementById("progressbarencouragement").innerHTML="come back to me";
							break;
						case 'he':
							document.getElementById("progressbar1").style="width:50%;"
							document.getElementById("progressbartext").innerHTML="50% complete";
							document.getElementById("progressbarencouragement").innerHTML="status: still hidden";
							break;
						case 'her':
							document.getElementById("progressbar1").style="width:75%;"
							document.getElementById("progressbartext").innerHTML="75% complete";
							document.getElementById("progressbarencouragement").innerHTML="so close!...";
							break;
						case 'here':
							document.getElementById("progressbar1").style="width:100%;"
							document.getElementById("progressbartext").innerHTML="100% complete";
							document.getElementById("progressbarencouragement").innerHTML="ah ha! the ninja returns.";
							getEl(innerText);
							document.getElementById("enterstuffprogress").value="";
							setTimeout(function(){clear()}, 2000);
							break;
				};
				};
			};
		
		
		
			function clear(){
				document.getElementById("enterstuffprogress").value="";
				document.getElementById("progressbar1").style="width:0%;"
				document.getElementById("progressbartext").innerHTML="0% complete";
				document.getElementById("progressbarencouragement").innerHTML="";
			};							
		
		
		
			function getEl(ele){
				var id = ele; 
				if (id !== 'gone'){
					if (id !== 'here') {
						if (id !== 'gh2') {
							if (id !== 'hh2') {
								id = ele.id;
							}
						}						
					}
				}										
				if (id == "dropit"){				
					id=$('#dropit').find('option:selected').attr('id');
					console.log('drop down element ID is '+ id);
				} else {
					console.log("incoming check is " + id);
				};
				if (id.indexOf("gone") !== -1){
					$("p").hide("slow");
				} else if (id.indexOf("here") !== -1) {
					$("p").show("slow");
				} else if (id.indexOf("gh2") !== -1){					
					$("h2").hide("slow");
					$("#easteregg").replaceWith("<h5 class='alert alert-success' id='easteregg'> <strong>Congrats!</strong> You found an easter egg. Type 'hh2' to reinstate the h2 tags.</h5>");
				} else if (id.indexOf("hh2") !== -1) {
					$("h2").show("slow");					
					$("#easteregg").replaceWith("<h5 class='container-fluid' id = 'easteregg'> gh2 hh2 </h5>");
					document.getElementById("enterstuff").value="";
				};				
			};			
		