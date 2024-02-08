const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get("id");

if (id) {
  console.log(id.toUpperCase());
}

console.log(id?.toUpperCase());
console.log(id!.toUpperCase());

if (typeof id === 'string') {
  console.log(id.toUpperCase());
}
