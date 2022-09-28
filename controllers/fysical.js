const Fysical = require('../models/Fysical')

module.exports = {
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = await Fysical.find({userId:req.user.id})
            const itemsLeft = await Fysical.countDocuments({userId:req.user.id,completed: false})
            res.render('fysical.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    getData: async (req,res)=>{
        try{
            const weightData = await Fysical.find().sort({ date: "desc" }).lean();
            console.log(weightData)
            res.render('fysical.ejs', {weightData: weightData})
            } catch (err) {
            console.log(err);
            }
    },
     getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const comments = await Comment.find({post: req.params.id}).sort({ createdAt: "desc" }).lean();
      res.render("post.ejs", { post: post, user: req.user, comments: comments });
    } catch (err) {
      console.log(err);
    }
  },
    addWeight: async (req, res)=>{
        try{
            await Fysical.create({
                weight: req.body.weight,
                date: req.body.date,
                userId: req.user.id,
            })
            console.log('Weight has been to database!')
            res.redirect('/fysical')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Fysical.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Fysical.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Fysical.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    