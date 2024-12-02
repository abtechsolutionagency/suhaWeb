
"use client";
import Link from 'next/link';
import UseCartInfo from '@/hooks/UseCartInfo';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrease_quantity, remove_cart_product } from '@/redux/features/cartSlice';

const CartArea = () => {

  const productItem = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();
  const { total } = UseCartInfo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission here
  };

  // handle shipping cost 
  const [shipCost, setShipCost] = useState<number>(0);
  const handleShippingCost = (value: any) => {
    if (value === 'free') {
      setShipCost(0)
    }
    else {
      setShipCost(value)
    }
  }


  return (
    <>
      <div className="page-content-wrapper">
        <div className="container">
          <div className="cart-wrapper-area py-3">
            <div className="cart-table card mb-3">
              <div className="table-responsive card-body">
                <table className="table mb-0">
                  <tbody>
                    {productItem.map((item: any, i: number) => (
                      <tr key={i}>
                        <th scope="row">
                          <a className="remove-product"
                            style={{ cursor: "pointer" }}
                            onClick={() => dispatch(remove_cart_product(item))}
                          >
                            <i className="ti ti-x"></i>
                          </a>
                        </th>
                        <td>
                          <img className="rounded" src={item.img} alt="" />
                        </td>
                        <td className="text-center">
                          <Link
                            className="product-title"
                            href="/single-product"
                          >
                            {item.productName}
                            <span className="mt-1">$ {item.new_price}</span>
                          </Link>
                        </td>
                        <td>

                          <td className="tp-cart-quantity d-flex justify-content-end">
                            <div className="tp-product-quantity p-relative mt-10 mb-10">
                              <span style={{ cursor: "pointer" }} className="tp-cart-minus" onClick={() => dispatch(decrease_quantity(item))}>
                                -
                              </span>
                              <input className="tp-cart-input" type="text" onChange={handleSubmit} value={item.quantity} readOnly />
                              <span style={{ cursor: "pointer" }} className="tp-cart-plus" onClick={() => dispatch(addToCart(item))}>
                                +
                              </span>
                            </div>
                          </td>

                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div> 

            <div className="card cart-amount-area">
              <div className="card-body"> 
                <div className="tp-cart-subtotal d-flex justify-content-between">
                  <h5>Subtotal</h5>
                  <h5>$ {total}</h5>
                </div>

                <div className="shipping-method-choose mb-3">
                  <div className="card shipping-method-choose-title-card">
                    <div className="card-body">
                      <h6 className="text-center mb-0">Shipping Method</h6>
                    </div>
                  </div>
                  <div className="card shipping-method-choose-card">
                    <div className="card-body" style={{paddingLeft: "0"}}>
                      <div className="shipping-method-choose">
                        <ul className="ps-0">
                          <li> 

                            <input id="flat_rate" type="radio" name="shipping" />
                            <label htmlFor="flat_rate" onClick={() => handleShippingCost(20)}>Flat rate: <span>$20.00</span></label>


                            <div className="check"></div>
                          </li>
                          <li>
                            <input id="local_pickup" type="radio" name="shipping" />
                            <label htmlFor="local_pickup" onClick={() => handleShippingCost(25)}>Local pickup: <span> $25.00</span></label>
                            <div className="check"></div>
                          </li>
                          <li>
                            <input id="free_shipping" type="radio" name="shipping" />
                            <label htmlFor="free_shipping" onClick={() => handleShippingCost('free')}>Free shipping</label>
                            <div className="check"></div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tp-cart-subtotal d-flex justify-content-between">
                  <h5>Total</h5>
                  <h5>$ {total + shipCost}</h5>
                </div>

                <Link className="btn btn-primary" href="/checkout">
                  Checkout Now
                </Link> 

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="internet-connection-status" id="internetStatus"></div>
    </>
  );
};

export default CartArea;