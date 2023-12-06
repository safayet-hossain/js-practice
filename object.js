    
    var student = {                 // object name
        firstName:"SAFAYET",           // list of properties and values
        lastName:"HOSSAIN",
        college:"AIUB",
        batch:18,
        age:18,
        height:170,
        weight:80,
        result:{
            bangla:80,
            math :78,
            test: [
                {
                    test: 12
                },
                {
                    test: 14
                },

                {
                    test: 999
                }
            ]
        },

        fullName : function() {   
            return this.firstName + " " + this.lastName;
        },

        university :function()
        {
            return this.college + " " + this.batch;
        }
    }; 

//    
   
   
   
   
   
    var abc = "abcdefghijklmnopqrstuvwxyz";
    z=abc.toUpperCase(); 
    m=abc.split("");
    n=abc.lastIndexOf("z");
    q=abc.indexOf("b");  
   
    var d = new Date();
    a = d.getDay();
    // var b=getDay();
    
    var e = new Date();
    e.setHours(e.getHours() + 7);
    // console.log(student.result.test[2].test)
    // console.log(student.fullName())
    // console.log(student.university())
    // console.log("length",abc.length)
    // console.log("age",student.age)
    // console.log(d)
    // console.log(getDay)
    // console.log("abc")
    // console.log(d)
     console.log(d.getMonth()+1)

// 1 -> integer  
// '1' -> string 
// [1] -> array  
// {1} -> object   
var x="hello"
p=x.concat(" ","java")

// console.log(p)
// console.log(m)
// console.log(n)
// console.log(q)

// w=abc.charAt(1); 
// // console.log(w)

// r=abc[2];   
// console.log(r)
// g=abc.charCodeAt(1);   
// console.log(g)

// h=abc.toString(2);   
// console.log(h)


