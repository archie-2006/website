
const express = require("express");
const router = express.Router();
const Post = require('../models/Post')
router.get('',async (req, res) => {

    const locals = {
        title:"Archie's Blog",
        description: "Using MongoDB, NodeJS, Express"
    }

    
try {
    const data = await Post.find();
    res.render('index', { locals, data });
} catch (error) {
    console.log(error);
}

 

});


// function insertPostData() {
//     Post.insertMany([
//        {
//         title : "Before you start rea",
//         body: "This is the body text"
//        },

//        {
//         title: "The first Blog post",
//        }
//     ])
// }

// insertPostData();

router.get('/post/:id',async (req, res) => {

   

    
try {

     const locals = {
        title:"Archie's Blog",
        description: "Using MongoDB, NodeJS, Express"
    }

    let slug = req.params.id;


    const data = await Post.findById( { _id:slug } );
    res.render('post', { locals, data });
} catch (error) {
    console.log(error);
}

 

});

router.post('/search',async (req, res) => {

    const locals = {
        title:"Search",
        description: "Using MongoDB, NodeJS, Express"
    }

    
try {
   // const data = await Post.find();
    res.send(searchTerm);
} catch (error) {
    console.log(error);
}

 

});



router.get('/about',(req, res) => {

    res.render('about');

});

router.get('/contact',(req, res) => {

    res.render('Contact');

});

module.exports = router;
