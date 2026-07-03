
db.employees.insertMany([
{_id:1,name:"Eric",age:30,position:"Full Stack Developer",salary:60000},
{_id:2,name:"Erica",age:35,position:"Intern",salary:8000},
{_id:3,name:"Erical",age:40,position:"UX/UI Designer",salary:56000},
{_id:4,name:"treric7",age:37,position:"Team Leader",salary:85000},
{_id:5,name:"Eliza",age:25,position:"Software Developer",salary:45000},
{_id:6,name:"Trian",age:29,position:"Data Scientist",salary:75000},
{_id:7,name:"Elizan",age:25,position:"Full Stack Developer",salary:49000}
]);

1.
db.employees.find();

2.
db.employees.find({position:"Full Stack Developer"});

3.
db.employees.find({age:{$gte:25,$lte:40}});

4.
db.employees.find({},{name:1,_id:0}).sort({salary:-1}).limit(1);

5.
db.employees.find({salary:{$gt:50000}});

6.
db.employees.find({},{name:1,position:1,_id:0});

7.
db.employees.countDocuments({salary:{$gt:50000}});

8.
db.employees.find({
    position:{$in:["Software Developer","Full Stack Developer"]},
    age:{$lt:30}
});

9.
db.employees.updateMany(
    {salary:{$lt:50000}},
    {$mul:{salary:1.10}}
);

10.
db.employees.deleteMany({age:{$gt:50}});

11.
db.employees.updateMany(
    {position:"Data Scientist"},
    {$mul:{salary:1.05}}
);

12.
db.employees.find({name:/an/});

13.
db.employees.find({name:/^Eri/i});

14.
db.employees.find({name:/ric/});

15.
db.employees.find({name:/^[A-Za-z]{4,5}$/});

16.
db.employees.find({name:/[0-9]$/});