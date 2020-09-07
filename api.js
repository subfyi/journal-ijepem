export default async (url, params) => {
    var task;

    var newParams = params && {...params, headers: {'Accept': 'application/json', ...(params.headers || {})}};

    if (url.startsWith('/')) {
        task = fetch(process.env.ENDPOINT + url, newParams);
    } else {
        task = fetch(url, newParams);
    }

    var data = await task;

    switch (data.status) {
        case 200:
            return await data.json();
        case 204:
            return true;
        case 404:
            throw new Error(`404 on ${url}`);
        default:
            let error;
            try {
                error = await data.json();
            } catch (e) {
                throw new Error('Invalid response on ' + url);
            }

            throw new Error(error.message);
    }
};
