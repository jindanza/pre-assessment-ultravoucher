SELECT person.id, person.name, parent.name AS parent_name
FROM person
    LEFT JOIN parent ON person.parent_id = parent.id
ORDER BY id ASC;