// @flow

const express = require('express');

class UserRouter extends express.Router {
    constructor(){
        super();
        this.get('/apka', (req: express$Request, res: express$Response):void => {
            res.send('apka')});
    };
};

module.exports = UserRouter
