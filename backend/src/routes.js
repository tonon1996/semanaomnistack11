const express= require('express');
const OngCrontoller = require('./controllers/OngControllers');
const IncidentCrontoller = require('./controllers/IncidentControllers');
const ProfileCrontoller = require('./controllers/ProfileControllers');
const SessionCrontoller = require('./controllers/SessionControllers');
const routes = express.Router();


routes.post('/sessions', SessionCrontoller.create);

routes.get('/ongs', OngCrontoller.index);
routes.post('/ongs', OngCrontoller.create);

routes.post('/incidents', IncidentCrontoller.create);
routes.get('/incidents', IncidentCrontoller.index);
routes.delete('/incidents/:id', IncidentCrontoller.delete);

routes.get('/profile', ProfileCrontoller.index);
module.exports= routes;