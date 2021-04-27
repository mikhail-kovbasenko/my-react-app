import { createSelector } from "reselect";

export const getAllUsers = state => state.friends.users;
export const getCurrentPage = state => state.friends.currentPage;
export const getPageSize = state => state.friends.pageSize;
export const getTotalUsersCount = state => state.friends.totalUsersCount;
export const getIsFetching = state => state.friends.isFetching;
export const getFollowingProgress = state => state.friends.followingInProgress;
export const getAllUsersSuper = createSelector(getAllUsers, users => {
	return users.filter(user => true);
});
