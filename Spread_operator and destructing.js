const fruits = [ "Banana", "Orange", "Lemon", "Apple", "Mango"]
const new_array = [...fruits] // Copy of single layer array
const obj = {
    a: 5,
    b:6,
    c: 7
 }
const new_obj = {...obj} // copy of single layer object

const obj2 = {
    a: 5,
    b:6,
    c: 7,
    d:{
        t:1
    },
    e:{
        m:2
    },
    f:{
        g:{
            k:10
        }
    }
}
const {c} = obj2; //first layer destructing
const {d:{t}} = obj2;  // second layer destructing
const {e:{m} = {}} = obj2; // if data unavailable then it will help to prvent crashing the app

const {f:{g:{k}} = {}} = obj2
console.log(k)