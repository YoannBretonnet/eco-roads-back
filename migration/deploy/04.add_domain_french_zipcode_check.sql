-- Deploy ecoroads:04.add_domain_french_zipcode_check to pg

BEGIN;

CREATE DOMAIN postal_code_fr AS text CHECK (
    -- 01000 à 09999
    VALUE ~ '0[1-9]\d{3}' 
    -- 10000 à 89999
    OR VALUE ~ '[1-8]\d{4}' 
    -- les numéros commençant par 9 en métropole
    OR VALUE ~ '9[0-6]\d{3}'
);

ALTER TABLE "location" 
ALTER COLUMN zipcode SET DATA TYPE postal_code_fr;


COMMIT;
