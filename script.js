        

        document.addEventListener("DOMContentLoaded", function() {
          const banners = [b1, b2, b3, b4, b5]; // Array of banner names
          const ban = document.getElementById("banner"); // The element where the banner will be displayed
          
          function pickRandomBanner() {
            const randomIndex = Math.floor(Math.random() * banners.length); // Generate a random index
            const randomBanner = banners[randomIndex]; // Get the banner at the random index
            ban.innerHTML = randomBanner; // Display the banner
          }
        
          pickRandomBanner(); // Call the function to display a random banner on page load
        });
        

        // Get the terminal elements
        const terminal = document.getElementById("terminal");
        const output = document.getElementById("command-output");
        const input = document.getElementById("command-input");

        // Add an event listener for the Enter key
        input.addEventListener("keyup", function(event) {
          if (event.key === "Enter") {
            // Get the command entered by the user
            // const command = input.value.trim().toLowerCase().replace(/<[^>]*>?/gm, '');
            const command = input.value.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
            // .toLowerCase()

            // Execute the command or display an error message
            // if (command === "hello") {
            //   output.innerHTML += "<div class='inp'><p class='name'>user@Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
            //   output.innerHTML += "<p class='outp-msg'>Hello, world!</p>";
            // } else if (command === "alert") {
            //   output.innerHTML += "<div class='inp'><p class='name'>user@Void-04:~$ </p><p class='msg'> " + command + "</p></div>";
            //   alert("This is an alert message!");}

            if (rgb == true) {
              const ban = document.getElementById("banner"); // The element where the banner will be displayed
              ban.classList.add("clr");
            }
            
            
            else if (rgb == false) {
              const ban = document.getElementById("banner"); // The element where the banner will be displayed
              ban.classList.remove("clr");
            }

            if (root == true) {
              nameusr = "root";
            }
            
            else if (root == false) {
              nameusr = "user";
            }

            if (command === "help") {
              
              output.innerHTML += "<div class='inp'><p class='name'><span class='chg'>" + nameusr+ "</span><span class='at'>@</span>Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
              output.innerHTML += list;
            }
            
            else if (command === "clear" || command === "Clear") {
                output.innerHTML = "";
                // output.innerHTML += "<div class='inp'><p class='name'>user@Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                // output.innerHTML += "<p class='outp-msg'>terminal cleared.</p>";
              }
              
              else if (command === "ls") {
                output.innerHTML += "<div class='inp'><p class='name'><span class='chg'>" + nameusr+ "</span><span class='at'>@</span>Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                output.innerHTML += lsdir;
              }

              else if (command === "rgb") {
                if (rgb == false) {
                  output.innerHTML += "<div class='inp'><p class='name'><span class='chg'>" + nameusr+ "</span><span class='at'>@</span>Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                  output.innerHTML += "<p class='outp-msg'>rgb: Off</p>";
                  rgb = true;
                } else if (rgb == true) {
                  output.innerHTML += "<div class='inp'><p class='name'><span class='chg'>" + nameusr+ "</span><span class='at'>@</span>Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                  output.innerHTML += "<p class='outp-msg'>rgb: On</p>";
                  rgb = false;
                }
              }
              
              else if (command === "") {
                output.innerHTML += "<div class='inp'><p class='name'><span class='chg'>" + nameusr+ "</span><span class='at'>@</span>Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
              }
              
              else if (command === "./links") {
                output.innerHTML += "<div class='inp'><p class='name'><span class='chg'>" + nameusr+ "</span><span class='at'>@</span>Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                output.innerHTML += lnklist;
              }

              else if (command === "./games") {
                  output.innerHTML = "";
                output.innerHTML += "<div class='inp'><p class='name'><span class='chg'>" + nameusr+ "</span><span class='at'>@</span>Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                output.innerHTML += gamebox;
              }

              else if (command === "jeff") {
                output.innerHTML += "<div class='inp'><p class='name'><span class='chg'>" + nameusr+ "</span><span class='at'>@</span>Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                output.innerHTML += "<p class='outp-msg'>Jeffery's Sister is</p> 😱";
              }

              // else if (command === "edit") {
              //   output.innerHTML += "<div class='inp'><p class='name'><span class='chg'>" + nameusr+ "</span><span class='at'>@</span>Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
              //   output.innerHTML += "edit: true";
              //   alert("Edit Commands:\n Ctrl+m: stop \n Tab+r: reset")
              // }
              
              else if (command === "exit") {
                if (root == true) {
                  output.innerHTML += "<div class='inp'><p class='name'>root<span class='at'>@</span>Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                  output.innerHTML += `<p class='err-msg'>Complete.</p>`;
                  document.getElementById("root").innerHTML = "<span class='chg'>user</span><span class='at'>@</span>Void-04:~$ ";
                  root = false;
                }else if (root == false) {
                  output.innerHTML += "<div class='inp'><p class='name'><span class='chg'>root</span><span class='at'>@</span>Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                  output.innerHTML += `<p class='err-msg'>Error: Must run as Root.</p>`;
                }
              }
              
              else if (command === "./void") {
                if (root == true) {
                  output.innerHTML += "<div class='inp'><p class='name'>root<span class='at'>@</span>Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                  alert("comming soon!")
                }else if (root == false) {
                  output.innerHTML += "<div class='inp'><p class='name'>user<span class='at'>@</span>Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                  output.innerHTML += `<p class='err-msg'>Error: Must run as Root.</p>`;
                }
              }
              
              else if (command === "sudo su" || command === "Sudo su" || command === "Sudo Su" || command === "sudo Su") {
                if (root == true) {
                  output.innerHTML += "<div class='inp'><p class='name'><span class='chg'>" + nameusr+ "</span><span class='at'>@</span>Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                  output.innerHTML += "<p class='err-msg'>u are root, duh. type exit to exit</p>";
                }
                output.innerHTML = "";
                output.innerHTML += "<div class='inp'><p class='name'><span class='chg'>" + nameusr+ "</span><span class='at'>@</span>Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                output.innerHTML += "<p class='err-msg'>root Entered.</p>";
                root = true;
                document.getElementById("root").innerHTML = '<span class="chg">root</span><span class="at">@</span>Void-04:~$ ';
                
              }
              
              else {
                
                output.innerHTML += "<div class='inp'><p class='name'><span class='chg'>" + nameusr+ "</span><span class='at'>@</span>Void-04:~$ </p><p class='msg'>  " + command + "</p></div>";
                output.innerHTML += `<p class='err-msg'>Error: Command '${command}' not found.</p>`;
            }

            // Clear the input field
            input.value = "";

            // Scroll to the bottom of the output div
            terminal.scrollTop = terminal.scrollHeight;
          }
        });

        // Set focus on the input field
        input.focus();

        var root = false;
        var rgb = false;
        var nameusr = "user"

        const list = `
        
        <div class="help-out">
<pre class="list-help out">
    Welcome to void-04, list of commands:
<span class="lins">
    ╔══════════════════════════════════╗
    ║ ./cheats - run cheats for games  ║
    ║══════════════════════════════════║
    ║ ./games - runs games to play     ║
    ║══════════════════════════════════║
    ║ ./links - fun links to visit     ║
    ║══════════════════════════════════║
    ║ rgb - change banner to rgb       ║
    ║══════════════════════════════════║
    ║ scp - run user script            ║
    ║══════════════════════════════════║
    ║ ls - list dir                    ║
    ║══════════════════════════════════║
    ║ clear - clear terminal           ║
    ║══════════════════════════════════║
    ║ edit - edit page                 ║
    ║══════════════════════════════════║
    ║ sudo su - Enter root             ║
    ║══════════════════════════════════║
    ║ exit - exit sudo root            ║
    ╚══════════════════════════════════╝
</span>
</pre>
            </div>
        
        `

        const lsdir = `
        
        <div class="help-out">
<pre class="list-help outp-msg">
    cheats    games    links

    void
</pre>
            </div>
        
        `

        const lnklist = `
        
        <div class="help-out">
<pre class="list-help outp-msg">
    <a class="linka" target="_blank" href="https://poki.pl/">Poki-games</a>    <a class="linka" target="_blank" href="http://chatz.rf.gd/index.php">chat-room</a>    <a class="linka" target="_blank" href="https://unblocked-games.s3.amazonaws.com/masked-special-forces.html">msked-spl-frce</a>

    <a class="linka" target="_blank" href="https://minesraft2.github.io/Blooket-Cheats/#">blo0ket-cheat</a>     [More coming soon]
</pre>
            </div>
        
        `

