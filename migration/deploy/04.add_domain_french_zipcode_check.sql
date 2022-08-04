-- Deploy ecoroads:04.add_domain_french_zipcode_check to pg

BEGIN;
ALTER TABLE location ADD COLUMN label TEXT NULL;


COMMIT;
