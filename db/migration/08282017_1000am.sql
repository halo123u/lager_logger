\c lagger_dev

ALTER TABLE IF EXISTS messages
RENAME time_stamp  TO date_info;


ALTER TABLE IF EXISTS employees
RENAME COLUMN pass  TO password;

