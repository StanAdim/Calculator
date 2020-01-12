                // Variables and Initializing the calc
var display,add,num1, num2, num3, num4, num5, num6;
var num7, num8, num9, zero,dot,operators;
var DispOperat1 = document.querySelector('.operat1');
var DispOperatBy = document.querySelector('.operatBy');
var DispOperat2 = document.querySelector('.operat2');
var  ArrayNumber = [];
var number1,number2;
var SwappingKey;
var valueInFeed = ArrayNumber;

                //___________INITIALIZE THE STATES OF CALC________
        function initialize(){
            DispOperat1.textContent = '0';
            number1 = 0;
            number2 = 0;
            valueInFeed = [];
            SwappingKey = true;
            DispOperatBy.textContent = '';
        }
        initialize();

        //________________ LOGIC IN CONTROL______________________

        //_________SWAP ACTION OF DISPLAYING AND OBTAINING VALUE AS THEY ARE FEED BY USER__________
        function getValue(KeyNoArray,value) {//get the value as user press the buttons
            value.push(KeyNoArray);
        if (SwappingKey) {
            displayValue(value,DispOperat1);
        }
        else{
            displayValue(value,DispOperat2);
        }
            
        }
            //_______DISPLAY VALUE AND PARSE INTO INTEGER_____________
        function displayValue(numArray,position) {
            display = numArray.join('');
            display = parseFloat(display);
            position.textContent = display ;
        }
        //________ DISPLAY OPERATION AND SWITCH NUMBER DISPLAY AND ASSIGNENT_________
            function displayOperation(operation) {
                DispOperatBy.textContent = operation;
                number1 = display;
                SwappingKey = false;
                valueInFeed = [];
                
            }
            //_________DOES ALL THE MATH AND RETURNS THE ANSWER__________
            function calcCoreFunction(val1,oper,val2){
                if(oper === '+'){
                    return val1 + val2;
                }
                else if (oper === '-') {
                return val1 - val2;
                }
                else if (oper === '*') {
                return val1 * val2;
                }
                else if (oper === '/') {
                return val1 / val2;
                }
                else {
                return 'error'
            }
            }

//*****************OPERATOR CONTROL END*********************
// _______________-UPPER ACTIONS -________________________--
                document.querySelector('.del').addEventListener('click',function () {
                        valueInFeed.pop(); 
                if (SwappingKey) {
                    displayValue(valueInFeed,DispOperat1);
                }
                else{
                    displayValue(valueInFeed,DispOperat2);
                }
                            
                    });

                document.querySelector('.on').addEventListener('click',function () {
                    initialize();
                });

                document.querySelector('.add').addEventListener('click',function () {
                    displayOperation('+') ;
                    operators = '+';
                });               

                document.querySelector('.subtract').addEventListener('click',function () {
                    displayOperation('-') ;
                    operators = '-';
                });

                document.querySelector('.multiply').addEventListener('click',function () {
                    displayOperation('*') ;
                    operators = '*';

                });

                document.querySelector('.divide').addEventListener('click',function () {
                    displayOperation('/') ;
                    operators = '/';
                });
                //******* END ******** */
//______________________________-VALUE GENERATORS-________________________________________________

                        document.querySelector('.num1').addEventListener('click',function () {
                            
                            getValue(1,valueInFeed)
                        });
                        
                        document.querySelector('.num2').addEventListener('click',function () {
                            getValue(2,valueInFeed);
                        });
                        
                        document.querySelector('.num3').addEventListener('click',function () {
                            getValue(3,valueInFeed);
                        });
                        
                        document.querySelector('.num4').addEventListener('click',function () {
                            getValue(4,valueInFeed);
                        });
                        
                        document.querySelector('.num5').addEventListener('click',function () {
                            getValue(5,valueInFeed);
                        });
                        
                        document.querySelector('.num6').addEventListener('click',function () {
                            getValue(6,valueInFeed);
                        });
                        
                        document.querySelector('.num7').addEventListener('click',function () {
                            getValue(7,valueInFeed);
                        });
                        
                        document.querySelector('.num8').addEventListener('click',function () {
                            getValue(8,valueInFeed);
                        });
                        
                        document.querySelector('.num9').addEventListener('click',function () {
                            getValue(9,valueInFeed);
                        });
                        
                        document.querySelector('.zero').addEventListener('click',function () {
                            getValue(0,valueInFeed);
                        });
                        
                        document.querySelector('.dot').addEventListener('click',function () {
                            getValue('.',valueInFeed);
                        });
                        // *************** END VALUE GENERATORS ****************
            // _____________________-EQUAL-AND PROVIDING ANSWER____________
                         document.querySelector('.equal').addEventListener('click',function () {
                        //// TODO: Adding A function that will do the math And Giving an Output
                            number2 = display;
                            var answer = calcCoreFunction(number1,operators,number2);
                            //Checking The error returned
                           if (answer !== 'error') {
                            DispOperat1.textContent = "The answer";
                            DispOperatBy.textContent = 'is';
                           }
                           else{
                               answer = display;
                           }
                            DispOperat2.textContent = answer;
                            valueInFeed = [];
                            SwappingKey = true;
                        //// TODO: Adding answer to another Value action 
                        //number2 = DispOperat2.textContent
                         });
