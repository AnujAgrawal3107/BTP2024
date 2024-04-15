const express = require('express');
const router = express.Router();
const { customerRegister, customerLogIn ,sendotp } = require('../controllers/user');
const { editAccommodation, getAllAccommodations } = require('../controllers/accommodation');
const { addCollege, deleteCollege, editCollege, filterCollegesByDealStatus, getAllColleges } = require('../controllers/college');
const { addLogistic, deleteLogistic, editLogistic, filterLogisticsByDealStatus, getAllLogistics } = require('../controllers/logistics');
const { addSponsorship, deleteSponsorship, editSponsorship, filterSponsorshipsByDealStatus, getAllSponsorships } = require('../controllers/sponsorship');
const { auth, isFesthead, PRHead, SponsorshipHead, LogisticHead, AccomodationHead, EventHead } = require('../middleware/auth');



router.post('/register', customerRegister);

router.post('/login', customerLogIn);

router.put('/accommodations/:id', auth , AccomodationHead , editAccommodation);


router.get('/accommodations', auth , getAllAccommodations);

router.post('/colleges', auth , PRHead,addCollege);


router.delete('/colleges/:id', auth , PRHead,deleteCollege);


router.put('/colleges/:id',auth , PRHead, editCollege);


router.get('/colleges/filter', auth ,filterCollegesByDealStatus);


router.get('/colleges', auth , getAllColleges);
router.post('/logistics', auth ,LogisticHead,addLogistic);


router.delete('/logistics/:id',auth ,LogisticHead, deleteLogistic);


router.put('/logistics/:id',auth ,LogisticHead ,editLogistic);


router.get('/logistics/filter', auth ,filterLogisticsByDealStatus);


router.get('/logistics', auth , SponsorshipHead, getAllLogistics);
router.post('/sponsorships',auth , SponsorshipHead, addSponsorship);


router.delete('/sponsorships/:id',auth, SponsorshipHead, deleteSponsorship);

router.put('/sponsorships/:id', auth ,  SponsorshipHead, editSponsorship);


router.get('/sponsorships/filter', auth ,filterSponsorshipsByDealStatus);

router.get('/sponsorships', auth ,getAllSponsorships);




module.exports = router;
