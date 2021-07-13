
//Contoh Method atau Function
function cetakNama (nama){
    return `Halo, nama saya ${nama}`;
}

//Contoh Variable
const PI = 3.14;

//Contoh Object
const mahasiswa = {
    nama : 'Muhammad Habil',
    umur : 21,
    //function es6
    cetakmhs()  {
        return `Halo, nama saya ${this.nama} dan saya ${this.umur} tahun `
    },
};

//Contoh Class
class orang {
    constructor(){
        console.log('Object has been made!!!');
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.orang = orang;

// module.exports = {
//     cetakNama : cetakNama,
//     PI : PI,
//     mahasiswa : mahasiswa,
//     orang : orang,
// };

module.exports = {cetakNama, PI, mahasiswa, orang};