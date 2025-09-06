let employee: {
	id: number
	name: string
} = {
	id: 1,
	name: ""
}

employee.name = "Mosh"

// or you can make a property optional
// only use it if it makes sense

const customer: {
	id: number
	name: string
	coffee?: boolean
} = { id: 1, name: "Joe" }

customer.name = "Jenna"
