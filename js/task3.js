// calling in array context 

let arr = ["a", "b"];
arr.push(function() {
    console.log(this);
    // alert(this)
})
arr[2]();