//q15
import { add2, subtract, multiply, divide} from "./calculate.js"


//q1
class BackAccount{
    accountNumber = 12345;
    accountHolder = "Ritika";
    balance = 100000000;

    constructor(accountNumber,accountHolder,balance){
        this.accountNumber = accountNumber
        this.accountHolder =accountHolder
        this.balance = balance
    }
    deposit(amt){
        console.log(amt + "Rs is deposited");
        
    }
    withdraw(amt){
        console.log(amt + "Rs is withdraw");
        
    }
}
const c = new BackAccount(5432,"Tom",2000);
console.log(c);
c.deposit(20000);
c.withdraw(20000)

//q2
const arr10 =[2,4,7,9,10]
const [first, second] = arr10
console.log(first, second);

//q3
const Emp = {
    "id" : "3",
    "name" : "harry",
    "salary" : "12000"
}
console.log(Emp.name);

const{name,id} = Emp
console.log(name);
console.log(id);

//q4
const arr11 = [2,5,10,1,7]
console.log(arr11);
console.log(...arr11);

function findMax(){
    return Math.max(...arr11)
}
console.log(findMax());

//q5
function greet(name= "Guest") {
    console.log(name);  
}
greet()

//q6
function add(a,b=10){
    return a+b;
}
console.log(add(2,3));
console.log(add(5));

//q7
try{
    console.log(i);
    
}catch(error){
    console.log(error.name + ":" +error.message);
    
}

//q8 and q9
function validateAge(age){
    try{
        if(age<18){
            console.log("Age is less than 18");
            
        }else{
            console.log("Valid age");
            
        }
    }catch(error){
    console.log(error.name + ":" +error.message);
    
}
}
validateAge(30)
validateAge(10)

//q10
function add1(a,b) {
    try{
        if(b<=0){
            throw new Error("b cannot be 0 or less than 0")
        }
        else{
            console.log(a+b);
            
        }

    }catch(error){
    console.log(error.message);
    
}
}
add1(2,0)
add1(3,5)

//q11
class InvalidSalaryError extends Error{
    constructor(msg){
        super(msg)
        this.name = "InvalidSalaryError"
    }
}
function EmpSal(sal){
    try{
        if (sal<=0){
            throw new InvalidSalaryError("salary cannot be 0 or less than 0");
        }else{
            console.log(sal + "Rs is deposited into employee account");
            
        }
    }catch (error){
        console.log(error.name + ":" +error.message);
        
    }
}
EmpSal(-23)
EmpSal(2000)

//q12
class InvalidUsernameError extends Error{
    constructor(msg){
        super(msg)
        this.name = "InvalidUsernameError"
    }
}
function Username(uname){
    try{
        if (uname == null){
            throw new InvalidUsernameError("Username can not be null");
        }else{
            console.log("welcome " + uname);
            
        }
    }catch (error){
        console.log(error.name + ":" +error.message);
        
    }
}
Username()
Username("tom")

//q13
function first1() {
    const a =10;
    console.log(a);
    a = 15;
    
    
}

function second1() {
    first1()
}

function third() {
    try{
        second1()
    }catch (error) {
        console.log(error.name + ":" +error.message);
        
    }
    
}
third();

//q14
function validateAges(UserAge) {
    try{
        if(UserAge<18){

        throw new Error("You cannot Register!")
    }else{
        console.log("Allow to register");
        
    }
}   catch (error){
        console.log(error.message);
        
    }
}
function registerUser(UserAge) {
    validateAges(UserAge)
}
registerUser(20)
registerUser(10)

//q15
console.log(add2(2,3));
console.log(subtract(5,4));
console.log(multiply(2,3));
console.log(divide(10,5));

//q16

//q17 and q18
function Task(process) {
    return new Promise((resolve,reject)=>
    {
        if(process){
            resolve("Task Completed")
        }
        else{
            reject("Task Failed")
        }
    }
    )
}
Task(true).then((result)=>{
    console.log(result); 
}
)
.catch((err)=>{
    console.log(err);
}
)
Task(false).then((result)=>{
    console.log(result); 
}
)
.catch((err)=>{
    console.log(err);
}
)

//q19
function Task1(process) {
    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            if(process){
            resolve("Task Completed!")
        }
        else{
            reject("Task Failed!")
        }
        }, 2000);
    }
    )
}
async function test() {
    try {
        const displaying = await Task1(false)
        console.log(displaying);
    } catch (error) {
        console.log(error);
    }
}
test()

//q20
function userData() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((Response) =>{
        return Response.json()
    }
    )
    .then((data) =>{
        console.log(data);
    }
    )
    .catch((error)=>{
        console.log(error.name + " : " + error.message);
    }
    )
}
userData()







