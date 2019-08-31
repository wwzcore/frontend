export function check(user) {
    let userPrompt = { emailPrompt:'', namePrompt:'', phonePrompt:'', mallNamePrompt:'', realNamePrompt:'', sexPrompt:'' }
    this.userPrompt.emailPrompt = checkEmail(user.email)
    let namePrompt = checkName(user.name)
    let phonePrompt = checkPhone(user.phone)
    let mallNamePrompt = checkMallName(user.mallName)
    let realNamePrompt = checkRealName(user.realName)
    let sexPrompt = checkSex(user.sex)
    alert(userPrompt.emailPrompt)
    return userPrompt

}

function checkName(name) {
}

function checkEmail(email) {
    let emailLegal = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (!emailLegal.test(email)) {
        return ("邮件地址不合规！");
    }
}

function checkPhone(name) {
}

function checkMallName(name) {
}

function checkRealName(name) {
}

function checkSex(name) {
}