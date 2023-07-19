const Users = require('../model/user');
const {Router} = require('express')

const userRouter = Router();

userRouter.post('/create', async(req, res)=>{
    const {name, mobile, passWord} = req.body;

    const uniqueNumber = await Users.countDocuments({mobile}) > 0 ? true : false;
    if(uniqueNumber){
        return res.status(400).json({msg : "mobile already existed", uniqueNumber});
    }

    const createUser = await Users.create({
        name,
        mobile,
        passWord
    })
    try {
        if(createUser){
            return res.status(201).json({msg : "user Created", createUser})
        }
    } catch (error) {
        return res.status(500).json({msg : "server error", error})
    }
})

userRouter.get('/get', async(req, res)=>{
    const getUser = await Users.find({})
    try {
        if(getUser){
            return res.status(200).json({msg : "get user", getUser})
        }
    } catch (error) {
        return res.status(500).json({msg : "server error", error})
    }
})

userRouter.patch('/edit/:id', async(req, res)=>{
    const { id } = req.params;
    const payload = req.body
    const deleteUser = await Users.findByIdAndUpdate({_id : id}, payload)
    try {
        if(editUser){
            return res.status(200).json({msg : "Edit user", payload})
        }
    } catch (error) {
        return res.status(500).json({msg : "server error", error})
    }
})

userRouter.delete('/delete/:id', async(req, res)=>{
    const { id } = req.params;
    const deleteUser = await Users.findByIdAndRemove({_id : id})
    try {
        if(deleteUser){
            return res.status(200).json({msg : "delete user", deleteUser})
        }
    } catch (error) {
        return res.status(500).json({msg : "server error", error})
    }
})

module.exports = userRouter