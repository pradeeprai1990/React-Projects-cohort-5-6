import React from "react";

import heroImg from "../../assets/hero.png";

export default function Home() {
  let a = 10;
  let b = 20;

  let name = "Ws";
  let n = {
    cname: "ws",
    email: "ws@gmail.com",
  };
  console.log(n);

  let status = false;

  let passwordStatus = false;

  let l = ["ram", "ravi", "raj"];

  let alluser = l.map((v, i) => (
    <h5>
      {i + 1}
      {v}
    </h5>
  ));

  return (
    <>
      <section className="bg-gray-300 lg:py-[50px] sm:py-10 py-5">
        <h2 className="text-center  font-bold text-3xl">Our Product</h2>

        <div className="max-w-mycontainer mx-auto mt-5 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>

      <div>
        <img src={heroImg} alt="" />
        <img src="/1.jpeg" width="300" />
        {alluser}
        {l.map((v, i) => {
          return (
            <h3>
              {" "}
              {i + 1} {v}{" "}
            </h3>
          );
        })}
        {l.map((v, i) => (
          <div>
            {" "}
            {i + 1} {v}{" "}
          </div>
        ))}
        {/* {l} */}
        {status ? <p>True Welcome</p> : <p>False Welcome</p>}
        {status && <p>True Welcome</p>}
        <input type={passwordStatus ? "text" : "password"} />
        <h1>
          {`Welcome ${name}  `}
          {n.cname} {n.email} {name} {a + b} {"Hello"}{" "}
        </h1>
        Welcome to Home page
      </div>
    </>
  );
}

function ProductCard() {
  return (
    <figure className="bg-white group ">
      <div className="overflow-hidden">
        <img
        className="duration-200 group-hover:scale-125"
          src="https://www.wscubetech.com/_next/image?url=https%3A%2F%2Fdeen3evddmddt.cloudfront.net%2Fimages%2Fhome-images%2Fjodhpur-team.webp&w=1080&q=75"
          alt=""
        />
      </div>

      <h3 className="text-center py-3 font-bold uppercase">Iphone</h3>
    </figure>
  );
}
