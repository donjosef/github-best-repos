import axios from 'axios';
import parseLink from 'parse-link-header';

function isLastPage(headersLink) {
    return headersLink.last ? false : true;
}

export async function getRepos(language, date, page = 1) {
    const res = await axios.get(`https://api.github.com/search/repositories?q=stars:>1+language:${language}+created:>${date}&sort=stars&order=desc&per_page=40&page=${page}`);
    
    let pageCount;
    if (isLastPage(parseLink(res.headers.link))) {
        pageCount = parseInt(parseLink(res.headers.link).prev.page, 10) + 1;
    } else {
        pageCount = parseInt(parseLink(res.headers.link).last.page, 10);
    }

    return {
        hits: res.data.items,
        pageCount
    }
}

export async function getReposDynamically(query) {
    const res = await axios.get(`https://api.github.com/search/repositories?q=${query}+in:name+stars:>1000&per_page=10`);
    
    return {
        results: res.data.items
    };
}

export async function getWatchers(owner, repo, page = 1) {
    const res = await axios.get(`https://api.github.com/repos/${owner}/${repo}/stargazers?per_page=40&page=${page}`);

    let pageCount;
    if (isLastPage(parseLink(res.headers.link))) {
        pageCount = parseInt(parseLink(res.headers.link).prev.page, 10) + 1;
    } else {
        pageCount = parseInt(parseLink(res.headers.link).last.page, 10);
    }

    return {
        watchers: res.data,
        pageCount
    }
}