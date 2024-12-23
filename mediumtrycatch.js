/**
 * Try - Catch Blocks:Error Handling
 * try-catch blocks are the most basic structure used for handling in
 * JavaScript. Codes that are likely to cause errors are run in the try
 * block, and these errors are caught in the catch block. Let’s look at how
 * we can catch errors using this structure with sample codes:
 * 
 */
try {
    let x = y + 10;
}catch(error){
    console.log("Error:" + error.message);
}

/**
 * in thee example above, a "ReferenceError" will occur because the "y"
 * variable is not defined in the try block. This error will be caught in the 
 * catch block and print an error message to the console. let's look at another example below
 * 
 */
try {
    let json = '{"name" :"Jale", "age":30}';
    let user = JSON.parse(json)

    if(!user.email){
        throw new SyntaxError ("Field 'email' not found in JSON");
    }
}catch(error){
    if(error instanceof SyntaxError){
        console.log("SyntaxError Error Caught: " + error.message);
    } else {
        console.log("An unexpected error occurred: " + error.message);
    }
}

/**
 * Throwing Errors and Using Throw✨
 * 
 * We use the throw statement in JavaScript to raise and handle an error under certain conditions. When an error occurs, the program flow
 * automatically returns to the nearest try-catch block or above where it was called. Let’s continue with the example:
 * 
 */

function validateEmail(email) {
    if (!email.includes('@')) {
        throw new Error("Invalid email address: '@' character not found!");
    }
    return "Valid email address!";
}

try {
    console.log(validateEmail("johnexample.com"));
} catch (error) {
    console.log("Error Caught:" + error.message);
}

/**
 * Running Code in Any Case with Finally✨
 * 
 * The finally block is used after the try-catch blocks and is used to define the code block that will be executed in any case. This block is
 * executed whether an error occurs or not, and even if a return statement is used in the try block. Let’s take a look at the sample code block
 * 
 * 
 */

try {
    console.log("try block: The code is running...");
} catch (error) {
    console.log("Error Caught: " + error);
} finally {
    console.log("finally block: Executed in all cases.");
}