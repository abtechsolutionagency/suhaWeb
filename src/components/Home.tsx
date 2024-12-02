import React from "react";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import Alert from "./common/Alert";
import Search from "./home/Search";
import CtaArea from "./home/CtaArea";
import FlashSale from "./home/FlashSale";
import HeroSlider from "./home/HeroSlider";
import DarkLight from "./common/DarkLight";
import TopProducts from "./home/TopProducts";
import ProductCatagories from "./home/ProductCatagories";
import WeeklyBestSellers from "./home/WeeklyBestSellers";
import DiscountCouponCard from "./home/DiscountCouponCard";
import FeaturedProducts from "./home/FeaturedProducts";
import Collections from "./home/Collections";
import { ToastContainer } from "react-toastify";

const Home = () => {
	return (
		<>
			<Header />
			<Alert />
			<div className="page-content-wrapper">
				<Search />
				<HeroSlider />
				<ProductCatagories />
				<FlashSale />
				<DarkLight />
				<TopProducts />
				<CtaArea />
				<WeeklyBestSellers />
				<DiscountCouponCard />
				<FeaturedProducts />
				<Collections />
			</div>
			<Footer />
			<ToastContainer position="top-right" />

		</>
	);
};

export default Home;
