/**
 * 
 */

$(document).ready(function(){
	// Activate tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	// Select/Deselect checkboxes
	var checkbox = $('table tbody input[type="checkbox"]');
	$("#selectAll").click(function(){
		if(this.checked){
			checkbox.each(function(){
				this.checked = true;                        
			});
		} else{
			checkbox.each(function(){
				this.checked = false;                        
			});
		} 
	});
	checkbox.click(function(){
		if(!this.checked){
			$("#selectAll").prop("checked", false);
		}
	});
});

getAll();

function getAll(){
	
	alert("message");	
}

$(document).ready(function(){

alert("alert");
});


$(document).ready(function(){
	$('addUserModal').addUser(function(){
		$.ajax({
			url: 'user',
			type: 'POST',
			dataType: 'Json',
			data: $('addUserModal').serialize(),
			success:function(data){
				if(data.isValid){
					$('displayUsers').html(+data.name);
				}
				else{
					alert('add records');
				}				
			}			
		});
		return false;
	})
	
})





/*
$(document).ready(function()
{
$("#alertSuccess").hide();
$("#alertError").hide();
})

// SAVE ============================================
$(document).on("click", "#btnSave", function(event) {



// Clear alerts---------------------
$("#alertSuccess").text("");
$("#alertSuccess").hide();
$("#alertError").text("");
$("#alertError").hide();



// Form validation-------------------
var status = validateItemForm();



if (status != true) {
$("#alertError").text(status);
$("#alertError").show();
return;
}



// If valid------------------------
var type = ($("#hidItemIDSave").val() == "") ? "POST" : "PUT";



$.ajax({
url : "UserServlet",
type : type,
data : $("#formItem").serialize(),
dataType : "text",
complete : function(response, status) {
onItemSaveComplete(response.responseText, status);
}
});
});
*/