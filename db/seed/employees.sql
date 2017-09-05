\c lagger_dev
INSERT INTO employees (
    user_type,username,password,
    first_name, last_name,email,phone)
VALUES
('admin','username', '$2y$10$qll67Fnu4VGBS0kJeo6mleb0rovIOYsq6rhMzbz/qOUp9/gSK/PRm', 'Oswaldo', 'Almazo', 'example@example.com', '2222222222'),
('admin', 'username2', '$2y$10$qll67Fnu4VGBS0kJeo6mleb0rovIOYsq6rhMzbz/qOUp9/gSK/PRm', 'Dev', 'Patel','example2@example.com','1111111111'),
('employee', 'username3','$2y$10$qll67Fnu4VGBS0kJeo6mleb0rovIOYsq6rhMzbz/qOUp9/gSK/PRm', 'Joey', 'diperi', 'example3@example.com', '3333333333'),
('employee', 'username4', '$2y$10$qll67Fnu4VGBS0kJeo6mleb0rovIOYsq6rhMzbz/qOUp9/gSK/PRm', 'IDK', 'IDKL','example4@example.com','4444444444');
