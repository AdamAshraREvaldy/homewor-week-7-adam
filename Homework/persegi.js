exports.luasPersegi = function(sisi1, sisi2){
    if(sisi1 <= 0 || sisi2 <= 0){
        return 'Tidak boleh nol atau lebih kecil dari nol';
    }
    else{
        return sisi1 * sisi2;
    }
}
exports.kelilingPersegi = function(sisi){
    if(sisi <= 0){
        return 'Tidak boleh nol atau lebih kecil dari nol'
    }
    else{
        return 4 * sisi;
    }
    
}