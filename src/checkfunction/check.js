export function check (user) {
  if (!checkEmail(user.email)) { return false }
  checkName(user.name)
  checkPhone(user.phone)
  checkMallName(user.mallName)
  checkRealName(user.realName)
  checkSex(user.sex)
}

function checkName (name) {
}

function checkEmail (email) {
  let emailLegal = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  if (!emailLegal.test(email)) {
    alert('邮件地址不合规！')
    return (false)
  }
}

function checkPhone (phone) {
}

function checkMallName (mallName) {
}

function checkRealName (realName) {
}

function checkSex (sex) {
}
