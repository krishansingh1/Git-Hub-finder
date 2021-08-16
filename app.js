const gitHub = new GitHub;

//Search Input
const searchUser = document.getElementById('searchUser');

//Search input event listener

searchUser.addEventListener('keyup',(e) =>{

    //Get Input Text
     const userTxt = e.target.value;

      if(userTxt!== ''){
        console.log(userTxt);
        //Make Http Call
         gitHub.getUser(userTxt)
          .then(data => {
            
            if(data.profile.message === 'Not Found'){
               //Show Alert

            }  else{
               //Show Profile

            }
          })
      }  else{
        //Cleat profile
      }
});