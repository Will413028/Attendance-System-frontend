import config from "../config/config";

function getQRcodeURL(user_id, token, latitude, longitude, time) {
    let baseURL = config.baseApi;
    return `${baseURL}/createAttendanceQRcode?user_id=${user_id}&token=${token}&latitude=${latitude}&longitude=${longitude}&timestamp=${time}`;
}

export default getQRcodeURL