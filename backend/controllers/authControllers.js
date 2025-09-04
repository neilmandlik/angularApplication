const users = require('../models/users.json')

const jwt = require('jsonwebtoken')
require('dotenv').config()
const fsPromises = require('fs').promises
const path = require('path')
const userFilePath = path.join(__dirname,'..','models','users.json')

const authControllers = async(req,res) => {
    const {username, password, desg} = req.body
    const uname = `${desg.slice(0,3)}Id`
    if(!username || !password){
        return res.status(400).json({result: false, message: "Username Password are required", accessToken: ""})
    }
    const foundUser = users[desg].find(ele=>ele[uname]===parseInt(username))
    if (!foundUser){
        return res.status(401).json({result: false, message: "User Not Found", accessToken: ""})
    }
    const match = password === foundUser.password
    if(match){

        let fileData = await fsPromises.readFile(userFilePath)
        let existingUsers = JSON.parse(fileData)

        const accessToken = jwt.sign(
            {"username": foundUser[uname]},
            process.env.ACCESS_TOKEN,
            {expiresIn: '30s'}
        )
        const refreshToken = jwt.sign(
            {"username": foundUser[uname]},
            process.env.REFRESH_TOKEN,
            {expiresIn: '10s'}
        )
        const currentUser = {...foundUser,refreshToken}
        const updated = users[desg].map(ele=>ele[uname]===foundUser[uname]?currentUser:ele)
        console.log(updated)
        let updatedUsers = {...existingUsers,[`${desg}`]: updated}
        // console.log(process.env.ACCESS_TOKEN)

        await fsPromises.writeFile(userFilePath,JSON.stringify(updatedUsers,null,2))
        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 10000})
        return res.status(200).json({result: true, message: "Successsful", accessToken})  
    }
    else{
        return res.status(401).json({result: false, message: "Invalid Password", accessToken: ""})
    }  
}

module.exports = {authControllers}