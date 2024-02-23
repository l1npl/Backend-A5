const express = require('express');
const router = express.Router();
const {getHospitals,getHospital,createHospitals,updateHospitals,deleteHospitals} = require('../controllers/hospitals');

router.route("/").get(getHospitals).post(createHospitals)
router.route("/:id").get(getHospital).put(updateHospitals).delete(deleteHospitals)


module.exports=router;