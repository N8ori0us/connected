const express     = require( 'express' ),
    app         = express(),
    nunjucks    = require( 'nunjucks' ) ;

// Define port to run server on
const port = process.env.PORT || 9000 ;

// Configure Nunjucks
// const _templates = process.env.NODE_PATH ? process.env.NODE_PATH + '/templates' : 'templates' ;
// nunjucks.configure( 'views', {
//     autoescape: true,
//     cache: false,
//     express: app
// } ) ;
// // Set Nunjucks as rendering engine for pages with .html suffix
// app.engine( 'html', nunjucks.render ) ;
// app.set( 'view engine', 'html' ) ;

// // Respond to all GET requests by rendering relevant page using Nunjucks
// app.get( '/', function( req, res ) {
//     res.render('index.html') ;
// } ) ;



nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', function(req, res) {
    res.render('index.html');
});

// Start server
app.listen( port ) ;
console.log( 'Listening on port %s...', port ) ;
