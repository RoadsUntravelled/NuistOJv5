function keyMirror (obj) {
  if (obj instanceof Object) {
    var mirrorObj = {...obj}
    var keyArray = Object.keys(obj)
    keyArray.forEach(key => {
      mirrorObj[key] = key
    })
    return mirrorObj
  }
}
/* eslint-disable */
// eslint-disable-next-line
export default keyMirror({
	'CHANGE_MODAL':null,
	'SET_USER_PROFILE':null
})
