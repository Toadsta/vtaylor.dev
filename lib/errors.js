const errorPages = {
    400: 'bad request: malformed input',
    401: 'unauthorized: authentication required',
    403: 'forbidden: permission denied',
    405: 'method not allowed: operation not permitted',
    429: 'too many requests: rate limit exceeded',
};

module.exports = { errorPages };
