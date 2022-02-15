var list;
list = document.querySelector('UL');
list.addEventListener('click', function(ev) 
{
  if (ev.target.tagName==='LI') 
  {
    ev.target.classList.toggle('checked');
  }
}, false);


var NList;
NList=document.getElementsByTagName("LI");
for (var i=0; i<NList.length; i++) 
{
  var span;
  span=document.createElement("SPANS");
  var txt;
  txt=document.createTextNode("\u00D7");
  span.className="close";
  span.appendChild(txt);
  NList[i].appendChild(span);
}

function newElement() 
{
  var li = document.createElement("LI");
  var inputValue = document.getElementById("Input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if(inputValue==='') 
  {} 
  else 
  {
    document.getElementById("UL").appendChild(li);
  }

  document.getElementById("Input").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i=0;i< close.length;i++) 
  {
    close[i].onclick = function() 
    {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

var close;
close=document.getElementsByClassName("close");
for(var i=0;i<close.length;i++) 
{
    close[i].onclick=function() 
    {
        var div=this.parentElement;
        div.style.display="none";
    }
}
