//---------Chapter 1---------Task1===
//alert("Welcome to the Ghazi Stationary & Gift Center");

//---------Chapter 1---------Task2===
//alert("Error! Please Enter a valid Password.");

//---------Chapter 1---------Task3===
//alert("Welcome to JS Land...\nHappy Coding!");

//---------Chapter 1---------Task4===
//alert("Welcome to JS Land...");
//alert("Happy Coding!");

//---------Chapter 1---------Task5===
//console.log(alert("Hello...I can run JS through my web browser's console"))

//---------Chapter 1---------Task6===
//<script>alert("Welcome to Pakistan")</script>

//---------Chapter 1---------Task7===
// I have practiced placement of <script></script> element in following sections of project in exercise 6.
//a. Head
//b. Body (before your page’s HTML)
//c. Body (inside your page’s HTML)
//d. Body (after your page’s HTML)

//---------Chapter 2---------Task1===
//var username;

//---------Chapter 2---------Task2===
//var myname = "ZunairKhan";

//---------Chapter 2---------Task3===
//<script>var message= "Hello World"; alert(message)</script>

//---------Chapter 2---------Task4===
{/* <script>var sname="ZunairKhan";
     alert(sname);
     var studentAge="22 years Old";
     alert(studentAge);
     alert("Certified Mobile Application Development")</script> */}

//---------Chapter 2---------Task5===
//<script>alert("PIZZA\nPIZZ\nPIZ\nPI\nP")</script>

//---------Chapter 2---------Task6===
{/* <script>var email="khanzunair4471@gmail.com";
    alert("My email address is " + email )</script> */}

//---------Chapter 2---------Task7===
{/* <script>var jsBook="A smarter way to learn JavaScript";
    alert('I am trying to learn from the Book ' +jsBook)</script> */}

//---------Chapter 2---------Task8===
//<script>document.write('Yah ! I can write HTML content through Javascript ')</script>

//---------Chapter 2---------Task9===
{/* <script>var store="▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
    alert(store)</script> */}


//---------Chapter 3---------Task1===
{/* <script>var myAge="22";
    alert("I am " + myAge + " years old")</script> */}

//---------Chapter 3---------Task2===
//Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

//---------Chapter 3---------Task3===
{/* <script>var yearOfBirth="1997";
        document.write("My birth year is "+ yearOfBirth +"<br/> Data type of my declared variable is number")</script> */}


//---------Chapter 3---------Task4===
{/* <script>
    var nameOfVisitor=prompt("Enter Your Name:");   
    var titleOfProduct=prompt("Enter Product Name:");
    var quantity=prompt("Enter Quantity");
    document.write(nameOfVisitor+" ordered " +quantity +" "+ titleOfProduct + "(s) on XYZ Clothing Store");
</script> */}

//---------Chapter 4---------Task1===
{/* <script>
var [a,b,c]=[2,3,4];
alert('Value of a is '+a+ ' & Value if b is '+b+ ' & Value of c is ' +c);
</script> */}

//---------Chapter 4---------Task2===
//5 Illegal variables
{/* <script>
    var 1=Zuanir;
    var 1a=Zunair;
    var full name=ZunairKhan;
    var alert=Hello;
    var var=world;
</script> */}
// 5 Legal Variables
{/* <script>
    var b='4';
    var a1='Khan';
    var FullName='Zunair';
    var myvar='Hello';
    var $='world';
</script> */}


//---------Chapter 4---------Task3===
{/* <script>
    var a='letter';
    var number='numbers';
    var _='_';
    var $='$';
    var sensitive='sensitive';
    var keyword='keywords';
document.write('<h1>Rules for naming JS variables</h1> <br/><br/>');
document.write('Variable names can only contain '+a+ ", " +number+ ", "+$+" & " +_+ '. For example $my_1stVariable<br/>');
document.write('Variables must begin with a '+a+ ", " +$+ " or " +_+ '. For example $name, _name or name<br/>');
document.write('Variable names are case '+sensitive+"<br/>");
document.write('Variable names should not be JS '+keyword);  
    </script> */}


//---------Chapter 5---------Task1===
{/* <script>
        var one=3;
        var two=5;
        var sum= one + two;
        document.write('The sum of ' +one+ ' & ' +two+ ' is ' +sum);
    </script> */}

//---------Chapter 5---------Task2===
{/* <script>
        var a=16;
        var b=4;
        var sub= a - b;
        var mul=a * b;
        var div=a / b;
        var mod=a % b;
        document.write('The subtraction of ' +a+ ' & ' +b+ ' is ' +sub+'<br/>');
        document.write('The multiplication of ' +a+ ' & ' +b+ ' is ' +mul+'<br/>');
        document.write('The division of ' +a+ ' & ' +b+ ' is ' +div+'<br/>');
        document.write('The modulus of ' +a+ ' & ' +b+ ' is ' +mod);
    </script> */}


//---------Chapter 5---------Task3===
{/* <script>
        var myVariable;
        document.write('Value after variable declaration is '+myVariable+'<br/>');
        myVariable=5;
        document.write('Initial Value: '+myVariable+'<br/>');
        myVariable++;
        document.write('Value after increment is: '+myVariable+'<br/>');
        var mySecondVariable=(myVariable++)+7;
        document.write('Value after addition is: '+mySecondVariable+'<br/>');
        mySecondVariable--;
        document.write('Value after decrement is: '+mySecondVariable+'<br/>');
        var myThirdVariable=(mySecondVariable--) % 3;
        document.write('The remainder is: '+myThirdVariable+'<br/>');
    </script> */}


