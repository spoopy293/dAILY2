const users = [
  {
    userId: 2123,
    firstName: "meowwwwwww",
    lastName: "hi",
    isActive: true,
  },
  {
    firstName: "meowww",
    lastName: "hii",
    isActive: false,
    userId: 2222,
  },
  {
    firstName: "meowww",
    lastName: "hiiiiii",
    isActive: true,
    userId: 2911,
  },
];

// function declaration
function printUser(user) {
  console.log(user.firstName, user.lastName, user.isActive);
}

function getFullName(user) {
  return user.firstName + " " + user.lastName;
}

function isUserStatusActive(user) {
  if (user.isActive === true) {
    console.log("the user is alive");
  } else {
    console.log("the user is dead");
  }
}

function biggerThan(number) {
  if (number > 2) {
    console.log("das a big number");
  } else {
    console.log("das a small number");
  }
}

const user = users[1];
biggerThan(user.userId);

// function invocation
isUserStatusActive(users[0]);

const userTwoName = getFullName(users[2]);
console.log(userTwoName);

