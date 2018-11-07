let pwd = require("./pwd");
let ls = require("./ls");
let cat = require("./cat");

function CB(input) {
  input = input.toString().trim();
  if (input === "ls") {
    ls();
  } else if (input === "pwd") {
    pwd();
  } else if (input === "cat") {
    process.stdout.write("Which file would you like to view?");

    process.stdin.on("data", function(data) {
      data = data.toString().trim();
      cat(data);
    });
    //process.stdout.write(ans);
  } else {
    process.stdout.write(input);
    process.stdout.write("\nprompt > ");
  }
}

process.stdout.write("prompt > ");
process.stdin.on("data", CB);

/*
process.stdin.on('data', (data)=> {
	let cmd = data.toString().trim();
	if(cmd = 'pwd'){
		pwd()}
		else if(cmd = 'ls'){ls()}
			else{process.stdout.write('You typed: ' + cmd)}
});

*/
