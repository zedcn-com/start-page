
const queryReg = /^@{1}(\S+)\s(\S+)$/;

const submitProcess = (e) => {
    e.preventDefault();
    let val = document.querySelector("input[name='q']").value;
    if (val && val !== "") {
        let m = queryReg.exec(val);
        let url;
        if (m === null) {
            url = `https://duckduckgo.com/?q=${val}`;
        } else {
            url = custom_query(m[1], m[2]);
        }
        location.href = url;
    }
};

function custom_query(type, query) {
    switch (type) {
        case "docker":
            return `https://store.docker.com/search?q=${query}`;
        case "jar":
        case "maven":
            return `https://search.maven.org/search?q=${query}`;
        case "github":
            return `https://github.com/search?q=${query}`;
        case "npm":
            return `https://www.npmjs.com/search?q=${query}`;
        default:
            return `https://duckduckgo.com/?q=${query}`;
    }
}

function init() {
    document.querySelector("form").addEventListener('submit', submitProcess);
}


document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        init();
    }
};