import axios from 'axios';
import parseLink from 'parse-link-header';

function isLastPage(headersLink) {
    return headersLink.last ? false : true;
}

export async function getData(type, searchParams, page = 1) {
    let res;

    if(type === 'repos') {
        res = await axios.get(`https://api.github.com/search/repositories?q=stars:>1+language:${searchParams.language}+created:>${searchParams.date}&sort=stars&order=desc&per_page=40&page=${page}`);
    }

    if(type === 'starwatchers') {
        res = await axios.get(`https://api.github.com/repos/${searchParams.owner}/${searchParams.repo}/stargazers?per_page=40&page=${page}`);
    }

    let pageCount;
    if (isLastPage(parseLink(res.headers.link))) {
        pageCount = parseInt(parseLink(res.headers.link).prev.page, 10) + 1;
    } else {
        pageCount = parseInt(parseLink(res.headers.link).last.page, 10);
    }

    /*return the object representing the response for repos or starwatchers. This response will be handled by FetchData component to set the state*/
    return type === 'repos' ? {data: res.data.items, pageCount } : {data: res.data, pageCount}
    
}

export async function getReposDynamically(query) {
    const res = await axios.get(`https://api.github.com/search/repositories?q=${query}+in:name+stars:>1000&per_page=10`);

    return {
        results: res.data.items
    };
}

export async function getReadMe(owner, repo) {
    const res = await axios.get(`https://raw.githubusercontent.com/${owner}/${repo}/master/README.md`);
    return res.data;
}