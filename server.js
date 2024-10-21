const nodemailer = require('nodemailer');

// Configuration pour Gmail
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vincent2004dela@gmail.com',  // Adresse email d'envoi
    pass: '#Lolo2004#'          // Mot de passe de l'adresse email
  }
});

// Options de l'email
let mailOptions = {
  from: 'votreadresse@gmail.com',    // Adresse email d'envoi
  to: 'destination@example.com',     // Adresse email de destination
  subject: 'Sujet de l\'email',
  text: 'Contenu de l\'email'
};

// Envoi de l'email
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email envoyé: ' + info.response);
  }
});
