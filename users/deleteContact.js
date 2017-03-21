function deleteContact(rowNumber) {
    var editTable = [];
    for (var k = 0; k < contactsArr.length; k++) {
        if (k != rowNumber) {
            editTable.push(contactsArr[k]);
        }
    }
    contactsArr = editTable;
    storeContacts(contactsArr);
    addCustomer(contactsArr);
}
