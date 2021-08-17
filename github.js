class GitHub{

    constructor(){
        this.client_id = '7636c848e56745ca34c0';
        this.client_secret = '06d2a8682b6d9425d5a6082c107a178dbf7585a5';
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