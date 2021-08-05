const nodemailer = require('nodemailer');
const { EMAIL, PASSWORD } = process.env

module.exports = {
emailUs: async (req, res) => {
    const { name, email, message } = req.body
    const ourEmail = 'ncdc5@yahoo.com'

    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL,
                pass: PASSWORD
            }
        });
        let info = await transporter.sendMail({
            from: `'${name}' <${EMAIL}>`, 
            to: ourEmail,
            subject: "CliquetheApp", 
            text: message,
            html: `  
                <h3>${name}</h3>
                <h4>email: ${email}</h4>
                <p>message: ${message}</p>
                `

        }, (err, res) => {
            if (err) {
                console.log('err', err)
            } else {   
                console.log('res', res);
                res.status(200).send(info);
            }
        })
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
}
}