// export const isAuthorized = async (req, res, next) => {
//     try {
//         console.log('Request URL:', req.url);
//         console.log('Request Headers:', req.headers);
//       const token = req.headers['x-auth-token'];
//       if (!token) {
//         return res.redirect('/login');
//       }
//       const decoded = jwt.verify(token, process.env.SECRET_KEY);
//       req.user = decoded;  // Store user information in the request object for future use
//       next();
//     } catch (error) {
//       console.error(error);
//       res.redirect('/login');
//     }
//   };
const checkContactOwnership = async (req, res, next) => {
    try {
        const contactId = req.params.id;
        const userId = req.user._id; // Assuming you have user information in req.user

        // Check if the contact with contactId belongs to the logged-in user
        const contact = await Contact.findOne({ _id: contactId, user: userId });

        if (!contact) {
            // Contact does not exist or does not belong to the user
            return res.status(404).json({ error: 'Contact not found' });
        }

        // Attach the contact to the request for later use in the route handler
        req.contact = contact;

        // Move to the next middleware or route handler
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};


export {checkContactOwnership}