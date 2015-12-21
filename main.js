function addUser(data) {
  var firstName = data['first-name'].value,
			lastName = data['last-name'].value,
			address = data['address'].value;

  var entry = {
  	firstName: firstName,
    lastName: lastName,
    address: address
  };
