// 1. Write code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort users by age descending
const users = [
    {
      id: 1,
      name: "Jack",
      isActive: true,
      age: 20,
    },
    {
      id: 2,
      name: "John",
      isActive: true,
      age: 18,
    },
    {
      id: 3,
      name: "Mike",
      isActive: false,
      age: 30,
    },
];

const getUserNames = users => {

    let allUserNames = []
    let activeUsers = []
    let sortedUsers = []

    //array of names
    allUserNames = users.map(user => user.name)

    //only active users
    activeUsers = users.filter((user) => user.isActive === true).map(user => user.name)

    //Sort users by age descending
    sortedUsers = users.sort((a,b) => {
        return b.age - a.age;
    }).filter((user) => user.isActive === true).map(user => user.name)
    
    console.log("All Users:", allUserNames)
    console.log("Active Users:", activeUsers)
    console.log("Users sorted by age:",sortedUsers)

}
  
getUserNames(users);