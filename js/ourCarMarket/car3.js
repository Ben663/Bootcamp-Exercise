/** 2)
   create a car Market Object
   fetch all data from the API and assign it to the carMarketObj
   add spinner to see that everything works
   and show message when done
   */
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/agencies
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/agencies/:id
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/customers
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/customers/:id: 
const spinnerContainer = document.querySelector('.spinner_container');
const urls = [
  'https://capsules7.herokuapp.com/api/carMarket/agencies',
  'https://capsules7.herokuapp.com/api/carMarket/customers',
  'https://capsules7.herokuapp.com/api/carMarket/tax',
];
const carMarket = {
    sellers: null,
    customrs: null,
};
const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const getAllPromises = async (arrOfUrls) => {
  const promisesArr = arrOfUrls.map((url) => {
    return fetchData(url);
  });
  const [sellers, customers, taxesAuthority] = await Promise.all(promisesArr);
  return { sellers, customers, taxesAuthority }
};
const spinnerToggle = (bool) => {
  if (bool) {
    const h3 = document.createElement('h3');
    h3.textContent = 'Loading';
    spinnerContainer.appendChild(h3);
  }else {
    spinnerContainer.replaceChildren([]);
  }
};
const startApp = async () => {
  spinnerToggle(true);
  const res = await getAllPromises(urls);
  spinnerToggle(false);
  console.log(res);
};
startApp();

// way in the room
// async function fetchData(url) {
//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         //console.log(data);
//         return data;
//     } catch (e) {
//         console.log("error");
//     }
// };
// const fetchID = async (url, searchId) => {
//     const data = await fetchData(url);
//     const agenciesId = [];
//     data.forEach((agency) => {
//         agenciesId.push(agency[searchId])
//     })
//     return agenciesId;
// }
// //fetchID('https://capsules7.herokuapp.com/api/carMarket/agencies', "agencies");
// //fetchID('https://capsules7.herokuapp.com/api/carMarket/customers', "id");

// const getData = async (arr, temp) => {
//     let idArr = await Promise.all(arr)
//     let tempArr = [];
//     for (let id of idArr) {
//         let res = fetchData(`https://capsules7.herokuapp.com/api/carMarket/${temp}/${id}`)
//         tempArr.push(res);
//     }
//     const promises = await Promise.all(tempArr)
//     return promises;
// }
// const test = async () => {
//     const fetchAll = await fetchID("https://capsules7.herokuapp.com/api/carMarket/agencies", "agencyId");
//     let data = [];
//     data.push(getData(fetchAll, "agencies"));
//     const All = await Promise.all(data);
//     console.log(All.flat());
// };
// test();
