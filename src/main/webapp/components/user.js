/**
 * 
 */

$(document).ready(function(){

alert("Loaded");
});

//regex for validations================================================================================================================================
var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var phoneno = /^\d{10}$/;

function validateItemForm() {
	
	if ($("#name").val().trim() == "") {
	return "Insert Name.";
	}
	
	if ($("#nic").val().trim() == "") {
	return "Insert NIC.";
	}
	
	if ($("#address").val().trim() == "") {
	return "Insert Address.";
	}	
	
	if ($("#phone").val().trim() == "" || !phoneno.test($("#phone").val())) {
	return "Insert Valid Contact Number.";
	
	}
	if ($("#email").val().trim() == "" || !re.test($("#email").val())){
	
	return "Insert Valid Email";
	}
	
	return true;
}


// SAVE ============================================
$(document).on("click", "#addUser", function(event) {



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




		
		$.ajax({
		url : "UserServlet",
		type : "post",
		data : $("#addForm").serialize(),
		dataType : "text",
		complete : function(response, status) {
		onItemSaveComplete(response.responseText, status);
		}
	});
});



function onItemSaveComplete(response, status) {
		if (status == "success") {
			var resultSet = JSON.parse(response);
			if (resultSet.status.trim() == "success") {
				$("#alertSuccess").text("Successfully saved.");
				$("#alertSuccess").show();
				$("#divItemsGrid").html(resultSet.data);
			} else if (resultSet.status.trim() == "error") {
				$("#alertError").text(resultSet.data);
				$("#alertError").show();
			}
		} else if (status == "error") {
				$("#alertError").text("Error while saving.");
				$("#alertError").show();
		} else {
				$("#alertError").text("Unknown error while saving..");
				$("#alertError").show();
		}
		$("#hidItemIDSave").val("");
		$("#addForm")[0].reset();
}


// Edit ============================================



function validateEditForm() {
	
	if ($("#editName").val().trim() == "") {
	return "Insert Name.";
	}
	
	if ($("#editNic").val().trim() == "") {
	return "Insert NIC.";
	}
	
	if ($("#editAddress").val().trim() == "") {
	return "Insert Address.";
	}	
	
	if ($("#editPhone").val().trim() == "" || !phoneno.test($("#editPhone").val())) {
	return "Insert Valid Contact Number.";
	
	}
	if ($("#editEmail").val().trim() == "" || !re.test($("#editEmail").val())){
	
	return "Insert Valid Email";
	}
	
	return true;
}


$(document).on("click", "#editUser", function(event) {



		// Clear alerts---------------------
		$("#editAlertSuccess").text("");
		$("#editAlertSuccess").hide();
		$("#editAlertError").text("");
		$("#editAlertError").hide();


		
		// Form validation-------------------
		var status = validateEditForm();



		if (status != true) {
			$("#editAlertError").text(status);
			$("#editAlertError").show();
			return;
			}





		$.ajax({
			url : "UserServlet",
			type : "PUT",
			data : $("#editForm").serialize(),
			dataType : "text",
			complete : function(response, status) {
				onItemEditComplete(response.responseText, status);
			}
		});
	});



function onItemEditComplete(response, status) {
		if (status == "success") {
			var resultSet = JSON.parse(response);
			if (resultSet.status.trim() == "success") {
				$("#editAlertSuccess").text("Successfully saved.");
				$("#editAlertSuccess").show();
				$("#divItemsGrid").html(resultSet.data);
			} else if (resultSet.status.trim() == "error") {
				$("#editAlertError").text(resultSet.data);
				$("#editAlertError").show();
			}
		} else if (status == "error") {
			$("#editAlertError").text("Error while saving.");
			$("#editAlertError").show();
		} else {
			$("#editAlertError").text("Unknown error while saving..");
			$("#editAlertError").show();
		}
			$("#hidItemIDSave").val("");
}
	
	
	
	
	//delete================================================================
$(document).ready(function() {
			$.ajax({
			url: "UserServlet",
			type: "DELETE",
			cache: false,
			success: function(dataResult){
				$('#deleteForm').html(dataResult);
			}
});
		$(document).on("click", ".delete", function() {
			var $ele = $(this).parent().parent();
			$.ajax({
				url: "UserServlet",
				type: "DELETE",
				cache: false,
				data:{
					id: $(this).attr("id")
			},
			success: function(dataResult){
				var dataResult = JSON.parse(dataResult);
				if(dataResult.statusCode==name){
					$ele.fadeOut().remove();
				}
			}
		});
	});
});

/*
$(document).ready(function(){
	$('#addForm').submit(function(){
		$.ajax({
			url: 'userServlet',
			type: 'POST',
			dataType: 'json',
			data: $('#addForm').serialize(),
			success:function(data){
				if(data.isValid){
					$('#displayUsers').html(+data.name);
					$('#displayUsers').slideDown(500);
				}
				else{
					alert('add records');
				}				
			}			
		});
		return false;
	})
	
})
*/



