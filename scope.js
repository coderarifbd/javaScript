let bonus = 20 //global scope

function sum(first, second){
    let result = first + second
    // console.log(result) //local scope
    if(result > 9){
        const mood = "happy"
        console.log(mood);
    }
    return result
}

const output = sum(3, 7)
console.log(output);