// This is just me playing around with strings :)

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
console.log(secretMessage.length);
secretMessage.push('to');
secretMessage.push('Program');
secretMessage[secretMessage.indexOf('easily')] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.fill('know,', 6, 11);
console.log(secretMessage);
console.log(secretMessage.join(' '));
