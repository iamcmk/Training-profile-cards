var submitBtn = document.getElementById('submit-btn');
submitBtn.onclick = function() {
	var form = this.parentNode,
  		formData = form.getElementsByTagName('input');

  addUser(formData);
  form.reset();
}

function addUser(data) {
  var firstName = data['first-name'].value,
			lastName = data['last-name'].value,
			profilePhoto = data['profile-photo'].value,
			position = data['position'].value;

  var entry = {
  	firstName: firstName,
    lastName: lastName,
    profilePhoto: profilePhoto,
		position: position
  };
  addressBook.people.push(entry);
  storeData(addressBook);

  renderAddressBook('address-book');
}

function renderAddressBook(elementId){
	var targetElement = document.getElementById(elementId),
  		people = addressBook.people,
      tmpl = '';

  for (var i = 0; i < people.length; i++) {
  	var person = people[i];

    tmpl += '<div class="card-container">' + '<div class="card-first-name">' + person.firstName + '</div>' + '<div class="card-last-name">' + person.lastName + '</div>' + '<div class="card-position">' + person.position + '</div>' + '<img src="' + person.profilePhoto + '"/>' + '</div>';
  }

  targetElement.innerHTML = tmpl;

}

function storeData(data){
	data = JSON.stringify(data);
	localStorage.setItem('address-book', data);
}

function loadData(dataId){
	var data = localStorage.getItem(dataId);
	return JSON.parse(data);
}

if (loadData('address-book')) {
	var addressBook = loadData('address-book');
	renderAddressBook('address-book');
}
else {
  var addressBook = {
    	people: []
  }
}
console.log(addressBook);
