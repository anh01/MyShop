export default () => (
    fetch('http://localhost:3000/initData')
    .then(res => res.json())
);
