var express = require('express');
var router = express.Router();
//var ctrlMain = require('../controllers/main');

var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');
var projectLinks = require('../controllers/projects');
/* Locations pages */
router.get('/', ctrlLocations.home);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

/*Project Links */
router.get('/project-1', projectLinks.project1);
router.get('/project-2', projectLinks.project2);
router.get('/project-3', projectLinks.project3);
router.get('/project-4', projectLinks.project4);
router.get('/project-5', projectLinks.project5);
router.get('/project-6', projectLinks.project6);
router.get('/project-7', projectLinks.project7);
router.get('/project-8', projectLinks.project8);
router.get('/project-9', projectLinks.project9);
router.get('/project-10', projectLinks.project10);

module.exports = router;
