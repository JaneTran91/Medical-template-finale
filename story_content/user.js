function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6OtTJqGBd9p":
        Script1();
        break;
      case "5hAHGGrIzxw":
        Script2();
        break;
      case "6FXio3iH2Qi":
        Script3();
        break;
      case "5y13sKWNw3h":
        Script4();
        break;
      case "6AABQti0E5M":
        Script5();
        break;
      case "67wmMuHRqf4":
        Script6();
        break;
      case "5zVCMRTfKIS":
        Script7();
        break;
      case "6SuKJKLfIzE":
        Script8();
        break;
      case "64SYJK9rjq3":
        Script9();
        break;
      case "6qBjHiT9hcu":
        Script10();
        break;
      case "6TH2muwh1Tx":
        Script11();
        break;
      case "6FfU6qtC6Xi":
        Script12();
        break;
      case "6GXQjVgA5yb":
        Script13();
        break;
      case "5g9p8WKzfqv":
        Script14();
        break;
      case "6a9czuTWPQW":
        Script15();
        break;
      case "6Ttj3uorxVL":
        Script16();
        break;
      case "5qnS1sCh4tA":
        Script17();
        break;
      case "6NwfrZNDHNb":
        Script18();
        break;
      case "5f4KshEcD9T":
        Script19();
        break;
      case "6pfBLCZBlYF":
        Script20();
        break;
      case "6WyJvIke0dF":
        Script21();
        break;
      case "6PRApyM3bKc":
        Script22();
        break;
      case "6nwGNZZ3pvS":
        Script23();
        break;
      case "62NCiFjXgjc":
        Script24();
        break;
      case "6O5Fu1jN7nP":
        Script25();
        break;
      case "6BWLXg1BQyQ":
        Script26();
        break;
      case "63TakUdikYA":
        Script27();
        break;
      case "6cQB6e1vzvb":
        Script28();
        break;
      case "5jVvhazSEVE":
        Script29();
        break;
      case "5z6Tk4c8wJY":
        Script30();
        break;
      case "5k5kRe8FmR6":
        Script31();
        break;
      case "6SXTDVWSH6q":
        Script32();
        break;
      case "6LFWwuYVRd5":
        Script33();
        break;
      case "5yqU4C10qKl":
        Script34();
        break;
      case "6GSfV2T6m9A":
        Script35();
        break;
      case "6rUHHVWihXy":
        Script36();
        break;
      case "6fanIjJ246U":
        Script37();
        break;
      case "6AXOuQw1fDc":
        Script38();
        break;
      case "6qgLFhftk2q":
        Script39();
        break;
      case "5XtPID0OmGZ":
        Script40();
        break;
      case "6RxuDp7I994":
        Script41();
        break;
      case "5waU8dXLVgm":
        Script42();
        break;
      case "6CswkDgaeZQ":
        Script43();
        break;
      case "5kns0g6Hbrj":
        Script44();
        break;
      case "6joj1OhMSet":
        Script45();
        break;
      case "5q8hbSf6ALb":
        Script46();
        break;
      case "5e2YklmDjue":
        Script47();
        break;
      case "61t4RNv4lJE":
        Script48();
        break;
      case "6og2ToT7uZt":
        Script49();
        break;
      case "69asYdZOaa4":
        Script50();
        break;
      case "5h7UJgBbWVY":
        Script51();
        break;
      case "64vrWoQ4duK":
        Script52();
        break;
      case "5nRqq709fsC":
        Script53();
        break;
      case "68A8j9kExqP":
        Script54();
        break;
      case "64NpJo4AKLr":
        Script55();
        break;
      case "5h1dx25y7wv":
        Script56();
        break;
      case "6mYoVB2p9jA":
        Script57();
        break;
      case "5eQrr9JHxiZ":
        Script58();
        break;
      case "5Uqzu8st4Cv":
        Script59();
        break;
      case "6roJsCYe87O":
        Script60();
        break;
      case "6TYqnsa9sDW":
        Script61();
        break;
      case "6Req6pZHjZu":
        Script62();
        break;
      case "5fn1YURM9vj":
        Script63();
        break;
      case "5lku2e4rDm5":
        Script64();
        break;
      case "5ztcXgc6BYJ":
        Script65();
        break;
      case "5WMEJhw71gG":
        Script66();
        break;
      case "5XBKsFOqPLD":
        Script67();
        break;
      case "5ZQ7cYWuB4Q":
        Script68();
        break;
      case "6KGrPicypGq":
        Script69();
        break;
      case "6PII2gIYfcE":
        Script70();
        break;
  }
}

function Script1()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script2()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script3()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script4()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script5()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script6()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script7()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script8()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script9()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script10()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script11()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script12()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script13()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script14()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script15()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script16()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script17()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script18()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script19()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script20()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script21()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script22()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script23()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script24()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script25()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script26()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script27()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script28()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script29()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script30()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script31()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script32()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script33()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script34()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script35()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script36()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script37()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script38()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script39()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script40()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script41()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script42()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script43()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script44()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script45()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script46()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script47()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script48()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script49()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script50()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script51()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script52()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script53()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script54()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script55()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script56()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script57()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script58()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script59()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script60()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script61()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script62()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script63()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script64()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script65()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script66()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script67()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script68()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script69()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script70()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

