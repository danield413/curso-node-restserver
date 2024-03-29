const path = require('path');
const { v4: uuidv4 } = require('uuid');



const defaults = ['png', 'jpg', 'jpeg', 'gif'];
const subirArchivo = ( files, extensionesValidas = defaults, carpeta = '' ) => {

    return new Promise( (resolve, reject) => {

        const { archivo } = files;
        const nombreCortado = archivo.name.split('.');
        const extension = nombreCortado[ nombreCortado.length - 1 ];
    
        //Valida la extension
        if( !extensionesValidas.includes(extension) ) {
            return reject(`La extensión ${ extension } no es permitida - ${ extensionesValidas }`);
        }
    
        const nombreTemporal = uuidv4() + '.' + extension;
        const uploadPath = path.join( __dirname, '../uploads/', carpeta, nombreTemporal );
    
        archivo.mv(uploadPath, (err) => {
            if (err) {
                console.log(err);
                return reject( err );
            }
    
            resolve(nombreTemporal);
        });
    })


}



module.exports = {
    subirArchivo
};