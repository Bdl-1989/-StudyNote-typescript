
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
 

export {MsSql,MySqlDBn,MongoDB}