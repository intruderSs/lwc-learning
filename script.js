/*let arr = [2,9,8,4,6,3,5,1];

let newArr = arr.map(function(currentItem, index, array) {
    console.log(`CurrentItem is ${currentItem} and index is ${index}`);
    return currentItem*2;
})

console.log(arr);
console.log(newArr);

console.log(arr.filter(function(currentItem, index, array) {
       return currentItem > 2;
}))

console.log(arr.every(function(currentItem) {
    return currentItem >=2;
}))

console.log(arr.some(function(currentItem) {
    return currentItem >=2;
}))

console.log(arr.sort());

console.log(arr.sort(function(a,b) {
    return b-a;
}))

console.log(arr.reduce(function(total, currentItem) {
    return total+currentItem;
}))

arr.forEach(function(currentItem) {
    console.log(currentItem);
})


function isSuccess (data) {
    return new Promise(function(resolve, reject) {
        if (data === 'success') {
            return resolve("Executed Successfully");
        } else {
            return reject("Failed to Execute");
        }
    })
}

isSuccess("Success").then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
})*/




function clickMe() {
    console.log("I am clicked");
    let element = document.querySelector('div');
    console.log(element);
    element.style.color = 'blue';
    element.innerHTML = Math.random() * 100;
}

let btn = document.querySelector('button');
btn.addEventListener('mousemove ', clickMe);













































