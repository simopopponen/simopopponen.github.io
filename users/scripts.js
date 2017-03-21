

function addCustomer(userArr) {
    var row = '';
    var number = 0;
    if (userArr) {
        for (var i = 0; i < userArr.length; i++) {
            var replaced = userArr[i].address.replace(' ', '+');

            var streetAddress = replaced + ',+' + userArr[i].postalCode + '+' + userArr[i].city;

            row += '<tr>';
            row += '<td>' + userArr[i].firstName + '</td>';
            row += '<td>' + userArr[i].lastName + '</td>';
            row += '<td>' + userArr[i].phoneNumber + '</td>';
            row += '<td>' + '<a href="https://www.google.fi/maps/place/' + streetAddress + '"target="_blank">' + userArr[i].address + ' ' + userArr[i].postalCode + ' ' + userArr[i].city + '</a>' + '</td>';
            row += '<td>' + '<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" type="submit" id="editButton" onclick="editContact(' + number + ')">' + 'Edit' + '</button>' + '</td>';
            row += '<td>' + '<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" type="submit" id="deleteButton" onclick="deleteContact(' + number + ')">' + 'Delete' + '</button>' + '</td>';
            row += '</tr>';
            number++;
        }
        var customersTable = document.getElementById("customerTable");
        customersTable.innerHTML = row;
    }

    }