//---------Chapter 5---------Task4===
{/* <script>
        var MovieTicket=600;
        var n=prompt('Enter the number of tickets you want to purchase: ');
        var TotalCost=600*n;
        document.write('Total Cost to buy '+n+ ' tickets to a movie is ' + TotalCost+'PKR');
    </script> */}


//---------Chapter 5---------Task5===
{/* <script>
        var n=prompt('Enter the number of Table you want: <br/>');
        document.write('Table of '+n+ '<br/>');
        for(var i=1; i<=10; i++){
        document.write(n+ 'x'+i+'='+ (n*i) +'<br/>');
        }
    </script> */}


//---------Chapter 5---------Task6===
{/* <script>
        var C=25;
        var convertCtoF=(C*9/5)+32;
        document.write(C+'°C is ' +convertCtoF+' °F <br/>');
        var F=70;
        var convertFtoC=(F-32)*5/9;
        document.write(F+'°F is ' +convertFtoC+' °C');
    </script> */}


//---------Chapter 5---------Task7===
{/* <script>
        document.write('<h1>Shopping Cart</h1><br/><br/><br/>')
        var Item1=prompt('Enter price of item 1:');
        var Item1quantity=prompt('Enter Ordered Quantity of Item1: ');
        var Item2=prompt('Enter price of item 2:');
        var Item2quantity=prompt('Enter Ordered Quantity of Item2: ');
        var ShippingCharges=100;
        document.write('Price of Item 1 is:' +Item1+'<br/>');
        document.write('Quantity of Item 1 is:' +Item1quantity+'<br/>');
        document.write('Price of Item 2 is:' +Item2+'<br/>');
        document.write('Quantity of Item 2 is:' +Item2quantity+'<br/>');
        document.write('Shipping Charges:' +ShippingCharges+'<br/><br/>');
        document.write('Total Cost of your order is: ' + ((Item1*Item1quantity)+(Item2*Item2quantity)+ShippingCharges)+'PKR');
    </script> */}

//---------Chapter 5---------Task8===
{/* <script>
        document.write('<h1>Marksheet</h1><br/><br/>')
        var ObtainedMarks=prompt('Enter Obtained Marks: ');
        var TotalMarks=prompt('Enter Total Marks: ');
        document.write('Obtained Marks: '+ObtainedMarks+'<br/>');
        document.write('Total Marks: '+TotalMarks+'<br/>');
        document.write('Percentage is: '+((ObtainedMarks*100)/TotalMarks)+'%');
    </script> */}


//---------Chapter 5---------Task9===
{/* <script>
        document.write('<h1>Currency in PKR</h1><br/>');
        var totalPAKRUPEE=(10*104.80)+(25*28);
        document.write('Total Currency in PKR is '+totalPAKRUPEE);
    </script> */}


//---------Chapter 5---------Task10===
{/* <script>
var a=(((5 +5)*10)/2);
document.write(a)
    </script> */}

//---------Chapter 5---------Task11===
{/* <script>
        document.write('<h1>Age Calculator</h1><br/><b1/>')
        var CurrentYear=2020;
        var BirthYear=1997;
        document.write('Current Year: '+CurrentYear+'<br/>');
        document.write('Birth Year: '+BirthYear+'<br/>');
        document.write('Your Age is: '+(CurrentYear-BirthYear))
    </script> */}


//---------Chapter 5---------Task12===
{/* <script>
        document.write('<h1>Geometizer</h1><br/><b1/>')
        var Radius=20;
        pi=3.142;
        var Circumference=2*pi*Radius;
        var Area=pi*(Radius*Radius);
        document.write('Radius of a Circle is: '+Radius+'<br/>');
        document.write('The Cicumference is: '+Circumference+'<br/>');
        document.write('The Area is: '+Area+'<br/>');
    </script> */}



//---------Chapter 5---------Task13===
{/* <script>
        document.write('<h1>The Lifetime Supply Calculator</h1><br/><b1/>')
        var FavSnack='Chocolate Chip';
        var CurrentAge=23;
        var MaxAge=65;
        var EstAmountperDay=3;
        document.write('Favourite Snack is: '+FavSnack+'<br/>');
        document.write('My Current Age is: '+CurrentAge+'<br/>');
        document.write(' Estimated Maximum Age is: '+MaxAge+'<br/>');
        document.write('Amount of Snack per Day is: '+EstAmountperDay+'<br/>');
        document.write('You will need '+ ((MaxAge-CurrentAge)*EstAmountperDay) +' to last you until the ripe old age of '+MaxAge);
    </script> */}


