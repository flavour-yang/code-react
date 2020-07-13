/*
 * @Author: your name
 * @Date: 2020-07-12 23:46:06
 * @LastEditTime: 2020-07-12 23:59:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app\src\store\reducer.js
 */
const defaultState = {
    focused: false
};
export default (state = defaultState, action) => {
    if (action.type === 'search_focus') {
        return {
            focused: true
        }
    }
    if (action.type === 'search_blur') {
        return {
            focused: false
        }
    }
    return state
}