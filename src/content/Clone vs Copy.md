---
id: Clone vs Copy
tags:
  - post
  - rust
title: Clone vs Copy
---

Rust offers two traits in regards to copying data structures, [Clone](https://doc.rust-lang.org/std/clone/trait.Clone.html)
and [Copy](https://doc.rust-lang.org/std/marker/trait.Copy.html), but there's often confusion regarding what these two traits mean.

Why are there two of them? What are the differences between them? When should you use one over the other?

In my experience it's best to start with the `Copy` trait because it's an invisible trait that you won't ever see explicitly called.

## Copy

`Copy` has two implications on a data structure that implements it. The first is the actual behavior that a structure that implements `Copy` has.
If a struct or enum implements `Copy`, Rust will effectively insert an invisible, unnamed method on your data structure. 
This unnamed method will do a trivial bitwise copy of all of the data within your struct or enum. This behavior cannot be modified. 
The second implication is that you are telling Rust that your struct does not implement move semantics but instead implments *copy* semantics.

The easiest way to visualize this is using Rust's number types, all of which implement `Copy` because numbers can easily be copied.

```rust
let x = 100;
// Y does not take ownership of the value 100, but instead it is copied from X to Y.
let y = x;

println!("X is {}", x);
println!("Y is {}", y);
```

This code works because integers and floats implement `Copy`, and during an operation where a move would normally be performed, such as `let y = x`, a copy is done instead.

`Copy` is very useful because it makes many operations easier. We can assign and reassign, copy and modify numbers as much as we want and never have to think about the borrow checker.

This is not true for something like a [Vec](https://doc.rust-lang.org/std/vec/struct.Vec.html).

```rust
let x = vec![1,2,3];
// The vector is moved from x to y becuase vec does not implement Copy.
let y = x;

println!("X is {:?}", x);
```

Rust will throw an error here, telling us that if we wish to have two different vectors that have the same contents, we need to call `clone()` on the `Vec`.

When we look at the structure of a `Vec`, things begin to make sense. A Vec exists on the *stack* as a struct with three elements.

The simplified structure looks like this.

```rust
struct Vec<T>
{
    capacity: usize,
    len: usize,
    ptr: NonNull<T>
}
```

What isn't explicitly shown here is that `Vec` expects to *uniquely* own the data pointed to by `ptr`. This data is located on the heap and is dynamically allocated.
If we were to trivially copy a `Vec`, this would also trivially copy the pointer—and thus have two pointers to the same area of memory.

When we `clone` a `Vec` on the other hand, the vector has to manually and explicitly go through the work of allocating a new area of memory and copying each element to the new pointer, then returns a *new* Vec with the same length but a different pointer.

This is what `clone` is for: a custom, bespoke operation that returns a new instance of `T` that may or may not be expensive.

## Clone 

`Vec` is but one example of a type that can be cloned but not copied. [Rc](

