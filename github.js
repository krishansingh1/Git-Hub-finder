class GitHub{

    constructor(){
        this.client_id = '7636c848e56745ca34c0';
        this.client_secret = 'f2eb7d4cba875891119f622c98ec6dd587b3ea82';
    }

    async getUser(user){

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

     const profile = await profileResponse.json();

       return {
           profile
       }
    }
}

 