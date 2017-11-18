module.exports = app=>{
    const Tasks = app.models.tasks;
    app.get("/tasks", (req, res) => {

        // Tasks.findAll({}, (tasks)=>{
        //     res.json({tasks})
        // })
        Tasks.findAllPromise().then((tasks)=>{
            res.json({tasks})
        }).catch(e=>{
            console.log(e);
        })
        
      });
}