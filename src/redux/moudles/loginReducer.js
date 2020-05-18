const loginReducer = (state ='', action) => {
    switch (action.type) {
        case 'loginout':
            var str1=window.location.href.split("").reverse().join("");
            var str2=str1.substring(0,str1.indexOf('/'));
            var str3=str2.split("").reverse().join("");
            localStorage.removeItem('token');
            localStorage.removeItem('userInfo');
            window.location.href=window.location.href.split(str3)[0]+'/login';
        return state;
        case 'loginTo':
        console.log(action)
            localStorage.setItem('token',action.value);
            localStorage.setItem('userInfo',action.value);
        return state;
        default:
            return state;
    }
}
export default loginReducer;