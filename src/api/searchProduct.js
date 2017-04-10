export default (text) => (
    fetch(`http://localhost:3000/search/${text}`)
    .then(res => res.json())
);
