# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer: 

Calling super allows you acces to the method that was passed in the superclass or original main class.

Researched answer: 

Calling super is used in a subclass. By doing this, the subclass will have access to the intance variables within a specific method. With super, you are allowed to "borrow" intance variables from the parent. 
An interesting thing I found about calling super, is that this can only be used inside a method, it returns the result from calling the parent method, and that it can actually be called multiple times.
I have found this extremly helpful and appreciate the time that it has saved me when writing my code. For example, when we were completing the animal kingdom challenges during class, i was amazed at how much easier using super made it for us.
Below you can see an example of super being used:

EXAMPLE:

class Rescues
  def initialize(name)
    @name = name
  end
end

class Dogs < Rescues
  def initialize(name, age)
    super(name)
    @age = age
  end

2. What is a gem?

Your answer: 

A gem is pre-package code.

Researched answer:

A gem is a piece of pre-package code that allows you to have access to methods that other developers have written.It is a library that contains a specific piece of functionslity as well as many files or assets related to that specific functionality. A gem is an amazing and easier way for people to share their code with others. Gems can be represented in a Gemfile in general or with a specific version.

 Believe it or not I have actually been using a gem in class. Ruby on rails is a very popular gem that is used for building robust, full- stack web applications. Active records is actually another one, which is used for object-relational database management in Rails. Its incredible how much easier and convenient gems make it for us.


An amazing fact that I learned while completing my research on gems, is that inside gems, you can find components which are: code, documentation, and the gemspec.

3. What is a relational database? Are there other kinds of databases?

Your answer:

A relational database is a database that can be used to store and display data.


Researched answer:

A relational database is a type of databse used to store and provide access to data points that are related to one another. A relational databese is comprised of tables of data that can be reassembled in different ways.Each table contains colums of data categoriez, also known as attributes, and rows(records). It is important to know that each row contains unique data or key. Relational databases are very useful since the user can manipulate relational databases to find the view that fits their desired need.

For example, this database is tipically used to track inventories, process ecommerce transactions, and manage large amounts of customer information.

4. What are primary keys? Why are they important?

Your answer:

A primary key is a identifier for a specific item in a relational database.

Researched answer:

A primary key also known as the primary keyword, is a column in a relational database table thats distinctive for each record.Some of the main characteristics of a primary key are ;

 With a primary key, the data in a specific column is always unique.
 A database table can only have one primary key
 It uniquely identifies a record in a relational database table
 The value of a primary key cant be deleted from the tree structure or the parent table
 It doesnt permit null values


Primary keys are important, because without them relational dtabases would not work, since it serves as a unique identifier for a row of  data in a database table. A primary key is necessary to ensure that a table record can always be uniquely identified.

A good example in the real world of a primary key, would be the VIN to your car in a relational database for a vehicle registration system.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer:

The HTTP verbs are get,post,patch,update, and delete. The corresponding verbs are create,read,update,delete.

Researched answer: 

The HTTP verbs are;

GET: Display data ; Its corresponding CRUD action would be read
POST: Create data ; Its corresponding CRUD action would be create
PUT: Replaces old content with new content; Its corresponding CRUD action would be Update
PATCH: Replaces content that has been changed; Its corresponding CRUD action would be update
DELETE: Removes data; Its corresponding CRUD action would be delete

Each of the HTTp verbs implements a different sematic, but some common features are shared by a group of them.

An interesting fact that I learned while doing my research, is that there are more HTTP verbs other than the ones that were discussed in class. The other verbs are;

HEAD: Similar to get without the responce body
CONNECT: establishes a tunnel to the server identified by the target resouurce.
OPTIONS: Describes the communication options for the target resource.
TRACE: Performs a message loop-back test along the path to the target resource.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: 

Set of standards that are used to create efficient, reusable routes.

2. Model validations:

Process that is carried out after model training

3. Params:

Keyword used to specify a method parameter thata takes a variable number of arguments

4. ERB:

Stand for embedded Ruby; allows developers to embed information from back-end databases 

5. API:

Stands for applicatio programming interface; it is a set of define rules that enable different applications to communicate with each other 
