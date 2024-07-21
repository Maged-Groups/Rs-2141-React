import { memo } from "react"


function ValidatePassword({ password, passwordConfirmation }) {
    console.log('ValidatePassword')

    const has_upper = /[A-Z]/.test(password);
    const has_lower = /[a-z]/.test(password);
    const has_digit = /[\d]/.test(password);

    let percent = 0;

    if (has_upper) {percent += 20}
    if (has_lower) {percent += 20}
    if (has_digit) {percent += 20}

    return <div>
        <p>{has_upper ? '✅' : '❌'} Uppercase letters</p>
        <p>{has_lower ? '✅' : '❌'} Lowercase letters</p>
        <p>{has_digit ? '✅' : '❌'} Digits</p>
        <p>{false ? '✅' : '❌'} Symbols</p>
        <p>{false ? '✅' : '❌'} Between 8 and 16 charachters</p>
        <p>{false ? '✅' : '❌'} Passwords Match</p>

        <div className="p-2 border bg-green-800 mt-3" style={{width: `${percent}%`}}></div>
    </div>


}


export default memo(ValidatePassword)