import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "734e57b0-c150-4326-acc1-c5efa70a9b56"
	}
})

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data);
	},
	followUser(userId) {
		return instance.post(`follow/${userId}`);
	},
	unFollowUser(userId) {
		return instance.delete(`follow/${userId}`);
	}
}
export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`);
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`);
	},
	updateStatus(status) {
		return instance.put(`profile/status`, {status});
	}
}
export const authAPI = {
	me() {
		return instance.get('auth/me');
	},
	logIn(email, password, rememberMe = false) {
		return instance.post('auth/login', {
			email,
			password,
			rememberMe
		})
	},
	logOut() {
		return instance.delete('auth/login');
	}
}