<html lang="en">
    <head>
        <title>
            FORM VARIDATION
        </title>

    </head>


    <body bgcolor="lightgray">
        <br><br>
        <h1 align="center">FORM VARIDATION</h1>
        <br><br>
        <center><input id="text" ></input></center><br>
        <center><button  onclick="myFunction()">CLICK HERE</button></center><br>        
        <center><p id="info"></p></center>

        <script>
            function myFunction(){
                var check,x,g;
                check=document.getElementById("text").value;

                /**
                g=Number(x);
                h=g/100000;
                document.getElementById("info2").innerHTML=h;
                **/
                x=/^([0-9]{6})(,[0-9]{6})?(,[0-9]{6})?(,[0-9]{6})?(,[0-9]{6})?(,[0-9]{6})?(,[0-9]{6})?(,[0-9]{6})?(,[0-9]{6})?$/;

                if(x.test(check)){
                    
                    document.getElementById("info").innerHTML="VALID";
                    document.getElementById("info").style.color="green";
                }else{
                    
                    document.getElementById("info").innerHTML="INVALID";
                    document.getElementById("info").style.color="red";
                }
            }
        </script>
    </body>
</html>
