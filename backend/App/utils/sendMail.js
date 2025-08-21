const nodemailer =  require("nodemailer");

const sendEmail = async (email, subject, text) =>{
    try{
        
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.USER_EMAIL,
                pass:process.env.USER_PASSWORD,
            },
        });

        await transporter.sendMail({
            from:process.env.USER_EMAIL,
            to:email,
            subject,
            text,
        });
        console.log("Email sent successfully")
    }catch(error){
        console.log('Email not sent',error);
    }
};
module.exports  = sendEmail;