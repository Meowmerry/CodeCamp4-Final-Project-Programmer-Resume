
    // Function to change webpage background color
        const changeColor = document.getElementById('changeColor'),
        colors      = ['red', 'green', 'blue','pink'];
        let   colorIndex  = 0;

        changeColor.addEventListener('click', () => {
        document.body.style.backgroundColor = colors[colorIndex];      
        colorIndex = (colorIndex + 1) % colors.length
        });

    // Function to change name
    function mynameFunction() {
        var name;
        var username = prompt("Please enter your name:", "Thasanee Puttamadilok");
        if (username == null || username == "") {
          name = "User cancelled the prompt.";
        } else {
          name = "Hello " + username + "! How are you today?";
        }
        document.getElementById("changename").innerHTML = name;
      }


    // Function to add and remove skills
    var listitem = 0;
    function addToList() {
        if (listitem >=4) {
            listitem = 0;
        }
        if (listitem == 0) {
        var skills = "Good skill in English and know Spanihs.";
        }
        if (listitem == 1) {
        var skills = "Strategic Sales & Marketing Campaigns.";
        }
        if (listitem == 2) {
        var skills = "Microsoft Word, Excels, Adobe Photoshop, Power Point, E-mails, Internet.";
        }
        if (listitem == 3) {
        var skills = "Strong Sales Presentations / Closing success";
        }
        listitem++

        var newnode=document.createElement("LI");
        var textnode = document.createTextNode(skills);
        newnode.append(textnode);
        document.getElementById("myskills").appendChild(newnode);

    }

   function removeFromList(){
        var list = document.getElementById("myskills");
        list.removeChild(list.childNodes[0]);
   }

