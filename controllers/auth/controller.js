const authService = require("./service");
const bcrypt = require("bcryptjs")
const response = require("../../helpers/response");

// console.log("In Login")

exports.login = async (req,res) => {
  try{

    // console.log("inz")

    const user = await authService. 
    getUserByEmail(req.body.email);

    // console.log(user)

    if(!user){
      return res.status(422).send({
        message: "Enter valid Email and Password"
      })
    }

    const check = bcrypt.compareSync(
      `${req.body.password}`,
      `${user.password}`
    )

    if(!check){
      return res.status(422).send(
        response.format({
          data:{},
          message:"Enter valid Email and Password",
          status: "failure"
        })
      )
    }
    else{
      return res.status(200).send(
        response.format({
          data:{
            user:user.name,
            email: user.email,
          },
          message:"Successfully Logged in!!",
          status: "success"
        })
      )
    }
    
  }catch(error){
    return res.status(422).send(
      response.format({
        data:{},
        message:"Not Logged in!!",
        status: "failure"
      })
    )
  }
}
