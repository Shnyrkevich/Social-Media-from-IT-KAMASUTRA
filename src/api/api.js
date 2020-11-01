import * as axios from 'axios';

const baseURL = 'https://social-network.samuraijs.com/api/1.0';

const instanceWithKey = axios.create({
  withCredentials: true,
  baseURL: baseURL,
  headers: {
    "API-KEY": "ca5aef3c-904f-4101-8474-7c3b4dd77fb0"
  }
});

const instanceWithoutKey = axios.create({
  withCredentials: true,
  baseURL: baseURL,
});

export const usersApi = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    return instanceWithoutKey.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data);
  },
  postFollowUser: (id) => {
    return instanceWithKey.post(`follow/${id}`, null).then(res => res.data);
  },
  deleteUnfollowUser: (id) => {
    return instanceWithKey.delete(`follow/${id}`).then(res => res.data);
  }
};

export const profileApi = {
  getUserProfile: (userId) => instanceWithoutKey.get(`profile/${userId}`).then(res => res.data),
};

export const authRequest = () => instanceWithoutKey.get('auth/me').then(res => res.data);

