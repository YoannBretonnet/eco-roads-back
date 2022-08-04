-- Deploy ecoroads:04.add_image_icon to pg

BEGIN;

ALTER TABLE network ADD COLUMN image TEXT;
ALTER TABLE network ADD COLUMN icon TEXT;
ALTER TABLE interesting_point ADD COLUMN icon TEXT;

COMMIT;
