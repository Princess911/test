const oStudent = {
    "student Name": "xiaojichao",
    age: 49,
    org: ["lovo", "smart"],
    len: null,
    len1: undefined,
    course: { name: "java", day: 1 },
    learn: function () {
      console.log("hello, student");
    },
    learn2() {
      console.log("hello2");
    },
  };

 let a =  JSON.stringify(oStudent,null,2);
 console.log(a);


 const b = `{"student Name":"xiaojichao","age":49,"org":["lovo","smart"],"len":null,"course":{"name":"java","day":1}}`;
 const oStudent1 = JSON.parse(b);
 //console.log(oStudent1);

 for (let p in oStudent1) {
     console.log(p);
 }