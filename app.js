console.log('have fun !');


$('input').val("");

var stranger = {firstName: firstname, lastName: lastname, cityStranger: city};

var firstname = $('#first_name').keyup(function(){
	stranger.firstName = $('#first_name').val();
	console.log(stranger);
	hello();
});
var lastname = $('#last_name').keyup(function(){
	stranger.lastName = $('#last_name').val();
	console.log(stranger);
	hello();
});
var city = $('#city').keyup(function(){
	stranger.cityStranger = $('#city').val();
	console.log(stranger);
});


function hello(){
	var username = stranger.firstName + " " + stranger.lastName;
	$('#username').empty().text(username);
}
