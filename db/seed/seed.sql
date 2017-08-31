INSERT INTO accounts (
    account_num,company,buyer,street,state,
    city,neighborhood,zipcode, phone, email,
    delivery_day, delivery_time, premises, status
)
VALUES
('A1234','BAR','Bar Person','10st','NY','New York', 'LES', 10004,'1234567777', 'customer@example.com',
'Friday', '10:00AM', true, 'new account');


INSERT INTO employees (
    user_type,username,pass,
    first_name, last_name,email,phone)
VALUES
('admin','username', '$2y$10$qll67Fnu4VGBS0kJeo6mleb0rovIOYsq6rhMzbz/qOUp9/gSK/PRm', 'Oswaldo', 'Almazo', 'example@example.com', '2222222222'),
('admin', 'username2', '$2y$10$qll67Fnu4VGBS0kJeo6mleb0rovIOYsq6rhMzbz/qOUp9/gSK/PRm', 'Dev', 'Patel','example2@example.com','1111111111'),
('employee', 'username3','$2y$10$qll67Fnu4VGBS0kJeo6mleb0rovIOYsq6rhMzbz/qOUp9/gSK/PRm', 'Joey', 'diperi', 'example3@example.com', '3333333333'),
('employee', 'username4', '$2y$10$qll67Fnu4VGBS0kJeo6mleb0rovIOYsq6rhMzbz/qOUp9/gSK/PRm', 'IDK', 'IDKL','example4@example.com','4444444444');



INSERT INTO orders(
refence_number,
delivery_info,
account_id,
order_date,
employee_id
)
VALUES
(12973, 'Not sure', 1, '2017-08-30T13:17:53-04:00', 1);



INSERT INTO sales(
order_id,
cases,
date_info
)
VALUES 
(6,24,'2017-08-30T13:17:53-04:00');



