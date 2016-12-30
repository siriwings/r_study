/**
 * Created by siri on 2016-12-29.
 */
function whatsThis() {
    return console.log(this.toString());
}

var unikys={
    what : whatsThis,
    toString : function () {
        return "[object unikys]";
    }
};

whatsThis();
unikys.what();
whatsThis.call();
whatsThis.apply();
whatsThis.apply(unikys);
unikys.what.call();
unikys.what.call(unikys);

var newWhat = unikys.what;
newWhat();


/**
 * apply()메서드를 이용한 명시적인 this 바인딩.
 */

//생성자 함수
function Person(name,age,gender) {
    this.name= name;
    this.age = age;
    this.gender =gender;
}

//foo 빈 객체 생성
var foo={};

//apply() 메서드 호출
Person.apply(foo,['jinsil',26,'famale']);
console.dir(foo);

