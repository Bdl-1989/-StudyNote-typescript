"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function getdata() {
}
var str = 'hello OOO!';
var arr = [1, 22, 33];
var arr2 = [11, 3, 44];
//元组 tuple 属于数组
var arr3 = [112, '23'];
//enum
var flag;
(function (flag) {
    flag[flag["success"] = 1] = "success";
    flag[flag["failure"] = 2] = "failure";
    flag[flag["fine"] = 3] = "fine";
})(flag || (flag = {}));
;
var s = flag.fine;
//any
var a;
a = 1;
a = '23';
//undefined
var num; //可能是数字，可能undefined
console.log(num);
console.log(s);
//void 类型
function abc() {
}
///function
//like above;
//匿名函数
var abcd = function () {
};
// 传参
function aaa(name, age) {
    return name + "--" + age;
}
//可选参数&必须配置到最后
function aaa2(name, age) {
    return name + "--" + age;
}
alert(aaa2('233'));
//默认参数
function aaa3(name, age) {
    if (age === void 0) { age = 30; }
    return name + "--" + age;
}
alert(aaa3('233'));
//剩余参数
function sum() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
alert(sum(1, 2, 3, 4));
function getInfo(str) {
    if (typeof str == 'string') {
    }
    else {
    }
    return 1;
}
function getInfo2(name, age) {
    if (age) {
    }
}
//箭头函数 的this指向上下文？？？
//---------------------------------------------------------------------------------------------------------------
//class
var person = /** @class */ (function () {
    function person(n) {
        this.name = n;
    }
    person.prototype.run = function () {
        alert(this.name);
    };
    return person;
}());
//inherit
var human = /** @class */ (function (_super) {
    __extends(human, _super);
    function human(name) {
        return _super.call(this, name) || this;
    }
    return human;
}(person));
// overwrite function
var human2 = /** @class */ (function (_super) {
    __extends(human2, _super);
    function human2(name) {
        return _super.call(this, name) || this;
    }
    human2.prototype.run = function () {
    };
    return human2;
}(person));
//装饰符 public, protected, private
//static
var human3 = /** @class */ (function (_super) {
    __extends(human3, _super);
    function human3(name) {
        return _super.call(this, name) || this;
    }
    human3.run = function () {
        alert('');
    };
    return human3;
}(person));
//多态 ploynimal
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
    };
    return Animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog(name) {
        return _super.call(this, name) || this;
    }
    dog.prototype.eat5 = function () {
        return 'd';
    };
    return dog;
}(Animal));
//abstract function and class
var Anminal2 = /** @class */ (function () {
    function Anminal2(name) {
        this.name = name;
    }
    return Anminal2;
}());
function property(awsl) {
}
var obj = { firstname: '2', secondname: '23' };
property(obj);
var md5 = function name(key, value) {
    return key + value;
};
var arraa = { name: '23', fiek: '12' };
var doog = /** @class */ (function () {
    function doog(name) {
        this.name = name;
    }
    doog.prototype.eat = function () { };
    return doog;
}());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    //name:string
    function Web(name) {
        //this.name=name
        return _super.call(this, name) || this;
    }
    Web.prototype.eat = function () { };
    Web.prototype.work = function () { };
    return Web;
}(dog));
//泛型
function getdata2(params) {
    return params;
}
var Myclass = /** @class */ (function () {
    function Myclass() {
        this.list = [];
    }
    Myclass.prototype.add = function (value) {
        this.list.push(value);
    };
    Myclass.prototype.minn = function () {
        var minValue = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minValue > this.list[i]) {
                minValue = this.list[i];
            }
        }
        return minValue;
    };
    return Myclass;
}());
var n = new Myclass();
n.add('1');
n.add('c');
alert(n.minn());
var getvalue = function (value) {
    return value;
};
getvalue('2323');
function getvalue2(value) {
    return value;
}
var gettt = getvalue2;
//泛型类
var user = /** @class */ (function () {
    function user() {
    }
    return user;
}());
var ArticleData = /** @class */ (function () {
    function ArticleData() {
    }
    return ArticleData;
}());
var mySQLDB = /** @class */ (function () {
    function mySQLDB() {
    }
    mySQLDB.prototype.add = function (user) {
        return true;
    };
    return mySQLDB;
}());
var u = new user();
u.username = 'zhangsan';
u.password = '122';
var DB = new mySQLDB();
DB.add(u);
var MySqlDBn = /** @class */ (function () {
    function MySqlDBn() {
    }
    MySqlDBn.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MySqlDBn.prototype.update = function (info, Id) {
        throw new Error("Method not implemented.");
    };
    MySqlDBn.prototype.delete = function (Id) {
        throw new Error("Method not implemented.");
    };
    MySqlDBn.prototype.get = function (Id) {
        throw new Error("Method not implemented.");
    };
    return MySqlDBn;
}());
var MsSql = /** @class */ (function () {
    function MsSql() {
    }
    MsSql.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MsSql.prototype.update = function (info, Id) {
        throw new Error("Method not implemented.");
    };
    MsSql.prototype.delete = function (Id) {
        throw new Error("Method not implemented.");
    };
    MsSql.prototype.get = function (Id) {
        throw new Error("Method not implemented.");
    };
    return MsSql;
}());
var MongoDB = /** @class */ (function () {
    function MongoDB() {
    }
    MongoDB.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MongoDB.prototype.update = function (info, Id) {
        throw new Error("Method not implemented.");
    };
    MongoDB.prototype.delete = function (Id) {
        throw new Error("Method not implemented.");
    };
    MongoDB.prototype.get = function (Id) {
        throw new Error("Method not implemented.");
    };
    return MongoDB;
}());
var usern = /** @class */ (function () {
    function usern() {
    }
    return usern;
}());
var u = new usern();
u.username = 'zhangsan';
u.password = '122';
//namespace
//like java/C#  and need export for the class
var A;
(function (A) {
    var MySqlDBn = /** @class */ (function () {
        function MySqlDBn() {
        }
        MySqlDBn.prototype.add = function (info) {
            throw new Error("Method not implemented.");
        };
        MySqlDBn.prototype.update = function (info, Id) {
            throw new Error("Method not implemented.");
        };
        MySqlDBn.prototype.delete = function (Id) {
            throw new Error("Method not implemented.");
        };
        MySqlDBn.prototype.get = function (Id) {
            throw new Error("Method not implemented.");
        };
        return MySqlDBn;
    }());
    A.MySqlDBn = MySqlDBn;
})(A || (A = {}));
//decorator -- class, function, property, parameter
//无参decorator
function LogClass(params) {
    console.log(params);
    params.prototype.apiUrl = '22323'; //动态扩展属性
    params.prototype.run = function () {
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () { };
    HttpClient = __decorate([
        LogClass
    ], HttpClient);
    return HttpClient;
}());
var htt = new HttpClient();
//decorator factory
function LogClass2(params) {
    return function (target) {
        console.log(target);
        console.log(params);
        target.prototype.apiUrl = '22323'; //动态扩展属性
        target.prototype.run = function () {
        };
    };
}
var HttpClient2 = /** @class */ (function () {
    function HttpClient2() {
    }
    HttpClient2.prototype.getData = function () { };
    HttpClient2 = __decorate([
        LogClass2('awsl') //传入到params，而target为下面这个类
    ], HttpClient2);
    return HttpClient2;
}());
var htt = new HttpClient();
//重载构造函数
function LogClass3(params) {
    console.log(params);
    params.prototype.apiUrl = '22323'; //动态扩展属性
    params.prototype.run = function () {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.name = 'i am the overloaded one.';
                return _this;
            }
            class_1.prototype.getData = function () {
                console.log(this.name + 'overload the function'); //注意this的区别，构造函数里面不能有this
            };
            return class_1;
        }(params));
    };
}
var HttpClient3 = /** @class */ (function () {
    function HttpClient3() {
        this.name = 'i am the original one';
    }
    HttpClient3.prototype.getData = function () {
        console.log(this.name);
    };
    HttpClient3 = __decorate([
        LogClass
    ], HttpClient3);
    return HttpClient3;
}());
var htt = new HttpClient();
//property decorator
function LogClass4(params) {
    return function (target) {
        console.log(target);
        console.log(params);
    };
}
function logProperty(params) {
    return function (target, attr) {
        console.log(target);
        console.log(attr);
        target[attr] = params; //how about for two attributes???
    };
}
var HttpClient4 = /** @class */ (function () {
    function HttpClient4() {
    }
    HttpClient4.prototype.getData = function () { };
    __decorate([
        logProperty('awsl for property')
    ], HttpClient4.prototype, "name", void 0);
    HttpClient4 = __decorate([
        LogClass2('awsl') //传入到params，而target为下面这个类
    ], HttpClient4);
    return HttpClient4;
}());
var htt = new HttpClient();
//function decorator ???没有听懂，，回调函数？？？
function logMethod(params) {
    return function (target, methodname, desc) {
        console.log(target);
        console.log(methodname);
        console.log(desc);
        target.apiurl = '***';
        target.run = function () {
            console.log('run');
        };
    };
}
var HttpClient5 = /** @class */ (function () {
    function HttpClient5() {
    }
    HttpClient5.prototype.getData = function () { };
    __decorate([
        logMethod('123')
    ], HttpClient5.prototype, "getData", null);
    return HttpClient5;
}());
var htt = new HttpClient();
/*
VSCODE deploy the transfer to js automatically
Step1 tsc --init, create tsconfig.json and modify "outdir: ./js"

Step2 terminal-run task-watch,

Step3 create index.html in the main path, press html:5,
*/
///  不知道c＃有没有可选参数的功能
