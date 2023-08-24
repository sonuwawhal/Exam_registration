

let users=[];
let cities=["Bhopal","Pune","Aurangabad","Delhi","Mumbai","Bangalore","chennai","New Delhi"];  //Cities for center
function register(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let user={
    name:name,
    email:email,
    };

function notify(){                                                  //function for already existing user
    let alert=document.getElementById("alert-danger")
    alert.classList.remove("alert");
    alert.classList.add("alert-danger");

    setTimeout(()=>{
      alert.classList.remove("alert-danger");
      alert.classList.add("alert")
    },2000)



}


function notifyuseradded(){                                                            // function for user added succesfully
    let alert1=document.getElementById("alert-success")
    alert1.classList.remove("alert")
    alert1.classList.add("alert-success")
    setTimeout(()=>{
alert1.classList.remove("alert-success")
alert1.classList.add("alert")
    },2000)
}

  let existingUser=users.filter((user)=>{               //checking for existing user
        return user.email==email
    });
    console.log("user exists??",existingUser);
    if(existingUser==0){
        users.push(user);
        notifyuseradded();
        console.log(cities[Math.floor((Math.random(cities)*cities.length))]); //selecting random city
    }
    else{
       notify();
    }

    console.log(users);
    // console.log(cities)




}
   





