const express = require('express');
const customerService = require('../services/customerService');
const globalService = require('../services/globalService');
const router = express.Router();

router.post('/signup', (req, res) => {
    const result = { isUserExist: false, errorMassege: '' };
    let userDetails = req.body;
    console.log(userDetails);
    globalService.signUp(userDetails, 'customers', (resultFromMySql) => {
        console.log(resultFromMySql,'result');
        if(resultFromMySql[0]){
        result.isUserExist=true;
        result.errorMassege='user already exist';
        res.status(200).json(result);
        }
        res.status(200).json(result);
    });
})
// router.post('/sensitivity', (req, res) => {
//     console.log('posttttttt',req.body,req.body.sensitivity);
//     let id = req.params.idUser;
//     userService.addNewBabySensitivity(req.body.userId,req.body.sensitivity, (succedeToAdd => {
//         if (succedeToAdd) {
//             console.log('succedeToAdd');
//             res.json(succedeToAdd);
//         }
//         else {
//             res.send('fail to add');
//         }
//     }))
// });

module.exports = router;

