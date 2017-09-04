// SELECT content as main_info,
//         date_info  as date,
//         time_info as time,
//         'NOTE' as info_type
//         FROM notes
//         WHERE note_type ='ACC' AND relationship_id=1
//         UNION ALL

//         SELECT event_name as main_info,
//         to_char(date_info,'yyyy-MM-dd') as date,
//         to_char(time_info,'HH12:MI:SS') as time,
//         'EVENT' as info_type
//         FROM events
//         WHERE account_id= 1
//         UNION ALL


//         SELECT  to_char(cases, 'FM9999'),
//         order_date as date ,
//         '' as time,
//         'ORDERS' as info_type
//         FROM orders
//         WHERE  account_id= 1
//         ORDER BY date
//         fetch first 20 rows only



SELECT n.*,
CASE
  WHEN (a.account_id IS NOT NULL AND n.note_type='ACC')  THEN a.account_num
  WHEN (o.order_id   IS NOT NULL AND n.note_type='ORD')  THEN o.refence_number
  WHEN (e.first_name       IS NOT NULL AND n.note_type='EMP')  THEN e.last_name
  ELSE 'n/a'
 END AS sec_info,
CASE
  WHEN (a.account_id IS NOT NULL AND n.note_type='ACC')  THEN a.company
  WHEN (o.order_id   IS NOT NULL AND n.note_type='ORD')  THEN  to_char(o.cases, 'FM9999')
  WHEN (e.first_name       IS NOT NULL AND n.note_type='EMP')  THEN e.first_name
  ELSE 'n/a'
 END AS main_info
FROM notes n
LEFT JOIN accounts  a on n.relationship_id = a.account_id and n.note_type='ACC'
LEFT JOIN orders    o on n.relationship_id = o.order_id and n.note_type='ORD'
LEFT JOIN employees e on n.relationship_id = e.emp_id and n.note_type='EMP' ;
