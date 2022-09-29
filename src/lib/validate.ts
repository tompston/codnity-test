/**
 * References
 * - password regex https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
 *
 */
const REGEX_PATTERNS = {
    email:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/,
}

/**
 * ### Util function for validating input against regex pattern
 * @param regex_pattern regex pattern  that neeeds to match the input
 * @param input string
 * @returns boolean if the input matches the regex pattern, else return false
 */
export function regexIsValid(regex_pattern: RegExp, input: string): boolean {
    if (regex_pattern.test(input)) {
        return true
    }
    return false
}

/**
 * @param input email string
 * @returns true if email is correct, else return false
 */
export function emailIsValid(input: string): boolean {
    return regexIsValid(REGEX_PATTERNS.email, input)
}

/**
 * Password checks
 * - at least 8 letters long
 * - characters a to z (uppercase + lowercase)
 *
 * @param input password string
 * @returns true if password is correct, else return false
 */
export function passwordIsValid(input: string): boolean {
    return regexIsValid(REGEX_PATTERNS.password, input)
}