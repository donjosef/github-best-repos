import axios from 'axios';
import parseLink from 'parse-link-header';

export async function getRepos(language, date, page = 1) {
    const res = await axios.get(`https://api.github.com/search/repositories?q=stars:>1+language:${language}+created:>${date}&sort=stars&order=desc&per_page=40&page=${page}`);
    const pageCount = parseInt(parseLink(res.headers.link).last.page, 10);
    
    return {
        hits: res.data.items,
        pageCount
    }
}

export async function getWatchers(owner, repo) {
    const res = await axios.get(`https://api.github.com/repos/${owner}/${repo}/stargazers`);

    return {
        watchers: res.data
    }
}