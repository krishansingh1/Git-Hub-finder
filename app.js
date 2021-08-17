
const gitHub = new GitHub;

const ui = new UI;

//Search Input
const searchUser = document.getElementById('searchUser');

//Search input event listener

searchUser.addEventListener('keyup',(e) =>{

    //Get Input Text
     const userTxt = e.target.value;

      if(userTxt !== ''){

        //console.log(userTxt);

        //Make Http Call
         gitHub.getUser(userTxt)
          .then(data => {
             //console.log(data);
            if(data.profile.message === 'Not Found'){
               //Show Alert
               ui.showAlert('User not found', 'alert alert-danger');
            }  else{
               //Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
          })

            }  else{
              //Clear profile
               ui.clearProfile();
       }
 });