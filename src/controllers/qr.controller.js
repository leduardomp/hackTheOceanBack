import sequelize from '../config/db.sequelize'
import initModels from '../models/init-models'

// Require the package
import QRCode from 'qrcode'
import redPesca from '../models/redPesca'

const models = initModels(sequelize)

function randomNumber(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

function generaSalt() {
    return "".concat(randomNumber(0, 9)).concat(randomNumber(0, 9)).concat(randomNumber(0, 9)).concat(randomNumber(0, 9)).concat(randomNumber(0, 9)).concat(randomNumber(0, 9)).concat(randomNumber(0, 9)).concat(randomNumber(0, 9))
}

// Find a single Accion with an id 
exports.create = async (req, res) => {

    const salt = generaSalt()

    console.log(req.params)

    const { idRedPesca } = req.params;

    await models.redPesca.findAll({
        where: {
            codigo_qr: salt
        }
    })
        .then(redPesca => {

            let dataQr = {
                codigo_qr : salt
            }

            // Print the QR code to terminal
            QRCode.toString(
                JSON.stringify(dataQr),
                {type:'terminal'},
                function (err, QRcode) {
                    if(err) return console.log("error occurred")
                    // Printing the generated code
                    console.log(QRcode)
            })

            res.status(200).json({
                accion: 1,
                data: redPesca[0]
            })
        })
        .catch(err => {
            res.status(500).send({
                accion: 0,
                message: err.message || "Error bringing user by id"
            })
        })
};




 


// Converting the data into base64
//QRCode.toDataURL(stringdata, function (err, code) {
//    if(err) return console.log("error occurred")
 
    // Printing the code
//    console.log(code)
//})