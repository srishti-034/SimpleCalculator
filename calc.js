 function display(val) 
            { 
               var textField = document.getElementById('textField').value;
               textField += val;
               document.getElementById('textField').value = textField;
            } 
               
function calculate() 
            { 
                var textFieldValue = document.getElementById('textField').value; 
                var result = eval(textFieldValue) ;
                document.getElementById('textField').value = result ;
            } 

 function del() 
            { 
                document.getElementById('textField').value = ""; 
            } 