var numbers = [4445,88,22556];

       for(var i = 0; i < numbers.length; i++){
           console.log(numbers[i]);
       };

       var var1 = 5;
       var var2 = 6;

       if(var1 == var2){
           console.log('This is true');
       } else {
           console.log('This is false');
       }

       var fruit ='kiwi';

       switch(fruit){
            case "banana":
                alert('I love bananas');
                break;
            case "apple":
                alert('Apples are fine');
                break;
            case "orange":
                alert('Oranges are my thing');
                break;
            default:
                alert('You tell me which fruit to choose!!');
                break;
       }

        //Object literal
        var person = {
            firstName: 'Henri',
            lastName: 'Honkarinta',
            age: '29',
            children: ['Tommi', 'Mika', 'Saara', 'Jason'],
            address: {
                street: 'Venekuja 4 C 6',
                city: 'Turku',
                zip_code: 90140,
                state: 'Finland'
            },
            fullName: function(){
                return "Henkilön nimi on:" +" "+ this.firstName +" "+ this.lastName;
            }
        }
        console.log(person.fullName());

        // Constructor pattern
        function Fruit(name, color, shape){
            this.name = name;
            this.color = color;
            this.shape = shape;

            this.describe = function(){
                return 'A '+this.name+' is the color of '+this.color+' and takes a shape of '+this.shape;
            }
        }

        // var melon = new Fruit('melon', 'green', 'round');
        var apple = new Fruit('apple', 'red', 'round');

        console.log(apple.describe());

        // Array of objects
        var  users = [
            {
                name: 'Henri Laatikainen',
                age: 51,
                occupation: 'Web-developer'
            },
            {
                name: 'Mika Kivinen',
                age: 22,
                occupation: 'Unemployed'
            },
            {
                name: 'Sari Järvinen',
                age: 35,
                occupation: 'Accountant'
            }
        ]

        console.log(users[0].name);


        // Button click functions
        function doClick(){
            alert('You Clicked me');
        }

        function showDate(){
            var time = document.getElementById('time');
            time.innerHTML = Date();
        }

        function clearDate(){
            var time = document.getElementById('time');
            time.innerHTML = ('');
        }

        // Form
        function changeBackround(x){
            var heading = document.getElementById('heading');
            heading.style.color = x.value;
        }

        function validaForm(){
            var firstName = document.forms["myForm"]["firsName"].value;

            if(firstName == null || firstName == ""){
                alert("First name is required");
                return false;
            }
            if(firstName.length < 3){
                alert("First name must reqired at least three(3) characters");
                return false;
            }
        }
