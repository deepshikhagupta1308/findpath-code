/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
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

//Algorithm
//step1: Start
//step2: Take two params
//step3: Using split() method separate dots as string
//step4: Iterate the loop from 0 to split length
//step5: Check , if falsy value is present then it returns undefined
//step6: Otherwise return the value.
//step7: Stop


const findPath = (object, path) => {
    var split = path.split(".");
    
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