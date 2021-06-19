const axios = require('axios')


exports.homeroute = (req, res) => {

    axios.get('http://localhost:8000/api/users')
        .then((userdata)=> {
            res.render('index', {
                users: userdata.data

            })
        })

        .catch(err => {
            res.send(err)
        })
}


exports.add_user = (req,res)=>{
res.render('add_user')
}


exports.update = (req,res)=>{
    axios.get('http://localhost:8000/api/users',{params:{id:req.query.id}})
    .then(userdata=>{
          res.render('update',{user:userdata.data})
    })

}