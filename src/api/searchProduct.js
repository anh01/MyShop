export default (text) => (
    fetch(`http://localhost:3000/search/${text}`)// eslint-disable-line
    .then(res => res.json())
);
