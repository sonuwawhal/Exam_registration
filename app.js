

let users=[];
let cities=["Bhopal","Pune","Aurangabad","Delhi","Mumbai","Bangalore","chennai","New Delhi"];
function register(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let user={
    name:name,
    email:email,
    };


  let existingUser=users.filter((user)=>{
        return user.email==email
    });
    console.log("user exists??",existingUser);
    if(existingUser==0){
        users.push(user);
        console.log(cities[Math.floor((Math.random(cities)*cities.length))]);
    }
    else{
       console.log("User already exist") 
    }

    console.log(users);
    // console.log(cities)




}
   