//---------Chapter 6-9---------Task1===
{/* <script>
        var a=10;
        document.write('Result:<br/>');
        document.write('The value of a is: '+a+'<br/>');
        document.write('.........................................<br/><br/>');
        ++a;
        document.write('The value of ++a is: '+a+'<br/>');
        document.write('Now the value of a is: '+a+'<br/><br/>');
        document.write('The value of a++ is: '+ a++ +'<br/>');
        document.write('Now the value of a is: '+a+'<br/><br/>');
        --a;
        document.write('The value of --a is: '+a+'<br/>');
        document.write('Now the value of a is: '+a+'<br/><br/>');
        document.write('The value of a-- is: '+ a-- +'<br/>');
        document.write('Now the value of a is: '+a+'<br/><br/>');
    </script> */}


//---------Chapter 6-9---------Task2===
{/* <script>
        var a=2;
        var b=1;
        var result = --a - --b + ++b + b--;
        //===Explanation of Steps===
        // --a means now value of a=1
        // --a - --b means now value of a=1 & b=0. So, 1-0=1 here
        // --a - --b + ++b means in previous step b=0 now after b++ it becomes 1. So now total value is 2
        //--a - --b + ++b + b-- means previous equation value is 2 now add 1 to b due to previous value after that it decrease bcoz of b--. So, Final result is 3
        document.write('a is '+a+'<br/>');
        document.write('b is '+b+'<br/>');
        document.write('Result is '+result);
    </script> */}

//---------Chapter 6-9---------Task3===
{/* <script>
        var a=prompt("Input your Name:");
        document.write('************************************************************************<br/>');        
        document.write('<h1>Welcome to our Webpage Dear '+a+'<br/>Thanks for Visiting Us</h1>');
        document.write('*************************************************************************');
    </script> */}


//---------Chapter 6-9---------Task5===
{/* <script>    
        var n=prompt('Enter the number of Table you want:');
        if( n=="" ){
            document.write('Table of '+5+'<br/>');
        for(var i=1; i<=10; i++){
        document.write(5+ 'x'+i+'='+ (5*i) +'<br/>');
        }
    }
    else{ 
        document.write('Table of '+n+ '<br/>');
        for(var i=1; i<=10; i++){
        document.write(n+ 'x'+i+'='+ (n*i) +'<br/>');
        }
    }
    </script> */}


//---------Chapter 6-9---------Task6===
{/* <script>    
     var Subject1=prompt('Enter your Subject 1 Name:');
     var Subject2=prompt('Enter your Subject 2 Name::');
     var Subject3=prompt('Enter your Subject 3 Name::');
     var ObtainedMarks1=prompt('Enter your Obtained Marks of '+Subject1+' ');
     var ObtainedMarks2=prompt('Enter your Obtained Marks of '+Subject2+' ');
     var ObtainedMarks3=prompt('Enter your Obtained Marks of' +Subject3+' ');
     var TotalEachSubject=100;
     var percentage1=(ObtainedMarks1*100)/TotalEachSubject;
     var percentage2=(ObtainedMarks2*100)/TotalEachSubject;
     var percentage3=(ObtainedMarks3*100)/TotalEachSubject;
     var totaSubjectMarks=TotalEachSubject*3;
     var totalObtained=""(ObtainedMarks1+ObtainedMarks2+ObtainedMarks3);
     var FinalPercentage=((percentage1+percentage2+percentage3)/3);
     document.write("<h1>Subject &nbsp;Total Marks&nbsp;Obtained Marks&nbsp; Percentage </h1><br/>");
     document.write(Subject1+" &nbsp; &nbsp; &nbsp;"+TotalEachSubject+"&nbsp; &nbsp;&nbsp;"+ObtainedMarks1+"&nbsp; &nbsp;&nbsp;"+percentage1+"%<br/>");
     document.write(Subject2+"&nbsp;&nbsp;&nbsp;&nbsp;"+TotalEachSubject+"&nbsp;&nbsp;&nbsp;"+ObtainedMarks2+"&nbsp;&nbsp;&nbsp;"+percentage2+"%<br/>");
     document.write(Subject3+"&nbsp;&nbsp;&nbsp;&nbsp;"+TotalEachSubject+"&nbsp;&nbsp;&nbsp;"+ObtainedMarks3+"&nbsp;&nbsp;&nbsp;"+percentage3+"%<br/>");
     document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+totaSubjectMarks+"&nbsp;&nbsp;&nbsp;"+totalObtained+"&nbsp;&nbsp;&nbsp;"+FinalPercentage+"%<br/>");
    </script> */}


