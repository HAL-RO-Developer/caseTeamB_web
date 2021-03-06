import axios from 'axios'
import auth from './auth'
URL = 'https://caseteambserver-wkxcvgrrxm.now.sh/';
const api = axios.create({
    baseURL: URL, // バックエンドB のURL:port を指定する
    headers: {
        'ContentType': 'application/json',
        'Authorization': auth.GetToken()
    },
    responseType: 'json'
});

class Http {
    constructor() { }
    SetToken(t){
        localStorage.setItem("token", t)
        http.Load();
    }
    GetToken(){
        return localStorage.getItem("token")
    }
    RemoveToken(){
        localStorage.removeItem("token")
    }
    signin(name, pass) {
        return api.post('signin', {
            name,
            pass
        })
    }
    signup(name, pass) {
        return api.post('signup', {
            name,
            pass
        })
        alert("Siginup");
    }
    getpin(goal_id) {
        return api.post('device', {
            goal_id
        })
    }
    getid() {
        return api.get('device')
    }
    delebutton(device_id) {
        return api.delete('device/' + device_id, {
        })
    }
    delemessage(request) {
        return api.delete('message/' + request, {
        })
    }
    /*
    getgoal() {
        return new Promise((callback) => {
            var res = {
                data: {
                    goals: [{
                            id: '1',
                            name: 'hoge',
                            update_at: '2018-06-21T13:35:08+09:00',
                            total: '20',
                            curentcnt: '3'
                        },
                        {
                            id: '2',
                            name: 'foo',
                            update_at: '2018-06-21T13:35:08+09:00',
                            total: '25',
                            curentcnt: '19'
                        },
                        {
                            id: '3',
                            name: 'foga',
                            update_at: '2018-06-21T13:35:08+09:00',
                            total: '41',
                            curentcnt: '20'
                        }
                    ]
                }
            }
            callback(res)
        })
    }
    */
    addgoal(child_id, content, criteria, deadline) {
        return api.post('goal', {
            child_id,
            content,
            criteria,
            deadline
        })
    }
    getgoal() {
        return api.get('goal')
    }
    putgoal(goal_id, device_id) {
        return api.put('goal', {
            goal_id,
            device_id
        })
    }
    delegoal(goal_id) {
        return api.delete('goal' + goal_id, {
        })
    }
    addchild(nickname, birthday, sex) {
        return api.post('child', {
            nickname,
            birthday,
            sex

        })
    }
    getchild() {
        return api.get('child')
    }
    delechild(child_id) {
        /*
        return api.delete('child', {
             child_id
        })
        */
        return api.delete('child/' + child_id, {
        })
    }
    getmessage() {
        return api.get('message')

    }
    addmessage(goal_id, message_call, message) {
        return api.post('message', {
            goal_id,
            message_call,
            message

        })
    }
}
var http = new Http()
export default http;