const delay = (response) => new Promise(resolve => setTimeout(resolve(response), 1000));
async function umPorSegundo() {
    console.log(await delay("1s"));
    console.log(await delay("2s"));
    console.log(await delay("3s"));
}
umPorSegundo();
import axios from 'axios';
async function getUserFromGithub(user) {
    try{
        const response=await axios.get(`https://api.github.com/users/${user}`);
        console.log(response);
    }catch(err){
        console.warn('Usuário não existe');
    }

}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');
class Github {
    static async getRepositories(repo) {
        try{
            const response=await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        }catch(err){
            console.warn('Repositório não existe');
        }
    }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

async function buscaUsuario(user){    
    try{
        const response=await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    }catch(err){
        console.warn('Usuário não existe');
    }
}
buscaUsuario('diego3g');