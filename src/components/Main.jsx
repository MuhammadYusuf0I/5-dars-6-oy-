import WFH from "../assets/WFH.png";
import step from "../assets/step.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";
import step5 from "../assets/step5.png";
import website from "../assets/website.png";
import bot from "../assets/bot.png";
import SMM from "../assets/smm.png";
import design from "../assets/design.png";
import crm from "../assets/crm.png";

import "./Main.css";
import React from "react";

function Main() {
  return (
    <>
      <div className="container">
        <div className="row g-0 position-relative pixer ">
          <div className="pixer-info col-md-6 ">
            <h2 className="mt-0 ">
              Biznesingizni keyingi bosqichga olib chiqing
            </h2>
            <p>
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
              Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in.
              Vivamus mattis eros at sem pulvinar
            </p>
            <button
              type="button"
              className="btn btn-info"
              style={{ color: "white" }}
            >
              Xizmatlar bilan tanishish
            </button>
          </div>
          <div className="col-md-6 mb-md-0 p-md-4 pixer-img">
            <img src={WFH} className="w-100" alt="..." />
          </div>
        </div>
        <div>
          <h3 className="text-center">Xizmatlar</h3>
          <p className="pixer-text mb-4" style={{ width: "790px" }}>
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
            facilisis lacinia ex, eget sollicitudin massa pellentesque in.
            Vivamus mattis eros at sem pulvinar
          </p>
          <div className="row row-cols-1 row-cols-md-3 g-5 p-5">
            <div className="col ">
              <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
                <img
                  style={{ width: "202px", height: "270px" }}
                  src={website}
                  className="card-img-top w-100 p-4 "
                  alt="..."
                />
                <div className="card-body text-center">
                  <h3 className="card-title">Vebsayt tuzish</h3>
                  <p className="card-text">lorem ipsum</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
                <img
                  style={{ width: "202px", height: "270px" }}
                  src={bot}
                  className="card-img-top w-100 p-4"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Telegram bot</h5>
                  <p className="card-text">lorem ipsum</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
                <img
                  style={{ width: "202px", height: "270px" }}
                  src={SMM}
                  className="card-img-top w-100 p-4"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title">SMM</h5>
                  <p className="card-text">lorem ipsum</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
                <img
                  style={{ width: "202px", height: "270px" }}
                  src={design}
                  className="card-img-top w-100 p-4"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Grafik dizayn</h5>
                  <p className="card-text">lorem ipsum</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
                <img
                  src={crm}
                  style={{ width: "202px", height: "270px" }}
                  className="card-img-top w-100 p-4"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title">CRM tizimlar</h5>
                  <p className="card-text">lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pixer-btn ">
            <button
              type="button"
              className="btn btn-info"
              style={{ color: "white" }}
            >
              Xizmatlar bilan tanishish
            </button>
            <button type="button" class="btn btn-link">
              <a
                href="#"
                className="info-pixer link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                style={{ textDecoration: "none" }}
              >
                Xizmatlar sahifasiga o’tish
              </a>
            </button>
          </div>
        </div>
        <div className="mt-5">
          <div>
            <h3 className="text-center">Biz qanday ishlaymiz?</h3>
            <p className="pixer-text mb-4" style={{ width: "790px" }}>
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
              Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in.
              Vivamus mattis eros at sem pulvinar
            </p>
          </div>
          <div className="row g-0  position-relative pixer-card-left ">
            <div className="col-md-6 mb-md-0 p-md-4">
              <img src={step} alt="..." style={{ width: "300px" }} />
            </div>
            <div className="col-md-6 p-4 ps-md-0">
              <h3 className="mt-0 gap-3 ">Talablarni aniqlab chiqamiz</h3>
              <p className="fs-5">
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                Nam facilisis
              </p>
            </div>
          </div>
          <div className="row g-0  position-relative pixer-card-left ">
            <div className="col-md-6 p-4 ps-md-0">
              <h3 className="mt-0 gap-3 fs-4">
                Bir necha yechimlarni taklif qilamiz
              </h3>
              <p className="fs-5">
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                Nam facilisis
              </p>
            </div>
            <div className="col-md-6 mb-md-0 p-md-4">
              <img src={step2} alt="..." style={{ width: "300px" }} />
            </div>
          </div>
          <div className="row g-0  position-relative pixer-card-left ">
            <div className="col-md-6 mb-md-0 p-md-4">
              <img src={step3} alt="..." style={{ width: "300px" }} />
            </div>
            <div className="col-md-6 p-4 ps-md-0">
              <h3 className="mt-0 gap-3 ">Loyiha uchun vaqt belgilaymiz</h3>
              <p className="fs-5">
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                Nam facilisis
              </p>
            </div>
          </div>
          <div className="row g-0  position-relative pixer-card-left ">
            <div className="col-md-6 p-4 ps-md-0">
              <h3 className="mt-0 gap-3 ">
                A’lo sifat bilan bajarib topshiramiz
              </h3>
              <p className="fs-5">
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                Nam facilisis
              </p>
            </div>
            <div className="col-md-6 mb-md-0 p-md-4">
              <img src={step4} alt="..." style={{ width: "300px" }} />
            </div>
          </div>
          <div className="row g-0  position-relative pixer-card-left ">
            <div className="col-md-6 mb-md-0 p-md-4">
              <img src={step5} alt="..." style={{ width: "300px" }} />
            </div>
            <div className="col-md-6 p-4 ps-md-0">
              <h3 className="mt-0 gap-3 ">Qo’llab-quvvatlab boramiz</h3>
              <p className="fs-5">
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                Nam facilisis
              </p>
            </div>
          </div>
          <div className=" text-center mb-5">
            <button
              type="button"
              className="btn btn-info"
              style={{ color: "white" }}
            >
              Buyurtma berish
            </button>
          </div>
        </div>
        <div className=" pixer-main mt-2 py-5 container">
          <h3 className="text-center " style={{ color: "white" }}>
            Buyurtma berish
          </h3>
          <p
            className="pixer-text mb-4"
            style={{ width: "790px", color: "white" }}
          >
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
            facilisis lacinia ex, eget sollicitudin massa pellentesque in.
            Vivamus mattis eros at sem pulvinar
          </p>
          <div className="pixer-input">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Ismingiz"
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Telefon raqamingiz"
              />
            </div>
            <select
              className="form-select mb-3"
            >
              <option selected>Xizmat turi</option>
              <option value="1">
                Dastafka "Mashinaga"
              </option>
              <option value='1'>
                Dastafka "Mashinasiz"
              </option>
            </select>
            <div className="text-center">
              <button
                type="button "
                className="  btn btn-info "
                style={{ color: "white" }}
              >
                Buyurtma berish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
