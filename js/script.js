let users = [
    { id: 1, firstName: 'Antonio', lastName: 'Montana' },
    { id: 2, firstName: 'Amir', lastName: 'Zehtab' },
    { id: 3, firstName: 'Shayan', lastName: 'Ebrahimi' },
    { id: 4, firstName: 'Babak', lastName: 'Mohammadi' },
    { id: 5, firstName: 'Parsa', lastName: 'Mir Asadi' },
    { id: 6, firstName: 'Amin', lastName: 'Saeedi Rad' },
    { id: 7, firstName: 'Ali', lastName: 'Qazi' },
    { id: 8, firstName: 'Amir Hossein', lastName: 'Saeidi' },
    { id: 9, firstName: 'Matin', lastName: 'Farahani' },
    { id: 10, firstName: 'Hasan', lastName: 'Ghahreman Zadeh' },
    { id: 11, firstName: 'Saeed', lastName: 'Ehsani' },
    { id: 12, firstName: 'Siamak', lastName: 'Modiri' },
    { id: 13, firstName: 'Mohsen', lastName: 'Ansari' },
    { id: 14, firstName: 'Mehran', lastName: 'Ali Pour' },
    { id: 15, firstName: 'Amir Hossein', lastName: 'Mahtabi' },
    { id: 16, firstName: 'Hossein', lastName: 'Amino' },
    { id: 17, firstName: 'Amir Ali', lastName: 'Zabihi' },
    { id: 18, firstName: 'Borna', lastName: 'Barazandeh' },
    { id: 19, firstName: 'Mohammad Hoseein', lastName: 'Pakdel' },
    { id: 20, firstName: 'Ehsan', lastName: 'Tayyebi' },
    { id: 21, firstName: 'Taha', lastName: 'Gholami' },
    { id: 22, firstName: 'Matin', lastName: 'Sahebi' },

];

// Import and Declare
let mainList = document.querySelector('.list');
let pageSection = document.querySelector('.pagesSection');
let rowNum = 5;
let currentPage = 1;
let pageNum = Math.ceil(users.length / rowNum);
let userPerPage = document.getElementById('UPP');
let href = window.location.href;

// Events
userPerPage.addEventListener('input', perPageHandler);


// Call Function For First Time
listHandler(users, rowNum, currentPage);


// Functions
function listHandler(usersArray, rowNumber, currentPageNumber) {
    mainList.textContent = '';
    let firstIndex = (currentPageNumber - 1) * rowNumber;
    let lastIndex = currentPageNumber * rowNumber;
    let currentPageUsers = usersArray.slice(firstIndex, lastIndex);

    let newUlElem = document.createElement('ul');
    newUlElem.classList.add('userList');
    mainList.append(newUlElem);

    currentPageUsers.forEach(function (user) {
        let newLiElem = document.createElement('li');
        newLiElem.classList.add('item');
        newLiElem.innerHTML = user.firstName + '&nbsp; &nbsp;' +  user.lastName;
        newUlElem.append(newLiElem);
    });
    pageSection.textContent = '';
    pageNum = Math.ceil(users.length / rowNum);

    let newUlForPageNumber = document.createElement('ul');
    newUlForPageNumber.classList.add('pages');
    pageSection.append(newUlForPageNumber);

    for (let counter = 0; counter < pageNum; counter++) {

        let newPage = document.createElement('li');
        newPage.classList.add('pageNum');
        newPage.textContent = counter + 1;
        newPage.dataset.number = counter + 1;
        newUlForPageNumber.append(newPage);

        if (counter + 1 === currentPage) {
            newPage.style.backgroundColor = '#18FFFF';
        }
        
        newPage.addEventListener('click', clickPageHandler);
    }

}

function clickPageHandler(event) {
    currentPage = +event.target.dataset.number;
    // window.location.hash = '#' + currentPage;
    window.location.href = (href +'#' + currentPage)
    console.log(window.location);
    listHandler(users, rowNum, currentPage);
}

function perPageHandler() {
    rowNum = userPerPage.value;
    console.log(rowNum);
    listHandler(users, rowNum, currentPage);
}