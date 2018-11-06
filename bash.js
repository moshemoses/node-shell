let pwd = require("./pwd");
let ls = require("./ls");

function CB(input) {
  input = input.toString().trim();
  if (input === "ls") {
    ls();
  } else if (input === "pwd") {
    pwd();
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
