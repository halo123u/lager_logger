\c lagger_dev

INSERT INTO events (event_name, account_id, employee_id, street, state, city, neighborhood, zipcode)
VALUES
('Met Gala',1,1,'Grand Central Station','NY','New York',null,10022),
('Pride Parade',3,2,'45 Broadway','NY','New York','Flatiron',10003),
('Cool Function',4,5,'60 5th Ave','NY','New York',null,10022),
('Job Fair',5,4,'21 E Broadway','NY','New York',null,10003),
('IPA Summit',7,3,'5 Canal St','NY','New York',null,10013);

INSERT INTO notes (relationship_id, note_type, content, date_info, employee_id)
VALUES 
(1,'order','Hella vexillologist fashion axe, 
	skateboard succulents street art jean shorts vinyl intelligentsia humblebrag ethical knausgaard 
	lyft messenger bag. Tumeric listicle church-key godard williamsburg crucifix. Authentic four dollar 
	toast synth keffiyeh', '8/10/17',1),
(3,'visit','Coloring book PBR&B gochujang tousled listicle affogato irony shaman everyday carry 
	cliche cardigan gentrify bespoke roof party godard.', '8/28/17',2),
(3,'account','Banjo vexillologist waistcoat, fashion axe bespoke tumblr pok pok everyday carry.', '9/1/17',3),
(4,'account','Gluten-free whatever banh mi tumeric', '8/1/17',3),
(3,'account','Tbh PBR&B typewriter 90s tumblr helvetica semiotics lumbersexual deep v chambray.', '9/2/17',3);

INSERT INTO orders (refence_number, delivery_info, account_id, order_date, employee_id)
VALUES 
('F668','idk',1,'8/10/17',1),
('96C10','idk?',4,'8/9/17',4),
('A46B8','idk',7,'8/8/17',2),
('AAS775','idddk',5,'9/10/17',3);

INSERT INTO visits (date_info, account_id,employee_id) 
VALUES 
('9/1/17',1,1),
('9/2/17',2,2),
('8/12/17',4,3),
('9/20/17',6,3);