const users = require('../models/users.model')
const GetAll = async (req,res)=>{
    try {
        const user = await users.find()
        res.json({user})
    } catch (error) {
        res.json(error)
    }
}
const PostOne =  async(req,res)=>{

    const {firstName,lastName,cnie,phone,email,adress,profile} = req.body;
    if(await users.findOne({email,cnie})) return res.json({errors:'user exist'})
    if(await users.findOne({email})) return res.json({errors:'email exist'})
    if(await users.findOne({cnie})) return res.json({errors:'cnie exist'})
    const user = new users({firstName,lastName,cnie,phone,email,adress,profile})
    user.save((err)=>{
        if (err) return res.json(err);
        else return res.json(user)
    })

    // try {
    //     const user = await users.create(req.body);
    //     res.status(200).json({user})
    // } catch (error) {
    //     res.status(500).json(error.errors)
    // }
}

const GetOne = async(req,res)=>{
    const {cnie,email} = req.body;
    const user = await users.findOne({cnie,email})
    if (!user) return res.json({errors:'user not exist'})
    else return res.json({user});
}

module.exports = {GetAll,PostOne,GetOne}