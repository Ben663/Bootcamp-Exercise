//? 3)
//? Create two button on the screen "Customers" "Agencies"
//? When the user clicks the button display a list of Customers / Agencies names
//? Only one list can be presented at a time

const spinnercontainer = document.querySelector('.spinner_container');
const customersBtn = document.querySelector('.customersBtn');
const agenciesBtn = document.querySelector('.agenciesBtn');
const listContainer = document.querySelector('.listContainer');

const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
};

const getData = async () => {
    const sellers = await fetchData('https://capsules7.herokuapp.com/api/carMarket/agencies');
    const customersList = await fetchData('https://capsules7.herokuapp.com/api/carMarket/customers');
    const taxesAuthority = await fetchData('https://capsules7.herokuapp.com/api/carMarket/tax');
    const agencies = await fetchData('sell', sellers);
    const customers = await fetchData('buy', customersList);
    Object.assign(sellers, agencies);
    Object.assign(customers, customers);
    const carMarket = { sellers: null, customrs: null };
    Object.assign(carMarket,
        { sellers },
        { customers },
        { taxesAuthority }
    );
    return carMarket;
};
customersBtn.addEventListener('click', async () => {
    listContainer.innerText = ' ';
    setSpinner(true);
    const carMarketObj = await getData();
    const ol = document.createElement('ol');
    ol.innerText = 'Customers List:';
    listContainer.appendChild(ol);
    carMarketObj.customersList.forEach((customer) => {
        let { name } = customer;
        const li = document.createElement('li');
        li.innerText = name;
        ol.appendChild(li);
    });
    setSpinner(false);
});

agenciesBtn.addEventListener('click', async () => {
    listContainer.innerText = ' ';
    setSpinner(true);
    const carMarketObj = await getData()
    console.log(carMarketObj);
    const ol = document.createElement("ol");
    ol.innerText = "Agencies List:"
    listContainer.appendChild(ol)
    carMarketObj.sellers.forEach((seller) => {
        let { agencyName } = seller;
        const li = document.createElement('li');
        li.innerText = agencyName;
        ol.appendChild(li);
    });
    setSpinner(false);
})
const setSpinner = (bool) => {
    if (bool) {
        const spinner = document.createElement('h3');
        spinner.textContent = 'Loading';
        listContainer.appendChild(spinner);
    } else {
        const spinner = document.querySelector('h3');
        listContainer.removeChild(spinner);
    }
};

//? 4)
//? When the user clicks on single name of a Customer / Agency
//? Show over the screen a card with all the data of that particular Customer / Agency
// listContainer.addEventListener("click", (e) => {
//     if (e.target.tagName !== "OL") {
//         printInfo(e.target.innerText, "customers")
//     }
// })
// const printInfo = async (li) => {
//     const carMarketObj = await getData()
//     console.log(carMarketObj);
//     console.log(li);
// }
//? 5)
//? When the user clicks on get image of the car fetch the car image and display another card with the image.
//! but what if i did no get the image ?????

//? ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// https://capsules7.herokuapp.com/api/carMarket/img/:brand/:model

//! Questions we should ask ourselves:
//! Where functions can be combined into one function?
//! Am I holding unnecessary information in the client's browser?
//! Why did I choose to call the API the way I did?

//* You can divide the work inside the capsule and share the responsibility
//* Separate the functions of logic and The functions related to HTML
//* Don't mess with the design (CSS)