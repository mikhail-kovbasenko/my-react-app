import { NavLink } from 'react-router-dom';
import style from './Sidebar.module.css';

const Sidebar = props => {
	const getSidebarItems = props.items.map((item, index) => {
		return (
			<div className={style.sidebar_item} key={index}>
				<NavLink to={item.to} activeClassName={style.sidebar_item__active}>{item.title}</NavLink>
			</div>
		)
	})
	return (
		<div className={style.sidebar}>
			<div className={style.sidebar_content}>
				{getSidebarItems}
			</div>
		</div>
	)
}

export default Sidebar;