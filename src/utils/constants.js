import {
  PicCenterOutlined,
  FormOutlined,
  BorderOuterOutlined,
  AlignCenterOutlined,
  BankOutlined,
  ImportOutlined,
  AuditOutlined,
  UserOutlined
} from '@ant-design/icons'


export const base_endpoint = "http://127.0.0.1:8000";
//export const base_endpoint = "https://api.routinex.shohayok.com";


export let headerx = {
  "Accept": "*/*",
  "Content-Type": "application/json"
}

export const aregex = /^\/admin\/.*$/;

export const navItem = [{ "name": "Student", "route": "/" }, { "name": "Teacher", "route": "/teacher" }, { "name": "Room", "route": "/room" }, { "name": "Empty Room", "route": "/empty" }];

export const navItemAdmin = [
  {
    "label": "Routine", "key": "/admin/routine",
    "icon": <PicCenterOutlined style={{ marginRight: 5 }} />
  },
  {
    "label": "Semester", "key": "/admin/semester",
    "icon": <PicCenterOutlined style={{ marginRight: 5 }} />
  },
  {
    "label": "Course List", "key": "/admin/course",
    "icon": <FormOutlined style={{ marginRight: 5 }} />
  },
  {
    "label": "Section", "key": "/admin/section",
    "icon": <BorderOuterOutlined style={{ marginRight: 5 }} />
  },
  {
    "label": "Faculty", "key": "/admin/faculty",
    "icon": <AlignCenterOutlined style={{ marginRight: 5 }} />
  },
  {
    "label": "Rooms", "key": "/admin/room",
    "icon": <BankOutlined style={{ marginRight: 5 }} />
  },
  {
    "label": "Generate", "key": "/admin/generate",
    "icon": <ImportOutlined style={{ marginRight: 5 }} />
  },
  {
    "label": "Admin/Staff", "key": "/admin/list",
    "icon": <AuditOutlined style={{ marginRight: 5 }} />
  },
  {
    "label": "Profile", "key": "/admin/profile",
    "icon": <UserOutlined style={{ marginRight: 5 }} />
  },
];

export const semesterx = [{ value: "Spring_2025" }, { value: "Fall_2024" }, { value: "Spring_2024" }, { value: "Fall_2023" }, { value: "Spring_2023" }];

export const termx = [{ value: "1st Year(1st Term)" }, { value: "1st Year(2nd Term)" }, { value: "2nd Year(1st Term)" }, { value: "2nd Year(2nd Term)" }, { value: "3rd Year(1st Term)" }, { value: "3rd Year(2nd Term)" }, { value: "4th Year(1st Term)" }, { value: "4th Year(2nd Term)" }, { value: "Univeral Retake" }];

export const departmentx = [
  { value: "CSE" },
  { value: "EEE" },
  { value: "NFE" },
  { value: "CVIL" },
  { value: "ENGLISH" },
  { value: "BBA" },
  { value: "LAW" },
  { value: "PHARMACY" }
];

export const facultyx = [
  { value: "FSIT" },
  { value: "FB" },
];

export const building = [
  { value: "KT" },
  { value: "AB4" },
  { value: "AB1" },
  { value: "AB0" },
  { value: "CT" },
  { value: "CT2" },
];

export const floor = [
  { value: "1" },
  { value: "2" },
  { value: "3" },
  { value: "4" },
  { value: "5" },
  { value: "6" },
  { value: "7" },
  { value: "8" }
];


export const roomtype = [
  { value: "THEORY" },
  { value: "LAB" }
];
export const days = [
  { value: "Sat" },
  { value: "Sun" },
  { value: "Mon" },
  { value: "Tue" },
  { value: "Wed" },
  { value: "Thu" },
];




export const options = [
  {
    value: '1',
    label: 'Not Identified',
  },
  {
    value: '2',
    label: 'Closed',
  },
  {
    value: '3',
    label: 'Communicated',
  },
  {
    value: '4',
    label: 'Identified',
  },
  {
    value: '5',
    label: 'Resolved',
  },
  {
    value: '6',
    label: 'Cancelled',
  },
  {
    value: '1',
    label: 'Not Identified',
  },
  {
    value: '2',
    label: 'Closed',
  },
  {
    value: '3',
    label: 'Communicated',
  },
  {
    value: '4',
    label: 'Identified',
  },
  {
    value: '5',
    label: 'Resolved',
  },
  {
    value: '6',
    label: 'Cancelled',
  },
  {
    value: '1',
    label: 'Not Identified',
  },
  {
    value: '2',
    label: 'Closed',
  },
  {
    value: '3',
    label: 'Communicated',
  },
  {
    value: '4',
    label: 'Identified',
  },
  {
    value: '5',
    label: 'Resolved',
  },
  {
    value: '6',
    label: 'Cancelled',
  },
];

export const roles = [
  { value: "Admin" },
  { value: "Staff" },
]
