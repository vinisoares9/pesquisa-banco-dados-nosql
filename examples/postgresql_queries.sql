-- Consulta analítica exemplo
SELECT country, COUNT(*) 
FROM users
GROUP BY country
HAVING COUNT(*) > 100;
