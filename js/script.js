
function validateAddTripForm() {
	const requiredFields = Array.from(document.querySelectorAll('.required'));
	requiredFields.forEach(field => {
		const inputField = $(field.classList[0]).find('input');
		//if(!inputField.value) field.classList.add('has-error');
		console.log(inputField);

		//const inputValue = `.${field.classList[0]} input`;
		//console.log(inputValue.value + '\r\n');
		//if(!inputValue.value) field.classList.add('has-error');
		//	else field.classList.remove('has-error');
		//console.log("." +(field.classList[0] + ' input' + .value));
	});

	const requiredDropdowns = Array.from(document.querySelectorAll('.required-dropdown'));
	requiredDropdowns.forEach(field => {
		const select = `${field} select`;
		if(!select.options[select.selectedIndex].text) field.classList.add('has-error');
	});


}

function getSelectedValue(sel) {
	const selected = sel.options[sel.selectedIndex].text;
	console.log(selected);
	const otherTripType = document.querySelector('.trip-other-box');
	if(selected === 'Other') otherTripType.classList.remove('hidden'); 
	else if( (selected !== 'Other') && (!otherTripType.classList.contains('hidden')) )
		otherTripType.classList.add('hidden');
}

//function handleForm(event) { 
//	if (!validateAddTripForm()) event.preventDefault(); }

//const addTrip = document.querySelector('input[type="submit"]');
//addTrip.addEventListener('click', validateAddTripForm);


/*
function validateAddTripForm() {
    var txt = "";
    if (document.getElementById("trip-start-place").validity.rangeOverflow) {
       txt = "Value too large";
    }
    document.getElementById("demo").innerHTML = txt;
}

*/

