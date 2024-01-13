// localStorage.clear()
function addObjectArray(){

    // get html id's
    const nameInput = document.getElementById('array-name');
    const numberInput = document.getElementById('array-number');
    const addItemsButton = document.getElementById('add-items');
    const itemList = document.getElementById('item-list');

    const getArray = JSON.parse(localStorage.getItem('myArray')) || [];
    
    // calling function
    displayCurrentItems();

    // display function
    function displayCurrentItems(){
        
        // empty the itemList
        itemList.innerHTML = '';

        // forEach loop for the items inside the object array
        for(const i of getArray) {
            const li = `<li>${i.number} ${i.name}</li>`;
            itemList.innerHTML += li;
        };
    };

    // addItems 
    addItemsButton.onclick = function() {
        const newNameInput = nameInput.value.trim();
        const newNumberInput = numberInput.value.trim();
        
        // set the input for the locaStorage
        // you have to push it to the parsed array
        getArray.push({number: newNumberInput, name: newNameInput});

        // after pushing the items, you have to stringify the getArray and set the localStorage
        localStorage.setItem('myArray', JSON.stringify(getArray));
        console.log(getArray)
        // display current items
        displayCurrentItems();
        
        // empty the values
        nameInput.value = '';
        numberInput.value = '';
    };
};

function removeItemUsingNumber() {
    const inputSelect = document.getElementById('select-number');
    const buttonSelect = document.getElementById('select-number-button');

    let items = JSON.parse(localStorage.getItem('myArray')) || [];

    buttonSelect.onclick = function () {
        // find specific number inside the parsed items
        const findId = items.findIndex(element => element.number == inputSelect.value);
        console.log(findId)

        if (findId !== -1) {
            // If the item is found, remove it from the array
            items.splice(findId, 1);

            // Update localStorage with the modified array
            localStorage.setItem('myArray', JSON.stringify(items));

        } else {
            console.log('Cannot find the id');
        }
    };
}

document.getElementById('clear').addEventListener('click', function(){
    localStorage.clear();
});

addObjectArray();
removeItemUsingNumber();