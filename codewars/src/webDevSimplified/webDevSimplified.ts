type User = {
readonly id: string
    name: string
    age: number
    address: {
        street: string
        city: string
    }
}

// type T = Readonly<User>
type T = Record<"admin" | "user", {test: string}>
const a:T = {
    admin: {test: "sde"},
    user: {test: "sde"},
}

type Role = "admin" | "user" | "moderator"
type OtherRole = "testing" | "admin" | "user" | "security"

type T = Extract<Role, OtherRole>
type T = Exclude<Role, "user">


function createUserWithAddress(user: Required<User>)
function createUser(user: Omit<User, "id">) {}
function updateUser(user: Partial<User>) {}
function renderUserDetails(user: Pick<User, "name" | "age">) {
    console.log(user.name, user.age)
}

const user: User = {
    name: "Nichole",
    age: 30, 
    address: {
        city: "sdf",
        street: "sdf",
    },
    id: "sdf"
}

renderUserDetails({name: "Nichole", age: 30})

createUser({name: "Kyle", age: 30, address: {street: "sdf", city: "sdf"}})

updateUser({age: 20})
console.log(User)

Object.freeze()

function getUser(id: string: age: number) {
    return {name: "kyle", id, age}
}

type T = ReturnType<typeof getUser>
type T = Parameters<typeof getUser>

const a:T = ["sdred", 34]

function getUserWrapper(id: Parameters<typeof getUser>[0], other: boolean) {
    return getUser(id)
}

class User {
    name: string

    constructor(name:string) {
        this.name = name
    }
}

type T = ConstructorParameters<typeof User>
type T = InstanceType<typeof User>

type A = string | null | undefined

type T = NonNullable<A>

async function getUser(id:string) {
    return Promise.resolve({name: "sd"})
}

type T = Awaited<ReturnType<typeof getUser>>

type S = "Hello World"
type L = Lowercase<S>
type U = Uppercase<S>
type C = Capitalize<S>