//"<p class='outp-msg'>Available commands: hello, alert, help</p>"

//page setting

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.title = "wya?";
  } else {
    document.title = "Void.X";
  }
});


//first time copping code for that little script to lazy to do it:
function checkcm() {
  let text = input.value.toLowerCase();
   if (text === "./links") {
    input.style.color = "rgb(144, 255, 125)";
  } else if (text === "rgb") {
    input.style.color = "rgb(144, 255, 125)";
  } else if (text === "scp") {
    input.style.color = "rgb(144, 255, 125)";
  } else if (text === "clear") {
    input.style.color = "rgb(144, 255, 125)";
  } else if (text === "edit") {
    input.style.color = "rgb(144, 255, 125)";
  } else if (text === "./cheats") {
    input.style.color = "rgb(144, 255, 125)";
  } else if (text === "./games") {
    input.style.color = "rgb(144, 255, 125)";
  } else if (text === "sudo su") {
    input.style.color = "rgb(144, 255, 125)";
  } else if (text === "./void") {
    input.style.color = "rgb(144, 255, 125)";
  } else if (text === "exit") {
    input.style.color = "rgb(144, 255, 125)";
  } else if (text === "ls") {
    input.style.color = "rgb(144, 255, 125)";
  } else if (text === "help") {
    input.style.color = "rgb(144, 255, 125)";
  } else if (text === "jeff") {
    input.style.color = "rgb(144, 255, 125)";
  } else{
      input.style.color = "rgb(247, 103, 103)";
  }
}
