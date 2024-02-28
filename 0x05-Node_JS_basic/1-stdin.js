process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const yourName = process.stdin.read();

  if (yourName) {
    process.stdout.write(`Your name is: ${yourName}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
