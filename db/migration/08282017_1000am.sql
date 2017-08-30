\c lagger_dev

ALTER TABLE IF EXISTS notes
RENAME time_stamp  TO date_info;


ALTER TABLE IF EXISTS employees
RENAME COLUMN pass  TO password;

CREATE TABLE IF NOT EXISTS system_config(
	main_key   TEXT
);

