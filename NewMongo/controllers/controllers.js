const Note = require('../models/model.js');


exports.create = (req, res) => {
    const CustomerDetails = new Note({
        Customer_Name: req.body.Customer_Name || "Untitled Note", 
        customerId : req.body.customerId,
         Mobile_number: req.body.Mobile_number,
         Date_of_birth: req.body.Date_of_birth,
        
    });
    
   time= new Date(req.body.Date_of_birth)
        today= new Date().getFullYear()
        Myage=today-time.getFullYear()
        console.log(Myage)
        CustomerDetails.set('age', Myage )
        CustomerDetails.save()
    .then(data => {
      
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error while creating."
        });
    });
};

exports.findAll = (req, res) => {
    Note.find()
    .then(CustomerDetails => {
        res.send(CustomerDetails);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error while retrieving."
        });
    });
};


exports.findOne = (req, res) => {
    
    Note.findById(req.params.CustomerDetailsId)
    .then(CustomerDetails => {
        if(!CustomerDetails) {
            return res.status(404).send({
                message: "Not found " + req.params.CustomerDetailsId
            });            
        }
        res.send(CustomerDetails);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Not found " + req.params.CustomerDetailsId
            });                
        }
        return res.status(500).send({
            message: "Cant get" + req.params.CustomerDetailsId
        });
    });
};

exports.update = (req, res) => {


   /*  if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    } */

    time= new Date(req.body.Date_of_birth)
    today= new Date().getFullYear()
    Myage=today-time.getFullYear()
    console.log(Myage)
    CustomerDetails.set('age', Myage )
    Note.findByIdAndUpdate(req.params.CustomerDetailsId, {
        Customer_Name: req.body.Customer_Name || "Untitled Note", 
        customerId : req.body.customerId,
         Mobile_number: req.body.Mobile_number,
         Date_of_birth: req.body.Date_of_birth,
    }, {new: true})
    .then(CustomerDetails => {
        if(!CustomerDetails) {
            return res.status(404).send({
                message: "Not found " + req.params.CustomerDetailsId
            });
        }
        res.send(CustomerDetails);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Not found " + req.params.CustomerDetailsId
            });                
        }
        return res.status(500).send({
            message: "Error updating " + req.params.CustomerDetailsId
        });
    });
};

exports.delete = (req, res) => {
    Note.findByIdAndRemove(req.params.CustomerDetailsId)
    .then(CustomerDetails => {
        if(!CustomerDetails) {
            return res.status(404).send({
                message: "Not found " + req.params.CustomerDetailsId
            });
        }
        res.send({message: " deleted"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Not found " + req.params.CustomerDetailsId
            });                
        }
        return res.status(500).send({
            message: "Not Deleted" + req.params.CustomerDetailsId
        });
    });
};