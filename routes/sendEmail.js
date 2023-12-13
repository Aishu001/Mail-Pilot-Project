import express from "express";
import nodemailer from 'nodemailer'
import multer from "multer";

const router = express();
const storage = multer.memoryStorage(); // Use memory storage to handle file data in memory
const upload = multer({ storage: storage });

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
  

  router.post('/send/BulkEmail', upload.single('file'), async (req, res) => {
    try {
      const { from, to, subject, text } = req.body;
      // Ensure recipient is an array before attempting to join
      console.log('Request Body:', req.body);
      const bccField = Array.isArray(to) ? to.join(',') : to;
      // Ensure recipient is an array before attempting to join
     
      const mailOptions = {
        from: from,
        bcc: bccField, // Use BCC to hide other recipients
        subject: subject,
        text: text,
        attachments: [
          {
            filename: req.file.originalname,
            content: req.file.buffer,
          },
        ],
      };
  
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent: ' + info.response);
      console.log('Received attachment:', req.file.originalname, req.file.size);
  
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.log('Error sending email: ', error);
      res.status(500).json({ error: 'Server Error', details: error.message });
    }
  });
  

export const CampaignRouter  = router;