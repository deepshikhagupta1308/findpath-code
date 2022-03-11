/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/


/*
Algorithm
step1: Start
step2: Take two parameters
step3: Split the key string into an array
step4: Iterate that splitted array
step5: Check if the following index key is available in the obj
step5.1:If the key doesn't exist, return undefined
step6: Update the obj with found result i.e. obj = obj[key]
step7: And continue with step 5
*/


var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};



const findPath = (object, path) => {
  
    let split = path.split(".");
    
    for(var i=0;i<split.length;i++)
    {
        if(object===undefined || object===null)
        {
            return undefined;
        }
        else
        {
            object=object[split[i]];
        }
    }
    return object;
};

console.log(findPath(obj, 'a.b.c')); // 12
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.c.d.e')); // undefined
console.log(findPath(obj, 'a.b.j')); //false
console.log(findPath(obj, 'a.b.j.k')); //undefined
console.log(findPath(obj, 'a.k')); //null