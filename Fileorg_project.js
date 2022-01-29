//For taking input from command line terminal, there's pre-built function present in javascript
// process.argv[], it stores the file name and subsequent value in a type of array, and we can print that value so that we can get, what user has entered in the terminal

//let input = process.argv[2]
let inputArr = process.argv.slice(2); //we are using slice method, it won't give first two elements
console.log(input)
let command = inputArr[0];//we are using zero index, because slice function, also change indexing
//argv means argument vector or we can say argument value in layman terms.
//process.argv stores node filename value to be entered, and provide them index and by index we can get, what is typed in the terminal.
//PS D:\web dev\Node js\File Manager Project> node cmd_input_in_js.js hello          
//output at terminal - hello
//process.argv do store it in array, but it can also give numbers in output

//it's use case is given below

switch (command){
    case 'tree':
        console.log('tree implemented');
        break;
    case 'organsize':
        console.log('organising things');
        break;
    case 'help':
        console.log('help implemented')//we can join a function with it too
        //helpfn()
        break;
    
    default:
        console.log('please enter a valid argument')
        break;
        ////default works even for invalid and no argument
}
function helpfn(){
    console.log(`list of all the commands-
                  1) Tree Command node FO.js tree <dirname>
                  2) Organise Command - node F0.js organize <dirname>
                  3) Help Command - node FO.js help`)//When we want to print like this, in multiple lines using single console.log, instead of commas, we have to use backtick i.e key above tab
}