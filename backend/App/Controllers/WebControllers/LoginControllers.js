const sendEmail = require("../../utils/sendMail");
const otpModel = require("../../Model/UserModel/OTPModel");
const UserModel = require("../../Model/UserModel/LoginModel");

const sendOtp = async (req, res) => {
    try {
        const { email } = req.body;
        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        let user = await otpModel.findOne({ email });
        if (!user) {
            user = await otpModel.create({
                email,
                otp,
                isVerified: false,
                otpCreatedAt: new Date()
            });
        } else {
            user.otp = otp,
                user.isVerified = false,
                user.otpCreatedAt = new Date(),
                await user.save();
        }

        await sendEmail(email, "Your OTP Code", `Your OTP is: ${otp}`);
        res.json({ message: "OTP sent successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Failed to send OTP", error: error.message });
    }
};

/* Verify OTP */

const VerifyOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;
        if (!email || !otp) {
            return res.status(400).json({ message: "Email and OTP are required" });
        }
        let user = await otpModel.findOne({ email });

        if (!user) {
            return res.status(404).send({ message: "User Not Found" })
        };
        /* ek model ke ander se aya user.otp == dusra direct body se jo user daala */
        if (user.otp !== otp) {
            return res.status(400).send({ message: "OTP Incorrect or Expire" });
        }
        /* if otp is correct then set isverified true */
        user.isVerified = true;
      /*   user.otp = null // for clear otp */
        await user.save();
        res.send({ message: "OTP Verified Successfully" });  

    } catch (error) {
        res.status(500).send({ message: "Error Verifying otp", error: error.message });
    };
};

/* Full Registration after after correct otp*/

const Registration = async (req, res) => {
    try {
        const { email,FullName,mobile } = req.body;
        let user = await otpModel.findOne({ email });
        
        if (!user) {
            return res.status(404).send({ message: "Please Verified OTP first" });
        }
        if (!user.isVerified) {
            return res.status(404).send({ message: "OTP is Not Verified " })
        }
        /* yaha pe usermodel mein agar data hai to de do nhi hai 
        to new data update kar do upsert:true update*/
        let registeredUser = await UserModel.findOneAndUpdate(
            { email }, {  email, FullName ,mobile }, { new: true, upsert: true }
        )
       
        return res.status(200).send({
            message: "Registration successful",
            user: registeredUser
        });

    } catch (error) {
        res.status(500).json({ message: " Registration failed", error: error.message });
    }
}


module.exports = {
    sendOtp,
    VerifyOtp,
    Registration
}
