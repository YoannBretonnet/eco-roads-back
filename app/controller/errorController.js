// ~ *** *** ERROR_CONTROLLER *** *** ~ //
// ~ ******************************** ~ //

import { errorLoggerHandling } from "../service/errorHandler.js";

function _400(req, res) {
    res.status(400).json({ error: "BAD REQUEST" });
}

function _401(req, res) {
    res.status(401).json({ error: "AUTHENTIFICATION ERROR" });
}

function _403(req, res) {
    res.status(403).json({ error: "ACCESS DENIED" });
}

function _404(req, res) {
    res.status(404).json({ error: "Error 404, Page Not Found" });
}

function _500(err, req, res) {
    errorLoggerHandling(err, req, res);
    res.status(500).json({ error: err.message });
}

export { _400, _401, _403, _404, _500 };
