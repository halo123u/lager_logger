\c lagger_dev
DROP TABLE IF EXISTS sales;
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS visits;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS notes;
DROP TABLE IF EXISTS accounts;
DROP TABLE IF EXISTS employees;



CREATE TABLE IF NOT EXISTS employees(
    emp_id SERIAL PRIMARY KEY UNIQUE,
    user_type VARCHAR(15),
    username VARCHAR(25) UNIQUE,
    pass TEXT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    email VARCHAR(50),
    phone VARCHAR(15)
);
CREATE TABLE IF NOT EXISTS accounts(
    account_id SERIAL PRIMARY KEY UNIQUE,
    account_num VARCHAR(20),
    company VARCHAR(100),
    buyer VARCHAR(100),
    street VARCHAR(100),
    state VARCHAR(2),
    city VARCHAR(50),
    neighborhood VARCHAR(50),
    zipcode INT,
    phone VARCHAR(15),
    email VARCHAR(50),
    delivery_day VARCHAR(10),
    delivery_time VARCHAR(25),
    premises BOOLEAN,
    status VARCHAR(25)
);

CREATE TABLE IF NOT EXISTS notes(
    note_id SERIAL PRIMARY KEY UNIQUE,
    relationship_id INT NOT NULL,
    note_type VARCHAR(25),
    content TEXT,
    time_stamp VARCHAR (25),
    employee_id INT REFERENCES employees(emp_id)
);

CREATE TABLE IF NOT EXISTS orders(
    order_id SERIAL PRIMARY KEY UNIQUE,
    refence_number VARCHAR(50),
    delivery_info VARCHAR(25),
    account_id INT REFERENCES accounts(account_id),
    order_date VARCHAR (25),
    employee_id INT REFERENCES employees(emp_id)
);

CREATE TABLE IF NOT EXISTS visits(
    visit_id SERIAL PRIMARY KEY UNIQUE,
    date_info VARCHAR(25),
    account_id INT REFERENCES accounts(account_id),
    employee_id INT REFERENCES employees(emp_id)
);

CREATE TABLE IF NOT EXISTS events (
    event_id SERIAL PRIMARY KEY UNIQUE,
    event_name VARCHAR(100),
    account_id INT REFERENCES accounts(account_id),
    employee_id INT REFERENCES employees(emp_id),
    street VARCHAR(100),
    state VARCHAR(2),
    city VARCHAR(50),
    neighborhood VARCHAR(50),
    zipcode INT
);

CREATE TABLE IF NOT EXISTS sales(
    sales_id SERIAL PRIMARY KEY UNIQUE,
    order_id INT REFERENCES orders(order_id),
    cases INT,
    date_info VARCHAR(25)
);
