$(document).ready(function(){
    function add(){
        $('.copied').addClass('bounce-effect');
    }
    function remove(){
        $('.copied').removeClass('bounce-effect')
    }

    $('.copy-btn').click(function(){
        $('#textField').select();
        document.execCommand('copy');
        add();
        setTimeout(remove,800)
    })

})
// class student{
//     constructor(name,age){
//         this.studentname = name; 
//         this.studentage = 20;
//         console.log('constructor function')
//     }
//     hello(){
//         console.log('hello ' + this.studentname + " your age is " + this.studentage)
//     }
// }
// let a = new student('vijay');
// a.hello()

// class student{
//     constructor(name,age){
//         this.studentname = name;
//         this.studentage = age;
//         console.log('constructor function')
//     }
//     hello(){
//         console.log(`hello ${this.studentname} your age is ${this.studentage}`)
//     }
//     static staticMethod(){
//         console.log("static function")
//     }
// }
// let a = new student('vijay', 20)
// a.hello();
// student.staticMethod();

// inheriteance methods

// class employee{
//     constructor(name){
//         console.log('constructor : employee ' + name)
//     }
// }
// class manager extends employee{
//     constructor(name){
//         console.log('constructor : manager ' + name)
//     }
// }
// let a = new manager("vijay");
// class employee{
//     constructor(name){
//         console.log('constructor : employee ' + name)
//     }
// }
// class manager extends employee{
//     constructor(name){
//         super();
//         console.log('constructor : manager ' + name)
//     }
// }
// let a = new manager("vijay");
// class employee{
//     constructor(name){
//         this.empname = name;
//         console.log('constructor : employee ')
//     }
//     info(){
//         console.log("employee name is : " + this.empname)
//     }
// }
// class manager extends employee{
    
//     info(){
//         console.log("manager name is : " + this.empname)
//     }
// }
// let a = new manager("vijay");
// a.info()
// class employee{
//     constructor(name){
//         this.empname = name;
//         console.log('constructor : employee ')
//     }
//     info(){
//         console.log("employee name is : " + this.empname)
//     }
// }
// class manager extends employee{
//     info(){
//         super.info();
//         console.log("manager name is : " + this.empname)
//     }
// }
// let a = new manager("vijay");
// a.info()

// class employee{
//     constructor(name,age,salary){
//         this.empname = name;
//         this.emage  = age;
//         this.empsalary = salary;
//         console.log('constructor employee')
//     }
//     info(){
//         console.log(`      employee class

//         Name : ${this.empname}
//         age  : ${this.emage} 
//         salary : ${this.empsalary}`)
//     }
// }
// class manager extends employee{
//     info(){
//         let ta = 1000;
//         let pa = 300;
//         let totalsalary = this.empsalary + pa + ta
//         console.log(`      manager class

//         Name : ${this.empname}
//         age  : ${this.emage} 
//         salary : ${totalsalary}`)
//     }

// }
// let a = new employee("arun",20,20000)
// let b = new manager("vijay",20,20000)
// a.info();
// b.info();

