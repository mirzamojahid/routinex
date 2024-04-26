//export const base_endpoint = "http://127.0.0.1:8000";
export const base_endpoint = "https://api.routinex.shohayok.com";

export let headerx = {
    "Accept": "*/*",
    "Content-Type": "application/json"
}
export const aregex = /^\/admin\/.*$/;

export const navItem = [{ "name": "Student", "route": "/" }, { "name": "Teacher", "route": "/teacher" }, { "name": "Room", "route": "/room" }, { "name": "Empty Room", "route": "/empty" }];

export const navItemAdmin = [{ "name": "Assigned", "route": "/admin/assigned" }, { "name": "Course Offer", "route": "/admin/course" }, { "name": "Faculty", "route": "/admin/faculty" }, { "name": "Room Assigned", "route": "/admin/room" }, { "name": "Generate", "route": "/admin/generate" }];