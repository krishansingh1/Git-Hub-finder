class GitHub{

    constructor(){
        this.client_id = '7636c848e56745ca34c0';
        this.client_secret = '0676cceab2a3a2b19402b81e3333a9a9350afef4';
    }

    async getUser(user){

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

     const profile = await profileResponse.json();

       return {
           profile
       }
    }
}

 