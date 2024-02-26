const Hospital = require("../models/Hospital");

exports.getHospitals=async (req,res,next) => {
    //res.status(200).json({success:true,msg:`Get All Hospitals`});
    try{
        const hospitals = await Hospital.find();
        res.status(200).json({success:true,count:hospitals.length,data:hospitals});
    }catch(err){
        console.log(err);
        res.status(400).json({success:false});
    }
   
}

exports.getHospital= async (req,res,next) => {
    //res.status(200).json({success:true,msg:`Get Hospitals 1 ID ${req.params.id}`});
    try{
        const hospital = await Hospital.findById(req.params.id);
        if(!hospital){
            return res.status(400).json({success:false});
        }
        res.status(200).json({success:true,data:hospital});
    }catch(err){
        res.status(400).json({success:false});
    }
}

exports.createHospital=async (req,res,next) => {
try{
    const hospital = await Hospital.create(req.body);
    res.status(201).json({
        success:true,
        data:hospital
    });
}
catch(err){
    res.status(400).json({success:false});
    };
    //console.log(req.body);
    //res.status(200).json({success:true,msg:'Create new hospitals'});
}

exports.updateHospital=async (req,res,next) => {
    //res.status(200).json({success:true,msg:`Update Hospital ${req.params.id}`});
    try{
        const hospital = await Hospital.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators:true
        });

        if(!hospital){
            return res.status(400).json({success:false});
        }
        res.status(200).json({success:true, data:hospital});
    }catch(err){
        res.status(400).json({success:false});
    }
}

exports.deleteHospital=(req,res,next) => {
    res.status(200).json({success:true,msg:`Delete hospital ${req.params.id}`});
}