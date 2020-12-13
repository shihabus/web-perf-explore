// XMLHttpRequest

// 1. set up request
let xhr = new XMLHttpRequest();
console.log("status", xhr.status);
console.log("readyState", xhr.readyState);

// 2. response handler
xhr.onreadystatechange=function(){
    if(xhr.readyState==4&&xhr.status==200){
        let data=JSON.parse(xhr.responseText)
        console.log(data)
        document.write(JSON.stringify(data))
        console.log(xhr,xhr.readyState)
    }
}

// 3. open c/n and make request
xhr.open('GET','https://jsonplaceholder.typicode.com/posts')
xhr.send()
