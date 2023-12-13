import Contact from "../models/contact.js";

export function getAllContactDetails(req) {
    return Contact.find();
}




export function updateContact(req){
    console.log("Received request for ID:", req.params.id); 
    return Contact.findOneAndUpdate(   
        { _id:req.params.id},
        {   $set : req.body },
        {new : true}
        )
}

export function getContactById(contactId)  {
    // Implement the logic to retrieve contact details from your data source (e.g., database)
    // This is just a placeholder, replace it with your actual logic
    const contact = Contact.findById(contactId);
    return contact;
  };

export function deleteContact(req){
    return Contact.findByIdAndDelete({
        _id:req.params.id
    })
}