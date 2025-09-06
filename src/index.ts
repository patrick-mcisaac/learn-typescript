let sales = 123_456_789
let course = "Typescript"
let is_published: boolean = true
// you dont have to declare the type

// not initializing creates type any
// avoid because you can change it from number to string or etc...
let level

function render(document: any) {
	console.log(document)
}

sales
course
is_published
level
render("hi")
