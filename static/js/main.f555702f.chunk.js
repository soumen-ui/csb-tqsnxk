(this["webpackJsonpaddto-cart-chaoo-charles-edited-for-netlify-with-my-git-api-try"]=this["webpackJsonpaddto-cart-chaoo-charles-edited-for-netlify-with-my-git-api-try"]||[]).push([[0],{54:function(t,e,c){},98:function(t,e,c){"use strict";c.r(e);var a=c(19),s=c(0),r=c.n(s),n=c(20),i=c.n(n),o=(c(54),c(7)),d=c(6),l=c(17),j=(c(55),c(4)),b=c(8),u=c(2),h={cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],cartTotalQuantity:0,cartTotalAmount:0},m=Object(u.d)({name:"cart",initialState:h,reducers:{addToCart:function(t,e){var c=t.cartItems.findIndex((function(t){return t.id===e.payload.id}));if(c>=0)t.cartItems[c]=Object(b.a)(Object(b.a)({},t.cartItems[c]),{},{cartQuantity:t.cartItems[c].cartQuantity+0}),l.b.info("Already aded on cart",{position:"top-center"});else{var a=Object(b.a)(Object(b.a)({},e.payload),{},{cartQuantity:1});t.cartItems.push(a),l.b.success("".concat(e.payload.title," Added on cart"),{position:"top-center"})}localStorage.setItem("cartItems",JSON.stringify(t.cartItems))},addToCart2:function(t,e){var c=t.cartItems.findIndex((function(t){return t.id===e.payload.id}));if(c>=0)t.cartItems[c]=Object(b.a)(Object(b.a)({},t.cartItems[c]),{},{cartQuantity:t.cartItems[c].cartQuantity+1}),l.b.info("You have Added ".concat(e.payload.cartQuantity+1," Quenty "),{position:"top-center"});else{var a=Object(b.a)(Object(b.a)({},e.payload),{},{cartQuantity:1});t.cartItems.push(a),l.b.success("".concat(e.payload.name," Added on cart"),{position:"top-center"})}localStorage.setItem("cartItems",JSON.stringify(t.cartItems))},decreaseCart:function(t,e){var c=t.cartItems.findIndex((function(t){return t.id===e.payload.id}));if(t.cartItems[c].cartQuantity>1)t.cartItems[c].cartQuantity-=1,l.b.info("Decreased product quantity",{position:"bottom-left"});else if(1===t.cartItems[c].cartQuantity){var a=t.cartItems.filter((function(t){return t.id!==e.payload.id}));t.cartItems=a,l.b.error("Product removed from cart",{position:"bottom-left"})}localStorage.setItem("cartItems",JSON.stringify(t.cartItems))},removeFromCart:function(t,e){t.cartItems.map((function(c){if(c.id===e.payload.id){var a=t.cartItems.filter((function(t){return t.id!==c.id}));t.cartItems=a,l.b.error("Product removed from cart",{position:"bottom-left"})}return localStorage.setItem("cartItems",JSON.stringify(t.cartItems)),t}))},getTotals:function(t,e){var c=t.cartItems.reduce((function(t,e){var c=e.price,a=e.cartQuantity,s=c*a;return t.total+=s,t.quantity+=a,t}),{total:0,quantity:0}),a=c.total,s=c.quantity;a=parseFloat(a.toFixed(2)),t.cartTotalQuantity=s,t.cartTotalAmount=a},clearCart:function(t,e){t.cartItems=[],localStorage.setItem("cartItems",JSON.stringify(t.cartItems)),l.b.error("Cart cleared",{position:"bottom-left"})}}}),O=m.actions,p=O.addToCart,x=O.addToCart2,f=O.decreaseCart,v=O.removeFromCart,g=O.getTotals,N=O.clearCart,y=m.reducer,w=c(47),I=c(13),S=Object(w.a)({reducerPath:"productsApi",baseQuery:Object(I.d)({baseUrl:"https://fakewoocomapi.github.io/"}),endpoints:function(t){return{getAllProducts:t.query({query:function(){return"products"}})}}}),k=S.useGetAllProductsQuery,C=c(1),Q=function(){var t=Object(j.e)((function(t){return t.products})),e=(t.items,t.status),c=Object(j.d)(),a=Object(d.g)(),s=k(),r=s.data,n=(s.error,s.isLoading);console.log("Api",n);return Object(C.jsx)("div",{className:"container",children:Object(C.jsx)("div",{className:"row",children:"success"===e?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("h2",{children:"New Arrivals"}),Object(C.jsx)("div",{className:"zproducts row",children:r&&(null===r||void 0===r?void 0:r.map((function(t){return Object(C.jsx)("div",{className:"zproduct col-md-4 col-6 mt-4 ",children:Object(C.jsxs)("div",{className:"card2",children:[Object(C.jsx)(o.b,{className:"btn noborder-dark rounded-0 d-block",to:"/cart2/".concat(t.id),children:Object(C.jsx)("div",{className:"picbox text-center btn_line w-100 ",children:Object(C.jsx)("img",{src:t.image,alt:t.title})})}),Object(C.jsxs)("div",{className:"p-2",children:[Object(C.jsx)("h3",{children:t.title}),Object(C.jsxs)("span",{className:"price",children:["$ ",t.price]}),Object(C.jsxs)("div",{className:"d-flex justify-content-between mt-2 mb-2",children:[Object(C.jsx)(o.b,{className:"btn border-dark noborder-dark rounded-0 btn_line",to:"/cart2/".concat(t.id),children:"View"}),Object(C.jsxs)("button",{className:"btn btn-dark rounded-0",onClick:function(){return function(t){c(p(t)),a.push("/cart")}(t)},children:[Object(C.jsx)("img",{className:"ad_crt_icn",src:"https://fakewoocomapi.github.io/images/sh_ic1.png",alt:"Fitted shirt"}),"Add To Cart"]})]})]})]})},t.id)})))})]}):"pending"===e?Object(C.jsx)("p",{children:"Loading..."}):Object(C.jsx)("p",{children:"Unexpected error occured..."})})})},T=c(18),A=c(23),_=c(29),F=c(24),P=c.n(F),q=c(49),H=c.n(q);c(95),c(96);var J=function(){var t=Object(s.useState)({banners:[]}),e=Object(_.a)(t,2),c=e[0],a=e[1];return Object(s.useEffect)((function(){var t=function(){var t=Object(A.a)(Object(T.a)().mark((function t(){var e;return Object(T.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P()("https://fakewoocomapi.github.io/nested_multi/");case 2:e=t.sent,a(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(C.jsx)("ul",{className:"slick_pic p-0",children:Object(C.jsx)(H.a,Object(b.a)(Object(b.a)({},{dots:!0,infinite:!0,autoplay:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1,initialSlide:2}},{breakpoint:580,settings:{slidesToShow:1,slidesToScroll:1}}]}),{},{children:c.banners.map((function(t){return Object(C.jsxs)("li",{children:[Object(C.jsxs)("p",{children:[Object(C.jsx)("img",{src:t.image,alt:"pic abc"})," "]}),Object(C.jsxs)("p",{children:[t.id," "]}),Object(C.jsxs)("p",{children:[t.name," "]}),Object(C.jsxs)("p",{children:[t.first_name," "]}),Object(C.jsxs)("p",{children:[t.email," "]})]},t.objectID)}))}))})};function z(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(J,{}),Object(C.jsx)("div",{className:"container",children:Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("div",{className:"col-md-6 col-12 p-0 sml_bnr",children:Object(C.jsx)("img",{src:"https://fakewoocomapi.github.io/images/sb_1.jpg",alt:"Fitted shirt"})}),Object(C.jsx)("div",{className:"col-md-6 col-12 p-0  sml_bnr",children:Object(C.jsx)("img",{src:"https://fakewoocomapi.github.io/images/sb_2.jpg",alt:"Fitted shirt"})})]})}),Object(C.jsx)(Q,{})]})}function L(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("h1",{children:" About "})})}var M=function(){var t=Object(j.e)((function(t){return t.cart})).cartTotalQuantity;return Object(C.jsxs)("nav",{className:"nav-bar",children:[Object(C.jsx)(o.b,{to:"/",children:Object(C.jsx)("h2",{children:"SmartShop"})}),Object(C.jsx)(o.b,{to:"/about",children:"About"}),Object(C.jsx)(o.b,{to:"/cart",children:Object(C.jsxs)("div",{className:"nav-bag",children:[Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",fill:"currentColor",className:"bi bi-handbag-fill",viewBox:"0 0 16 16",children:Object(C.jsx)("path",{d:"M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"})}),Object(C.jsx)("span",{className:"bag-quantity",children:Object(C.jsx)("span",{children:t})})]})})]})},V=function(){return Object(C.jsxs)("div",{className:"not-found",children:[Object(C.jsx)("h2",{children:"404"}),Object(C.jsx)("p",{children:"Page not found"})]})},B=function(){var t=Object(j.e)((function(t){return t.cart})),e=Object(j.d)();Object(s.useEffect)((function(){e(g())}),[t,e]);return Object(C.jsxs)("div",{className:"cart-container",children:[Object(C.jsx)("h2",{children:"Shopping Cart"}),0===t.cartItems.length?Object(C.jsxs)("div",{className:"cart-empty",children:[Object(C.jsx)("p",{children:"Your cart is currently empty"}),Object(C.jsx)("div",{className:"start-shopping",children:Object(C.jsxs)(o.b,{to:"/",children:[Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-arrow-left",viewBox:"0 0 16 16",children:Object(C.jsx)("path",{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})}),Object(C.jsx)("span",{children:"Start Shopping"})]})})]}):Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{className:"titles",children:[Object(C.jsx)("h3",{className:"product-title",children:"Product"}),Object(C.jsx)("h3",{className:"price",children:"Price"}),Object(C.jsx)("h3",{className:"quantity",children:"Quantity"}),Object(C.jsx)("h3",{className:"total",children:"Total"})]}),Object(C.jsx)("div",{className:"cart-items",children:t.cartItems&&t.cartItems.map((function(t){return Object(C.jsxs)("div",{className:"cart-item",children:[Object(C.jsxs)("div",{className:"cart-product",children:[Object(C.jsx)("img",{src:t.image,alt:t.name}),Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{children:t.name}),Object(C.jsx)("p",{children:t.desc}),Object(C.jsx)("p",{children:Object(C.jsx)(o.b,{className:"btn btn-default",to:"/cart2/".concat(t.id),children:"View Details"})}),Object(C.jsx)("button",{onClick:function(){e(v(t))},children:"Remove"})]})]}),Object(C.jsxs)("div",{className:"cart-product-price",children:["$",t.price]}),Object(C.jsxs)("div",{className:"cart-product-quantity",children:[Object(C.jsx)("button",{onClick:function(){e(f(t))},children:"-"}),Object(C.jsx)("div",{className:"count",children:t.cartQuantity}),Object(C.jsx)("button",{onClick:function(){e(x(t))},children:"+"})]}),Object(C.jsxs)("div",{className:"cart-product-total-price",children:["$",t.price*t.cartQuantity]})]},t.id)}))}),Object(C.jsxs)("div",{className:"cart-summary",children:[Object(C.jsx)("button",{className:"clear-btn",onClick:function(){e(N())},children:"Clear Cart"}),Object(C.jsxs)("div",{className:"cart-checkout",children:[Object(C.jsxs)("div",{className:"subtotal",children:[Object(C.jsx)("span",{children:"Subtotal"}),Object(C.jsxs)("span",{className:"amount",children:["$",t.cartTotalAmount]})]}),Object(C.jsx)("p",{children:"Taxes and shipping calculated at checkout"}),Object(C.jsx)("button",{children:"Check out"}),Object(C.jsx)("div",{className:"continue-shopping",children:Object(C.jsxs)(o.b,{to:"/",children:[Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-arrow-left",viewBox:"0 0 16 16",children:Object(C.jsx)("path",{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})}),Object(C.jsx)("span",{children:"Continue Shopping"})]})})]})]})]})]})},E=function(){var t=Object(j.e)((function(t){return t.cart})),e=Object(j.d)();return Object(s.useEffect)((function(){e(g())}),[t,e]),Object(C.jsxs)("div",{className:"cart-container",children:[Object(C.jsx)("h2",{children:"Shopping Cart QQQQ"}),Object(C.jsx)("div",{children:Object(C.jsx)("div",{className:"cart-items",children:t.cartItems.map((function(t){return Object(C.jsxs)("div",{className:"cart-item",children:["QTY",t.cartQuantity]},t.id)}))})})]})},R=function(){var t=Object(j.e)((function(t){return t.products})),e=(t.items,t.status,Object(j.d)()),c=Object(d.g)(),a=Object(s.useState)({}),r=Object(_.a)(a,2),n=r[0],i=r[1],l=Object(d.h)().id;Object(s.useEffect)((function(){var t=function(){var t=Object(A.a)(Object(T.a)().mark((function t(){var e;return Object(T.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.a.get("https://fakewoocomapi.github.io/products/".concat(l));case 2:e=t.sent,i(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]);return Object(C.jsxs)("div",{className:"container py-4",children:[Object(C.jsx)(o.b,{className:"btn btn-primary",to:"/",children:"back to Home"}),Object(C.jsxs)("h1",{className:"display-4",children:["Product Id: ",n.id]}),Object(C.jsx)("hr",{}),Object(C.jsx)("div",{className:"container",children:Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("div",{className:"col-md-6 col-12 text-center",children:Object(C.jsx)("img",{className:"img-fluid",src:n.image,alt:"abcdgh"})}),Object(C.jsxs)("div",{className:"col-md-6 col-12",children:[Object(C.jsxs)("h2",{className:"display-2",children:["Product Id: ",n.id]}),Object(C.jsxs)("h3",{className:"list-group-item",children:[Object(C.jsx)("strong",{className:"text-success",children:" Name:"})," ",n.title]}),Object(C.jsxs)("div",{className:"list-group-item",children:[Object(C.jsx)("strong",{children:" Price"})," ",n.price]}),Object(C.jsxs)("div",{className:"list-group-item",children:["user name: ",n.description]}),Object(C.jsx)("div",{}),Object(C.jsxs)("button",{className:"btn btn-dark rounded-0",onClick:function(){return e(p(n)),void c.push("/cart")},children:[Object(C.jsx)("img",{className:"ad_crt_icn",src:"https://fakewoocomapi.github.io/images/sh_ic1.png",alt:"Fitted shirt"}),"Add To Cart"]}),Object(C.jsx)("div",{className:"continue-shopping",children:Object(C.jsxs)(o.b,{to:"/",children:[Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-arrow-left",viewBox:"0 0 16 16",children:Object(C.jsx)("path",{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})}),Object(C.jsx)("span",{children:"Continue Shopping"})]})}),Object(C.jsx)("br",{}),Object(C.jsx)("hr",{})]})]})})]})};c(97);var $,D=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsxs)(o.a,{children:[Object(C.jsx)(l.a,{}),Object(C.jsx)(M,{}),Object(C.jsx)("div",{className:"content-container",children:Object(C.jsxs)(d.d,{children:[Object(C.jsx)(d.b,{path:"/",exact:!0,component:z}),Object(C.jsx)(d.b,{path:"/about",exact:!0,component:L}),Object(C.jsx)(d.b,{path:"/cart2/:id",component:R}),Object(C.jsx)(d.b,{path:"/cartqq",component:E}),Object(C.jsx)(d.b,{path:"/cart",component:B}),Object(C.jsx)(d.b,{path:"/not-found",component:V}),Object(C.jsx)(d.a,{to:"/not-found"})]})})]})})},Y=Object(u.c)("products/productsFetch",Object(A.a)(Object(T.a)().mark((function t(){var e;return Object(T.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P.a.get("https://fakewoocomapi.github.io/");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))),U=Object(u.d)({name:"products",initialState:{items:[],status:null},reducers:{},extraReducers:($={},Object(a.a)($,Y.pending,(function(t,e){t.status="pending"})),Object(a.a)($,Y.fulfilled,(function(t,e){t.items=e.payload,t.status="success"})),Object(a.a)($,Y.rejected,(function(t,e){t.status="rejected"})),$)}).reducer,G=Object(u.a)({reducer:Object(a.a)({products:U,cart:y},S.reducerPath,S.reducer),middleware:function(t){return t().concat(S.middleware)}});G.dispatch(Y()),G.dispatch(g()),i.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(j.a,{store:G,children:Object(C.jsx)(D,{})})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.f555702f.chunk.js.map