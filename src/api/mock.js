import Mock from 'mockjs';
import attendanceApi from './mockData/attendance';

Mock.mock('/attendance', attendanceApi.getAttendanceData);