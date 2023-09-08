const themes = ["dark", "lightmood", "blue"]
let currentThemeIndex = 0
const app = document.querySelector(".app");
const light = document.getElementById("light")
const blue = document.querySelector(".blue")

function toggleOn(){
  currentThemeIndex=(currentThemeIndex + 1) % themes.length;
  const currentTheme = themes[currentThemeIndex];
  light.classList.toggle("light");
  
  app.classList.toggle("lightmood")
  app.className = `app ${currentTheme}`;

  if(currentThemeIndex === 2){
    blue.classList.toggle("dark")
  }
}
 const result = document.getElementById("inputtext");
 const calculate = (number) => {
  result.value+=number;
 }
 
const Result = () => {
  try{
    result.value=eval(result.value)
  }
  catch(err){
    alert("Enter a valid number")
  }
}
function Clear(){
  result.value = ""
}
function del(){
  result.value=result.value.slice(0, -1)
}
