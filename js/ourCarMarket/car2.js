/** 1)
  Create an input field and a button when the button is clicked 
  call  function that receives 'number' as a parameter (from input field) 
  and returns a new promise after 2 sec
  If the number is above 17 display on the screen 'You can drive' 
  and if it's smaller throw error and display on the screen 'You're too young to drive'
 */


//! Check yourself once with .then .catch and once with async await
//! DRY
//! Small functions

const button = document.querySelector('button')
const input = document.querySelector('input');
const message = document.querySelector('#message');

const getPromise = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num >= 17) {
                resolve('You can drive')
            }
            reject('You too young to drive');
        }, 2000);
    });
};

const setMessage = (text) => {
    message.textContent = text;
};

const handleBtnClick = async () => {
    // if(!input.value) throw Error ('you must type your age');
    if(!input.value) {
        setMessage ('you must type your age');
        return;
    };
    getPromise(input.value)
        .then((res) => {
            setMessage(res);
        }).catch((e) => {
            setMessage(e);
        });

    // try {
    //     if(!input.value) throw Error('you must type your age');
    //     const messageToDisplay = await getPromise(input.value);
    //     setMessage(messageToDisplay);
    // } catch (e) {
    //     setMessage(e);
    // }
};

const setEvents = () => {
    button.addEventListener('click', handleBtnClick)
};
setEvents();