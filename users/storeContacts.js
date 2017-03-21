
function storeContacts(contactsArr) {
    if(typeof(Storage) !== 'undefined') {
        //Let's check if browser supports local storage
        localStorage['contactsArr'] = JSON.stringify(contactsArr);
    }
    else{
        alert('Your browser does not support storage!');
    }
}

function getContacts() {
    //if (typeof localStorage[contactsArr] !== "undefined") {
    contactsArr = JSON.parse(localStorage['contactsArr']);
    addCustomer(contactsArr);
    return contactsArr;
    //}
}