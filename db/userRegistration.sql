INSERT INTO bittylink_user_login (email, password)
VALUES (
  ${email},
  ${hash}
);

INSERT INTO bittylink_users (firstname, lastname, email)
  VALUES (
    ${firstname},
    ${lastname},
    ${email}
  );

-- this code below sends back information as part of the response
SELECT bul.email, firstname, lastname, bittylink_login_id
FROM bittylink_user_login bul
JOIN bittylink_users bu
ON bul.email = bu.email
WHERE bu.email = ${email};
