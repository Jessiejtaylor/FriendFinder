var friends=require("../data/friends")

function apiRoutes(app){
app.get("/api/friends",function(req,res){
    res.json(friends)
})

app.post("/api/friends", function(req,res){
    var newFriend=req.body
    console.log(req.body)
    friends.push(newFriend)
    res.json(friends)
})
}
module.exports=apiRoutes

