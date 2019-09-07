-- // BITTYLINK USERS // --
CREATE TABLE bittylink_users (
  bittylink_user_id SERIAL PRIMARY KEY,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  email VARCHAR(75)
);

INSERT INTO bittylink_users (firstname, lastname, email)
VALUES (
  'Christian',
  'Anderson',
  'ca@seemail.com'
);

-- // BITTYLINK USER LOGIN // --
CREATE TABLE bittylink_user_login (
  bittylink_login_id SERIAL PRIMARY KEY,
  email VARCHAR(75)
  password TEXT
);

INSERT INTO bittylink_user_login (email, password)
  VALUES (
    'ca@seemail.com',
    'password'
  );