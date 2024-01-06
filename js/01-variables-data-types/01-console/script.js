// log number
console.log(100);

//log string 
console.log('xin chào');

// log multiple values
console.log(20, 'xin chào ',true);

// log a variable
const x = 100;
console.log(x);

// console error as warning 
console.error('error');
console.warn('warning');

// log object as table
console.table({
    name : 'xuyên',
    email : 'xuyên@gmail.com',
    age : 20,
});

// group console commands

console.group('group');
console.log('1');
console.log('2');
console.log('3');
console.groupEnd();

// add CSS to logs

const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);