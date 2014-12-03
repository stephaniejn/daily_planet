var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded())

app.set('view engine', 'ejs');

var articles=[];

app.get("/article/new", function(req,res){
	res.render('article/new');
});

app.post("/article", function(req,res){
	articles.push(req.body);
	res.render("article/thanks")
})

app.get("/article", function(req, res){

	var object = {
		articles: articles
	}
	console.log("THE OBJECT IS HERE: "+object)
	res.render("article/home", object)
})

app.get("/article/:id", function(req,res){
	var index = req.params.id;
	var article = articles[index];
	res.render("article/shows", article);
})

app.listen(3000);