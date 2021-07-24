const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');
//Core Module Readline
// const readline = require('readline');
// const { resolve } = require('url');

// const rl = readline.Interface({
//   input : process.stdin,
//   output : process.stdout,
// });

//Membuat folder data
const dirPath = './data';

if(!fs.existsSync(dirPath)){
  fs.mkdirSync(dirPath);
}

//Membuat file json jika belum ada
const dirData = './data/contacts.json';

if(!fs.existsSync(dirData)){
  fs.writeFileSync(dirData, '[]', 'utf-8');
}

// const questions = (question) => {
//   return new Promise ((resolve, reject) => {
//     rl.question(question,(nama) => {
//       resolve(nama);
//     });
//   });
// };

const loadContact = () => {
  const file = fs.readFileSync('data/contacts.json', 'utf-8');
  const contacts = JSON.parse(file);
  return contacts;
}

const saveContact = (nama, nohp, email) => {
  const contact = { nama, nohp, email };
  // const file = fs.readFileSync('data/contacts.json', 'utf-8');
  // const contacts = JSON.parse(file);
  const contacts = loadContact();
  
  //cek duplikasi
  const duplicate = contacts.find((contact) => contact.nama === nama);

  if(duplicate){
      console.log(chalk.red.inverse.bold('Contact sudah terdaftar, masukkan nama lain!'));
      return false;
  }


  if(email){
      if(!validator.isEmail(email)){
        console.log(chalk.red.inverse.bold('Email tidak valid, masukkan email yang valid!'));
      return false;
      }
  }

  if(!validator.isMobilePhone(nohp, 'id-ID')){
    console.log(chalk.red.inverse.bold('Nomor HP tidak valid, masukkan Nomor HP yang valid!'));
  return false;
  }
  contacts.push(contact);

  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
  console.log(chalk.green.inverse('Kontak Berhasil Dibuat'));
};

const listContact = () => {
  const contacts = loadContact();
  console.log(chalk.blue.inverse('Your Contacts'));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.nohp}`);
  })
}

const detailContact = (nama) => {
  const contacts = loadContact();

  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );

  if(!contact){
    console.log(chalk.red.inverse.bold(`Cannot find contact name : ${nama}!`));
  return false;
  }

  console.log(chalk.white.inverse.italic(contact.nama));
  console.log(contact.nohp);
  if(contact.email){
    console.log(contact.email);
  }


}

const deleteContact = (nama) => {
  const contacts = loadContact();

  const newContacts = contacts.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
  );

  if(contacts.length === newContacts.length){
    console.log(chalk.red.inverse.bold(`Cannot find contact name : ${nama}!`));
  return false;
  }

  fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts));
  console.log(chalk.green.inverse(`${nama} has been deleted`));
};

module.exports = {saveContact, listContact, detailContact, deleteContact};