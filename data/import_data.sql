BEGIN;

INSERT INTO "user"("email","password", "username", "location_id", "car_id")
VALUES
    ('alex@gmail.com', '123456', 'Noa', 1, 11),
    ('gaetan@gmail.com', '123456', 'Gaetan', 2, 8);
    ('aymen@gmail.com', '123456', 'Gaetan', 2, 8);
    ('yoann@gmail.com', '123456', 'Gaetan', 2, 8);
    ('incitis@gmail.com', '123456', 'Gaetan', 2, 8);

INSERT INTO "network"("name")
VALUES
    ('Supercharger'),
    ('E-tron'),
    ('Ionity'),
    ('Totalenergies');

INSERT INTO "brand"("name")
VALUES
    ('Renault'),
    ('Peugeot'),
    ('Hyundai'),
    ('Audi'),
    ('Tesla'),
    ('Volkswagen'),

INSERT INTO "car"("brand", "model", "image","network_id")
VALUES
    (1,'Zoé','renault-zoe-2-medium.png',3),
    (1,'Twingo','renault_twingo.png',3),
    (1,'Mégane','renault_megane.png',3),
    (2,'e-208','peugeot-e-208-1.png',3),
    (2,'e-2008','peugeot-e-2008.png',3),
    (3,'Kona','Hyundai_Kona_remove.png',4),
    (3,'Ioniq','hyundai-ioniq_w.png',4),
    (4,'e-tron S','Audi_E-tron_S_remove.png',2),
    (4,'e-tron GT Quattro','Audi_E-tron_GT_Quattro_remove.png',2),
    (4,'Q4 e-tron','Audi_Q4_E-tron_remove.png',2),
    (5,'Model S','tesla_model_s.png',1),
    (5,'Model X','Tesla_Model_X2_remove.png',1),
    (5,'Model Y','Tesla_Model_Y2_remove.png',1),
    (6,'ID.3','volkswagen-id3-medium.png',3),
    (6,'ID.4','Volkswagen_ID.4_remove.png',3),
    (6,'ID.Buzz','Volkswagen_ID.Buzz_remove.png',3);

INSERT INTO "location"("address", "street_number", "zipcode", "city" "lat", "lon")
VALUES
    ( 'Rue Belleville',108,33000,'Bordeaux', 44.83428425452483, -0.584988886449385),
    ('Rue de l\'Oradou',164,63000,'Clermont-Ferrand',45.769171736746955, 3.1141259695093124);

INSERT INTO "category"("name") VALUES
('Panoramas'),
('Culture'),
('Gastronomie'),
('Nature'),
('Sport'),
('Parcs');

INSERT INTO "charging_station"("network_id", "location_id") VALUES
('','');

INSERT INTO "interesting_point"("name", "description", "eco_friendly", "category_id", "location_id") VALUES
('','','','','');

INSERT INTO "road"("favorite", "generated_road", "user_id") VALUES
('false','','');

INSERT INTO "user_like_category"("category_id", "user_id") VALUES
('','');

COMMIT;
