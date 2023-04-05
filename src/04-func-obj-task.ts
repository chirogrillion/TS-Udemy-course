// Create interfaces User and Admin
// Keys for User: login, email, password, isOnline, lastVisited
// Keys for Admin: login, email, password, isOnline, lastVisited, role

// Create a function login with param user (with keys login and password)
// Check if login and password are not empty and then greet user

interface User {
  login: string,
  email: string,
  password: string,
  isOnline: boolean,
  lastVisited: Date,
}

interface Admin extends User {
  role: string,
}

const user1: User = {
  login: 'krgl',
  email: 'krgl@gmail.com',
  password: 'hJ@iuG*2',
  isOnline: false,
  lastVisited: new Date(2023, 4, 4),
};

const admin1: Admin = {
  login: 'admin',
  email: 'whatever@someorg.org',
  password: 'admin',
  isOnline: true,
  lastVisited: new Date(2023, 4, 5),
  role: 'superadmin',
};

function login(user: {
  login: string,
  password: string,
}): void {
  if (user.login.length > 0 && user.password.length > 0) {
    console.log(`Hello, ${user.login}!`);
  }
}

login(user1);
login(admin1);