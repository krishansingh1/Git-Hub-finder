class UI{

    constructor(){
        this.profile =document.getElementById('profile');
    }

    showProfile(user){
       this.profile.innerHTML = `
         <div class="card card-body mb-3">
           <div class="row">
            <div class="col-md-3">
              <img class="img-fluid mb-2" src="${user.avatar_url}">
              <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block col-12 mb-4">View Profile</a>
            </div>
            <div class="col-md-9">
              <span class="badge alert-primary mb-2">Public Repos: ${user.public_repos}</span>
              <span class="badge alert-secondary">Public Gists: ${user.public_gists}</span>
              <span class="badge alert-success">Followers: ${user.followers}</span>
              <span class="badge alert-info">Following: ${user.following}</span>
               <br><br>
                <ul class="list-group">
                 <li class="list-group-item">Name: ${user.name}</li>
                 <li class="list-group-item">Company: ${user.company}</li>
                 <li class="list-group-item">Website/Blog: ${user.blog}</li>
                 <li class="list-group-item">Location: ${user.location}</li>
                 <li class="list-group-item">Member Since: ${user.created_at}</li>
                <ul>
            </div>
           </div>
         </div>
         <h3 class="page-heading mb-3">Latest Repos<h3>
         <div id="repos"></div>
       `
    }

    showAlert(message,alertClass){
        //Clear any remaining alerts
         this.clearAlert();

       //Create div
        const div = document.createElement('div');
        //Add classes
        div.className = alertClass;
        //Add Text
         div.appendChild(document.createTextNode(message));
         //Get parent
         const container = document.querySelector('.searchContainer');
         //Get search box
          const search = document.querySelector('.search');
          container.insertBefore(div,search);

          //Alert Timeout
           setTimeout(() => {
               this.clearAlert();
           }, 3000);
    }

     clearAlert(){
         const currentAlert = document.querySelector('.alert');

         if(currentAlert){
             currentAlert.remove();
         }
     }

    clearProfile(){
        this.profile.innerHTML= '';
    }
}