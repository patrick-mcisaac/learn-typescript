// enums let you define constants inside a group

// use PascalCase

// default value is like an array index :  0, 1, 2 etc

// we can set the values if we want
const enum Size {
	Small = 1,
	Medium,
	Large
}

// access it like this
let mySize: Size = Size.Small

console.log(mySize)

// if we set first value to a number, the rest will have value numbers in order

// ie. Small = 1, Medium would have 2, Large would have 3

// if we set value to string, we need to set them for all
