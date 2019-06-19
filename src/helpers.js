const uuid = require('uuid');
//test double

// new Date()  you don't control the value, it's always changing

// make person (name) => { id, name }

module.exports = {
      savePerson
}
function savePerson(name) {
      return {
            id: uuid(),
            name,
      }
}