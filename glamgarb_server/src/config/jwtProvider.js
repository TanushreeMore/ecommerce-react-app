const jwt = require("jsonwebtoken")

const SECRET_KEY = "asdascedjkancmcsacsefnajnfefewa";

const generatedToken = (userId) => {
    const token = jwt.sign ({userId}, SECRET_KEY)//, {expiresIn: "7days"})
    return token;
}

const getUserIdFromToken = (token) => {
    const decodedToken = jwt.verify(token, SECRET_KEY)
    console.log("token",token);
    console.log("decodedToken.userId",decodedToken.userId);
    return decodedToken.userId; ;
}

module.exports = {generatedToken, getUserIdFromToken}