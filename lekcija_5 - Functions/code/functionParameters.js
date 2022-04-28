
function printMessage(message) {
  console.log(message);
}

function printMessageManyTimes(message = 'DEFAULT_MESSAGE', n = 1) {
    for (let i = 0; i < n; i++) {
      console.log(message);
    }
}

printMessageManyTimes('Hello, World!');