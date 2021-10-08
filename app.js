const express = require('express');
const app= new express();
const port = process.env.PORT || 5058;

const nav = [
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/admin',name:'Add Book'},
    {link:'/adminauth',name:'Add Author'}
]
const div = [
    {link:'/signup',name:'Sign Up'},
    {link:'/signin',name:'Sign In'}
]

const booksRouter = require('./src/routes/bookRoutes')(nav,div);
const authorRouter = require('./src/routes/authorRoutes')(nav,div);
const signRouter = require('./src/routes/signRoutes')(div);
const logRouter = require('./src/routes/logRoutes')(div);
const adminRouter = require('./src/routes/adminRoutes')(nav,div);
const admauthRouter = require('./src/routes/admauthRoutes')(nav,div);


app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/signup',signRouter);
app.use('/signin',logRouter);
app.use('/admin',adminRouter);
app.use('/adminauth',admauthRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        div,
        title:'Library'
       
    });
});

app.listen(port,()=>{console.log("Server Ready at "+port)});