function addContacts() {

        contacts = createCustomer();
        if (editForm > -1) {
            contactsArr[editForm] = contacts;
            editForm = -1;
        }
        else {
            contactsArr.push(contacts);

        }
        storeContacts(contactsArr); //Store contatcs to localstorage
        addCustomer(contactsArr); //Add customer to screen
        document.forms['formi'].reset();
}

