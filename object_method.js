const obj = {
    a: 5,
    b:6,
    c: 7
 }
const new_key = 'd'
 for (i in obj){
    // console.log(obj[i])
 }
 const keys = Object.keys(obj)
 const values = Object.values(obj)
 const entries = Object.entries(obj)

 obj[new_key] = 10
 console.log(obj)
