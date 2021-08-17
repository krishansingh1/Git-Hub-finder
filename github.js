class GitHub{

    constructor(){
        this.client_id = 'ea0545a21a0704030293';
        this.client_secret = 'c0910f192a19f8aa1413966f0d8596de65be96d9';
        this.repos_count= 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

     const profile = await profileResponse.json();
     const repos = await repoResponse.json();

       return {
           profile,
           repos
       }
    }
}