function welcome (firstName, lastName)
{
	let fullName = firstName + " " + lastName;
	function displayFullName () {
		alert("Welcome"+ " "+ fullName + "!")
	}
	displayFullName();
}

/*
// test
welcome('Holberton', 'School');
alert(fullName);
*/