//---------Chapter 9-11---------Task1===
{/* <script>    
     var city=prompt('Enter City Name: ')
     var arr=['Islamabad', 'Karachi', 'Hyderabad', 'Faisalabad', 'Lahore']
     for (var i=0; i<arr.length; i++){
     if (arr[i] === 'Karachi'){
         alert('Welcome to city of Lights');
     }
     // chapter   No21
//-----------------------------------------------
//question no 1


          // var first;
          // var last;
          // var fullName;
        
          // first=prompt(" input First-Name","");
          // last=prompt("input last-Name","");
          // fullName=first+last;
        
          // window.alert('hello \n'+""  + fullName );


//------------------------------------------------------------------------
// qestion No 2


    // // var getmodel;
    // //  var  str;
    // //   getmodel=prompt("input your favourit mobile phone  model","Samsung  Galaxy S6 Edge plus") ;
    // //   var  str=getmodel.length;
    // //   document.write("my favourit phone is:"+   getmodel+ " ",  "length of string is:",+  str);




//--------------------------------------------------------------------------
     // question No3 


    //       // var str ="pakistani";
          
    //       //   var n = str.indexOf("n");

    //       //   alert('String: Pakistani\n  Index of n:'+" "+ n);

    //-------------------------------------------------------------------        
    //  // question No 4
    //         //  var str ="Hello world";
                  
    //         //  var l = str.lastIndexOf("l");

    //         //  document.write("String:" +'Hello World\n', "Last Index of l:", + l);      
            
    //----------------------------------------------------------------------------         

    //         //question 5


    //         // var str ="pakistani";
          
    //         // var n = str.indexOf("i");

    //         // alert('String: Pakistani\n Character at index'+" " + n +':'+" i");

    //-----------------------------------------------------------------------
    //        //question 6

          // var first;
          // var last;
          // var fullName;
          // var greet;
          // first=prompt(" input First-Name","");
          // last=prompt("input last-Name","");
          
          // fullName= first.concat(last);
          // window.alert('hello \n'+""  + fullName );
//-------------------------------------------------------------------------
      //question no7
         
//       var str="hyderabad";
      
// var res=str.replace("hyder","Islam");
//   window.alert('City: Hyderabad \n'+" After replacement:"+" "+ res);
        //---------------------------------------------------------
            //question no 8
        // var str="Ali &  Sami are best friends. They play cricket & football together.";

        //   var message = str.replace(/&/g ,"and");
        //   document.write(message);

        //-----------------------------------------------------------------
            //question  no9
            
            //   var str="472";
            
            //   var num=parseInt(str);
            //   if (str="472"){
            //       alert('Value:'+ 472+'\n'+'type:string\n'+ 'Value:'+num +'\n'+''+'type:number');

            //   }
            //---------------------------------------------
            //question no10
            // var input;
            // var conv;
            // input=prompt("input a word","peanuts");
            // conv=input.toUpperCase();
            // window.alert('User input:'+input+'\n'+'Upper Case:'+conv );
  
            
            //--------------------------------------------------------------
            //question no11
            
            // var input;
            // var conv;
            // input=prompt("input a word","javascript");


            // var conv=input[0].toUpperCase() 
            // +input.slice(1); 
                 
                
            // //   =input.toUpperCaseeach(0);        
                                     
            // window.alert('User input:'+ input+'\n'+'Upper Case:'+ conv );
          
            //---------------------------------------------------------------
            // //question No 12
            // var num=35.36;
            // var str=num.toFixed(2);
            // alert(str);
        
       //----------------------------------------------------------------
       
       // Question No 13

//     alert('Bakery Items :\n'  +'cake,' +' apple pie,'+'  cookie,'+' chips,'+' patties');

//        var name = prompt("Welcome  to ABC Bakery. What do you  Want to order"+'\n'+"sir/ma'am","cookie");
//        var itmes=name;
//        var quantity = prompt("Quantity ordered is","1");
//        if (itmes=="cake")  {
//            alert(itmes+'  is available  at index 2 in our bakery');
//          }
//          else if(itmes=="apple pie"){
//             alert(itmes+'is available at index 2 in our bakery');

//          }
//          else if(itmes=="cookie"){
//             alert(itmes+'is available at index 2 in our bakery');
//          }
//          else if(itmes=="chips"){
//             alert(itmes+'is available at index 2 in our bakery');
//          }
//          else if(itmes=="patties"){
//             alert(itmes+'is available at index 2 in our bakery');
//          }
         
//          else {
//         alert('We are sorry '  +  itmes + " is not available in our bakery"); 

// }
       
//------------------------------------------------------
    //question No 15

    // var myInput;
    // var letter ;
    // var capital;
    // var number ;
    // var length ;
    // var ps=prompt('The Password must qualify the requrements'+'\n'+ 'a.It should contain alphabets and numbers'+'\n'+'b. It should not start with a number'+'\n'+ 'c. It must at least 6 characters long ')

    // if(myInput=ps.match(/[a-z]/g)){
    //      var let=myInput;

    // }
    // else if(number=ps.match( /[09]/g)){
    //        var num=number;
      
    // }
    // else if (lenght=ps.value.length  <=6)
    // {
    //       var len=length;
    // }
    // else{
    //   alert("invalid:password");
    // }
    //  document.write(let,num,len);
//------------------------------------------
    //question  No16

    //   var university="university of karachi";
    //    var str=university.split("");

    //   document.write(str);

//----------------------------------------------------

        //questionNo17
      //   var input;
      //   var lst;
      //   input=prompt("input user ","pakistan");
      //   lst=input.charAt(input.length-1);
      //    window.alert('User input :'+input+ '\n Last character  of input: '+ lst);
//--------------------------------------------------------------------------------

        // //questionNo 18
            // var a="The quick brown fox"+" jumps over"+ "the lazy dog";
            // var b=a.wordcount("The");
            // document.write(b);






        //  var str='The quick fox jump over the lazy dog;';
        //  var chars=str.split("");
        //  var chars=chars="the";
        //  var word_count={};

        //  for (var i=0; i < chars.length ;  i++)
        //  {

        //     if(word_count[chars[i]]==undefined);
        //     word_count[chars[i]]=0
        //     word_count[chars[i]]++;
        //  }
        //  for(var i in word_count)
        //  {

    //     document.write(i+'='+ word_count[i]);
    //  }
//----------------------------------------------------------------------
// chapter no 26 to 30


// ----------------------------------/
  //question no 1


      // var x,text;
    


    //   x=prompt("numb");
      
    //  // If x is Not a Number or less than one or greater than 10

    //  if (isNaN(x) || x < 0 || x=="a-z" ) 
        
    //  {
    //     text = "please inter positive integer";
    //     alert(text);
    //   }  
              
    //   else {

    //          var w=Math.round(x);
    //          var y=Math.floor(x);
    //          var z=Math.ceil(x);
    //         alert('a.number: '+ x+'\nb. round off value: '+w+ '\nc.floor  value: '+y+'\nd.ceil  value: '+z );
        
    //     }


//---------------------------------------------------------------      
  //quesion no  2


  //    var a,b;
  


  //   a=prompt("numb");
    
  //  // If x is Not a Number is not less than zero

  //  if (isNaN(a) || a > 0 || a=="a-z" ) 
      
  //  {
  //     b = "please inter negative integer";
  //     alert(b);
  //   }  
            
  //   else {

  //          var c=Math.round(a);
  //          var d=Math.floor(a);
  //          var e=Math.ceil(a);
  //         alert('a.number: '+ a+'\nb. round off value: '+c+ '\nc.floor  value: '+d+'\nd.ceil  value: '+e );
      
  //     }
 //-------------------------------------------------------

    //question No 3

    // var a;

    //     a=prompt("user input");
     
    //    var b =Math.abs(a);

  
    //   window.alert(b);

    //------------------------------------------
    //question no4

    

      //  var a = Math.random(); 
      //  var b = (a * 4) + 1; 
      //   var c = Math.floor(b);
 
      //   var g=a+b+c;
      //   var f=Math.round(g)
      //   alert('random dice value :'+f);

//--------------------------------------------------------

    //question no 5
    
    
  //      var a = Math.random();
  //     var b = (a * 1) ;

  //     //  var c = Math.floor(b);

  //      var g=a+b;
  //      var f=Math.round(g)
  //      if(f>=2){
  //       alert(f +'\n  random coin value :'+'Head' );
  //      }
  //      else{
  //        alert(f+'\n random coin value:'+' Tail')
  //      }
      

//-------------------------------------------------------------

  //     //question no 6

  //  var a = Math.floor(Math.random() * 100) + 1;

  // window.alert('random between 1 and 100: '+a)


  //------------------------------------------------------------
         //question no 7

    // var a,b,c,d;

    //   a=prompt("Enter you weights in kilograms")
    //   if(a<9) {
    //     alert(a+'kilogram')
        
    //   }
    //   else if ( a>=9)
    //   {
    //       alert(a+"kilograms")
          
    //     }



    //   else if (  a<=9,"kg", " kilo","kilograms")
    //   {
                
    //     b=a.replace("kg","kilo");
    //     c=b.replace("kilo","kilograms");
    //     d=c.replace("kilos","kilogram");
    //     e=d.replace("kilograms","kilogram");
    //     f=e.replace("kgs","kilograms")
    //     alert(e)
    //   }

    //------------------------------------------------------------------  
     //question no 8
    //  var a,b;
     
    //     a=Math.round(Math.floor(Math.random()*10))  +1;
    //     b=prompt("Enter a number between 1 to 10");
        
    //     if(b==a){
    //         window.alert("Congratulation" );
    //     }
    //     else{
    //       window.alert("Try again!")

    //     }
//----------------------------------------------------------
    //chapter 31 to 34
  //-------------------------------------------------
    //question no 1
    
      //   var a,b;
      // a=new Date();
      // document.write(a); 
  //--------------------------------------------------------   
      //question no 2
      // var month = new Array();
      // month[0] = "January";
      // month[1] = "February";
      // month[2] = "March";
      // month[3] = "April";
      // month[4] = "May";
      // month[5] = "June";
      // month[6] = "July";
      // month[7] = "August";
      // month[8] = "September";
      // month[9] = "October";
      // month[10] = "November";
      // month[11] = "December";
    
      // var d = new Date();
      // var n = month[d.getMonth()];
      // window.alert('Current month: '+n);
//----------------------------------------------------------------
      //question  no 3
      // var d = new Date();
      // var weekday = new Array(7);
      // weekday[0] = "Sun";
      // weekday[1] = "Mon";
      // weekday[2] = "Tue";
      // weekday[3] = "Wed";
      // weekday[4] = "Thu";
      // weekday[5] = "Fri";
      // weekday[6] = "Sat";

      // var n = weekday[d.getDay()];

      // document.write( 'Today is '+n); 
//----------------------------------------------------
        //question no 4

        // var d = new Date();
        // var weekday = new Array(7);
        // weekday[0] = "Sun";
        // weekday[1] = "Mon";
        // weekday[2] = "Tue";
        // weekday[3] = "Wed";
        // weekday[4] = "Thu";
        // weekday[5] = "Fri";
        // weekday[6] = "Sat";

        // var n = weekday[d.getDay()];
        // if (n=="Sat","Sun"){
        //    window.alert("It's Fun day")
        // }
        // else{
        //   window.alert("It's Working Day")
        // }
//---------------------------------------------------
        //question no 5

        // var d = new Date();
        
        // if(d<=15){
        //     window.alert('First fifteen days of the month')

        // }
        // else if (d>=16){
        //   window.alert('Last fifteen days of the month')
        // }
//-------------------------------------------------------
        //question no 6

      //   var a,b,c,d,e,f,g;
      //   a=new Date();
      //   b=new Date();
      //   c=new Date();
      //   d=a.getHours();
      //   e=b.getSeconds();
      //   f=c.getMinutes();
      //  g=d,e,f;
      //  if(g<=12){
      //      window.alert("Its AM")
      //  }
      //  else {
      //    window.alert("Its PM")
      //  }
//-----------------------------------------------------------------------
            //question no 7
            //       var d = new Date();
            // var n = d.getUTCSeconds();
        
            //   alert(n);
        
                // var doomsday = new Date("June 30, 2035");
                // alert( doomsday);
                // var msToday = today.getTime();
                // var msDoomsday = doomsday.getTime();

//--------------------------------------------------------------
                //question no8
                //  var a,b,c,d;
                // a=new Date("june,18,2015");
                // b=new Date();
                // c=b/a;
                // d=c.round();
                // alert(d)
//---------------------------------------------------------------------
                //question no 10
                // var a,b,c,d;
                // a=new Date("dec,05,2020")
                // b=new Date("dec ,05,2020")
                // // b=new Date();

            
                // c=b.setUTCSeconds(b.getSeconds());

                
                // alert('reference date'+a+'\n'+c +' seconds had passed since begining of 2020');
//------------------------------------------------------------------------------------------
                //question  no 11
                // var a,b,c,d;
                // a=new Date();
                // b=new Date();
                // c=b.setUTCHours(b.getUTCHours() - 1);
                
                
                
                // alert('Current date: '+a+'\n 1 hour ago ,it was '+b);

                  
   //---------------------------------------------------------------             
                // // question no 12
                //   var a,b,c,d;
                //   a=new Date();
                //   b=new Date((100));
                //   alert(b);
//----------------------------------------------------
                  //question no 13

                  // var a,b,c,d;
                  // a=prompt("Enter your age is" );
                  
                  // b=new Date();
                  // c=a-b;
                  // alert(b);


// Q#1
// var a = new Date();
// document.write(a);

//Q#2
// function fullName() {
//      var firstName = "Zunair";
//      var lastName = "khan";
//      alert("Full Name is :"+ " " + firstName + " "+ lastName);
// }
// fullName();

//Q#3
// function Sum(a,b){
//     var z = a+b
//     return z;
// }
// var c = Sum(4,8);
// alert(c);

//Q#4
// function calc(num1,opr,num2){
//     if(opr === "+"){
//         return num1 + num2
//     }
//     else if(opr === "-"){
//         return num1 - num2
//     }
//     else if(opr === "*"){
//         return num1 * num2
//     }
//     else{
//         return "Incorrect Operator!"
//     }
// }
// var result = calc(5,"+",5);
// var result1 = calc(4,"*",6);
// var result2 = calc(4,"$",6);
// document.write(result +" ")
// document.write(result1 +"  ")
// document.write(result2)

//Q#5
// function squa(a){
//    var b = a*a;
//    document.write(b)
// }
// squa(4)

//Q#6
// function fact(n){
//     var b = n * (n-1) *(n-2);
//     document.write(b) 
// }
// fact(4)
//----------------------------------
//Chapter#39-42
// #include<stdio.h>
//     var a, b;
// {
//       var i,p=1;
//       for(i=1;i<=b;i++)
//             p*=a;
//       return p;
// }
// {
//       var  x,n,p;
//       clrscr();
//       printf("\nEnter the Value of 'x' : ");
//       scanf("%d",x);
//       printf("\nEnter the Value of 'n' : ");
//       scanf("%d",n);
//       p=power(x,n);
//       printf("\nPower : %d",p);
//       getch();
// }
 //question no 2

// function leapyear(){
//   var year = document.getElementById("year").value
      
//           if ( year % 4 == 0)   {
//            alert("yes it is leap year") 
//              }
//            else{
//             alert("it is not leap year")

//            }
//           }            
       
    
        

          //}
         
            //question 2
//             Calculate traingle area
//          var  a=11;
//         var  b=9;
//         var  c=9;
//
//        var triarea = function(a,b,c) {
//      var s = (a+b+c)/2;
//     var p = Math.sqrt(s*(s-a)*(s-b)*(s-c));
//   return p;
//        }
        
//         document.write(triarea(11,9,9));
//             MARKSHEET   OF SUBJECT

//             var subject1=document.getElementById("subject1");
//             var Marks1=document.getElementById("Marks1"); 
//             var subject2=document.getElementById("subject2");
//              var Marks2=document.getElementById("Marks2")
//             var subject3=document.getElementById("subject3");
//             var Marks3=document.getElementById("Marks3")
//              function obtain(id="obtain"){   
//              var obtain = Marks1+Marks2+Marks3;
              
//             }         
//             obtainspan.innerHTML=obtain;


                      
                
//               function myFunction() {
//                 var str = "Hello world, welcome to the universe.";
//                 var n = str.indexOf("s", );
//                 document.getElementById("demo").innerHTML = n;
//               }

//             var string = "heeehilloo woruld";
//             var vowel = ["a", "e", "i", "o", "u"];
            
//             String.prototype.character = function name() {
//                 var i;
//                 for ( i = 0; i < vowel.length; i++) {
//                     var secondLoop = string.length;
//                     for ( j = 0; j < secondLoop; j++) {
//                         if (vowel[i] == string.charAt(j)) {
//                             string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
//                         }
            
//                     }
//                 }
//             }
            
//             string.character();
//             alert(string);



//             question no  7
//             function findOccurrences() {
//                 var str = "Pleass read   this applcation and gave me gratui ty";
//                 var count = 0;
//                 let haveSeenVowel = false;
              
//                  for (const letter of str.toLowerCase()) {
//                   switch (letter) {
//                     case 'a':
//                     case 'e':
//                     case 'i':
//                     case 'o':
//                     case 'u':
//                       {
//                         if (haveSeenVowel) {
//                           count++;
//                           haveSeenVowel = true;
//                         } else {
//                           haveSeenVowel = true;
//                         }
//                         break;
//                       }
//                     default:
//                       haveSeenVowel = false
//                   }
//                 }
              
//                 return count
//               }
              
//               console.log(findOccurrences());
              


//             function LengthConverter(valNum) {
//               document.getElementById("outputMeters").innerHTML=valNum*1000;
              
//             }
//             function Lengthchanger(valNum) {
//               document.getElementById("outputfeets").innerHTML=valNum*3280.8;
//             }
//             function kilometertoinch(valNum) {
//               document.getElementById("outputinch").innerHTML=valNum*39370;
//             }

//             function kilometertocenti(valNum) {
//               document.getElementById("outputcenti").innerHTML=valNum*100000;
//             }
//             questuion no 9


//               var  count  = 1;
//               var  working_hours, over_time;
//               var  over_time_pay ;

//     while(count<=10)
//     {
//         alert("Enter the working hours of employee no %d: "+ count);
//        prompt("%d"& working_hours);
//         if(working_hours>40)
//         {
//             over_time = working_hours - 40;
//             over_time_pay = over_time * 12.00;
//             alert("Employee No %d overtime pay is %.2f\n"+ count, over_time_pay);
//         }
//         else {
//             alert("You have to work for more than 40 hours to get over time pay\n");

//         count++;
//     }
//   }

  
//   question no 10

//   var a,b,c,d,e,f,g;
 
//      a= prompt("Enter amount to withdraw")
//      b=Math.floor(a/5000);
    
     
//      c=Math.floor(a%5000/1000);
     
//      d=Math.floor(a%1000/500)
     
//      e=Math.floor(a%500/100)
     
//      f=Math.floor(a%100/50)
      
//      g=Math.floor(a%50/10)
   
// alert("you will have"+e+" one hundred rupee notes"+f+ " fifty rupee notes"+g + " ten rupee notes")
        ///}
 
//chpter#43-48
// //     //question no 1

// function showalert(){
//     alert("below our phone sample")


// }

// // //question no 2
//  function myfunction(){
//      alert("thanks to purchase a phone from us")
//  }

// //question no 3
//  function deleterecord0() { 
//      document.getElementById("row1").remove(); 
//  } 
//  function deleterecord1() { 
//      document.getElementById("row2").remove(); 
//  } 
//   function deleterecord2() { 
//      document.getElementById("row3").remove(); 
//   } 
//   function deleterecord3() { 
//       document.getElementById("row4").remove(); 
//   } 
//   function deleterecord4() { 
//       document.getElementById("row5").remove(); 
//   } 
//  function deleterecord5() { 
//      document.getElementById("row6").remove(); 
//  } 
//  function deleterecord6() { 
//      document.getElementById("row7").remove(); 
//  } 
//  function deleterecord7() { 
//      document.getElementById("row8").remove(); 
//  } 
//  function deleterecord8() { 
//      document.getElementById("row9").remove(); 
//  } 
//  function deleterecord9() { 
//      document.getElementById("row10").remove(); 
//  } 

// // question no 4

 


// //question no 5
//  var clicks=0;
// function onClick() {
//    clicks +=1;
//     document.getElementById("clicks").innerHTML = clicks;
// }
// function decrease() {
//     clicks -=1;
//      document.getElementById("clicks").innerHTML = clicks;
//  }        
//chpter#49-52
// question no 1
// var email= document.getElementById("email")
// var passw= document.getElementById("passw")
// var dispHeading=document.getElementById("disp");
// dispHeading= email;

//     function submit(){

//       var emailID = document.getElementById("emailID");

     

// var PasswID=document.getElementById("PasswID");

// document.getElementById("myButton").addEventListener("click")
 

//  document.getElementById("email").innerHTML=emailID.value
//    document.getElementById("Passw").innerHTML=PasswID.value
  
// } 
  //dispHeading.innerHTML="disp"


// var errorElement =document.getElementById('error');
// form.addEventListener("submit",(e) => {
//     let messages =[]
//     if (name.value ===''|| name.value===null ){
//         messages.push('Name is required')
//     }
//     if (password.value.length<=6){
//         messages.push("password must be longer than 6 characters")
//     }
//     if (password.value.length>=6){
//         messages.push("password must be longer than 6 characters")
//     }
//     if (messages.length >0){
//     e.preventdefault() 
//         errorElement.innerHTML=messages.join(',')
//     }
//     var data= email + passw;
// })
//     var val= e.parentNode.firstChild.nodeValue
//    var editvalue =prompt("Enter updated value",val)
//    e.parentNode.firstChild.nodeValue=editvalue





  
 
 //question no 2 
//  function readMore(){
//   var text= "All of the tests shown above, and more besides, can be incorporated into a single regular expression test.A regular expression expresses a pattern that in this case, the users entry must match in order to validate. If you're familiar with the wildcard operator,  which stands for any combination of characters of any length  thats the general idea. But regular expressions go far beyond the wildcard operator."
//   var pera= document.getElementById("pera")
//   pera.innerHTML=text
//  }



// //question no 3

// function addRow(tableID) {

//   var table = document.getElementById(tableID);

//   var rowCount = table.rows.length;
//   var row = table.insertRow(rowCount);

//   var cell1 = row.insertCell(0);
//   var element1 = document.createElement("input");
//   element1.type = "checkbox";
//   element1.name="chkbox[]";
//   cell1.appendChild(element1);

//   var cell2 = row.insertCell(1);
//   cell2.innerHTML = rowCount + 1;

//   var cell3 = row.insertCell(2);
//   var element2 = document.createElement("input");
//   element2.type = "text";
//   element2.name = "txtbox[]";
//   cell3.appendChild(element2);


// }

// function deleteRow(tableID) {
//   try {
//   var table = document.getElementById(tableID);
//   var rowCount = table.rows.length;

//   for(var i=0; i<rowCount; i++) {
//     var row = table.rows[i];
//     var chkbox = row.cells[0].childNodes[0];
//     if(null != chkbox && true == chkbox.checked) {
//       table.deleteRow(i);
//       rowCount--;
//       i--;
//     }


//   }
//   }catch(e) {
//     alert(e);
//   }
// }





//  function from()  {
//    var label = document.getElementById("Name");
//    lb=label.appendChild.nodeValue
//    console.log(lb)
//      //     document.getElementById("1record").innerHTML=Name.value
  //  alert("Name.value")
     
    //  var tdText = document.createTextNode(Name.value)
    
 
 
//}


// function log(e){
  
//   var nam= document.getElementById("Name");
   

//   console.log(nam.Node_TEXT)
// }

// function deleterecord0() { 
//   document.getElementById("row1").remove(); 
// } 
// function deleterecord1() { 
//   document.getElementById("row2").remove(); 
// } 
// function deleterecord2() { 
//   document.getElementById("row3").remove(); 
// } 
// function deleterecord3() { 
//    document.getElementById("row4").remove(); 
// } 
// function deleterecord4() { 
//    document.getElementById("row5").remove(); 
// } 
// function deleterecord5() { 
//   document.getElementById("row6").remove(); 
// } 
// function deleterecord6() { 
//   document.getElementById("row7").remove(); 
// } 
// function deleterecord7() { 
//   document.getElementById("row8").remove(); 
// } 
//chpter#53-57
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

  
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var m = document.getElementById("myM");

// Get the button that opens the modal
var b = document.getElementById("myB");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];


// When the user clicks the button, open the modal 
b.onclick = function() {
  m.style.display = "block";
}

  
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  m.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == m) {
    m.style.display = "none";
  }
}
//chpter#57-67
 var main=document.getElementById("main-content")

console.log(main)

var rend=document.getElementById("rend")
var R=document.getElementsByClassName("render")
rend.innerHTML=rend.nodeValue;
console.log(R)
     

    
    
    var firstN = document.getElementById("firstN");
    var lastN=document.getElementById("lastN");
     var emailID=document.getElementById("emailID");
         document.getElementById("myButton").addEventListener("click", function() {
       

    
       document.getElementById("last").innerHTML=lastN.value
       document.getElementById("first").innerHTML=firstN.value

      
        document.getElementById("email").innerHTML=emailID.value
   

});
  

   var form  = document.getElementById("form-content")
    var f =form.childNodes;    
   
    console.log(f)
   
 var lastNode=document.getElementById("lastN")
 var ls=(lastNode.nodeType)
 console.log(ls)


var lastN=document.getElementById("main-content")
console.log(lastN.childNodes[1])
var lastN=document.getElementById("main-content")
console.log(lastN.childNodes[0])
var lastN=document.getElementById("main-content")
console.log(lastN.childNodes[2])


var  Ar= document.getElementById("email")
console.log(Ar.nodeType)

var  Ar= document.getElementById("email")
console.log(Ar.childNodes[0].nodeType)

//  var companyNode = document.getElementById("main-content").item(0);
//  var  ChildNodes =companyNode.getChildNodes();
//  var i=0;

//  for (var int = 0; int < companyChildNodes.getLength(); i++) {
//      var node = companyChildNodes.item(int);
//      if (node.getNodeType() == Node.ELEMENT_NODE && Objects.equals("staff", node.getNodeName())) {
//  0        System.out.println(node.getTextContent());
//          break;
//      }
//  