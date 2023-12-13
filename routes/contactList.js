import express from "express";
import { deleteContact, getAllContactDetails, getContactById, updateContact } from "../controllers/contactList.js";
import Contact from "../models/contact.js";


const router = express.Router()



router.post('/list/create', async (req, res) => {
    try {
        const newContact = new Contact({
            ...req.body
        });

        if (!newContact.emailId) {
            return res.status(400).json({ msg: 'Email Id is required' });
        }

        await newContact.save();
        res.status(201).json({
            msg: 'Contact Created Successfully',
            data: newContact
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Internal server error' });
    }
});

router.get('/list/all', async (req, res) => {
    try {
        const displayContactList = await getAllContactDetails(req);
        if (displayContactList.length === 0) {
            return res.status(401).json({ msg: 'No contact found' });
        }
        res.status(200).send(displayContactList);
    } catch (error) {
        console.log(error);
    }
});

router.put('/list/edit/:id', async (req, res) => {
    try {
        const editContact = await updateContact(req);
        if (!editContact.emailId) {
            return res.status(402).json({ msg: 'Email Id is required' });
        }
        res.status(201).json({
            msg: 'Contact Updated Successfully',
            data: editContact
        });

    } catch (error) {
        console.log(error);
    }
});

router.get('/list/:id', async (req, res) => {
    try {
      const contactId = req.params.id;
      console.log('Received request for ID:', contactId);
      const contact = await getContactById(contactId); // Implement this function to retrieve contact details by ID
      res.status(200).json(contact);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

router.delete('/list/delete/:id',async(req , res) => {
    try{
        const deleteContacted = await deleteContact(req)

        if(!deleteContacted){
            return res.status(404).json({
                error: "Cannot delete it"
            })
        }
        res.status(201).json({
            msg: 'Contact deleted Successfully',
            
           })
    }catch(error){
        console.log(error);
    }
})

export const contactRouter = router