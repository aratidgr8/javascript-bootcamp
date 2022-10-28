// Design a class for employee which takes id and name in during construction of object and has a salary property
// Design a class for manager which is employee and can have department property


class Employee{

    constructor(id, name){
        if(!id || !name){
            throw new Error('Employee ID & Name are mandatory!')
        }
        this.id = id;
        this.name = name
    }
    setSalary(salary){
        this.salary = salary;        
    }
    getSalary(id){
        return this.salary;        
    }
    getId(){
        return this.id;
    }
    getName(){
        this.name;
    }
}

class Manager extends Employee{
    setDepartment(name){
        this.department = name;
    }

    setDepartment(){
       return this.department;
    }
}

const emp = new Employee(1, "Arati")
emp.setSalary(10000000)

const manager = new Manager(2, "John")
manager.setDepartment("engineering")