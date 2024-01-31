const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to take user input
function getUserInput(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Function to save inputs to a JSON file
function saveToJsonFile(data) {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync('inputs.json', jsonData);
  console.log('Inputs saved to inputs.json');
}

// Function to read inputs from the JSON file
function readFromJsonFile() {
  try {
    const data = fs.readFileSync('inputs.json', 'utf-8');
    const parsedData = JSON.parse(data);
    console.log('Inputs from inputs.json:', parsedData);
  } catch (error) {
    console.error('Error reading inputs from inputs.json:', error.message);
  }
}

// Main function
async function main() {
  const input1 = await getUserInput('Enter the first input: ');
  const input2 = await getUserInput('Enter the second input: ');

  const inputData = {
    input1,
    input2
  };

  saveToJsonFile(inputData);
  readFromJsonFile();

  rl.close();
}

// Run the main function
main();
