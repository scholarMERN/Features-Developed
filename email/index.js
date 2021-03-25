const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mattycarly02@gmail.com',
        pass: '07081276MA'
    }
});

const mailDetail = {
    from: 'mattycarly02@gmail.com',
    to: 'lorenzo.deblasio@itiscuneo.eu',
    subject: 'Test progetto GPOI',
    text: 'Ciao Debla!'
}

transporter.sendMail(mailDetail, (err, info) => {
    if(err) throw err;
    console.log("Email inviata correttamente...");
})