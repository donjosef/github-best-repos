export const getDateOfPastYears = (years) => {
    const now = Date.now();
    const msOfYears = (365 * years) * 86400000;
    const pastDate = new Date(now - msOfYears);
    const isoDate = pastDate.toISOString().substr(0, 10); //github api requires iso formatted date
    return isoDate;
};

export const parseHtml = (string) =>{
    const el = document.createElement('div');
    el.innerHTML = string;
    return el;
};

export const walkTheNode = (node, func) => {
    func(node);
    node = node.firstElementChild;
    while (node) {
        walkTheNode(node, func);
        node = node.nextElementSibling;
    }
};