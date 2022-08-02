(this["webpackJsonpaddto-cart-chaoo-charles-edited-for-netlify-with-my-git-api-try"]=this["webpackJsonpaddto-cart-chaoo-charles-edited-for-netlify-with-my-git-api-try"]||[]).push([[0],{124:function(t,e,c){"use strict";c.r(e);var a=c(19),s=c(1),r=c.n(s),n=c(20),i=c.n(n),l=(c(60),c(7)),o=c(6),d=c(17),j=(c(61),c(62),c(4)),b=c(8),m=c(2),u={cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],cartTotalQuantity:0,cartTotalAmount:0},h=Object(m.d)({name:"cart",initialState:u,reducers:{addToCart:function(t,e){var c=t.cartItems.findIndex((function(t){return t.id===e.payload.id}));if(c>=0)t.cartItems[c]=Object(b.a)(Object(b.a)({},t.cartItems[c]),{},{cartQuantity:t.cartItems[c].cartQuantity+0}),d.b.info("Already aded on cart",{position:"top-center"});else{var a=Object(b.a)(Object(b.a)({},e.payload),{},{cartQuantity:1});t.cartItems.push(a),d.b.success("".concat(e.payload.title," Added on cart"),{position:"top-center"})}localStorage.setItem("cartItems",JSON.stringify(t.cartItems))},addToCart2:function(t,e){var c=t.cartItems.findIndex((function(t){return t.id===e.payload.id}));if(c>=0)t.cartItems[c]=Object(b.a)(Object(b.a)({},t.cartItems[c]),{},{cartQuantity:t.cartItems[c].cartQuantity+1}),d.b.info("You have Added ".concat(e.payload.cartQuantity+1," Quenty "),{position:"top-center"});else{var a=Object(b.a)(Object(b.a)({},e.payload),{},{cartQuantity:1});t.cartItems.push(a),d.b.success("".concat(e.payload.name," Added on cart"),{position:"top-center"})}localStorage.setItem("cartItems",JSON.stringify(t.cartItems))},decreaseCart:function(t,e){var c=t.cartItems.findIndex((function(t){return t.id===e.payload.id}));if(t.cartItems[c].cartQuantity>1)t.cartItems[c].cartQuantity-=1,d.b.info("Decreased product quantity",{position:"bottom-left"});else if(1===t.cartItems[c].cartQuantity){var a=t.cartItems.filter((function(t){return t.id!==e.payload.id}));t.cartItems=a,d.b.error("Product removed from cart",{position:"bottom-left"})}localStorage.setItem("cartItems",JSON.stringify(t.cartItems))},removeFromCart:function(t,e){t.cartItems.map((function(c){if(c.id===e.payload.id){var a=t.cartItems.filter((function(t){return t.id!==c.id}));t.cartItems=a,d.b.error("Product removed from cart",{position:"bottom-left"})}return localStorage.setItem("cartItems",JSON.stringify(t.cartItems)),t}))},getTotals:function(t,e){var c=t.cartItems.reduce((function(t,e){var c=e.price,a=e.cartQuantity,s=c*a;return t.total+=s,t.quantity+=a,t}),{total:0,quantity:0}),a=c.total,s=c.quantity;a=parseFloat(a.toFixed(2)),t.cartTotalQuantity=s,t.cartTotalAmount=a},clearCart:function(t,e){t.cartItems=[],localStorage.setItem("cartItems",JSON.stringify(t.cartItems)),d.b.error("Cart cleared",{position:"bottom-left"})}}}),O=h.actions,p=O.addToCart,x=O.addToCart2,v=O.decreaseCart,f=O.removeFromCart,g=O.getTotals,N=O.clearCart,w=h.reducer,y=c(53),k=c(13),_=Object(y.a)({reducerPath:"productsApi",baseQuery:Object(k.d)({baseUrl:"https://fakewoocomapi.github.io/"}),endpoints:function(t){return{getAllProducts:t.query({query:function(){return"products"}})}}}),I=_.useGetAllProductsQuery,S=c(0),C=function(t){var e=Object(j.e)((function(t){return t.products})),c=(e.items,e.status),a=Object(j.d)(),s=Object(o.g)(),r=I(),n=r.data,i=(r.error,r.isLoading);console.log("Api",i);return Object(S.jsx)("div",{className:"container",children:Object(S.jsx)("div",{className:"zzrow",children:"success"===c?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("h2",{className:"text-center mt-4",children:[" ",Object(S.jsxs)("span",{className:"ttl_brnd",children:[" ",t.hdrtxt_1st," "]}),t.hdrtxt]}),Object(S.jsx)("div",{className:"zproducts row",children:n&&(null===n||void 0===n?void 0:n.filter((function(e){return e.category===t.catgrname})).map((function(t){return Object(S.jsxs)("div",{className:"dmocls prr_stock"+t.stock+" zproduct col-md-4 col-12 mt-4",children:[Object(S.jsxs)("p",{className:"low_stck_bdge",children:[" ","Hurry"," ",Object(S.jsxs)("span",{className:"text-dark m-1 font-weight-bold",children:["Only ",t.stock]})," ","Stock availavle"]}),Object(S.jsx)("p",{className:"no_stck_bdge ",children:" Out Of Stock "}),Object(S.jsxs)("div",{className:"card2",children:[Object(S.jsx)(l.b,{className:"btn noborder-dark rounded-0 d-block",to:"/cart2/".concat(t.id),children:Object(S.jsx)("div",{className:"picbox text-center btn_line efct_zom w-100 ",children:Object(S.jsx)("div",{className:"pic_pare g_btn  cg_btn1",children:Object(S.jsx)("img",{src:t.image,alt:t.title})})})}),Object(S.jsxs)("div",{className:"p-2",children:[Object(S.jsx)("h3",{children:t.title}),Object(S.jsxs)("span",{className:"price",children:["$ ",t.price]}),Object(S.jsxs)("div",{className:"d-flex justify-content-between mt-2 mb-2",children:[Object(S.jsx)(l.b,{className:"btn border-dark noborder-dark rounded-0 btn_line",to:"/cart2/".concat(t.id),children:"View"}),Object(S.jsxs)("button",{className:"btn btn-dark rounded-0",onClick:function(){return function(t){a(p(t)),s.push("/cart")}(t)},children:[Object(S.jsx)("img",{className:"ad_crt_icn",src:"https://fakewoocomapi.github.io/images/sh_ic1.png",alt:"Fitted shirt"}),"Add To Cart"]})]})]})]})]},t.id)})))})]}):"pending"===c?Object(S.jsx)("p",{children:"Loading..."}):Object(S.jsx)("p",{children:"Unexpected error occured..."})})})},T=c(18),Q=c(23),A=c(25),H=c(24),F=c.n(H),z=c(55),q=c.n(z);c(121),c(122);var M=function(t){var e=Object(s.useState)(),c=Object(A.a)(e,2),a=c[0],r=c[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(Q.a)(Object(T.a)().mark((function e(){var c;return Object(T.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F()(t.cu_api_lnk);case 2:c=e.sent,r(c.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(S.jsx)("ul",{className:"slick_pic p-0",children:Object(S.jsx)(q.a,Object(b.a)(Object(b.a)({},{dots:!0,infinite:!0,autoplay:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:1}},{breakpoint:580,settings:{slidesToShow:1,slidesToScroll:1}}]}),{},{children:null===a||void 0===a?void 0:a.filter((function(e){return e.category===t.sld_ctgr1})).map((function(t){return Object(S.jsxs)("li",{children:[Object(S.jsxs)("p",{children:[Object(S.jsx)("img",{src:t.image,alt:"pic abc"})," "]}),Object(S.jsxs)("p",{children:[t.name," "]}),Object(S.jsxs)("p",{children:[t.first_name," "]}),Object(S.jsxs)("p",{children:[t.email," "]})]},t.id)}))}))})};function L(t){return Object(s.useEffect)((function(){document.getElementById("year").innerHTML=(new Date).getFullYear()}),[]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"cu_container_fluied ",children:Object(S.jsx)("div",{className:"img_sldr  ",children:Object(S.jsx)(M,{cu_api_lnk:"https://fakewoocomapi.github.io/products/",sld_ctgr1:"banner_L"})})}),Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("div",{className:"",children:[Object(S.jsxs)("h2",{className:"text-center mt-5",children:[Object(S.jsx)("span",{className:"ttl_brnd",children:" Mega "}),"Offers"]}),Object(S.jsxs)("div",{className:"row",children:[Object(S.jsxs)("div",{className:"col-md-6 col-12 p-0 sml_bnr view view-fourth ",children:[Object(S.jsx)("img",{className:"img-responsive",src:"https://fakewoocomapi.github.io/images/sb_1.jpg",alt:"pic name"}),Object(S.jsx)("div",{className:"mask "}),Object(S.jsx)("div",{className:"content"})]}),Object(S.jsxs)("div",{className:"col-md-6 col-12 p-0 sml_bnr view view-fourth ",children:[Object(S.jsx)("img",{className:"img-responsive",src:"https://fakewoocomapi.github.io/images/sb_2.jpg",alt:"pic name"}),Object(S.jsx)("div",{className:"mask mask2"}),Object(S.jsx)("div",{className:"content"})]})]})]})}),Object(S.jsx)("div",{children:Object(S.jsx)(C,{hdrtxt_1st:"Women's ",hdrtxt:"Clothing",catgrname:"women's clothing"})}),Object(S.jsx)("div",{className:"cu_container_fluied ",children:Object(S.jsx)("dir",{className:"sale_bnr mt-5"})}),Object(S.jsxs)("div",{children:[Object(S.jsx)(C,{hdrtxt_1st:"Mens ",hdrtxt:"Clothing",catgrname:"men's clothing"}),Object(S.jsx)("footer",{className:"bg-dark mt-5",children:Object(S.jsxs)("p",{className:"text-white text-center p-3 mb-0 cpr_txt",children:["\xa9",Object(S.jsx)("span",{id:"year"})," Soumencart All rights reserved."]})})]})]})}function P(){return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("h1",{className:"mt-5 pt-5",children:" About "})})}var V=function(){var t=Object(j.e)((function(t){return t.cart})).cartTotalQuantity,e=Object(s.useState)(!1),c=Object(A.a)(e,2),a=c[0],n=c[1],i=r.a.useRef(null),o=function(){n(!1),i.current.classList.remove("show")};return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("nav",{className:"navbar nvr_fxd navbar-expand-md navbar-light zbg-warning bg-dark",children:Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)(l.b,{to:"/",children:Object(S.jsx)("img",{className:"ad_crt_icn w-50",src:"https://fakewoocomapi.github.io/images/logo1.png",alt:"Fitted shirt"})}),Object(S.jsx)("button",{className:"navbar-toggler ",onClick:function(){return n(!a)},type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:a?Object(S.jsx)("span",{className:" font-weight-bold crs_fnt",children:" \u2715 "}):Object(S.jsx)("span",{className:"navbar-toggler-icon",children:" "})}),Object(S.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",ref:i,children:Object(S.jsxs)("ul",{className:"navbar-nav   mb-2 mb-lg-0 justify-content-end mr-auto w-100 ",children:[Object(S.jsx)("li",{className:"nav-item",children:Object(S.jsx)(l.c,{onClick:o,className:"nav-link",to:"/",children:"Home"})}),Object(S.jsx)("li",{className:"nav-item",children:Object(S.jsxs)(l.c,{onClick:o,className:"nav-link",to:"/about",children:[" ","About"]})}),Object(S.jsx)("li",{className:"nav-item",children:Object(S.jsxs)(l.c,{onClick:o,className:"nav-link",to:"/cart",children:["Cart"," "]})})]})}),Object(S.jsx)(l.b,{className:"oredr-2",onClick:o,to:"/cart",children:Object(S.jsxs)("div",{className:"nav-bag",children:[Object(S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"#98d4d4",className:"bi bi-handbag-fill",viewBox:"0 0 16 16",children:Object(S.jsx)("path",{d:"M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"})}),Object(S.jsx)("span",{className:"bag-quantity",children:Object(S.jsx)("span",{children:t})})]})})]})}),Object(S.jsxs)("nav",{className:"nav-bar d-none",children:[Object(S.jsxs)("div",{children:[Object(S.jsx)(l.b,{to:"/",children:Object(S.jsx)("img",{className:"ad_crt_icn w-50",src:"https://fakewoocomapi.github.io/images/logo1.png",alt:"Fitted shirt"})}),Object(S.jsx)(l.b,{to:"/about",className:"ml-5",children:"About"})]}),Object(S.jsx)(l.b,{to:"/cart",children:Object(S.jsxs)("div",{className:"nav-bag",children:[Object(S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"#98d4d4",className:"bi bi-handbag-fill",viewBox:"0 0 16 16",children:Object(S.jsx)("path",{d:"M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"})}),Object(S.jsx)("span",{className:"bag-quantity",children:Object(S.jsx)("span",{children:t})})]})})]})]})},J=function(){return Object(S.jsxs)("div",{className:"not-found",children:[Object(S.jsx)("h2",{children:"404"}),Object(S.jsx)("p",{children:"Page not found"})]})},B=function(){var t=Object(j.e)((function(t){return t.cart})),e=Object(j.d)();Object(s.useEffect)((function(){e(g())}),[t,e]);return Object(S.jsxs)("div",{className:"cart-container",children:[Object(S.jsx)("h2",{className:"mt-5",children:"Shopping Cart"}),0===t.cartItems.length?Object(S.jsxs)("div",{className:"cart-empty",children:[Object(S.jsx)("p",{children:"Your cart is currently empty"}),Object(S.jsx)("div",{className:"start-shopping",children:Object(S.jsxs)(l.b,{to:"/",children:[Object(S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-arrow-left",viewBox:"0 0 16 16",children:Object(S.jsx)("path",{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})}),Object(S.jsx)("span",{children:"Start Shopping"})]})})]}):Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{className:"titles",children:[Object(S.jsx)("h3",{className:"product-title",children:"Product"}),Object(S.jsx)("h3",{className:"price",children:"Price"}),Object(S.jsx)("h3",{className:"quantity",children:"Quantity"}),Object(S.jsx)("h3",{className:"total",children:"Total"})]}),Object(S.jsx)("div",{className:"cart-items",children:t.cartItems&&t.cartItems.map((function(t){return Object(S.jsxs)("div",{className:"cart-item",children:[Object(S.jsxs)("div",{className:"cart-product",children:[Object(S.jsx)("img",{src:t.image,alt:t.name}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:t.name}),Object(S.jsx)("p",{children:t.desc}),Object(S.jsx)("p",{children:Object(S.jsx)(l.b,{className:"btn border-dark noborder-dark rounded-0 btn_line cart_pd",to:"/cart2/".concat(t.id),children:"View Details"})}),Object(S.jsx)("p",{children:Object(S.jsx)("button",{className:"btn border-dark noborder-dark rounded-0 btn_line cart_pd",onClick:function(){e(f(t))},children:"Remove"})})]})]}),Object(S.jsxs)("div",{className:"cart-product-price",children:["$",t.price]}),Object(S.jsxs)("div",{className:"cart-product-quantity",children:[Object(S.jsx)("button",{onClick:function(){e(v(t))},children:"-"}),Object(S.jsx)("div",{className:"count",children:t.cartQuantity}),Object(S.jsx)("button",{onClick:function(){e(x(t))},children:"+"})]}),Object(S.jsxs)("div",{className:"cart-product-total-price",children:["$",t.price*t.cartQuantity]})]},t.id)}))}),Object(S.jsxs)("div",{className:"cart-summary",children:[Object(S.jsx)("button",{className:"clear-btn",onClick:function(){e(N())},children:"Clear Cart"}),Object(S.jsxs)("div",{className:"cart-checkout",children:[Object(S.jsxs)("div",{className:"subtotal",children:[Object(S.jsx)("span",{children:"Subtotal"}),Object(S.jsxs)("span",{className:"amount",children:["$",t.cartTotalAmount]})]}),Object(S.jsx)("p",{children:"Taxes and shipping calculated at checkout"}),Object(S.jsx)("button",{className:"bg-dark rounded-0",children:"Check out"}),Object(S.jsx)("div",{className:"continue-shopping",children:Object(S.jsxs)(l.b,{to:"/",className:"cont_shop",children:[Object(S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-arrow-left",viewBox:"0 0 16 16",children:Object(S.jsx)("path",{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})}),Object(S.jsx)("span",{children:"Continue Shopping"})]})})]})]})]})]})},E=function(){var t=Object(j.e)((function(t){return t.cart})),e=Object(j.d)();return Object(s.useEffect)((function(){e(g())}),[t,e]),Object(S.jsxs)("div",{className:"cart-container",children:[Object(S.jsx)("h2",{children:"Shopping Cart QQQQ"}),Object(S.jsx)("div",{children:Object(S.jsx)("div",{className:"cart-items",children:t.cartItems.map((function(t){return Object(S.jsxs)("div",{className:"cart-item",children:["QTY",t.cartQuantity]},t.id)}))})})]})},R=function(){var t=Object(j.e)((function(t){return t.products})),e=(t.items,t.status,Object(j.d)()),c=Object(o.g)(),a=Object(s.useState)({}),r=Object(A.a)(a,2),n=r[0],i=r[1],d=Object(o.h)().id;Object(s.useEffect)((function(){var t=function(){var t=Object(Q.a)(Object(T.a)().mark((function t(){var e;return Object(T.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.a.get("https://fakewoocomapi.github.io/products/".concat(d));case 2:e=t.sent,i(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]);return Object(S.jsx)("div",{className:"container py-4",children:Object(S.jsx)("div",{className:"container mt-5",children:Object(S.jsxs)("div",{className:"row",children:[Object(S.jsx)("div",{className:"col-md-6 col-12 text-center",children:Object(S.jsx)("img",{className:"img-fluid mb-3",src:n.image,alt:"abcdgh"})}),Object(S.jsxs)("div",{className:"col-md-6 col-12",children:[Object(S.jsxs)("h3",{className:"list-group-item",children:[Object(S.jsx)("strong",{className:"text-success",children:" Name:"})," ",n.title]}),Object(S.jsxs)("div",{className:"list-group-item",children:[Object(S.jsx)("strong",{children:" Price"})," ",n.price]}),Object(S.jsxs)("div",{className:"list-group-item",children:["user name: ",n.description]}),Object(S.jsx)("div",{}),Object(S.jsxs)("button",{className:"btn btn-dark rounded-0 mt-3 dtl_btn",onClick:function(){return e(p(n)),void c.push("/cart")},children:[Object(S.jsx)("img",{className:"ad_crt_icn",src:"https://fakewoocomapi.github.io/images/sh_ic1.png",alt:"Fitted shirt"}),"Add To Cart"]}),Object(S.jsx)("div",{className:"continue-shopping",children:Object(S.jsxs)(l.b,{to:"/",className:"cont_shop",children:[Object(S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-arrow-left",viewBox:"0 0 16 16",children:Object(S.jsx)("path",{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})}),Object(S.jsx)("span",{children:"Continue Shopping"})]})}),Object(S.jsx)("br",{}),Object(S.jsx)("hr",{})]})]})})})};c(123);var Y,$=function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsxs)(l.a,{children:[Object(S.jsx)(d.a,{}),Object(S.jsx)(V,{}),Object(S.jsx)("div",{className:"content-container",children:Object(S.jsxs)(o.d,{children:[Object(S.jsx)(o.b,{path:"/",exact:!0,component:L}),Object(S.jsx)(o.b,{path:"/about",exact:!0,component:P}),Object(S.jsx)(o.b,{path:"/cart2/:id",component:R}),Object(S.jsx)(o.b,{path:"/cartqq",component:E}),Object(S.jsx)(o.b,{path:"/cart",component:B}),Object(S.jsx)(o.b,{path:"/not-found",component:J}),Object(S.jsx)(o.a,{to:"/not-found"})]})})]})})},D=Object(m.c)("products/productsFetch",Object(Q.a)(Object(T.a)().mark((function t(){var e;return Object(T.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F.a.get("https://fakewoocomapi.github.io/");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))),U=Object(m.d)({name:"products",initialState:{items:[],status:null},reducers:{},extraReducers:(Y={},Object(a.a)(Y,D.pending,(function(t,e){t.status="pending"})),Object(a.a)(Y,D.fulfilled,(function(t,e){t.items=e.payload,t.status="success"})),Object(a.a)(Y,D.rejected,(function(t,e){t.status="rejected"})),Y)}).reducer,G=Object(m.a)({reducer:Object(a.a)({products:U,cart:w},_.reducerPath,_.reducer),middleware:function(t){return t().concat(_.middleware)}});G.dispatch(D()),G.dispatch(g()),i.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(j.a,{store:G,children:Object(S.jsx)($,{})})}),document.getElementById("root"))},60:function(t,e,c){}},[[124,1,2]]]);
//# sourceMappingURL=main.3346db3e.chunk.js.map