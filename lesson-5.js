// if
if (1 < 0) {
  console.log('benar')
}

if (1 > 0) console.log('benar')

// if else

if (10 > 11) {
  console.log('tidak masuk')
} else {
  console.log('masuk')
}

// if else if

if (10 > 11) {
  console.log('tidak masuk')
} else if (20 < 30) {
  console.log('masuk')
} else {
  console.log('tidak masuk')
}

// switch

const val = 11

switch (val) {
  case 0:
    console.log('masuk 0')
    break
  case 1:
    console.log('masuk 1')
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 10:
    console.log('masuk 10 dan 2,3,4,5,6')
    break
  default:
    console.log('masuk default')
}

// ternary
const benar = true

benar ? console.log('true') : console.log('salah')

// nullish coalescing
const value = false

const nullish = value ?? 'salah'

console.log(nullish)

const banding = 'nilai'

console.log(Boolean(banding))

console.log(!!banding)

if (!!banding) console.log('masuk')
if (banding) console.log('masuk')

const arr = undefined || ['a','b']

arr?.map(a => a)

if (arr) {
  arr.map(a => a)
}
