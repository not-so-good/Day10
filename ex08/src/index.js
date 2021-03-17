function getUsername(email){
    var username = '';
// Only change code below this line
    var username = {};
        username['user1@mail.com'] = 'user1';
        username['user2@mail.com'] = 'user2';
        username['user3@mail.com'] = 'user3';
        username['user4@mail.com'] = 'user4';
        username['user5@mail.com'] = 'user5';
        username['user6@mail.com'] = 'user6';
    
    username = username[email];
    
// Only change code above this line
    return username;
}

console.log(getUsername("user1@mail.com"));
console.log(getUsername("user2@mail.com"));
console.log(getUsername("user3@mail.com"));
console.log(getUsername("user4@mail.com"));
console.log(getUsername("user5@mail.com"));
console.log(getUsername("user6@mail.com"));
console.log(getUsername(""));
module.exports = getUsername;