module.exports = {
    isValid,
  };
  
  function isValid(user) {
    return Boolean(user.username 
        && user.password
        && (user.department ? (typeof user.department === "string") : true)
        && typeof user.username === "string"
        && typeof user.password === "string");
  }
  