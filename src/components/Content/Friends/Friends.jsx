import Friend from './Friend/Friend';
import style from './Friends.module.css';

const Friends = props => {
	console.log(props);
	const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	const pages = [];
	const onPageButtonClick = pageNum => {
		props.changePage(pageNum);
	}
	const follow = userId => {
		props.followUser(userId);
	}
	const unfollow = userId => {
		props.unFollowUser(userId);
	}
	for(let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	const getPageButtons = pages.map(pageNum => {
		const active = pageNum === props.currentPage ? style.active : null;

		return (
			<div className={`${style.friends_page_button} ${active}`} 
				  key={pageNum}
				  onClick={onPageButtonClick.bind(null, pageNum)}>{pageNum}</div>
		)
	});
	const getFriends = props.users.map(user => {
		return <Friend userId={user.id}
							photos={user.photos}
							followed={user.followed}
							name={user.name}
							status={user.status}
							key={user.id}
							follow={follow}
							unfollow={unfollow}
							followingInProgress={props.followingInProgress}
							/>
	})
	return (
		<div className={style.friends_content}>
			<div className={style.friends_pagination}>
				<div className={style.friends_pagination_content}>
					{getPageButtons}
				</div>
			</div>
			<div className={style.friends_list}>
				<div className={style.friends_list_container}>
					{getFriends}
				</div>
			</div>
		</div>
	)
}

export default Friends;
