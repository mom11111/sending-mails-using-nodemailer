const express=require('express');
const nodemailer=require('nodemailer');
const app=express();

const transporter=nodemailer.createTransport({
service:'Gmail',
auth:{
    user:'nishantkumar91099@gmail.com',
    pass:'nishantsrw'
}
});

const moreoptions={
    from: 'nishantkumar91099@email.com', // sender address
  to: 'ipg_2016063@iiitm.ac.in', // list of receivers
  subject: 'trial', // Subject line
  html: '<p>Your html here</p>'// plain text body
}

transporter.sendMail(moreoptions,(err,info)=>{
    if(err){
        console.log('error');
        console.error(error);
    }
    else{
        console.log(info);
    }
});


app.listen(2000,()=>{
    console.log('connected');
});