# Project 5 Solution
```

```


# Project 6 Solution
```
const randomColor = function(){
  let hex='01234567ABCDEF'
  let color='#'
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color;
}
let interval
const startchangebgcolor = function(){
   if(!interval)
    interval=setInterval(changebgcolor,1000)
  function changebgcolor() {
    
  document.body.style.backgroundColor = randomColor()
  }
}

document.querySelector('#start').addEventListener('click',startchangebgcolor)

const stopchangebgcolor = function(){
 clearInterval(interval)
 interval=null
}

document.querySelector('#stop').addEventListener('click', stopchangebgcolor)

```


