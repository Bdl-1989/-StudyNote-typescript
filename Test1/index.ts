

function getdata()
{
    
}

var str:string='hello OOO!'

var arr:Array<number>=[1,22,33];
var arr2:number[]=[11,3,44];
//元组 tuple 属于数组
let arr3:[number, string]=[112,'23'];

//enum

enum flag{success=1, failure=2,'fine'};
let s:flag=flag.fine;
//any
var a:any;
a=1;
a='23';

//undefined

var num:number|undefined //可能是数字，可能undefined
console.log(num)


console.log(s)


//void 类型

function abc():void{

}



///function

//like above;
//匿名函数
var abcd=function():void{

}

// 传参
function aaa(name:string,age:number):string{
    return `${name}--${age}`
}

//可选参数&必须配置到最后
function aaa2(name:string,age?:number):string{
    return `${name}--${age}`
}

alert(aaa2('233'))
//默认参数
function aaa3(name:string,age:number=30):string{
    return `${name}--${age}`
}
alert(aaa3('233'))

//剩余参数
function sum(...result:number[]):number{
    var sum=0;
    for(var i=0;i<result.length;i++)
    {
        sum+=result[i];
    }
    return sum;
}
alert(sum(1,2,3,4))

///函数重载
function getInfo(name:string):string
function getInfo(sex:number):string
function getInfo(str:any):any{
    if(typeof str=='string')
    {

    }
    else
    {

    }
    return 1
}

function getInfo2(name:string):string
function getInfo2(name:string,age:number):string
function getInfo2(name:any,age?:any):any{
    if(age)
    {

    }
}

//箭头函数 的this指向上下文？？？


//---------------------------------------------------------------------------------------------------------------

//class

class person{
name:string;
constructor(n:string){
this.name=n;
}
run():void{
    alert(this.name)
}

}
//inherit

class human extends person{
    constructor(name:string){
        super(name)
    }
}

// overwrite function

class human2 extends person{
    constructor(name:string){
        super(name)
    }
    run():void{

    }
}
//装饰符 public, protected, private

//static

class human3 extends person{
    constructor(name:string){
        super(name)
    }
    static run():void{
        alert('')
    }
}
//多态 ploynimal

class Animal{
    name:string
    constructor(name:string){
        this.name=name
    }
    eat():void{

    }
}

class dog extends Animal{
    constructor(name:string){
        super(name)
    }
    eat5():string{
        return 'd'
    }
}

//abstract function and class

abstract class Anminal2{
    name:string
    constructor(name:string)
    {
        this.name=name
    }
    abstract  eat():any 
    
} 

// interface

// property interface
interface FullName{
    firstname:string;
    secondname:string;
}

function property(awsl:FullName):void {
    
}

var obj={firstname:'2',secondname:'23'}
property(obj)

// 可选属性 interface
interface FullName2{
    firstname:string;
    secondname?:string;
}
//函数类型接口: 对方法的传入值以及返回值约束

interface encrypt{
    (key:string,value:string):string
}

var md5:encrypt=function name(key:string,value:string):string {
    return key+value
}

//可索引接口 array

interface ArrDefine{
    [index:string]:string
}

var arraa:ArrDefine={name:'23',fiek:'12'}

//类接口 和抽象类相似

interface Animm{
    name:string
    eat(str:string):void
}

class doog implements Animm{
    name:string
    constructor(name:string){
        this.name=name
    }
    eat():void{}

}

//接口扩展

interface Abb{
    eat():void
}

interface peo extends Abb{
    work():any
}

class Web extends dog implements peo{
    //name:string
    constructor(name:string){
        //this.name=name
        super(name)
    }
    eat():void{}
    work():void{}
}

//泛型

function getdata2<T>(params:T):T {
    return params
}

class Myclass<T>{
    list:T[]=[]
    add(value:T):void{
        this.list.push(value)
    }
    minn():T{
        var minValue=this.list[0]
        for(var i=0; i<this.list.length;i++){
            if(minValue>this.list[i]){
                minValue=this.list[i]
            }

        }
        return minValue
    }
}

var n=new Myclass<string>()
n.add('1')
n.add('c')
alert(n.minn())

//泛型接口1

interface conFig{
    <T>(value:T):T
}
 var getvalue:conFig=function<T>(value:T):T {
     return value
     
 }



getvalue<string>('2323')

//2
interface conFig2<T>{
    (value:T):T
}

function getvalue2<T>(value:T):T {
    return value
    
}
 
var gettt:conFig2<string>=getvalue2

//泛型类

class user{
    username:string | undefined
    password:string | undefined
}

class ArticleData{
    title:string | undefined
    status: string|undefined
    descrip: string | undefined
}

