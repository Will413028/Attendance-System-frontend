import config from "../config/config";

function getQRcodeURL(user_id, token, latitude, longitude, time) {
    let baseURL = config.baseApi;
    return `${baseURL}/attendanceQRcode?user_id=${user_id}&token=${token}&latitude=${latitude}&longitude=${longitude}&date=${time}`;
}

export default getQRcodeURL