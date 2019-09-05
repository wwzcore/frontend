export function check (user) {
  if (!checkEmail(user.email)) { return { field: 'email' } }
  if (!checkName(user.name)) {
    return { field: 'name' }
  }
  checkPhone(user.phone)
  checkMallName(user.mallName)
  checkRealName(user.realName)
  checkSex(user.sex)
}

function checkName (name) {
  return true
}

function checkEmail (email) {
  let emailLegal = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  return emailLegal.test(email)
}

function checkPhone (phone) {
}

function checkMallName (mallName) {
}

function checkRealName (realName) {
}

function checkSex (sex) {
}
