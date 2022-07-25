BEGIN;

INSERT INTO "user"("email","password", "username", "location_id", "car_id")
VALUES
    ('alex@gmail.com', '123456', 'Noa', 1, 11),
    ('gaetan@gmail.com', '123456', 'Gaetan', 2, 8);
    ('aymen@gmail.com', '123456', 'Gaetan', 2, 8);
    ('yoann@gmail.com', '123456', 'Gaetan', 2, 8);
    ('incitis@gmail.com', '123456', 'Océane', 2, 8);

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

INSERT INTO "car"("brand_id", "model", "image","network_id")
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

INSERT INTO "location"("address", "street_number", "zipcode", "city", "lat", "lon")
VALUES
    ('Rue Belleville',108,33000,'Bordeaux',44.83428425452483, -0.584988886449385),
    ('Rue de l\''Oradou',164,63000,'Clermont-Ferrand',45.769171736746955, 3.1141259695093124),
    ('Rue des Frères Bertrand', 14, 69200,'Vénissieux', 45.717880267459044, 4.868813584657051),
    ('Rue Roger Salengro', 51, 69200, 'Vénissieux', 45.719462781387115, 4.871710326986711),
    ('Rue Roger Salengro', 51, 69200, 'Vénissieux', 45.719462781387115, 4.871710326986711),
    ('Rue du Progrès', 37, 69800, 'Saint-Priest', 45.71569711869236, 4.957882482810688),
    ('Avenue du Driève', 118, 38090, 'VilleFontaine',45.61702927814482, 5.146465013489738),
    ('Unnamed road', 0, 73100, 'Brison-Saint-Innocent', 45.723,5.9341),
    ('Unnamed road', 0, 01350, 'Ceyzérieu', 45.7377,5.7993),
    ('Route de la Corneille', 1380, 38630, 'Les Avenières Veyrins-Thuellin', 45.619094,5.5707808);

INSERT INTO "category"("name") VALUES
('Panoramas'),
('Culture'),
('Gastronomie'),
('Nature'),
('Sport'),
('Parcs');

INSERT INTO "charging_station"("network_id", "location_id") VALUES
(1,3),
(2,4),
(3,5),
(4,6),
(1,7),

INSERT INTO "interesting_point"("name", "description", "eco_friendly", "category_id", "location_id") VALUES
('Lac du Bourget','La ballade le long du lac près des ports d/''Aix est vraiment superbe. Belles vues, calme et marinas qui font vraiment vacances. Nombreux loisirs possibles également (location bateaux, guinguettes,... )','false',1,8),
('Réserve naturelle nationale du marais de Lavours','Une réserve naturelle à découvrir avec un sentier agréable sur pilotis dans le marais. Le parcours est bien conçu : accessible aux personnes à mobilité réduite.', 'false', 4, 9),
('Walibi Rhône-Alpes', 'Excellent parc pour s/''amuser entre amis et en famille.', 'false', 6, 10);

INSERT INTO "road"("favorite", "generated_road", "user_id") VALUES
('false','','');

INSERT INTO "user_like_category"("category_id", "user_id") VALUES
(1,30a19740-1f11-453e-9392-e8c4b1fd5ae9),
(4,30a19740-1f11-453e-9392-e8c4b1fd5ae9),
(6,30a19740-1f11-453e-9392-e8c4b1fd5ae9);

COMMIT;
