

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
console.log(user);
}

function getFullName(user) {
return user.firstName + " " + user.userId;
}

function isUserStatusActive(user) {
if (isUserStatusActive===true) {
  console.log("the user is active");
} else {
console.log("the user is not active")
}
}

// function invocation

let activeUser = isUserStatusActive(users[0]);

console.log(activeUser);

// invoke and assign the result to a variable
const userTwoName = getFullName(users[2]);
// log the variable
console.log(userTwoName);
