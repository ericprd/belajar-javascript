// logical operators

// OR
// kondisi 1    kondisi 2     hasil
// true         true          true
// true         false         true
// false        true          true
// false        false         false

1 || 1 ? console.log('true') : console.log('false')
1 || 0 ? console.log('true') : console.log('false')
0 || 1 ? console.log('true') : console.log('false')
0 || 0 ? console.log('true') : console.log('false')

0 || 0 || 1 || 0 ?  console.log('true') : console.log('false')

// AND
// kondisi 1    kondisi 2     hasil
// true         true          true
// true         false         false
// false        true          false
// false        false         false

1 && 1 ? console.log('true') : console.log('false')
1 && 0 ? console.log('true') : console.log('false')
0 && 1 ? console.log('true') : console.log('false')
0 && 0 ? console.log('true') : console.log('false')

0 && 0 && 1 ? console.log('true') : console.log('false')

// NOT

console.log(!true)
