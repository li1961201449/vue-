// 封装axios库
import axios from 'axios';
export default function ajax(url,data={},type='GET'){
    if(type == 'get'){
        return axios.get(url,{ //get请求方式
            params:data //指定参数
        })
    }else{
        return axios.post(url,data) //post请求
    }
}


// 请求接口

