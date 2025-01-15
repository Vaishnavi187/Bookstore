const nodemailer = require('nodemailer');
const Contact = require('../model/contact');


//send mail from testing account
// const contactus=async(req,res)=>{
//     let testaccount=await nodemailer.createTestAccount();
//     const transporter = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
//         secure: false, // true for port 465, false for other ports
//         auth: {
//           user: "maddison53@ethereal.email",
//           pass: "jn7jnAPss4f63QBp6D",
//         },
//       });
//       let message= {
//         from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
//         to: "bar@example.com, baz@example.com", // list of receivers
//         subject: "Hello ✔", // Subject line
//         text: "Successfully done", // plain text body
//         html: "<b>Successfully done</b>", // html body
//       };
//       transporter.sendMail(message).then((info)=>{
//         return res.status(201).json({msg:"You should receive a email",
//             info:info.messageId,
//             preview:nodemailer.getTestMessageUrl(info)})
//       }).catch(error=>{
//         return res.status(500).json({error})
//       })
// }

//send mail through gmail account
const getmail=async(req,res)=>{
    
    const { username, email, message } = req.body;

    if (!username || !email || !message) {
        return res.status(400).send({ msg: "All fields (username, email, message) are required." });
    }
    const newContact =new Contact({
        username,
        email,
        message
    })
    try {
        await newContact.save();
    let transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'tanvi123school@gmail.com',
            pass:'kgcbcsqmlwcaguoy'

        }
    })

    //configure email content
const mailoptions={
    from:'email',
    to:"tanvi123school@gmail.com",
    subject:`New  Message from ${username}`,
    text:`You have received a new message from ${username} (${email}).\n\nMessage:\n${message}`

}
// send email

    await transporter.sendMail(mailoptions)
    return res.status(200).send({msg:"emailsent successfully"})
} catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "Failed to send email or save data", error: error.message });
 
    
}
}

module.exports=getmail