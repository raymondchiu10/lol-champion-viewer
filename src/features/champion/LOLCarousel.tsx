import { Swiper, SwiperSlide } from "swiper/react";
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Autoplay,
} from "swiper/modules";
import { getChampionLoadingAsset } from "../../api/getChampionAsset";
import { ChampionSkin } from "../../api/types_champion-detailed";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

interface IProps {
	champion: string;
	data: Array<ChampionSkin>;
}

const LOLCarousel = (props: IProps) => {
	const createElement = (item: ChampionSkin, index: number) => {
		const championSplash = getChampionLoadingAsset(
			props.champion,
			item.num as unknown as string,
		);

		return (
			<SwiperSlide key={index}>
				<div className="swiper-slide__element">
					<h2 className="swiper-slide__header">{item.name}</h2>
					<picture>
						<img src={championSplash} alt={item.name} />
					</picture>
				</div>
			</SwiperSlide>
		);
	};

	return (
		<div className="lol-carousel">
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				autoplay={{
					delay: 3000,
					pauseOnMouseEnter: true,
				}}
				loop
			>
				{props.data.map(createElement)}
			</Swiper>
		</div>
	);
};

export default LOLCarousel;
