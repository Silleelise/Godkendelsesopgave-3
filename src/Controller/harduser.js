const User = require('./Classes/user')

//opretter 2 personer, user1 og user2, udfra klasserne paymentUser og freeUser

let userArray = []
let user1 = new paymentUser["Sille", "female", [12, 03, 1999], "silleelise@live.dk", "relationsip", "copenhagen", "hej123", "Sille Elise Lindskow Hansen", "1234567891234567", [01, 02, 2022], "123"]
let user2 = new freeUser["Michael", "male", [13, 04, 1997], "Michael123@hotmail.com", "relationsip", "vejle", "hej234"]

userArray = [user1, user2];

module.exports = User;