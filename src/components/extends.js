// 父类
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log('hello world');
    }
}
// 子类
class Studies extends Person{
}

//子类
class Teachers extends  Person{
    constructor(name,age,subject){
        super(name,age);
        this.subject = subject;
    }
}

const s1 = new Studies("tom", 13);
console.log(s1);
s1.sayHi();

const t1 = new Teachers("jack", 34, "english");
console.log(t1);
t1.sayHi();