let data = {
  name:"shiv",
  gender:"female",
  email:"shiva1432@gmail.com",
  status:"Active"
};

let  options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization:"Bearer ea875ac220e1640115fb6a0b33552660a2b79a19045e44487362aba883d4056c"
  },
  body: JSON.stringify(data)
};

fetch("https://gorest.co.in/public-api/users", options)
 .then(function(response) {
    return response.json();
  })
  .then(function(jsonData) {
    console.log(jsonData);
  
  }); 
        
    
