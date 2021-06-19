const Userdb = require('../model/model')



exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({message:'content cannot found'})
        return
    }

    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })
    user.save()
    .then(data=>{
        // res.send(data)
        res.redirect('/add-user')
    })

    .catch(err=>{
        res.send({message:err.message})
    })
}


exports.find = (req,res)=>{
    if(req.query.id){
        const id = req.query.id
        Userdb.findById(id)
        .then(data=>{
            if(!data){
                res.send({message:'error'})
            }else{
                res.send(data)
            }
        })
    }else{
        Userdb.find()
        .then(data=>{
            if(!data){
                res.send({message:'no data'})
            }else{
                res.send(data)
            }
        })
    }
}


exports.update =(req,res)=> {
   if(!req.body){
       res.send({message:"cannot find"})
   return
   }

    const id = req.params.id
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message : `cannot update ${id}.Maybe user not found`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.send({message:'error'})
    })
    

}

exports.remove =(req,res)=>{
    const id = req.params.id
    const name = req.body.name
    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){  
            res.send({message:'data not found'})
        }else{
            res.send({message:name + ' deleted successfully'})
        }
    })

    .catch(err=>{
        res.send({message:'error'})
    })
}
