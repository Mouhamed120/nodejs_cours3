const jwt = require("jsonwebtoken");
const verification = (req, res, next) => {
  /**
   * 1) je dois recupèrer le token
   * 2) je vérifier le token
   */
  const token = req.headers.authorization.split(" ")[1];
  if (token) {
    //  verifier le token
    jwt.verify(token, "123456", (error, payload) => {
      if (error) {
        res.status(403).json("token is not valid");
      } else {
        // res.send(payload);
        next();
      }
    });
  } else {
    res.send("You are not authenticate");
  }
};

module.exports = { verification };
