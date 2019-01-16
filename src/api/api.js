import axios from 'axios';

export async function getRepos(language, date, page = 1) {
    const res = await axios.get(`https://api.github.com/search/repositories?q=stars:>1+language:${language}+created:>${date}&sort=stars&order=desc&per_page=50&page=${page}`);
    
    return {
        hits: res.data.items
    }

}