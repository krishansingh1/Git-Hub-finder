class GitHub{

    constructor(){
        this.client_id ='b1976e78b3f273653547';
        this.client_secret = 'e949b9cd15f9e0666bbbd0ed08d6cb4d5eae5e07';
        this.repos_count= 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

     const profile = await profileResponse.json();
     const repos = await repoResponse.json();

       return {
           profile,
           repos
       }
    }
}