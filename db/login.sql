SELECT bul.email, password, firstname, lastname, bittylink_login_id
FROM bittylink_user_login bul
JOIN bittylink_users bu
ON bul.email = bu.email
WHERE bu.email = ${loginEmail};