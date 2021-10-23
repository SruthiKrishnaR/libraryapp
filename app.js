const express = require('express');
const session = require('express-session');
const app= new express();

const port = process.env.PORT || 5058;

const nav = [
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/admin',name:'Add Book'},
    {link:'/adminauth',name:'Add Author'}
]
const adm =[
    {link:'/booksadmin',name:'Books'},
    {link:'/authorsadmin',name:'Authors'},
    {link:'/admin',name:'Add Book'},
    {link:'/adminauth',name:'Add Author'}
]
const div = [
    {link:'/signup',name:'Sign Up'},
    {link:'/signin',name:'Log In'},
    {user:'req.session.user'}
]
const opt = [
    {link:'/updatebook',name:'Update'},
    {link:'/deletebook',name:'Delete'}
]

const booksRouter = require('./src/routes/bookRoutes')(nav,div);
const authorRouter = require('./src/routes/authorRoutes')(nav,div);
const signRouter = require('./src/routes/signRoutes')(div);
const logRouter = require('./src/routes/logRoutes')(nav,div);
const adminRouter = require('./src/routes/adminRoutes')(adm,opt);
const admauthRouter = require('./src/routes/admauthRoutes')(adm,opt);
const booksadminRouter = require('./src/routes/adminroutes/booksadminRoutes')(adm,opt);
const authoradminRouter = require('./src/routes/adminroutes/authorsadminRoutes')(adm,opt);


app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.use(session({secret:"key",resave:false,saveUninitialized:true,cookie:{maxAge:1000000}}));

app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/signup',signRouter);
app.use('/signin',logRouter);
app.use('/admin',adminRouter);
app.use('/adminauth',admauthRouter);
app.use('/booksadmin',booksadminRouter);
app.use('/authorsadmin',authoradminRouter);


app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        div,
        title:'Library'
    });
});

app.get('/indexadmin',function(req,res){
    res.render("indexadmin",{
        adm,
        title:'Library'
    });
});

app.listen(port,()=>{console.log("Server Ready at http://localhost:"+port)});