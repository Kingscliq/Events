export const resetErrorMessage = () => ({ type: 'RESET_ERROR_MESSAGE' });
export const logError = (msg) => ({ type: 'LOG_ERROR', msg: msg });
export const parseError = (errArr, errMsg) => errArr.join('\n') || errMsg;