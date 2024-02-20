'use strict';

const account1 = {
    id: '001',
    name: 'Nam',
    friendList: [],
    groupList: [],
    username: `ngdnam`,
    password: 1234,
    dob: new Date(),
};
const account2 = {
    id: '002',
    name: 'Hiếu',
    friendList: [],
    groupList: [],
    username: `hiushius`,
    password: 2345,
    dob: new Date(),
};
const account3 = {
    id: '003',
    name: 'Ly',
    friendList: [],
    groupList: [],
    username: `lyly123`,
    password: 3456,
    dob: new Date(),
};
const account4 = {
    id: '004',
    name: 'Duc',
    friendList: [],
    groupList: [],
    username: `mduc123`,
    password: 4567,
    dob: new Date(),
};

const accounts = [account1, account2, account3, account4];
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPassword = document.querySelector('.login__input--password');
const btnLogin = document.querySelector('.login__btn');

let currentAccount;

const displayHome = function () {
    document.querySelector('.navbar').style.opacity = 100;
    document.querySelector('.left-section').style.opacity = 0;
    document.querySelector('.right-section').style.opacity = 0;
};
const updateUI = function () {};
btnLogin.addEventListener('click', function (e) {
    e.preventDefault();

    currentAccount = accounts.find(
        acc => acc.username === inputLoginUsername.value
    );
    // console.log(currentAccount);
    if (currentAccount?.password === +inputLoginPassword.value) {
        // console.log(currentAccount);
        displayHome();
    }
});
