var jwt = require('jsonwebtoken');

const tokenValidate = (req, res, next) => {

    try {
        const token = req.headers['bearer'];
        if (!token) {
            return res.status(401).send('Not valid token');
        }

        const verified = jwt.verify(token, 'No secret');
        if (verified) {
            next();
        } else {
            return res.status(401).send('Not valid token');
        }
    } catch (err) {
        return res.status(401).send('Not valid token');
    }
};

module.exports = tokenValidate;