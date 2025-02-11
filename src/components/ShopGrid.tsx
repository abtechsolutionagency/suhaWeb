"use client";
import React from "react";
import Link from "next/link";
import Footer from "@/layouts/Footer";
import NiceSelect from "@/ui/NiceSelect";
import top_product from "@/data/top_product";
import HeaderTwo from "@/layouts/HeaderTwo";
import { Swiper, SwiperSlide } from "swiper/react";

import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice"; 
import { ToastContainer } from "react-toastify";
const MyTimer = dynamic(() => import("../components/common/Timer"), {
	ssr: false,
});

const product_categories = [
	{
		image: "/assets/img/product/5.png",
		title: "Furniture",
	},
	{
		image: "/assets/img/product/9.png",
		title: "Shoes",
	},
	{
		image: "/assets/img/product/4.png",
		title: "Dress",
	},
	{
		image: "/assets/img/product/9.png",
		title: "Shoes",
	},
	{
		image: "/assets/img/product/5.png",
		title: "Furniture",
	},
	{
		image: "/assets/img/product/4.png",
		title: "Dress",
	},
];

const ShopGrid = () => {
	const selectHandler = (e: any) => { };

	const dispatch = useDispatch()
	const handleAddToCart = (item: any) => {
		dispatch(addToCart(item));
	};


	return (
		<>
			<HeaderTwo links="home" title="Shop Grid" />

			<div className="page-content-wrapper">
				<div className="py-3">
					<div className="container">
						<div className="row g-1 align-items-center rtl-flex-d-row-r">
							<div className="col-8" style={{ marginTop: "-15px" }}>
								<Swiper
									loop={true}
									slidesPerView={2.5}
									spaceBetween={5}
									className="product-catagories owl-carousel catagory-slides"
								>
									{product_categories.map((item, i) => (
										<SwiperSlide key={i}>
											<a className="shadow-sm" href="#">
												<img src={item.image} alt="" />
												{item.title}
											</a>
										</SwiperSlide>
									))}
								</Swiper>
							</div>
							<div className="col-4">
								<div className="select-product-catagory">
									<NiceSelect
										className="filter-select right small border-0 d-flex align-items-center"
										options={[
											{ value: "00", text: "Short by" },
											{ value: "01", text: "Newest" },
											{ value: "02", text: "Popular" },
											{ value: "04", text: "Ratings" },
										]}
										defaultCurrent={0}
										onChange={selectHandler}
										placeholder="Select an option"
										name="myNiceSelect"
									/>
								</div>
							</div>
						</div>
						<div className="mb-3"></div>
						<div className="row g-2 rtl-flex-d-row-r">
							{top_product.map((item, i) => (
								<div key={i} className="col-6 col-md-4">
									<div className="card product-card">
										<div className="card-body">
											<span
												className={`badge rounded-pill badge-${item.badge_color}`}
											>
												{item.badge_text}
											</span>
											<a className="wishlist-btn" href="#">
												<i className="ti ti-heart"></i>
											</a>
											<Link
												className="product-thumbnail d-block"
												href="/single-product"
											>
												<img className="mb-2" src={item.img} alt="" />
												{i === 0 || i === 3 ? (
													<ul className="offer-countdown-timer d-flex align-items-center shadow-sm">
														<MyTimer />
													</ul>
												) : null}
											</Link>
											<Link className="product-title" href={`/single-product/${item.id}`}>
												{item.title}
											</Link>
											<p className="sale-price">
												$ {item.new_price}
												<span>$ {item.old_price}</span>
											</p>
											<div className="product-rating">
												<i className="ti ti-star-filled"></i>
												<i className="ti ti-star-filled"></i>
												<i className="ti ti-star-filled"></i>
												<i className="ti ti-star-filled"></i>
												<i className="ti ti-star-filled"></i>
											</div>
											<a className="btn btn-primary btn-sm"
												onClick={() => handleAddToCart(item)}
												style={{ cursor: "pointer" }}>
												<i className="ti ti-plus"></i>
											</a>
										</div>
									</div>
								</div>
							))}

							{top_product.map((item, i) => (
								<div key={i} className="col-6 col-md-4">
									<div className="card product-card">
										<div className="card-body">
											<span
												className={`badge rounded-pill badge-${item.badge_color}`}
											>
												{item.badge_text}
											</span>
											<a className="wishlist-btn" href="#">
												<i className="ti ti-heart"></i>
											</a>
											<Link
												className="product-thumbnail d-block"
												href="/single-product"
											>
												<img className="mb-2" src={item.img} alt="" />
												{i === 0 || i === 3 ? (
													<ul className="offer-countdown-timer d-flex align-items-center shadow-sm">
														<MyTimer />
													</ul>
												) : null}
											</Link>
											<Link className="product-title" href={`/single-product/${item.id}`}>
												{item.title}
											</Link>
											<p className="sale-price">
												$ {item.new_price}
												<span>$ {item.old_price}</span>
											</p>
											<div className="product-rating">
												<i className="ti ti-star-filled"></i>
												<i className="ti ti-star-filled"></i>
												<i className="ti ti-star-filled"></i>
												<i className="ti ti-star-filled"></i>
												<i className="ti ti-star-filled"></i>
											</div>
											<a className="btn btn-primary btn-sm"
												onClick={() => handleAddToCart(item)}
												style={{ cursor: "pointer" }}>
												<i className="ti ti-plus"></i>
											</a>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<Footer /> 
			<ToastContainer position="top-right" />

		</>
	);
};

export default ShopGrid;
