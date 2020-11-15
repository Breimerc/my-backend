'use strict';

module.exports = {
    cbackUsers: (req, res) => {
        const { number, token } = req.query;
        const { name, celphone } = req.body;
    
        console.log(`query data: ${number} - ${token} `);
        console.log(`query body: ${name} - ${celphone} `);
    
        res.send(req.body).status(200);
    }
};