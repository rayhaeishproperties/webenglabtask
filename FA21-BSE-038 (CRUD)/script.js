var selectedrow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if( selectedrow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();

}

//read the data 
function readFormData(){
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["Education"] = document.getElementById("Education").value;
    formData["Experience"] = document.getElementById("Experience").value;
    formData["National-ID"] = document.getElementById("National-ID").value;
     return formData;
}

// insert function 
function insertNewRecord(data){
    var table = document.getElementById("list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Name;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Education;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Experience;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.National-ID;
    var cell5= newRow.insertCell(4);
    cell5.innerHTML = `<button onclick =' onEdit(this)'  >Edit</button> <button onclick='onDelete(this)' >Delete</button>`
}
// edit the data
function onEdit(td){
    selectedrow = td.parentElement.parentElement;
    document.getElementById('Name').value = selectedrow.cells[0].innerHTML;
    document.getElementById('Education').value = selectedrow.cells[1].innerHTML;
    document.getElementById('Experience').value = selectedrow.cells[3].innerHTML;
    document.getElementById('Nationl-ID').value = selectedrow.cells[4].innerHTML;
}

function updateRecord(formData){
    selectedrow.cells[0].innerHTML = formData.Name();
    selectedrow.cells[1].innerHTML = formData.Education();
    selectedrow.cells[2].innerHTML = formData.Experience();
    selectedrow.cells[3].innerHTML = formData.National-ID();
}

// delete the data
function onDelete(td){
    if(confirm(' Do you want to delete this Record ?')){
        row = td.parentElement.parentElement;
        document.getElementById("list").deleteRow(row.rowIndex);
    }
    resetForm();
}

// 
function resetForm(){
    document.getElementById('Name').value = '';
    document.getElementById('Education').value = '';
    document.getElementById('Experience').value = '';
    document.getElementById('National-ID').value = '';

}