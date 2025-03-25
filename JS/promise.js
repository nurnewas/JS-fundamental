const myLoader = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random;
    if (success <= 0.5) {
      resolve(success);
    } else {
      reject(success);
    }
  });
};

async function loadData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.formData();
  console.log(data);
}
loadData();

const taskLoader = async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
}