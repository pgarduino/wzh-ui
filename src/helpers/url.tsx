const queryString = (params: {[index: string]:any} = {}) => {
    return Object.keys(params).map((key: string) => key + '=' + params[key]).join('&');
}

export {
    queryString,
}