INSERT INTO accounts VALUES (default, 'H-tek', 'styret@htek.se', 'hpassword', true);
INSERT INTO accounts VALUES (default, 'HD', 'hd@hd.chalmers.se', 'pass', false);
INSERT INTO accounts VALUES (default, 'H6', 'h6@htek.se', 'pass', false);
INSERT INTO accounts VALUES (default, 'SnH', 'snh@htek.se', 'pass', false);
INSERT INTO accounts VALUES (default, 'Humle', 'humle@htek.se', 'pass', false);
INSERT INTO accounts VALUES (default, 'PubF', 'pubf@pubf.se', 'pass', false);

INSERT INTO committees VALUES (2, 'H-sektionens Datorförening', 'hdhdhdhdhd', 'https://facebook.com', 'hdchalmers', 'hd.chalmers.se', '/img.png', '/src/assets/HD.png', 'kommittee');
INSERT INTO committees VALUES (3, 'H-Sektionens Sexmästeri', 'h6h6h6h6h6', null, 'hsexmasteri', 'h6.htek.se', '/img.png', '/src/assets/H6.png', 'kommittee');
INSERT INTO committees VALUES (4, 'Studienämnd H', 'snhsnhsnhsn', null, 'snhchalmers', null, '/img.png', null, 'utskott');
INSERT INTO committees VALUES (5, null, 'humle humle humle', null, 'humlechalmers', null, null, null, 'forening');
INSERT INTO committees VALUES (6, 'Lindholmens Pubforening', 'pubf pubf pubf', null, 'pubf_chalmers', 'pubf.se', '/img.png', null, 'utomstaende');

INSERT INTO styret VALUES (default, 'Tarzan', 'Utbildningsansvarig', 'utbildning@htek.se', 'jag klagar på examinatorer', '/src/assets/jesustarzan.jpg');
INSERT INTO styret VALUES (default, 'Kalle', 'Kassör', 'kassor@htek.se', 'jag klagar på kassörer', '/src/assets/jesustarzan.jpg');
INSERT INTO styret VALUES (default, 'Dudes', 'Ordöfrande', 'ordf@htek.se', 'jag klagar på alla', '/src/assets/jesustarzan.jpg');

INSERT INTO events VALUES (default, 'Bastu time', current_timestamp + interval '1 day',
                           current_timestamp + interval '1 day' + interval '1 hour', 'Bastu!!!', 'Härryda bastun', 3, '/src/assets/H6.png');
INSERT INTO events VALUES (default, 'Spel time', current_timestamp + interval '4 day',
                            current_timestamp + interval '4 day' + interval '1 hour', 'Spel!!!', 'Svea 219', 3, '/src/assets/HD.png');
