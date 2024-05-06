export const base_endpoint = "http://127.0.0.1:8000";
//export const base_endpoint = "https://api.routinex.shohayok.com";

export let headerx = {
    "Accept": "*/*",
    "Content-Type": "application/json"
}

export const aregex = /^\/admin\/.*$/;

export const navItem = [{ "name": "Student", "route": "/" }, { "name": "Teacher", "route": "/teacher" }, { "name": "Room", "route": "/room" }, { "name": "Empty Room", "route": "/empty" }];

export const navItemAdmin = [{ "label": "Routine", "key": "/admin/routine" }, { "label": "Course Offer", "key": "/admin/course" }, { "label": "Section", "key": "/admin/section" }, { "label": "Faculty", "key": "/admin/faculty" }, { "label": "Room Assigned", "key": "/admin/room" }, { "label": "Generate", "key": "/admin/generate" }];