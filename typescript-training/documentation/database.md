# What is a database? 
Database is an organized collection of data that is going to help us to access, review, and update the information in a rapid and coherent manner. 

## What is RDBMS ?
RDBMS stands for Relational Database Management System. Mainly, this RDBMS is going to talk about maintaining the data in multiple tables instead of storing it in one single table. 

## What is SQL? 
SQL means Structured Query Language. SQL is a programming language that we are going to use to communicate with our database. By using SQL programming language, we can perform CRUD operations within the database. 

## CRUD Operations ?

- C refers to create operations. => CREATE , INSERT
- R refers to read operations. => SELECT 
- U refers to update operations. => UPDATE, ALTER
- D refers to delete operations. => DELETE, DROP

# 

## Data Types in SQL ?

### Numeric Data Types ( Datatypes used to store numbers with decimals and without decimals )

SMALLINT => It can store numbers without decimals from -32768 to +32767. 
INTEGER => It can store numbers without decimals from -2147483648 to +2147483647
BIGINT => It can store a number without decimals from -19 digits to +19 digits. 

FLOAT => It can store numbers with decimals up to 6 decimals point
DOUBLE => It can store numbers with decimals up to 15 decimal points. 
DECIMAL => It can store numbers with up to 16K decimal points. 

SMALLSERIAL => It can store only positive numbers without decimals from 1 to 32,767. 
SERIAL => It can store only positive numbers without decimals from 1 to 2147483647
BIGSERIAL => It can store positive numbers from 1 up to a 19-digit positive number. 


## Character data types. 
CHAR(n) => It can store a fixed number of characters. 
VARCHAR(n) => It can store a variable number of characters. 
TEXT => It can store unlimited characters. 

## Boolean Data Types
BOOLEAN => It can store true or false values. 

## Date and Time Data Types 
DATE => It can store only date. 
TIME => It can store only time. 
TIMESTAMP => It can store both date and time together. 
INTERVAL => It can store the period in the form of minutes, hours, days, months, years. 


## Operators in SQL ?

### Arithmetic operators
Arithmetic operators are all about the operators used in the mathematical operation. 
+ Represents addition. 
- Represents subtraction. 
* Represents multiplication 
/ Represents division 
% Represents modulus or remainder. 

### Comparison Operators 
Comparison operators are all about the operators used to compare two different values. 
= Refers equal to 
!= Refers not equal to 
> Greater than
< Less than
>= Greater than or equalto
<= Less than or equalto

### Logical Operators 
AND =>  It will give you a result as true only if all the conditions are true. 
OR => It will give you a result of true if any one of the conditions is true. 
NOT => It will give you the opposite result. 
BETWEEN => It will filter the rows within the specific range. 
IN => Filter the rows based on the list of specific values.  EMPID IN (1,5,10,13)
EXISTS => Filter the rows based on the result of the subquery. EMPID EXIST (SELECT EMPID FROM PROMOTION LIST)
LIKE => Filter the rows based on the pattern. Along with the like operator, we are going to use two special characters: % ref any and _ ref position
IS NULL => Filter the rows having null value. 

### Constraints in SQL ?
Constraints are nothing but conditions added on top of the database column. 

NOT NULL => The column having a non-null constraint won't allow a null value. 
UNIQUE => The column having a unique constraint won't allow duplicate values. 
PRIMARY KEY => The column having a primary key constraint won't allow duplicate values and also null values. A primary key is a unique reference to separate each and every row within the table. 
FOREIGN KEY => A foreign key constraint is the key that is going to maintain the link between two different tables, ensuring referential integrity. 
CHECK => The column having a check constraint is going to verify a custom condition. 
DEFAULT => The column having a default constraint is going to add a default value if the user is not going to update any data. 

### Default functions in SQL ?
Default functions are a set of default methods provided by the SQL programming language to manipulate the data that we have stored previously within the database. 

### Aggregate functions 
Aggregate functions are all about the functions designed to perform calculations on a set of rows and return a single result. 

count() => It will count total rows available in the table and return the row count. 
sum() => It will calculate the sum of all the values within the specific column. 
avg() => It will calculate the average value within the specific column. 
min() => It will give you the minimum value within the specific column. 
max() => It will return the maximum value within the specific column. 

### Numerical Functions 
Numerical functions are all about the functions that we are going to use to perform mathematical operations. 

ABS() => It will return the absolute value or positive value of any number. => SELECT ABS(-123.99) => 123.99
CEIL() => It will return the nearest next integer value. => SELECT CEIL(123.11) => 124
FLOOR() => It will return the nearest previous integer value.  => SELECT FLOOR (123.999) => 123
ROUND()=> It will return the rounded value of a particular number based on the decimal point specified. => SELECT ROUND (125.995,2) => 126.00
POWER() => It will return the power of a specific number. => POWER (2,3) => 8
SQRT() => It will return the square root of a specific number. => SELECT SQRT(49) => 7

### String Functions
String functions are all about the default methods in SQL to manipulate and transform the text or character data types. 

LENGTH() => It will return the total number of characters stored in the string. 
UPPER() => It will convert all the characters of the string into upper case. 
LOWER() => It will convert all the characters of the string into lower case. 
SUBSTRING() => It will extract the part of the string based on the start and end index specified. 
TRIM() => It will eliminate leading and trailing spaces from the string. 
CONCAT() => It will join two or more strings and return a single string. 