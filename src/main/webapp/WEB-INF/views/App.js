const axios = require("axios");

axios
  .post(
    "https://bfhldevapigw.healthrx.co.in/bfl-api-challenge/challenge-final",
    {
        "b_email":"YW5kZ2VzYTE2QGdtYWlsLmNvbQ==",
        "b_name":"QW5kZ2VfU29uYWxfQW5pbA==",
        "b_reg_no":"MjIwMzQzMTIwMDEw",
        "email":"andgesa16@gmail.com",
        "name":"Andge_Sonal_Anil",
        "personal_code": "ELASTICSEARCH",
        "reg_no":"220343120010"
            }
        
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });