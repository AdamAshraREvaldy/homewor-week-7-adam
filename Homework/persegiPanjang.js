exports.luasPersegiPanjang = function(panjang, lebar){
    if(panjang <= 0 || lebar <= 0){
        return 'Tidak boleh nol atau lebih kecil dari nol';
    }
    else{
        return panjang * lebar;
    }

}

exports.kelilingPersegiPanjang = function(panjang, lebar){
    if(panjang <= 0 || lebar <= 0){
        return 'Tidak boleh nol atau lebih kecil dari nol';
    }
    else{
        return 2 * (panjang+lebar);
    }
}
