# Complete SQL + Databases Bootcamp: Zero to Mastery [2020]

## Table of Contents

- [Complete SQL + Databases Bootcamp: Zero to Mastery [2020]](#complete-sql--databases-bootcamp-zero-to-mastery-2020)
  - [Table of Contents](#table-of-contents)
    - [Section 1: Introduction](#section-1-introduction)
    - [Section 2: History And Story Of Data](#section-2-history-and-story-of-data)
    - [Section 3: Databases + SQL Fundamentals](#section-3-databases--sql-fundamentals)
    - [Section 4: Environment Setup](#section-4-environment-setup)
    - [Section 5: SQL Deep Dive](#section-5-sql-deep-dive)
    - [Section 6: Advanced SQL](#section-6-advanced-sql)
    - [Section 7: Database Management](#section-7-database-management)
    - [Section 8: Solving The Mystery](#section-8-solving-the-mystery)
    - [Section 9: Database Design](#section-9-database-design)
    - [Section 10: Database Landscape, Performance and Security](#section-10-database-landscape-performance-and-security)
    - [Section 11: Where To Go From Here?](#section-11-where-to-go-from-here)
    - [Section 12: Exrtas: Data Engineering (And the role of Machine Learning)](#section-12-exrtas-data-engineering-and-the-role-of-machine-learning)
    - [Section 13: Extras: Redis](#section-13-extras-redis)
    - [Section 14: Extra Bits: Databases In A Web App (with Node.js)](#section-14-extra-bits-databases-in-a-web-app-with-nodejs)
    - [Section 15: BONUS SECTION](#section-15-bonus-section)

### Section 1: Introduction

- [Live SQL Zoo Study Guide](https://github.com/chesterheng/sql-zoo)

**[⬆ back to top](#table-of-contents)**

### Section 2: History And Story Of Data

#### 5. What Is a Database?

It's a collection of data, a method for accessing and manipulating that data.

Data are collected by many sources

- Drone
- Mobile App
- Web App
- Videocam
- Automobile

**[⬆ back to top](#table-of-contents)**

#### 6. I Didn't Learn Anything, Try Again...

[Why is a database always represented with a cylinder?](https://stackoverflow.com/questions/2822650/why-is-a-database-always-represented-with-a-cylinder)

![](section-02/database.jpg)

Data are collected and use by different people

- Product Managers: learn from data to improve the product
- Marketers: analyse business decision
- Web Developers
- Data Analysts: analyse and build machine learning model
- Data Engineer
- Data Administrator

**[⬆ back to top](#table-of-contents)**

#### 7. Database Management System (DBMS)

- How to put data in DB
- How to use/update/learn from data
- How to remove data

Confusing Acronyms

- DBMS: Database Management System
- RDBMS: Relational Database Management System
- SQL: Structured Query Language

Confusing Anagrams

![](section-02/anagram.jpg)

**[⬆ back to top](#table-of-contents)**

#### 8. Exercise: Building Amazon

[SQL Playground](https://www.w3schools.com/sql/trysql.asp?filename=trysql_asc)

**[⬆ back to top](#table-of-contents)**

#### 9. Exercise: Building Amazon 2

![](section-02/build-amazon.jpg)

**[⬆ back to top](#table-of-contents)**

#### 10. 5 Types Of Databases

5 data models

- Relational: support asset transactions
- Document: data is in a document, scalability
- Key Value: simple way to access data
- Graph: good for connected data
- Wide Columnar

**[⬆ back to top](#table-of-contents)**

#### 11. Exercise: What Is A Database?

- A database is a hardware and software system that allows a user to store, organize and use data.
- A database is a hardware and software system stores data and answer questions. 

**[⬆ back to top](#table-of-contents)**

#### 12. Section Review

- Do you have useful data?
- Install a DB to Store Data
- Use SQL to Setup + Use Data

**[⬆ back to top](#table-of-contents)**

### Section 3: Databases + SQL Fundamentals

#### 13.  SQL Playground

[DB Fiddle - SQL Database Playground](https://www.db-fiddle.com/)

**[⬆ back to top](#table-of-contents)**

#### 14. Exercise: Setting Up Your First Database

```sql
CREATE TABLE Class (
  id character(255),
  year integer NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE Student (
  id varchar(255) NOT NULL,
  class varchar(255) NOT NULL,
  firstName varchar(255) NOT NULL,
  lastName varchar(255) NOT NULL,
  dob date NOT NULL,
  sex varchar(1) NOT NULL,
  FOREIGN KEY (class) REFERENCES Class(id),
  PRIMARY KEY (id)
);

INSERT INTO Class(id, year) VALUES('c1', 1);
INSERT INTO Class(id, year) VALUES('c2', 2);
INSERT INTO Class(id, year) VALUES('c2a', 2);

INSERT INTO Student VALUES ('s1', 'c1', 'George', 'Jacobson', '1992-01-01', 'm');
INSERT INTO Student VALUES ('s2', 'c2', 'Macy', 'Waterson', '1992-01-01', 'f');
INSERT INTO Student VALUES ('s3', 'c1', 'Bill', 'Peters', '1992-01-01', 'm');
INSERT INTO Student VALUES ('s4', 'c1', 'Janine', 'Wilson', '1992-01-01', 'f');
INSERT INTO Student VALUES ('s5', 'c2', 'Jason', 'Lipton', '1992-01-01', 'm');
```

**[⬆ back to top](#table-of-contents)**

#### 15. What Is SQL?

- SQL is programming language to talk to database
- Database is a structured set of data

**[⬆ back to top](#table-of-contents)**

#### 16. What Is A Query?

- Query is question written in SQL statement

![](section-03/query-breakdown.jpg)

```sql
CREATE TABLE User (
  id varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  lastName varchar(255) NOT NULL,
  dob date NOT NULL,
  sex varchar(1) NOT NULL,
  role varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO User VALUES ('u1', 'George', 'Jacobson', '1992-01-01', 'm', 'manager');
INSERT INTO User VALUES ('u2', 'Macy', 'Waterson', '1992-01-01', 'f', 'employee');
INSERT INTO User VALUES ('u3', 'Bill', 'Peters', '1992-01-01', 'm', 'employee');
INSERT INTO User VALUES ('u4','Janine', 'Wilson', '1992-01-01', 'f', 'manager');
INSERT INTO User VALUES ('u5', 'Jason', 'Lipton', '1992-01-01', 'm', 'manager');

SELECT * 
FROM User
WHERE role = 'employee';
```

**[⬆ back to top](#table-of-contents)**

#### 17. Imperative vs Declarative

- Declarative: What will happen?
- Imperative: How it will happen?

**[⬆ back to top](#table-of-contents)**

#### 18. History of SQL

- [Edgar F. Codd](https://www.ibm.com/ibm/history/exhibits/builders/builders_codd.html)
- [Donald Chamberlin](https://researcher.watson.ibm.com/researcher/view.php?person=us-dchamber)
- [The Story of two Genius Scientists Behind SQL](http://www.yourtechstory.com/2019/08/27/story-two-genius-scientists-sql/)
- [A Relational Model of Data for Large Shared Data Banks](section-03/codd.pdf)
- [SEQUEL: A STRUCIURED ENGLISH QUERY LANGUAGE](section-03/sequel-1974.pdf)

**[⬆ back to top](#table-of-contents)**

#### 19. Exercises: The Select Statement

[Exercises: The Select Statement](https://www.w3schools.com/sql/exercise.asp?filename=exercise_select1)

```sql
-- Insert the missing statement to get all the columns from the Customers table.
SELECT * 
FROM Customers;

-- Write a statement that will select the City column from the Customers table.
SELECT City
FROM Customers;

-- Select all the different values from the Country column in the Customers table.
SELECT DISTINCT Country 
FROM Customers;
```

**[⬆ back to top](#table-of-contents)**

#### 20. Optional: History of SQL Deep Dive

[History of Databases](https://www.youtube.com/watch?v=KG-mqHoXOXY)

**[⬆ back to top](#table-of-contents)**

#### 21. SQL Standards

[The SQL Standard – ISO/IEC 9075:2016 (ANSI X3.135)](https://blog.ansi.org/2018/10/sql-standard-iso-iec-9075-2016-ansi-x3-135/#gref)

![](section-03/sql-standards.jpg)

**[⬆ back to top](#table-of-contents)**

#### 22. What Is A Database? Revisited

![](section-03/file-processing-system.jpg)

File processing systems

- save data on individual files
- no correlation between the files
- no relationship between the data
- update in one file is not reflected in data of relationed files
- no common standards per system
- no common models per data
- data are isolated and duplicated across systems

Model: structure of data

![](section-03/limitations.jpg)

**[⬆ back to top](#table-of-contents)**

#### 23. Database Oriented Approach

![](section-03/database-approach-1.jpg)
![](section-03/database-approach-2.jpg)

**[⬆ back to top](#table-of-contents)**

#### 24. Exercise: SQL Starter Quiz

[SQL Starter Quiz](https://www.jetpunk.com/user-quizzes/1336712/sql-starter-quiz)

**[⬆ back to top](#table-of-contents)**

#### 25. Database Models

How you organize and store your data ?

- Hierarchical
- Networking
- Entity-Relationship
- Relational
- Object Oriented
- Flat
- Semi-Structured

**[⬆ back to top](#table-of-contents)**

#### 26. Hierarchical And Networking Model

Hierarchical Model

![](section-03/hierarchical-model.jpg)

- each child can have only one parent
- child is tightly couple with parent
- represent 1 to many relationship

![](section-03/xml.jpg)

Networking Model

![](section-03/Network-model-1.jpg)

- represent many to many relationship

![](section-03/network-model-2.jpg)

**[⬆ back to top](#table-of-contents)**

#### 27. Relational Model

![](section-03/relational-model.jpg)

**[⬆ back to top](#table-of-contents)**

#### 28. DBMS Revisited

DBMS features

- App <-> SQL <-> DBMS
- CRUD operations
- Manage your data
- Secure your data
- Transactional management

![](section-03/dbms-1.jpg)
![](section-03/dbms-2.jpg)
![](section-03/dbms-3.jpg)

[Codd's Rules for RDBMS](https://www.w3resource.com/sql/sql-basic/codd-12-rule-relation.php)

**[⬆ back to top](#table-of-contents)**

#### 29. Relational Model Revisited

![](section-03/relational-model-keywords.jpg)

**[⬆ back to top](#table-of-contents)**

#### 30. Tables

![](section-03/tables.jpg)

**[⬆ back to top](#table-of-contents)**

#### 31. Columns

![](section-03/columns.jpg)

**[⬆ back to top](#table-of-contents)**

#### 32. Rows

![](section-03/columns.jpg)

**[⬆ back to top](#table-of-contents)**

#### 33. Primary And Foreign Keys

![](section-03/keys.jpg)

**[⬆ back to top](#table-of-contents)**

#### 34. OLTP vs OLAP

- OLTP: Support day to day

![](section-03/oltp.jpg)

- OLAP: Support analysis

![](section-03/olap.jpg)

**[⬆ back to top](#table-of-contents)**

#### 35. Exercise: OLTP vs OLAP

- A database is being used to log orders and customers: OLTP
- A database is being used to figure out what new products we should offer: OLAP
- A database is being used to derive statistics for reporting to the executives: OLAP
- A database is being used to keep track of logged in users: OLTP

**[⬆ back to top](#table-of-contents)**

#### 36. Exercise: Relational Model Quiz

[Exercise: Relational Model Quiz](https://www.jetpunk.com/user-quizzes/1336712/the-relational-model)

**[⬆ back to top](#table-of-contents)**

### Section 4: Environment Setup

#### 38. Why PostgreSQL

- [PostgreSQL](https://www.postgresql.org/)
- [Studio for PostgreSQL](https://valentina-db.com/en/studio-for-postgresql)
- [Valentina Studio](https://www.valentina-db.com/en/all-downloads/vstudio)

[PostgreSQL is the worlds’ best database](https://www.2ndquadrant.com/en/blog/postgresql-is-the-worlds-best-database/)

**[⬆ back to top](#table-of-contents)**

#### 39. Environment Tooling

![](section-04/postgres.jpg)

**[⬆ back to top](#table-of-contents)**

#### 40. SQL Tooling Alternatives

our choice was based on multiple criteria

- Is it cross-platform?
- Is it easy to use?
- Is it free?
- Can it be extended to multiple database providers?

Alternatives

- [PG Admin + Command line](https://www.pgadmin.org/)
- [Datagrip](https://www.jetbrains.com/datagrip/)
- [DBeaver](https://dbeaver.io/)
- [Falcon](https://github.com/plotly/falcon)
- [DbVisualizer](https://www.dbvis.com/)
- [TablePlus](https://tableplus.com/)

**[⬆ back to top](#table-of-contents)**

#### 41. Command Line 101

[Command Line 101](https://medium.com/@aechagen/mac-terminal-101-13a3e8e75d4c)

**[⬆ back to top](#table-of-contents)**

#### 45. MAC Setup

- [Removing existing PostgreSQL Installations](https://postgresapp.com/documentation/remove.html)
- [Installing Postgres.app](https://postgresapp.com/)
- [Dockerize PostgreSQL](https://docs.docker.com/engine/examples/postgresql_service/)

![](section-04/postgres.jpg)

**[⬆ back to top](#table-of-contents)**

#### 46. MAC Commandline tools

[CLI Tools](https://postgresapp.com/documentation/cli-tools.html)

**[⬆ back to top](#table-of-contents)**

#### 49. Importing Data On MAC

```console
psql -U chesterheng -d Employees < employees.sql
psql -U chesterheng -d World < world.sql
psql -U chesterheng -d Store < store.sql
psql -U chesterheng -d France < france.sql
```

**[⬆ back to top](#table-of-contents)**

### Section 5: SQL Deep Dive

#### 52. Starting With Query

![](section-05/sql-commands.jpg)

- DCL: Data control language
- DDL: Data definition language
- DQL: Data query language
- DML: Data modification language

What is a select? Retrieve data

**[⬆ back to top](#table-of-contents)**

#### 53. Exercise: Simple Queries

```sql
SELECT * FROM "public"."employees";
SELECT * FROM "public"."departments";
```

**[⬆ back to top](#table-of-contents)**

#### 54. Exercise: Renaming Columns

```sql
SELECT emp_no AS "Employee #",
  birth_date AS "Birthday",
  first_name AS "First Name"
FROM "public"."employees";
```

**[⬆ back to top](#table-of-contents)**

#### 55. Concat Function

- Make your data prettier/simpler

```sql
SELECT emp_no,
  CONCAT(first_name, ' ', last_name) AS "full name"
FROM "public"."employees";
```

**[⬆ back to top](#table-of-contents)**

#### 56. What Is A Function In SQL?

- input -> function -> output
- a function is a set of steps that creates a single value

Types of functions

- Aggregate: operate on many records to produce 1 value
- Aggregate: produce a summary
- Scalar: operate on each record independently

**[⬆ back to top](#table-of-contents)**

#### 57. Aggregate Functions

[Aggregate Functions](https://www.postgresql.org/docs/12/functions-aggregate.html)

- AVG()
- COUNT
- MIN()
- MAX()
- SUM()

```sql
SELECT COUNT(emp_no) FROM "public"."employees";
SELECT MAX(salary) FROM "public"."salaries";
SELECT SUM(salary) FROM "public"."salaries";
```

**[⬆ back to top](#table-of-contents)**

#### 58. Exercise: Aggregate Functions

```sql
--
/*
 * What database should I use for these exercises?
 * Name: Employees
 */
-- 
-- Question 1: What is the average salary for the company?
-- Table: Salaries
-- Result: 63810.744836143706
select avg(salary) from salaries;

-- Question 2: What year was the youngest person born in the company?
-- Table: employees
select max(birth_date) from employees;

--
/*
 * What database should I use for these exercises?
 * Name: France
 */
-- 
-- Question 1: How many towns are there in france?
-- Table: Towns
-- Result: 36684
select count(id) from towns;

--
/*
 * What database should I use for these exercises?
 * Name: World
 */
-- 
-- Question 1: How many official languages are there?
-- Table: countrylanguage
-- Result: 238
select count(countrycode) from countrylanguage
where isofficial = true;

-- Question 2: What is the average life expectancy in the world?
-- Table: country
-- Result: 66.48603611164265
select avg(lifeexpectancy) from country;

-- Question 3: What is the average population for cities in the netherlands?
-- Table: city
-- Result: 185001
select AVG(population) from city
where countrycode = 'NLD';
```

**[⬆ back to top](#table-of-contents)**

#### 59. Commenting Your Queries

[How to make comments the most important ‘code’ you write](https://www.red-gate.com/simple-talk/sql/oracle/how-to-make-comments-the-most-important-code-you-write/)

**[⬆ back to top](#table-of-contents)**

#### 60. Common SELECT Mistakes

[Ten Common SQL Programming Mistakes](https://www.red-gate.com/simple-talk/sql/t-sql-programming/ten-common-sql-programming-mistakes/)

- Misspell commands
- Use ; instead of , and vice versa
- Use " instead of '
- " is for tables
- ' is for text
- Invalid column name

**[⬆ back to top](#table-of-contents)**

#### 61. Filtering Data

```sql
SELECT first_name
FROM "public"."employees"
WHERE gender = 'F';
```

**[⬆ back to top](#table-of-contents)**

#### 62. AND and OR

```sql
SELECT first_name, last_name, hire_date
FROM "public"."employees"
WHERE first_name = 'Georgi' 
  AND last_name = 'Facello'
  OR first_name = 'Bezalel' 
  AND last_name = 'Simmel';
```

**[⬆ back to top](#table-of-contents)**

#### 63. Exercise: Filtering Data

```sql
SELECT firstname, lastname, gender, state 
FROM customers
WHERE gender = 'F' AND (state = 'OR' OR state = 'NY') ;
```

**[⬆ back to top](#table-of-contents)**

#### 64. Exercise: The Where Clause

```sql
-- Select all records where the City column has the value "Berlin".
SELECT * 
FROM Customers
WHERE City = 'Berlin';

-- Use the NOT keyword to select all records where City is NOT "Berlin".
SELECT * 
FROM Customers
WHERE NOT City = 'Berlin';

-- Select all records where the CustomerID column has the value 32.
SELECT * 
FROM Customers
WHERE CustomerID = 32 ;

-- Select all records where the City column has the value 'Berlin' and the PostalCode column has the value 12209.
SELECT * 
FROM Customers
WHERE City = 'Berlin'
  AND PostalCode = 12209;

-- Select all records where the City column has the value 'Berlin' or 'London'.
SELECT * FROM Customers
WHERE City = 'Berlin'
  OR City = 'London';
```

**[⬆ back to top](#table-of-contents)**

#### 65. The NOT Keyword

What if you want to filter on everything but ... ?

```sql
SELECT age FROM customers WHERE NOT age = 55;
SELECT COUNT(age) FROM customers WHERE NOT age = 55;
```

**[⬆ back to top](#table-of-contents)**

#### 66. Comparison Operators

[Comparison Functions and Operators](https://www.postgresql.org/docs/12/functions-comparison.html)

**[⬆ back to top](#table-of-contents)**

#### 67. Exercise: Comparison Operators

```sql
-- How many female customers do we have from the state of Oregon (OR)?
-- Result: 106
SELECT COUNT(firstName)
FROM customers
WHERE gender = 'F' and state = 'OR';

-- Who over the age of 44 has an income of 100 000 or more? (excluding 44)
-- Result: 2497
SELECT COUNT(income)
FROM customers
WHERE age > 44 and income >= 100000;

-- Who between the ages of 30 and 50 has an income less than 50 000?
-- (include 30 and 50 in the results)
-- Result: 2362
SELECT COUNT(income)
FROM customers
WHERE age >= 30 and age <= 50 AND income < 50000;

-- What is the average income between the ages of 20 and 50? (Excluding 20 and 50)
-- Result: 59409.926240780098
SELECT AVG(income)
FROM customers
WHERE age > 20 and age < 50;
```

**[⬆ back to top](#table-of-contents)**

#### 68. Logical Operators

Logical Operators

- AND
- OR
- NOT

Order of operations

- FROM
- WHERE
- SELECT

**[⬆ back to top](#table-of-contents)**

#### 69. Operator Precedence

A statement having multiple operators is evaluated based on the priority of operators

- [Operator Precedence](https://www.postgresql.org/docs/12/sql-syntax-lexical.html#SQL-PRECEDENCE)
- [Expression Evaluation Rules](https://www.postgresql.org/docs/12/sql-expressions.html#SYNTAX-EXPRESS-EVAL)

**[⬆ back to top](#table-of-contents)**

#### 71. Exercise: Operator Precedence

```sql
/*
* DB: Store
* Table: Customers
* Question: 
* Select people either under 30 or over 50 with an income above 50000
* Include people that are 50
* that are from either Japan or Australia
*/
SELECT firstname, income, age 
FROM customers
WHERE income > 50000 
  AND (age < 30 OR age >= 50)
  AND (country = 'Japan' OR country = 'Australia')

/*
* DB: Store
* Table: Orders
* Question: 
* What was our total sales in June of 2004 for orders over 100 dollars?
*/
SELECT SUM(totalamount) 
FROM orders
WHERE (orderdate >= '2004-06-01' AND orderdate <= '2004-06-30') 
  AND totalamount > 100
```

**[⬆ back to top](#table-of-contents)**

#### 72. Checking For NULL Values

- When a record does not hava a value, it is considered empty
- NULL is used to represent a missing/empty value
- Operate with NULL will get NULL, eg. SELECT NULL = NULL
- Best practice is to avoid NULL

**[⬆ back to top](#table-of-contents)**

#### 73. IS Keyword

[Database Design Follies: NULL vs. NOT NULL](https://www.sqlservercentral.com/articles/database-design-follies-null-vs-not-null)

Should you use NULL?

- Optional or required?
- Future info?
- Retional? What impact?

Be defensive

- Always check for NULL when necessary
- Filter out NULL with IS operator
- Clean up your data

In database table creation, do you allow NULL or use a default value to represent empty data?

- Use default value: cannot filter NULL data
- Use default value: cannot distinguish user entered or default

**[⬆ back to top](#table-of-contents)**

#### 74. NULL Coalescing

- Replace NULL values to operate on the data
- Return the first non-null value in a list

```sql
SELECT COALESCE(<column>, 'Empty')
FROM <table>
```

**[⬆ back to top](#table-of-contents)**

#### 75. Exercise: Null Value Coalescing

```sql
CREATE TABLE "Student" (
	id serial PRIMARY KEY,
  name varchar(255),
  lastName varchar(255),
  age int
);

INSERT INTO "Student" (name, lastName, age) VALUES ('STUDENT 1', NULL, NULL);
INSERT INTO "Student" (name, lastName, age) VALUES ('STUDENT 2', NULL, 25);
INSERT INTO "Student" (name, lastName, age) VALUES (null, 'LAST NAME 3', 20);
INSERT INTO "Student" (name, lastName, age) VALUES (null, null, 34);
INSERT INTO "Student" (name, lastName, age) VALUES ('STUDENT 5', NULL, 58);

-- Assuming a students minimum age for the class is 15, what is the average age of a student?
SELECT avg(coalesce(age, 15)) FROM "Student";

-- Replace all empty first or last names with a default?
SELECT id, coalesce(name, 'fallback'), coalesce(name, 'lastName'), age FROM "Student";
```
**[⬆ back to top](#table-of-contents)**

#### 76. 3 Valued Logic

- TRUE | NULL | FALSE
- NULL value can be anything
- NULL is always unknown
- NULL = NULL (NULL)
- IS NULL (TRUE)

**[⬆ back to top](#table-of-contents)**

#### 77. Exercise: 3 Valued Logic

```sql
/*
* DB: Store
* Table: customers
* Question: adjust the following query to display the null values as "No Address"
*/
SELECT COALESCE(address2, 'No Address')
FROM customers

/*
* DB: Store
* Table: customers
* Question: Fix the following query to apply proper 3VL
*/

SELECT *
FROM customers
WHERE address2 IS NOT null;

/*
* DB: Store
* Table: customers
* Question: Fix the following query to apply proper 3VL
*/

SELECT coalesce(lastName, 'Empty'), * from customers
where (age IS NULL);
```

**[⬆ back to top](#table-of-contents)**

#### 78. BETWEEN + AND

- Shorthand to match against a range of value
- More readability and maintainability

```sql
WHERE <column> >= X AND <column> <= Y
WHERE <column> BETWEEN X AND Y
```

**[⬆ back to top](#table-of-contents)**

#### 79. IN Keyword

- Filter multiple values
- Check if a value matched any values in a list

```sql
WHERE <column> IN (value1, value2, value3)
WHERE <column> = value1 
  OR <column> = value2 
  OR <column> = value3
```

**[⬆ back to top](#table-of-contents)**

#### 80. Exercise: IN Keyword

```sql
/*
* DB: Store
* Table: orders
* Question: How many orders were made by customer 7888, 1082, 12808, 9623
*/

SELECT COUNT(orderid)
FROM orders
WHERE customerid IN (7888, 1082, 12808, 9623)


/*
* DB: World
* Table: city
* Question: How many cities are in the district of Zuid-Holland, Noord-Brabant and Utrecht?
*/

SELECT COUNT(id)
FROM city
WHERE district IN ('Zuid-Holland', 'Noord-Brabant', 'Utrecht');
```

**[⬆ back to top](#table-of-contents)**

#### 81. LIKE

- partial lookups
- What if you don't know exactly what you are searching for?
- You need to build patterns to match when use LIKE
- postgres LIKE only does text comparison, so must cast whatever we use to text

Pattern wildcards

- %: match any number of characters
- -: match 1 character

**[⬆ back to top](#table-of-contents)**

#### 82. Exercise: Like Keyword

```sql
/*
* DB: Employees
* Table: employees
* Question: Find the age of all employees who's name starts with M.
* Sample output: https://imgur.com/vXs4093
*/

SELECT emp_no, first_name, EXTRACT (YEAR FROM AGE(birth_date)) as "age" FROM employees
WHERE first_name ILIKE 'M%';

/*
* DB: Employees
* Table: employees
* Question: How many people's name start with A and end with R?
* Expected output: 1846
*/

SELECT count(emp_no) FROM employees
WHERE first_name ILIKE 'A%R';
                                                  
/*
* DB: Store
* Table: customers
* Question: How many people's zipcode have a 2 in it?.
* Expected output: 4211 
*/

SELECT count(customerid) FROM customers
WHERE zip::text LIKE '%2%';


/*
* DB: Store
* Table: customers
* Question: How many people's zipcode start with 2 with the 3rd character being a 1.
* Expected output: 109 
*/

SELECT count(customerid) FROM customers
WHERE zip::text LIKE '2_1%';

/*
* DB: Store
* Table: customers
* Question: Which states have phone numbers starting with 302?
* Replace null values with "No State"                                                  
* Expected output: https://imgur.com/AVe6G4c
*/

SELECT coalesce(state, 'No State') as "State" FROM customers
WHERE phone::text LIKE '302%';
```

**[⬆ back to top](#table-of-contents)**

#### 83. Dates And Timezones

[UTC is enough for everyone...right?](https://zachholman.com/talk/utc-is-enough-for-everyone-right)

- Dates are hard
- What is a timezone? set by Sir Sanford Fleming
- Greenwich Mean Time (GMT): a time zone
- Universal Coordinate Time (UTC): a time standard
- No territories use UTC
- GMT and UTC share the same current time

```sql
SHOW TIMEZONE;
SET TIME ZONE 'UTC';
```

**[⬆ back to top](#table-of-contents)**

#### 84. Setting Up Timezones

```sql
ALTER USER chesterheng SET timezone='UTC';
SHOW TIMEZONE;
```

**[⬆ back to top](#table-of-contents)**

#### 85. How Do We Format Date And Time?

- postgres uses ISO-8601

How do dates look like?

- YYYY-MM-DDTHH:MM:SS
- 2017-08-17T12:47:16+02:00

What is a format?

- Is a way of representing a date and time

**[⬆ back to top](#table-of-contents)**

#### 86. Timestamps

- A timestamp is a date with time and timezone info

```sql
SELECT NOW();

CREATE TABLE timezones (
  ts TIMESTAMP WITHOUT TIME ZONE,
  tz TIMESTAMP WITH TIME ZONE
);

INSERT INTO timezones VALUES (
  TIMESTAMP WITHOUT TIME ZONE '2000-01-01 10:00:00',
  TIMESTAMP WITH TIME ZONE '2000-01-01 10:00:00-05'
);
```

timestamps or date ?

- depends on what to store
- normally date is enough

**[⬆ back to top](#table-of-contents)**

#### 87. Date Functions

- [Data Type Formatting Functions](https://www.postgresql.org/docs/9.1/functions-formatting.html)

```sql
-- Current Date
SELECT NOW()::date;
SELECT CURRENT_DATE;

-- format
SELECT TO_CHAR(CURRENT_DATE, 'dd/mm/yyyy');
SELECT TO_CHAR(CURRENT_DATE, 'DDD');
SELECT TO_CHAR(CURRENT_DATE, 'WW');
```

**[⬆ back to top](#table-of-contents)**

#### 88. Date Difference And Casting

- Subtract dates returns the difference in days

```sql
SELECT NOW() - '1800/01/01';
SELECT date '1800/01/01';
```

**[⬆ back to top](#table-of-contents)**

#### 89. Age Calculation

- cast to date before calculate age

```sql
SELECT AGE(date '1800/01/01');
SELECT AGE(date '1992/11/13', date '1800/01/01');
SELECT EXTRACT (DAY FROM date '1992/11/13') DAY;
```

**[⬆ back to top](#table-of-contents)**

#### 90. Extracting Information

```sql
SELECT EXTRACT (DAY FROM date '1992/11/13') AS DAY;
SELECT EXTRACT (MONTH FROM date '1992/11/13') AS MONTH;
SELECT EXTRACT (YEAR FROM date '1992/11/13') AS YEAR;
SELECT DATE_TRUNC ('year', date '1992/11/13');
SELECT DATE_TRUNC ('month', date '1992/11/13');
SELECT DATE_TRUNC ('day', date '1992/11/13');
```

**[⬆ back to top](#table-of-contents)**

#### 91. Intervals

- [A Comprehensive Look at PostgreSQL Interval Data Type](https://www.postgresqltutorial.com/postgresql-interval/)
- can store and manipulate a period of time in years, months, days, hours, mins, secs

```sql
-- 30 days before given date
SELECT NOW() - interval '30 days';
SELECT *
FROM orders
WHERE purchaseDate <= now() - interval '30 days'
SELECT NOW() - INTERVAL '1 year 2 months 3 days';
SELECT NOW() - INTERVAL '2 weeks ago';
SELECT NOW() - INTERVAL '1 year 3 hours 20 minutes';
```

**[⬆ back to top](#table-of-contents)**

#### 92. Exercise: Date and Timestamp

```sql
/*
* DB: Employees
* Table: employees
* Question: Get me all the employees above 60, use the appropriate date functions
*/

SELECT AGE(birth_date), * FROM employees
WHERE (
   EXTRACT (YEAR FROM AGE(birth_date))
) > 60 ;

-- alternative
SELECT count(birth_date) FROM employees
WHERE birth_date < now() - interval '61 years' -- 61 years before the current date
            
/*
* DB: Employees
* Table: employees
* Question: How many employees where hired in February?
*/

SELECT count(emp_no) FROM employees
where EXTRACT (MONTH FROM hire_date) = 2;

/*
* DB: Employees
* Table: employees
* Question: How many employees were born in november?
*/

SELECT COUNT(emp_no) FROM employees
WHERE EXTRACT (MONTH FROM birth_date) = 11;

/*
* DB: Employees
* Table: employees
* Question: Who is the oldest employee?
*/

SELECT MAX(AGE(birth_date)) FROM employees;

/*
* DB: Store
* Table: orders
* Question: How many orders were made in January 2004?
*/

SELECT COUNT(orderid)
FROM orders
WHERE DATE_TRUNC('month', orderdate) = date '2004-01-01';
```

**[⬆ back to top](#table-of-contents)**

#### 93. DISTINCT

- remove duplicate
- keep one row from each group of duplicates
- multiple columns will evaulate based on the combination of columns

**[⬆ back to top](#table-of-contents)**

#### 94. Exercise: Distinct Keyword

```sql
/*
* DB: Employees
* Table: titles
* Question: What unique titles do we have?
*/

SELECT DISTINCT title FROM titles;

/*
* DB: Employees
* Table: employees
* Question: How many unique birth dates are there?
*/

SELECT COUNT(DISTINCT birth_date)
from employees;

/*
* DB: World
* Table: country
* Question: Can I get a list of distinct life expectancy ages
* Make sure there are no nulls
*/

SELECT DISTINCT lifeexpectancy FROM country
WHERE lifeexpectancy IS NOT NULL
ORDER BY lifeexpectancy;
```

**[⬆ back to top](#table-of-contents)**

#### 95. Sorting Data

- sort data ascending or descending by column
- using expressions

```sql
SELECT * FROM customers
ORDER BY LENGTH(name)
```

**[⬆ back to top](#table-of-contents)**

#### 96. Multi Table SELECT

- A join combines columns from one table to another

```sql
SELECT a.emp_no, b.salary, b.from_date
FROM employees AS a, salaries AS b
WHERE a.emp_no = b.emp_no
ORDER BY a.emp_no;
```

**[⬆ back to top](#table-of-contents)**

#### 97. Inner Join

- Table A [Matched] Table B
- Inner join syntax is generally considered a best pratice. It's more readable than using the WHERE syntax. It shows you what's being joined
- can become more complicated as you add more tables to combine

```sql
SELECT a.emp_no, b.salary, b.from_date
FROM employees AS a
INNER JOIN salaries AS b
ON a.emp_no = b.emp_no
ORDER BY a.emp_no;
```

```sql
-- You want to know the original salary and also salary at a promotion
SELECT a.emp_no, 
  CONCAT(a.first_name, a.last_name) AS "name",
  b.salary, 
  COALESCE(c.title, 'No title change'),
  COALESCE(c.from_date::text, '-') AS "title taken on"
FROM employees AS a
INNER JOIN salaries AS b
ON a.emp_no = b.emp_no
INNER JOIN titles AS c
ON c.emp_no = a.emp_no AND (
  c.from_date = (b.from_date + interval '2 days') OR
  c.from_date = b.from_date
)
ORDER BY a.emp_no;
```

**[⬆ back to top](#table-of-contents)**

#### 98. Self Join

- join a table to itself
- a table has a foreign reference its primary key
- similar to inner join

| id  | name   | startDate  | supervisorId |
| --- | ------ | ---------- | ------------ |
| 1   | Binni  | 1990/01/13 | 2            |
| 2   | Andrei | 1980/01/23 | 2            |

```sql
CREATE TABLE employee( 
  id varchar(5) NOT NULL,
  name varchar(20) NULL,
  start_date date NULL,
  supervisorId varchar(5) NULL,
  CONSTRAINT id PRIMARY KEY(id),
  CONSTRAINT supervisorId FOREIGN KEY(supervisorId) REFERENCES employee(id)
);

INSERT INTO employee VALUES ('1', 'Boss Man', date '1980/01/23', '1');
INSERT INTO employee VALUES ('1a', 'Andrei', date '1980/01/23', '1');
INSERT INTO employee VALUES ('1abc', 'Boss Man', date '1980/01/23', '1a');
```
```sql
SELECT a.id, 
  a.name AS "employee", 
  b.name AS "supervisor"
FROM employee AS a, 
  employee AS b
WHERE a.supervisorId = b.id;
```

```sql
SELECT a.id, 
  a.name AS "employee", 
  b.name AS "supervisor"
FROM employee AS a
INNER JOIN employee AS b
ON a.supervisorId = b.id;
```

**[⬆ back to top](#table-of-contents)**

#### 99. Outer Join

- What if I need the rows that don't match?
- Table A <-> Table B
- Left outer add data that don't have a match from table A
- Right outer add data that don't have a match from table B
- Any value that does not match is made to be NULL

```sql
SELECT *
FROM <table A> AS a
LEFT [OUTER] JOIN <table B> AS b
ON a.id = b.id;
```

```sql
-- You want to know every salary and also salary at a promotion
SELECT a.emp_no, 
  CONCAT(a.first_name, a.last_name) AS "name",
  b.salary, 
  COALESCE(c.title, 'No title change'),
  COALESCE(c.from_date::text, '-') AS "title taken on"
FROM employees AS a
INNER JOIN salaries AS b
ON a.emp_no = b.emp_no
LEFT JOIN titles AS c
ON c.emp_no = a.emp_no AND (
  c.from_date = (b.from_date + interval '2 days') OR
  c.from_date = b.from_date
)
ORDER BY a.emp_no;
```

**[⬆ back to top](#table-of-contents)**

#### 100. Less Common Joins

```sql
-- cross join: create a combination of every row
SELECT * FROM <tableA>
CROSS JOIN <tableB>;

-- full outer join: returns result from both table whether they match or not
SELECT * FROM <tableA> AS a
FULL JOIN <tableB> AS b
ON a.id = b.id;
```

**[⬆ back to top](#table-of-contents)**

#### 101. Inner-Join Exercises

```sql
/*
* DB: Store
* Table: orders
* Question: Get all orders from customers who live in Ohio (OH), New York (NY) or Oregon (OR) state
* ordered by orderid
*/

SELECT c.firstname, c.lastname, o.orderid FROM orders AS o
INNER JOIN customers AS c ON o.customerid = c.customerid
WHERE c.state IN ('NY', 'OH', 'OR')
ORDER BY o.orderid;

/*
* DB: Store
* Table: products
* Question: Show me the inventory for each product
*/

SELECT p.prod_id, i.quan_in_stock
FROM products as p
INNER JOIN inventory AS i oN p.prod_id = i.prod_id 


/*
* DB: Employees
* Table: employees
* Question: Show me for each employee which department they work in
*/

SELECT e.first_name, dp.dept_name
FROM employees AS e
INNER JOIN dept_emp AS de ON de.emp_no = e.emp_no
INNER JOIN departments AS dp ON dp.dept_no = de.dept_no
```

**[⬆ back to top](#table-of-contents)**

#### 102. USING Keyword

- simplify the join syntax

```sql
SELECT * 
FROM <tableA>
INNER JOIN <tableB> USING(id)
```

```sql
SELECT e.emp_no, e.first_name, d.dept_name 
FROM employees AS e
INNER JOIN dept_emp AS de ON de.emp_no = e.emp_no
INNER JOIN departments AS d USING(dept_no);
```

**[⬆ back to top](#table-of-contents)**

### Section 6: Advanced SQL

#### 103. GROUP BY

- summarise or aggregate data by groups
- why group data? to get in-depth information by group
- GROUP BY splits data into groups to apply functions to group rather than entire table
- When we GROUP BY, we apply the function by group
- reduce all records found in the group to a single record
- GROUP BY utilizes SPLIT-APPLY-COMBINE strategy
- GROUP BY happens after WHERE / FROM
- FROM -> WHERE -> GROUP BY -> SELECT -> ORDER

![](section-05/split-apply-combine.jpg)

**[⬆ back to top](#table-of-contents)**

#### 104. HAVING Keyword

- what if I want to filter groups?
- HAVING apply filters to a group as a whole
- FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER

```sql
SELECT col1, COUNT(col2)
FROM <table>
WHERE col2 > X
GROUP BY col1
HAVING col1 === Y;
```

```sql
SELECT d.dept_name, 
  COUNT(e.emp_no) AS "# of employees"
FROM employees AS e
INNER JOIN dept_emp AS de
ON de.emp_no = e.emp_no
INNER JOIN departments AS d
ON de.dept_no = d.dept_no
WHERE e.gender = 'M'
GROUP BY d.dept_name
HAVING COUNT(e.emp_no) > 25000;
```

**[⬆ back to top](#table-of-contents)**

#### 105. Ordering Grouped Data

```sql
SELECT d.dept_name, 
  COUNT(e.emp_no) AS "# of employees"
FROM employees AS e
INNER JOIN dept_emp AS de
ON de.emp_no = e.emp_no
INNER JOIN departments AS d
ON de.dept_no = d.dept_no
GROUP BY d.dept_name
ORDER BY COUNT(e.emp_no) DESC;
```

**[⬆ back to top](#table-of-contents)**

#### 106. Group By Mental Model

- GROUP BY emp_no
- we can apply aggregate function to from_date and salary
- however, we cannot get the salary of MAX(from_date)
- or cannot get the from_date of MAX(salary)

```sql
SELECT emp_no, MAX(from_date), MAX(salary)
FROM salaries
GROUP BY emp_no;
```

**[⬆ back to top](#table-of-contents)**

#### 107. Grouping Sets

- What if we want to combine the results of multiple groupings?
- UNION removes duplicate records
- UNION ALL does not remove duplicate records
- Grouping Sets is a subclause of GROUP BY that allows you to define multiple groupings

```sql
SELECT NULL AS "prod_id", SUM(ol.quantity)
FROM "public"."orderlines" AS ol

UNION

SELECT prod_id AS "prod_id", SUM(ol.quantity)
FROM "public"."orderlines" AS ol
GROUP BY prod_id
ORDER BY prod_id DESC;
```

```sql
SELECT prod_id AS "prod_id", SUM(ol.quantity)
FROM "public"."orderlines" AS ol
GROUP BY 
  GROUPING SETS (
    (),
    (prod_id)
  )
ORDER BY prod_id DESC;
```

```sql
SELECT prod_id AS "prod_id", orderlineid, SUM(ol.quantity)
FROM "public"."orderlines" AS ol
GROUP BY 
  GROUPING SETS (
    (),
    (prod_id),
    (orderlineid)
  )
ORDER BY prod_id DESC, orderlineid DESC;
```

**[⬆ back to top](#table-of-contents)**

#### 108. Rollup

- useful to replace GROUPING SETS that need all combinations

```sql
SELECT EXTRACT (YEAR FROM orderdate) AS "year",
  EXTRACT (MONTH FROM orderdate) AS "month",
  EXTRACT (DAY FROM orderdate) AS "day",
  sum(ol.quantity)
FROM orderlines AS ol
GROUP BY
  GROUPING SETS (
    (EXTRACT (YEAR FROM orderdate)),
    (
      EXTRACT (YEAR FROM orderdate),
      EXTRACT (MONTH FROM orderdate)
    ),
    (
      EXTRACT (YEAR FROM orderdate),
      EXTRACT (MONTH FROM orderdate),
      EXTRACT (DAY FROM orderdate)
    ),
    (
      EXTRACT (MONTH FROM orderdate),
      EXTRACT (DAY FROM orderdate)
    ),
    (EXTRACT (MONTH FROM orderdate)),
    (EXTRACT (DAY FROM orderdate)),
    ()
  )
ORDER BY
  EXTRACT (YEAR FROM orderdate),
  EXTRACT (MONTH FROM orderdate),
  EXTRACT (DAY FROM orderdate);
```

```sql
SELECT EXTRACT (YEAR FROM orderdate) AS "year",
  EXTRACT (MONTH FROM orderdate) AS "month",
  EXTRACT (DAY FROM orderdate) AS "day",
  sum(ol.quantity)
FROM orderlines AS ol
GROUP BY
  ROLLUP (
    EXTRACT (YEAR FROM orderdate),
    EXTRACT (MONTH FROM orderdate),
    EXTRACT (DAY FROM orderdate)
  )
ORDER BY
  EXTRACT (YEAR FROM orderdate),
  EXTRACT (MONTH FROM orderdate),
  EXTRACT (DAY FROM orderdate);
```

**[⬆ back to top](#table-of-contents)**

#### 109. Group By Exercises

```sql
/*
*  How many people were hired on did we hire on any given hire date?
*  Database: Employees
*  Table: Employees
*/
SELECT a.hire_date, COUNT(b.hire_date) as "amount"
FROM employees as a, employees as b
WHERE a.hire_date = b.hire_date
GROUP BY a.hire_date
ORDER BY "amount" DESC;

/*
*  Show me all the employees, hired after 1991, that have had more than 2 titles
*  Database: Employees
*/
SELECT e.emp_no, count(t.title) as "amount of titles"
FROM employees as e
JOIN titles as t USING(emp_no)
WHERE EXTRACT (YEAR FROM e.hire_date) > 1991
GROUP BY e.emp_no
HAVING count(t.title) > 2
ORDER BY e.emp_no;

/*
*  Show me all the employees that have had more than 15 salary changes that work in the department development
*  Database: Employees
*/
SELECT e.emp_no, count(s.from_date) as "amount of raises"
FROM employees as e
JOIN salaries as s USING(emp_no)
JOIN dept_emp AS de USING(emp_no)
WHERE de.dept_no = 'd005'
GROUP BY e.emp_no
HAVING count(s.from_date) > 15
ORDER BY e.emp_no;

/*
*  Show me all the employees that have worked for multiple departments
*  Database: Employees
*/
SELECT e.emp_no, count(de.dept_no) as "worked for # departments"
FROM employees as e
JOIN dept_emp AS de USING(emp_no)
GROUP BY e.emp_no
HAVING count(de.dept_no) > 1
ORDER BY e.emp_no;
```

**[⬆ back to top](#table-of-contents)**

#### 110. Window What?

- group data is useful
- group happens after FROM / WHERE
- HAVING is a special filter for groups
- GROUPING SETS AND ROLLUP are useful for multiple groupings in a single query
- Group data is not a silver bullet

Window functions

- How do we apply functions against a set of rows related to the current row?
- add average to every salary to see how much each employee is from average

**[⬆ back to top](#table-of-contents)**

#### 111. Looking Through The Window

- [Window Functions](https://www.postgresql.org/docs/12/functions-window.html)
- window functions create a new column based on functions performed on a subset or "window" of the data

```sql
window_function(arg1, arg2,..) OVER (
  [PARTITION BY partition_expression]
  [ORDER BY sort_expression [ASC | DESC] [NULLS {FIRST | LAST}]
)
```

```sql
-- how to display max salary in each indivodual row?
SELECT *, MAX(salary) OVER() 
FROM salaries
LIMIT 100;
```

**[⬆ back to top](#table-of-contents)**

#### 112. PARTITION BY

- divide rows into groups to apply the function against 

```sql
SELECT *, AVG(salary) 
OVER (
  PARTITION BY d.dept_name
) 
FROM salaries
JOIN dept_emp AS de USING (emp_no)
JOIN departments AS d USING (dept_no);
```

**[⬆ back to top](#table-of-contents)**

#### 113. Order By Acting Strange

- ORDER BY: order the results

window function ORDER BY

- ORDER BY changes the frame of the window function
- accumulating: take account of everything before me and myself


```sql
SELECT emp_no, salary, COUNT(salary) 
OVER (ORDER BY emp_no) 
FROM salaries
```

**[⬆ back to top](#table-of-contents)**

#### 114. Using Framing In Window Function

- when use a frame, we can create a sub-range or frame
- without ORDER BY, by default the frame is usually all partition rows
- with ORDER BY, by default the frame is usually everything before current row and current row

[Window Function Calls](https://www.postgresql.org/docs/9.1/sql-expressions.html)

Key: Meaning

- Rows or range: use a range or rows as a frame
- preceding: rows before the current one
- following: rows after the current one
- unbounded preceding or following: returns all before or after
- current row: your current row

```sql
PARTITION BY category 
ORDER BY price 
RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
```

```sql
SELECT emp_no, salary, 
COUNT(salary) OVER (ORDER BY emp_no) 
FROM salaries
```

```sql
SELECT emp_no, salary, 
COUNT(salary) OVER (
  PARTITION BY emp_no
  ORDER BY salary
) 
FROM salaries
```

```sql
SELECT emp_no, salary, 
COUNT(salary) OVER (
  PARTITION BY emp_no
  ORDER BY salary
  RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
) 
FROM salaries
```

**[⬆ back to top](#table-of-contents)**

#### 115. Solving For Current Salary

[Window Functions](https://www.postgresql.org/docs/12/functions-window.html)

![](section-05/current-salary.jpg)

```sql
SELECT e.emp_no, e.first_name, d.dept_name, MAX(s.salary)
FROM salaries AS s
JOIN employees AS e USING(emp_no)
JOIN dept_emp AS de USING(emp_no)
JOIN departments AS d USING(dept_no)
GROUP BY e.emp_no, e.first_name, d.dept_name
ORDER BY e.emp_no;
```

```sql
SELECT DISTINCT e.emp_no, 
  LAST_VALUE(salary) OVER (
    PARTITION BY s.emp_no
    ORDER BY s.from_date
    RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
  )
FROM salaries AS s
JOIN employees AS e USING(emp_no)
JOIN dept_emp AS de USING(emp_no)
JOIN departments AS d USING(dept_no)
ORDER BY e.emp_no;
```

```sql
SELECT DISTINCT e.emp_no, 
  LAST_VALUE(s.from_date) OVER (
    PARTITION BY s.emp_no
    ORDER BY s.from_date
    RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
  ),
  LAST_VALUE(salary) OVER (
    PARTITION BY s.emp_no
    ORDER BY s.from_date
    RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
  )
FROM salaries AS s
JOIN employees AS e USING(emp_no)
JOIN dept_emp AS de USING(emp_no)
JOIN departments AS d USING(dept_no)
ORDER BY e.emp_no;
```

```sql
SELECT DISTINCT e.emp_no, 
  s.from_date,
  s.salary
FROM salaries AS s
JOIN employees AS e USING(emp_no)
JOIN dept_emp AS de USING(emp_no)
JOIN departments AS d USING(dept_no)
ORDER BY e.emp_no;
```

**[⬆ back to top](#table-of-contents)**

#### 116. FIRST_VALUE

- return a value evaluated against the first row within its partition

![](section-05/first-value.jpg)

```sql
SELECT prod_id, price, category
  FIRST_VALUE(price) OVER (
    PARTITION BY category
    ORDER BY price
    RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
  ) AS "cheapest in category"
FROM products
```

```sql
SELECT prod_id, price, category,
  MIN(price) OVER (
    PARTITION BY category
  ) AS "cheapest in category"
FROM products
```

**[⬆ back to top](#table-of-contents)**

#### 117. LAST_VALUE

![](section-05/last-value.jpg)

- return a value evaluated against the last row within its partition

```sql
SELECT prod_id, price, category,
  LAST_VALUE(price) OVER (
    PARTITION BY category
    ORDER BY price
    RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
  ) AS "most expensive in category"
FROM products
```

```sql
SELECT prod_id, price, category,
  MAX(price) OVER (
    PARTITION BY category
  ) AS "most expensive in category"
FROM products
```

**[⬆ back to top](#table-of-contents)**

#### 118. SUM

- sum values within a group depend on the frame

![](section-05/sum.jpg)

```sql
SELECT o.orderid, o.customerid, o.netamount,
  SUM(o.netamount) OVER (
    PARTITION BY o.customerid
    ORDER BY o.orderid
  ) AS "cum sum"
FROM orders as o
ORDER BY o.customerid
```

**[⬆ back to top](#table-of-contents)**

#### 119. ROW_NUMBER

- number the current row within the partition starting from 1 regardless of framing

```sql
SELECT prod_id, price, category,
  ROW_NUMBER() OVER(
    PARTITION BY category
    ORDER BY price
  ) AS "position in category by price"
FROM products
```

**[⬆ back to top](#table-of-contents)**

#### 120. Window Function Exercises

```sql
/*
*  Show the population per continent
*  Database: World
*  Table: Country
*/

SELECT
  DISTINCT continent,
  SUM(population) OVER w1 as "continent population"
FROM country 
WINDOW w1 AS( PARTITION BY continent );

/*
*  To the previous query add on the ability to calculate the percentage of the world population
*  What that means is that you will divide the population of that continent by the total population and multiply by 100 to get a percentage.
*  Make sure you convert the population numbers to float using `population::float` otherwise you may see zero pop up
*
*  Database: World
*  Table: Country
*/

SELECT
  DISTINCT continent,
  SUM(population) OVER w1 as"continent population",
  CONCAT( 
      ROUND( 
          ( 
            SUM( population::float4 ) OVER w1 / 
            SUM( population::float4 ) OVER() 
          ) * 100    
      ),'%' ) as "percentage of population"
FROM country 
WINDOW w1 AS( PARTITION BY continent );


/*
*  Count the number of towns per region
*
*  Database: France
*  Table: Regions (Join + Window function)
*/

SELECT 
DISTINCT r.id, 
r."name", 
COUNT(t.id) OVER (
    PARTITION BY r.id
    ORDER BY r."name"
) AS "# of towns"
FROM regions AS r
JOIN departments AS d ON r.code = d.region 
JOIN towns AS t ON d.code = t.department
ORDER BY r.id;
```

**[⬆ back to top](#table-of-contents)**

#### 121. Conditional Statements

- What if you only want to select something when a certain criteria is met?
- case statements can be used in multiple places in a query
- each return must be a single output

Case statement

```sql
SELECT a,
  CASE 
    WHEN a=1 THEN 'one'
    WHEN a=2 THEN 'two'
  END
FROM test;
```

Render custom row data

```sql
SELECT 
  o.orderid,
  o.customerid,
  CASE 
    WHEN o.customerid = 1 
    THEN 'my first customer'
    ELSE 'not my first customer'
  END,
  o.netamount
FROM orders as o
ORDER BY o.customerid;
```

Filter in a where

```sql
SELECT 
  o.orderid,
  o.customerid,
  o.netamount
FROM orders as o
WHERE CASE 
  WHEN o.customerid > 10 
  THEN o.netamount < 100 
  ELSE o.netamount > 100 
END
ORDER BY o.customerid;
```

In an aggregate function

```sql
SELECT SUM(
  CASE 
    WHEN o.netamount <100
    THEN -100 
    ELSE o.netamount
  END
) AS "returns",
  SUM(o.netamount) AS "normal total"
FROM orders as o;
```

**[⬆ back to top](#table-of-contents)**

#### 122. NULLIF

- what if you want to return NULL if a condition is met?
- if value 1 = value 2, return NULL
- fill in empty spots with a NULL to avoid divide by zero issues

```sql
NULLIF(val_1, val_2)
NULLIF(0, 0)  -- NULL
NULLIF('ABC', 'DEF')  -- 'ABC'
```

**[⬆ back to top](#table-of-contents)**

#### 123. Views...What Are They Good For?

- What if you want to store the results of a query?
- What if you want to query the results of a query?
- view allow you to store and query previously run queries
- there are 2 types of views materialized and non-materialized
- non-materialized: query get re-run each time the view is called
- materialized: store the data physically and periodically updates it when tables change

**[⬆ back to top](#table-of-contents)**

#### 124. View Syntax

- view is the output of the query we ran
- view act like tables you can query them
- view take very little space to store
- we only store the definition of a view
- not all of the data that it returns

```sql
CREATE VIEW view_name AS query;
CREATE OR REPLACE view_name AS query;
ALTER VIEW <view_name> RENAME TO <view_name>;
DROP VIEW [ IF EXISTS] <view_name>;
```

**[⬆ back to top](#table-of-contents)**

#### 125. Using Views

- get the most recent salary of an employee
- use window functions
- view is easier to reason then window functions
- 

```sql
SELECT e.emp_no, e.first_name, d.dept_name, MAX(s.salary)
FROM salaries AS s
JOIN employees AS e USING(emp_no)
JOIN dept_emp AS de USING(emp_no)
JOIN departments AS d USING(dept_no)
GROUP BY e.emp_no, e.first_name, d.dept_name
ORDER BY e.emp_no;
```

```sql
SELECT DISTINCT e.emp_no, 
  LAST_VALUE(salary) OVER (
    PARTITION BY s.emp_no
    ORDER BY s.from_date
    RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
  )
FROM salaries AS s
JOIN employees AS e USING(emp_no)
JOIN dept_emp AS de USING(emp_no)
JOIN departments AS d USING(dept_no)
ORDER BY e.emp_no;
```

```sql
CREATE OR REPLACE VIEW last_salary_change AS
SELECT e.emp_no, 
  MAX(s.from_date)
FROM salaries AS s
JOIN employees AS e USING(emp_no)
JOIN dept_emp AS de USING(emp_no)
JOIN departments AS d USING(dept_no)
GROUP BY e.emp_no
ORDER BY e.emp_no;
```

```sql
SELECT * FROM salaries
JOIN last_salary_change AS l USING(emp_no)
WHERE from_date = l.max
ORDER BY emp_no;
```

```sql
SELECT s.emp_no, 
  d.dept_name, 
  s.from_date, 
  s.salary
FROM last_salary_change
JOIN salaries AS s USING(emp_no)
JOIN dept_emp AS de USING(emp_no)
JOIN departments AS d USING(dept_no)
WHERE max = s.from_date;
```

**[⬆ back to top](#table-of-contents)**

#### 126. Indexes

[Poor database indexing – a SQL query performance killer – recommendations](https://www.sqlshack.com/poor-database-indexing-sql-query-performance-killer-recommendations/)

What is Indexes?

- An index is a pointer to data in a table
- An index is a construct to speed up data access in a table
- An index is used to find data without having to scan the whole table
- An index is used to improve query performance with filter conditions
- An index work like a table of contents to help you find a piece of data

What does it do?

- speed up queries
- slow down data insertion and updates

Types of indexes

- Single column
- Multi column
- Unique (PK)
- Partial
- Implicit Indexes (be default)

```sql
CREATE UNIQUE INDEX <name>
on <table> (column1, column2, ...)

DROP INDEX <name>
```

When to use

- Index foreign keys
- Index primary keys and unique columns
- Index on columns that end up in the ORDER BY / WHERE clause often 

When NOT to use

- Don't add an index just to add an index
- Don't use indexes on small tables
- Don't use on tables that are updated frequently
- Don't use on columns that can contain NULL values
- Don't use on columns that have large values

**[⬆ back to top](#table-of-contents)**

#### 127. Index Types

[Index Types](https://www.postgresql.org/docs/12/indexes-types.html)

- Single column
  - Most frequently used column in a query
  - when? retrieve data that satisfies one condition
- Multi column
  - Most frequently used columns in a query
  - when? retrieve data that satisfies multiple conditions
- Unique
  - normally primary key or column with unique value
  - for speed and integrity
```sql
CREATE UNIQUE INDEX <name>
ON <table> (column1); 
```
- Partial
  - index over a subset of a table
```sql
CREATE INDEX <name>
ON <table> (<expression>); 
```
- Implicit Indexes (be default)
  - auto created by database
  - PRIMARY KEY
  - UNIQUE KEY

```sql
EXPLAIN ANALYZE
SELECT "name", "district", "countrycode"
FROM "public"."city"
WHERE countrycode IN ('TUN', 'BE', 'NL');
```

```sql
CREATE INDEX idx_countrycode
ON city (countrycode);
```

Without Index

![](section-05/without-index.jpg)

With Index

![](section-05/with-index.jpg)

```sql
CREATE INDEX idx_countrycode
ON city (countrycode)
WHERE countrycode IN ('TUN', 'BE', 'NL');
```

With Partial Index

![](section-05/with-partial-index.jpg)

**[⬆ back to top](#table-of-contents)**

#### 128. Index Algorithms

Postgres provides several types of indexes

- B-Tree: default algorithm
  - best used for comparisons
  - <, <=, =, >, >=, BETWEEN, IN, IS NULL, IS NOT NULL
- Hash
  - can only handle equality (=) operations
- Gin: generalized inverted index
  - best used when multiple values are stored in a single field
- Gist: generalized search tree
  - useful in index geometric data and full-text search

Each index type uses a different algorithm

```sql
CREATE [UNIQUE] INDEX <name>
ON <table> USING <method> (column1, ...)
```

**[⬆ back to top](#table-of-contents)**

#### 129. What Are Subqueries?

- a construct that allow you to build extremely complex query
- also called inner query or inner select
- is a query within another query
- most often found in the WHERE clause
- can also used it in SELECT, FROM and HAVING clause
- return a single value the SELECT clause, 
- return a single column with single or multiple rows the WHERE and HAVING clause
- return a table in the FROM or JOIN clause

```sql
SELECT *
FROM <table>
WHERE <column> <condition> (
  SELECT <column> 
  FROM <table>
  [WHERE | GROUP BY | ORDER BY | ...] 
)
```

```sql
SELECT (
  SELECT <column> 
  FROM <table>
  [WHERE | GROUP BY | ORDER BY | ...] 
)
FROM <table> AS <name>
```

```sql
SELECT *
FROM (
  SELECT <column>, <column>, ...
  FROM <table>
  [WHERE | GROUP BY | ORDER BY | ...] 
) AS <name>
```

```sql
SELECT *
FROM <table> AS <name>
GROUP BY <column>
HAVING (
  SELECT <column> 
  FROM <table>
  [WHERE | GROUP BY | ORDER BY | ...] 
) 
```

**[⬆ back to top](#table-of-contents)**

#### 130. Subqueries vs Joins

- how a subquery different from a join?
- both combine data from different tables
- subquery could stand alone but not join
- join combines rows from one or more tables based on match condition
- subquery can return a single result or a row set(table)
- joins can only return a row set(table)
- a subquery's results cannot be reference by outer query
- a joined table can be reference by outer query
- use a join if possible over subquery for performance reason

```sql
SELECT AVG(price) FROM products

SELECT title, price, 
  (SELECT AVG(price) FROM products) AS "global average price"
FROM products;
```

```sql
SELECT prod_id, title, price, i.quan_in_stock 
FROM products
JOIN inventory AS i USING(prod_id)
```

```sql
SELECT title, price, 
  (SELECT AVG(price) FROM products) AS "global average price"
FROM (
  SELECT * FROM products WHERE price < 10
) AS "products_sub";
```

**[⬆ back to top](#table-of-contents)**

#### 131. Subquery Guidelines As Types

- a subquery must be enclosed in parentheses
- must be placed on the right side of the comparision operator
- cannot manipulate results internally (order by ignored)
- use single row operators with single-row subquery
- subquery return NULL may not return results

```sql
SELECT *
FROM <table> AS <name>
WHERE X >= | <= | = | != (
  SELECT MAX(<column>)
  FROM <table>
  [WHERE | GROUP BY | ORDER BY | ...] 
)
```

Types of subquery

- single row: return 0 or 1 row
- multiple row: return 0 or more rows
- multiple column: return 0 or more columns
- correlated: reference 1 or more columns in the other statement - runs against each row
- correlated: can have performance bottleneck
- nested: subquery in a subquery

single row

```sql
SELECT name, salary
FROM salaries
WHERE salary = 
  (SELECT AVG(salary) FROM salaries);
```

```sql
SELECT name, salary,
  (SELECT AVG(salary) FROM salaries) 
  AS "Company average salary"
FROM salaries;
```

multiple row

```sql
SELECT title, price, category
FROM products
WHERE category IN (
  SELECT category FROM categories
  WHERE categoryname IN ('Comedy', 'Family', 'Classics')
);
```

multiple column

```sql
SELECT emp_no, salary, 
  dea.avg AS "Department average salary"
FROM salaries AS s
JOIN dept_emp AS de USING(emp_no)
JOIN (
  SELECT dept_no, AVG(salary) 
  FROM salaries AS s2
  JOIN dept_emp AS e USING(emp_no)
  GROUP BY dept_no
) AS dea USING(dept_no)
WHERE salary > dea.avg;
```

correlated

```sql
SELECT emp_no, salary, from_date
FROM salaries AS s
WHERE from_date = (
  SELECT MAX(s2.from_date) AS max
  FROM salaries AS s2
  WHERE s2.emp_no = s.emp_no
)
ORDER BY emp_no;
```

nested

```sql
SELECT orderlineid, prod_id, quantity
FROM orderlines
JOIN (
  SELECT prod_id
  FROM products
  WHERE category IN (
    SELECT category FROM categories
    WHERE categoryname IN ('Comedy', 'Family', 'Classics')
  )
) AS limited USING(prod_id)
```

**[⬆ back to top](#table-of-contents)**

#### 132. Using Subqueries

show all employees older than the average age

```sql
SELECT 
  first_name, 
  last_name, 
  birth_date, 
  AGE(birth_date),
  (
    SELECT AVG(AGE(birth_date)) 
    FROM employees
  )
FROM employees
WHERE AGE(birth_date) > (
  SELECT AVG(AGE(birth_date)) 
  FROM employees
);
```

Show the title by salary for each employee

```sql
SELECT 
  emp_no, 
  salary, 
  from_date, 
  (
    SELECT title 
    FROM titles AS t 
    WHERE t.emp_no = s.emp_no 
      AND t.from_date = s.from_date
  )
FROM salaries AS s
ORDER BY emp_no;
```

use join instead of subquery if possible for performance reason

```sql
SELECT 
  emp_no, 
  salary, 
  from_date,
  t.title
FROM salaries AS s
JOIN titles AS t USING(emp_no, from_date)
ORDER BY emp_no;
```

**[⬆ back to top](#table-of-contents)**

#### 133. Getting The Latest Salaries

Show the most recent employee salary

```sql
SELECT 
  emp_no, 
  salary AS "most recent salary", 
  from_date
FROM salaries AS s
WHERE from_date = (
  SELECT MAX(from_date)
  FROM salaries AS sp
  WHERE sp.emp_no = s.emp_no
)
ORDER BY emp_no ASC;
```

```sql
SELECT   
  emp_no, 
  salary AS "most recent salary", 
  from_date 
FROM salaries AS s
JOIN last_salary_change AS ls USING(emp_no)
WHERE from_date = ls.max
ORDER BY emp_no;
```

```sql
SELECT 
  emp_no, 
  salary AS "most recent salary", 
  from_date
FROM salaries AS s
JOIN (
  SELECT emp_no, MAX(from_date)
  FROM salaries AS sp
  GROUP BY emp_no
) AS ls USING(emp_no)
WHERE ls.max = from_date
ORDER BY emp_no ASC;
```

**[⬆ back to top](#table-of-contents)**

#### 134. Subquery Operators

- operators you can apply in the WHERE clause on subquery
- EXISTS: check if subquery returns any rows
- IN: check if value is equal to any of the rows in the return (NULL yields NULL)
- NOT IN: check if value is not equal to any of the rows in the return (NULL yields NULL)
- ANY/SOME: check each row against the operator and if any comparison matches return TRUE
- ALL: check each row against the operator and if all comparisons match return TRUE
- SINGLE VALUE COMPARISON: subquery must return a single row check comparatore against row

```sql
SELECT firstname, lastname, income
FROM customers AS c
WHERE EXISTS (
  SELECT * FROM orders AS o
  WHERE c.customerid = o.customerid 
    AND totalamount > 400 
) AND income > 90000;
```

```sql
SELECT prod_id
FROM products
WHERE category IN (
  SELECT category FROM categories
  WHERE categoryname IN ('Comedy', 'Family', 'Classics')
);
```

```sql
SELECT prod_id
FROM products
WHERE category IN (
  SELECT category FROM categories
  WHERE categoryname NOT IN ('Comedy', 'Family', 'Classics')
);
```

```sql
SELECT prod_id
FROM products
WHERE category = ANY (
  SELECT category FROM categories
  WHERE categoryname IN ('Comedy', 'Family', 'Classics')
);
```

```sql
SELECT prod_id, title, sales
FROM products
JOIN inventory AS i USING(prod_id)
WHERE i.sales > ALL (
  SELECT AVG(sales) FROM inventory
  JOIN products AS pl USING(prod_id)
  GROUP BY pl.category
);
```

```sql
SELECT prod_id
FROM products
WHERE category = (
  SELECT category FROM categories
  WHERE categoryname IN ('Comedy')
);
```

**[⬆ back to top](#table-of-contents)**

#### 135. Subquery Exercises

```sql
/* TRY TO WRITE THESE AS JOINS FIRST */
/*
* DB: Store
* Table: orders
* Question: Get all orders from customers who live in Ohio (OH), New York (NY) or Oregon (OR) state
* ordered by orderid
*/

SELECT c.firstname, c.lastname, o.orderid 
FROM orders AS o, (
    SELECT customerid, state, firstname, lastname
    FROM customers
) AS c
WHERE  o.customerid = c.customerid AND 
c.state IN ('NY', 'OH', 'OR')
ORDER BY o.orderid;

/*
* DB: Employees
* Table: employees
* Question: Filter employees who have emp_no 110183 as a manager
*/

SELECT emp_no, first_name, last_name
FROM employees
WHERE emp_no IN (
    SELECT emp_no
    FROM dept_emp
    WHERE dept_no = (
        SELECT dept_no 
        FROM dept_manager
        WHERE emp_no = 110183
    )
)
ORDER BY emp_no

-- Written with JOIN
SELECT e.emp_no, first_name, last_name
FROM employees as e
JOIN dept_emp as de USING (emp_no)
JOIN dept_manager as dm USING (dept_no)
WHERE dm.emp_no = 110183
```

**[⬆ back to top](#table-of-contents)**

### Section 7: Database Management

**[⬆ back to top](#table-of-contents)**

### Section 8: Solving The Mystery
**[⬆ back to top](#table-of-contents)**

### Section 9: Database Design
**[⬆ back to top](#table-of-contents)**

### Section 10: Database Landscape, Performance and Security
**[⬆ back to top](#table-of-contents)**

### Section 11: Where To Go From Here?
**[⬆ back to top](#table-of-contents)**

### Section 12: Exrtas: Data Engineering (And the role of Machine Learning)
**[⬆ back to top](#table-of-contents)**

### Section 13: Extras: Redis
**[⬆ back to top](#table-of-contents)**

### Section 14: Extra Bits: Databases In A Web App (with Node.js)
**[⬆ back to top](#table-of-contents)**

### Section 15: BONUS SECTION
**[⬆ back to top](#table-of-contents)**