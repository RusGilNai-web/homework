const myDesc = {
  name: 'Nail',
  age: 19,
  isAdmin: false,
  sayHello(name) {
    return `Hello ${name}`
  }
}

console.log(myDesc.name)
console.log(myDesc.sayHello('Bill'))

const userList = [
  {
    name: 'alex',
    age: 23,
    isAdmin: false
  },
  {
    name: 'john',
    age: 34,
    isAdmin: true
  },
  {
    name: 'max',
    age: 19,
    isAdmin: false
  },
  {
    name: 'michal',
    age: 55,
    isAdmin: true
  },
  {
    name: 'jessy',
    age: 25,
    isAdmin: false
  },
  {
    name: 'william',
    age: 47,
    isAdmin: true
  }
]

let notAdminUsers = 0

for (let i = 0; i < userList.length; i++) {
  if (userList[i].isAdmin === false) {
    notAdminUsers += 1
  }
}

console.log(notAdminUsers)
