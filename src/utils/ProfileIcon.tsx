interface IProps {
	src: string;
	alt: string;
}

const ProfileIcon = (props: IProps) => {
	return (
		<div className="profile-icon">
			<picture>
				<img src={props.src} alt={props.alt} />
			</picture>
		</div>
	);
};

export default ProfileIcon;
