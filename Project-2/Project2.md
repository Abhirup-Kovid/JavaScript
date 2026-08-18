# Project 5 Solution
```
console.log('Project 5');

const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
  insert.innerHTML=(`
  <div>
  <table>
  <tr>
  <th>Key</th>
  <th>KeyCode</th>
  <th>Code</th>
  </tr>
  <tr>
  <td>${e.key}</td>
  <td>${e.keyCode}</td>
  <td>${e.code}</td>
  </tr>
  </table>
  </div>
  `)
})
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


