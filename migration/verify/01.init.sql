-- Verify ecoroads:01.init on pg

BEGIN;

SELECT * FROM "user";

SELECT * FROM "brand";

SELECT * FROM "car";

SELECT * FROM "location";

ROLLBACK;
