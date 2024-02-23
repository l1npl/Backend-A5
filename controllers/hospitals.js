exports.getHospitals=(req,res,next) => {
    res.status(200).json({success:true,msg:`Get All Hospitals`});
}

exports.getHospital=(req,res,next) => {
    res.status(200).json({success:true,msg:`Get Hospitals 1 ID ${req.params.id}`});
}

exports.createHospitals=(req,res,next) => {
    res.status(200).json({success:true,msg:'Create new hospitals'});
}

exports.updateHospitals=(req,res,next) => {
    res.status(200).json({success:true,msg:`Update Hospital ${req.params.id}`});
}

exports.deleteHospitals=(req,res,next) => {
    res.status(200).json({success:true,msg:`Delete hospital ${req.params.id}`});
}