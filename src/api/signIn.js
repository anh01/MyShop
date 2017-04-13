const url = 'http://app.nhodala.com/dangnhap.php';
const getOption = (username, password) => ({
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
});

const signIn = (username, password) => (
    fetch(url, getOption(username, password)) // eslint-disable-line
    .then(res => res.json())
);

export default signIn;
