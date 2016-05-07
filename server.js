#!/bin/env node
//imports
var express         = require('express'),
    fs              = require('fs'),
    load            = require('express-load'),
    bodyParser      = require('body-parser'),
    expressSession  = require('express-session'),
    mysql           = require('mysql'),
    error           = require(__dirname+'/middlewares/error'),
    app             = express(),
    store           = new expressSession.MemoryStore()
/**
 *  Define the sample application.
 */
var SampleApp = function() {

    //  Scope.
    var self = this;

    /**
     *  Set up server IP address and port # using env variables/defaults.
     */
    self.setupVariables = function() {
        //  Set the environment variables we need.
        self.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
        self.port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

        if (typeof self.ipaddress === "undefined") {
            //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
            //  allows us to run/test the app locally.
            console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
            self.ipaddress = "127.0.0.1";
        };
    };


    /**
     *  Populate the cache.
     */
    self.populateCache = function() {
        if (typeof self.zcache === "undefined") {
            self.zcache = { './views/home/index.ejs': '' };
        }

        //  Local cache for static content.
        self.zcache['index.ejs'] = fs.readFileSync('./views/home/index.ejs');
    };


    /**
     *  Retrieve entry (content) from cache.
     *  @param {string} key  Key identifying content to retrieve from cache.
     */
    self.cache_get = function(key) { return self.zcache[key]; };


    /**
     *  terminator === the termination handler
     *  Terminate server on receipt of the specified signal.
     *  @param {string} sig  Signal to terminate on.
     */
    self.terminator = function(sig){
        if (typeof sig === "string") {
           console.log('%s: Received %s - terminating sample app ...',
                       Date(Date.now()), sig);
           process.exit(1);
        }
        console.log('%s: Node server stopped.', Date(Date.now()) );
    };



    self.initializeServer = function() {

	/*  CONFIGURAÇÃO DOS MIDDLEWARES */
	//configuracao da view
	app.set('views', __dirname+'/views');
	//configuracao da engine EJS
	app.set('view engine', 'ejs');
	//configuracao do cookie
	//app.use(cookieParser('gpjcaxias2015'));
	//configuracao do sistema de sessão (login)
	app.use(expressSession({
		secret: 'gpjcaxias',
		name: 'gpjcaxias.sid',
		cookie: { maxAge: 60000 }, 
		resave: true,
		saveUninitialized: true,
		store: store
	}));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	//configuracao de CSS, JS e Imagens
	app.use(express.static(__dirname+'/public'));


	//MySQL Pool
	global.pool = mysql.createPool({
//host: '127.0.0.1',
//port: '3306',
//user: 'root',
//password: 'root',
	   host             : process.env.OPENSHIFT_MYSQL_DB_HOST,
	   port		    : process.env.OPENSHIFT_MYSQL_DB_PORT,
	   user             : process.env.OPENSHIFT_MYSQL_DB_USERNAME,
	   password         : process.env.OPENSHIFT_MYSQL_DB_PASSWORD,
	   database         : '2015'	
});



	//configuração das rotas Index e resultados
	load('models')
	    .then('controllers')
	    .then('routes')
	    .into(app);

	//middleware de tratamento de erros deve ser carregado por ultimo
//	app.use(error.notFound);
//	app.use(error.serverError);

    };


    
    /**
     *  Initializes the sample application.
     */
    self.initialize = function() {
        self.setupVariables();
        self.populateCache();
        self.initializeServer();
    };


    /**
     *  Start the server (starts up the sample application).
     */
    self.start = function() {
        //  Start the app on the specific interface (and port).
        app.listen(self.port, self.ipaddress, function() {

            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), self.ipaddress, self.port);
        });
    };

};   /*  Sample Application.  */



/**
 *  main():  Main code.
 */
var zapp = new SampleApp();
zapp.initialize();
zapp.start();
