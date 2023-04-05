"use strict";
// Create interfaces User and Admin
// Keys for User: login, email, password, isOnline, lastVisited
// Keys for Admin: login, email, password, isOnline, lastVisited, role
const user1 = {
    login: 'krgl',
    email: 'krgl@gmail.com',
    password: 'hJ@iuG*2',
    isOnline: false,
    lastVisited: new Date(2023, 4, 4),
};
const admin1 = {
    login: 'admin',
    email: 'whatever@someorg.org',
    password: 'admin',
    isOnline: true,
    lastVisited: new Date(2023, 4, 5),
    role: 'superadmin',
};
function login(user) {
    if (user.login.length > 0 && user.password.length > 0) {
        console.log(`Hello, ${user.login}!`);
    }
}
login(user1);
login(admin1);
