// const URL = 'http://192.168.83.129:2500/api/users/';
const URL = 'http://blitz.cs.niu.edu/UserRest/api/users/';
const secret = btoa('admin:secret');
let message = '';
let user = '';

function setUser(u) {
    user = u;
}
function setMessage(m) {
    message = m;
}
function getMessage() {
    let tmp = message;
    message = '';
    return tmp;
}
export { URL, secret, user, setUser, getMessage, setMessage };