// ~ *** *** ERROR_CONTROLLER CONFIG *** *** ~ //
// ~ *************************************** ~ //


function _400(req, res) {
res.status(400).json('BAD REQUEST');
};

function _401(req, res) {
res.status(401).json('AUTHENTIFICATION ERROR');
};

function _403(req, res) {
res.status(403).json('ACCESS DENIED');
};

function _404(req, res) {
res.status(404).json('Page Not Found');
};

function _500(err, req, res) {
    console.log("je passe par la fonction _500 ");
    console.log("verifie le dossier LOGS normalement une ligne y sera pour la journee");
    errorLoggerHandling(err, req, res);
    res.status(500).json({ error: err.message });
}

export { _400,_401, _403,_404,_500 };