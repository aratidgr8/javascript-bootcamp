// Design the same classes by using only Javascript prototypes

//Using `var` because this is `prototype` i.e. older version of JS
//This is our typical class when we are doing prototype way
var Employee = function(id, name){    
    if(!id || !name){
        throw new Error('Employee ID & Name are mandatory!')
    }
    this.id = id;
    this.name = name    
}


Employee.prototype.setSalary = function(salary){
    this.salary = salary;        
}
Employee.prototype.getSalary = function(id){
    return this.salary;        
}
Employee.prototype.getId = function(){
    return this.id;
}
Employee.prototype.getName = function(){
    this.name;
}


var Manager = function(params) {
    //Extending constructor function of employee into manager
    Employee.apply(this, arguments)
    //New additional property
    this.image = params.image
}

//Clonning all the functions from Employee into Manager
//To assign all Employee methods to manager
Manager.prototype = Object.create(Employee.prototype)

//Without this `Manager.prototype.constructor` will refer to Employee's constructor method, but we it to managers constructor method
//To override constructor method to manager
Manager.prototype.constructor = Manager;

Manager.prototype.setDepartment = function(name){
    this.department = name;
}

Manager.prototype.setDepartment = function(){
   return this.department;
}

const emp = new Employee(1, "Arati")
emp.setSalary(10000000)

const manager = new Manager(2, "John")
manager.setDepartment("engineering")