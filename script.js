//select savebutton,input-course,input-gender,input-age,input-name,input-email

var save=document.getElementById("savebutton")
var inputname=document.getElementById("input-name")
var inputage=document.getElementById("input-age")
var inputgender=document.querySelectorAll(".input-gender")
var inputcourse=document.getElementById("input-course")
var inputemail=document.getElementById("input-email")
var tablelist=document.getElementById("t3")


// popup box and over screen selecting

var popup=document.getElementById("popupbox")
var overscreen=document.getElementById("overscreen")

//save the details

save.addEventListener("click",function(event){
  event.preventDefault()
  popup.style.display="block"
  overscreen.style.display="block"
  


  for(var i=0;i<inputgender.length;i++)
  {
    if(inputgender[i].checked)
    {
      var gender=inputgender[i].value
      break
    }
  }
  console.log(gender)
    var row=document.createElement("tr")
   
row.innerHTML=`<td>${inputname.value}</td>
<td>${inputage.value}</td>
<td>${gender}</td>
<td>${inputcourse.value}</td>
<td>${inputemail.value}</td>
<td><button class="deletebutton" id="delete-row" onclick="deleterow(event)">Delete</button></td>`

tablelist.append(row)


})




//delete row
function deleterow(event)
{
  event.preventDefault()
  event.target.parentElement.parentElement.remove()

}




//close popup

var closepopup=document.getElementById("closepopup")
closepopup.addEventListener("click",function(){
    
  popup.style.display="none"
  overscreen.style.display="none"
})



