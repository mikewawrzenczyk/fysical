const Fysical = require('../models/Fysical')

module.exports = {
    getData: async (req,res)=>{
        try{
            const weightData = await Fysical.find().sort({ date: "desc" }).lean();
            console.log(weightData)
            //no colon needed in object notation.
            res.render('fysical.ejs', {weightData: weightData})
            } catch (err) {
            console.log(err);
            }
    },
    getChart: async (req,res)=>{
        try{
            const weightData = await Fysical.find().sort({ date: "desc" }).lean();
            // console.log(weightData)
            let chartDate = []
            let chartWeight = []

            for(let i=0; i<weightData.length; i++){
                chartDate.push(weightData[i].date.toLocaleDateString('en-US', {
                // year: 'numeric',
                month: 'short',
                day: '2-digit',
            }))
                chartWeight.push(weightData[i].weight)
            }
                        
            //loop through weightData object, assign chartDate array adn cahrtWeih
            
            console.log(weightData)
            //no colon needed in object notation.
            res.json({chartDate, chartWeight})
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
    deleteWeight: async (req, res) => {
        try {
            console.log("Got here to delete");
            // Delete post from db
            await Fysical.remove({ _id: req.params.id });
            console.log("Deleted Weight");
            res.redirect('/fysical')
        } catch (err) {
            res.redirect('/fysical')
        }
      },
}    