class mySQLDB<T>{
    add(user:T):boolean{
        return true
    }
}
var u=new user()
u.username='zhangsan'
u.password='122'

var DB=new mySQLDB<user>()
DB.add(u)

//---------------------------------------------------------------------------------------------------------------
// sql, mongoDB, mysql... add, update, delete, get 方法

interface IDB<T>{
    add(info:T):boolean
    update(info:T,Id:number):boolean
    delete(Id:number):boolean
    get(Id:number):any[]
}

class MySqlDBn<T> implements IDB<T> {
    add(info: T): boolean {
        throw new Error("Method not implemented.");
    }    
    update(info: T, Id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(Id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(Id: number): any[] {
        throw new Error("Method not implemented.");
    }


}

class MsSql<T> implements IDB<T>
{
    add(info: T): boolean {
        throw new Error("Method not implemented.");
    }
    update(info: T, Id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(Id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(Id: number): any[] {
        throw new Error("Method not implemented.");
    }
 
}

class MongoDB<T> implements IDB<T>{
    add(info: T): boolean {
        throw new Error("Method not implemented.");
    }
    update(info: T, Id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(Id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(Id: number): any[] {
        throw new Error("Method not implemented.");
    }
 
}

class usern{
    username:string | undefined
    password:string | undefined
}
var u=new usern()
u.username='zhangsan'
u.password='122'

//module

import {getData as getting} from './modules/db'


//namespace

//like java/C#  and need export for the class
namespace A{
    interface IDB<T>{
        add(info:T):boolean
        update(info:T,Id:number):boolean
        delete(Id:number):boolean
        get(Id:number):any[]
    }
    
    export class MySqlDBn<T> implements IDB<T> {
        add(info: T): boolean {
            throw new Error("Method not implemented.");
        }    
        update(info: T, Id: number): boolean {
            throw new Error("Method not implemented.");
        }
        delete(Id: number): boolean {
            throw new Error("Method not implemented.");
        }
        get(Id: number): any[] {
            throw new Error("Method not implemented.");
        }
    
    
    }
}


//decorator -- class, function, property, parameter
//无参decorator
function LogClass(params:any) {
    console.log(params)
    params.prototype.apiUrl='22323'  //动态扩展属性
    params.prototype.run=function() {
        
    }
}
@LogClass   
class HttpClient {
    constructor() {
        
    }
    getData():void{}
}
var htt:any=new HttpClient()

//decorator factory
function LogClass2(params:any) {
    return function (target:any) {
        console.log(target)
        console.log(params)
        target.prototype.apiUrl='22323'  //动态扩展属性
        target.prototype.run=function() {
            
        }
    }
 
 
}
@LogClass2('awsl')   //传入到params，而target为下面这个类
class HttpClient2 {
    constructor() {
        
    }
    getData():void{}
}
var htt:any=new HttpClient()

//重载构造函数

function LogClass3(params:any) {
    console.log(params)
    params.prototype.apiUrl='22323'  //动态扩展属性
    params.prototype.run=function() {
        return class extends params{
            name:any='i am the overloaded one.'
            getData():void{
                console.log(this.name+'overload the function') //注意this的区别，构造函数里面不能有this
            }
        }
        
    }
}
@LogClass   
class HttpClient3 {
    name:string
    constructor() {
        this.name='i am the original one'
    }
    getData():void{
        console.log(this.name)
    }
}
var htt:any=new HttpClient()

//property decorator

function LogClass4(params:any) {
    return function (target:any) {
        console.log(target)
        console.log(params)
  
    }
}
function logProperty(params:any) {
    return function(target:any,attr:any) {
        console.log(target)
        console.log(attr)
        target[attr]=params   //how about for two attributes???
    }
}

@LogClass2('awsl')   //传入到params，而target为下面这个类
class HttpClient4 {
    @logProperty('awsl for property')
    public name:string|undefined
    constructor() {
        
    }
    getData():void{}
}
var htt:any=new HttpClient()

//function decorator ???没有听懂，，回调函数？？？

function logMethod(params:any) {
    return function(target:any,methodname:any,desc:any){
        console.log(target)
        console.log(methodname)
        console.log(desc)
        target.apiurl='***'
        target.run=function () {
            console.log('run')
        }
    }
}
 
class HttpClient5 {
 
    public name:string|undefined
    constructor() {
        
    }
    @logMethod('123')
    getData():void{}
}
var htt:any=new HttpClient()




/*
VSCODE deploy the transfer to js automatically
Step1 tsc --init, create tsconfig.json and modify "outdir: ./js"

Step2 terminal-run task-watch, 

Step3 create index.html in the main path, press html:5, 
*/

///  不知道c＃有没有可选参数的功能

