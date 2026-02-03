// pass: 'iadf tirg eoxb akyp' 

// For ES Modules (if you have "type": "module" in package.json)
import path from 'path';

// OR for CommonJS (if you are using require)

import express from 'express'; 
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname;


// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

// Serve the static HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// // Handle the form submission
// app.post('/send-email', (req, res) => {
//     const { name, email, subject, message } = req.body;



//     // Send the email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error(error);
//             res.status(500).send('Error sending email.');
//         } else {
//             console.log('Email sent: ' + info.response);
//             res.status(200).send('Email sent successfully!');
//         }
//     });
// });

app.post('/send-email', (req, res) => {
    const { name, subject, email, message } = req.body;
    
        // Create a Nodemailer transporter using your SMTP details
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use 'gmail' or another service like 'hotmail', etc.
        auth: {
            user: 'laiyiphang@gmail.com', // Your email address
            pass: 'iadf tirg eoxb akyp' // Your generated App Password
        }
    });

    // Email options
    const mailOptions = {
        from: `"${email}" <your_gmail_address@gmail.com>`, // Sender address
        to: 'laiyiphang@gmail.com', // Recipient(s) email address(es)
        subject: subject, // Subject line from the form
        text: `From: ${email}\n\n${message}`, // Plain text body
        html: `<p><strong>From:</strong> ${email}</p><p>${message}</p>` // HTML body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ success: false });
        }
        // Send a JSON response instead of plain text
        res.status(200).json({ success: true });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
