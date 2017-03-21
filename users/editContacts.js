function editContact(rowNumber) {
    document.getElementById('fname').value = contactsArr[rowNumber].firstName;
    document.getElementById('lname').value = contactsArr[rowNumber].lastName;
    document.getElementById('phone').value = contactsArr[rowNumber].phoneNumber;
    document.getElementById('address').value = contactsArr[rowNumber].address;
    document.getElementById('postalCode').value = contactsArr[rowNumber].postalCode;
    document.getElementById('city').value = contactsArr[rowNumber].city;
    document.getElementById('addButton').innerHTML = 'EDIT';
    document.getElementById('user-header2').innerText = 'Edit contact';
    document.getElementById('fnameLabel').style.visibility = 'hidden';
    document.getElementById('lnameLabel').style.visibility = 'hidden';
    document.getElementById('phoneLabel').style.visibility = 'hidden';
    document.getElementById('addressLabel').style.visibility = 'hidden';
    document.getElementById('postalCodeLabel').style.visibility = 'hidden';
    document.getElementById('cityLabel').style.visibility = 'hidden';
    editForm = rowNumber;
}


