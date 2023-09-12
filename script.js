
let sum = 0;
let sum5 = 0;
let a = [2, 5, 1, 10, 7, 2, 4, 9, 3, 6];
for (var i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
        sum += a[i];
    }
    if (i < 5) {
        sum5 += a[i];
    }
}
console.log("the sum of even number is " + sum);
console.log("the sum of first 5 number is " + sum5);
document.writeln("the sum of even number is " + sum);
document.writeln("the sum of first 5 number is " + sum5);
let user = {
    name: "abdullah",
    phone_number: "0985390098",
    age: 26,
    email: "Engabdullahaljamal@gmail.com"
}
console.log(user);
document.writeln(user);


console.log(user.name);
console.log(user["phone_number"]);
console.log(user.age);
console.log(user.email);
document.writeln(user.name)
document.writeln(user["phone_number"])
document.writeln(user.age)
document.writeln(user.email)