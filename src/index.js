// @flow
// $FlowFixMe

const express = require('express');
const bodyParser = require('body-parser');

const UserRouter = require('./routers/UserRouter');

class Application{
    app: express$Application;
    constructor(){
        this.app = express();
        this.app.listen(3000, ():void =>{console.log('start')});
        this.init();
    };

    middlewere(){
        let app = this.app;
        app.use(bodyParser.urlencoded({extended:true}));
    };

    routes(){
        let app = this.app;
        app.get('/app', (req: express$Request, res: express$Response):void => {
            res.send('response');
        })
        app.use('/a', new UserRouter);
    };
    init(){
        this.middlewere();
        this.routes();
    };

};

new Application();