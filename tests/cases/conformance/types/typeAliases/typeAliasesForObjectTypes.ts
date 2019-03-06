type T1 = { x: string }

// An interface can be named in an extends or implements clause, but a type alias for an object type literal cannot.
interface I1 extends T1 { y: string }
class C1 implements T1 {
    x: string;
}

// An interface can have multiple merged declarations, but a type alias for an object type literal cannot.
type T2 = { x: string }
type T2 = { y: number }

// An interface can have type parameters, but a type alias for an object type literal cannot.
type T3<T> = { x: T }


// Repro from #29991

const a: Required<{ a?: 1; x: 1 }> = { a: 1, x: 1 };
const b: Required<{ b?: 1; x: 1 }> = { b: 1, x: 1 };
export let A = a;
export let B = b;
A = b; // No Error
B = a; // No Error

a.b; // Property 'b' does not exist on type 'Required<{ a?: 1; x: 1; }>'.
b.a; // Property 'a' does not exist on type 'Required<{ b?: 1; x: 1; }>'.
