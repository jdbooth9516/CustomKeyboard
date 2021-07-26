import React, { useState, useEffect, useRef } from "react";
import "./Information.css";

const Information = () => {
  const mainRef = useRef(null);
  const [layout, setLayout] = useState(true);
  const [switches, setSwitches] = useState(false);
  const [services, setServices] = useState(false);
  const [keycaps, setKeycaps] = useState(false);

  const closeAll = () => {
    setLayout(false);
    setSwitches(false);
    setServices(false);
    setKeycaps(false);
  };

  useEffect(() => {
    mainRef.current.focus();
  }, []);

  return (
    <div ref={mainRef} tabIndex="-1" className="information-container">
      {/* VIDEO SECTION */}
      <div className="video-player">
        <iframe
          id="ytplayer"
          type="text/html"
          width="854"
          height="480"
          src={`https://www.youtube.com/embed/Qr3nYR15wxU?autoplay=0&origin=http://example.com`}
          frameborder="0"
        ></iframe>
      </div>
      {/* button tabs */}
      <div className="info-tabs">
        <button
          className="category-btn-1"
          onClick={() => (closeAll(), setLayout(true))}
        >
          Layout
        </button>
        <button
          className="category-btn-2"
          onClick={() => (closeAll(), setSwitches(true))}
        >
          Switches
        </button>
        <button
          className="category-btn-3"
          onClick={() => (closeAll(), setServices(true))}
        >
          Services
        </button>
        <button
          className="category-btn-4"
          onClick={() => (closeAll(), setKeycaps(true))}
        >
          Keycaps
        </button>
      </div>
      {/* INFORMATION BY CATEGORY */}
      {layout ? (
        <div className="info-sections">
          <h5>Layouts</h5>
          <div className="info-card-sections">
            <div className="info-card">
              <h5>Full</h5>
              <div className="information details">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/71--t5c6-lL._AC_SL1500_.jpg"
                  alt="pic of full keyboard"
                  width="auto"
                  height="100"
                />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Autem libero nobis animi dicta quod expedita quaerat maiores
                  officia velit est amet quam, perferendis exercitationem quia.
                </p>
              </div>
            </div>
            <div>layout2</div>
            <div>layout3</div>
            <div>layout4</div>
            <div>layout5</div>
          </div>
        </div>
      ) : null}
      {switches ? (
        <div className="info-sections">
          <h5>Switches</h5>
          <div className="info-card-sections">
            <div className="info-card">
              <h5>Blues</h5>
              <div className="information details">
                <img
                  src="https://imgr.search.brave.com/a-dhI2BC2PB6-27asbpVueEoSG_FhNTo2pKoOUb9WcA/fit/474/225/no/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5G/ei1RTG5IdWNNaU5k/azNTSkR4TmtBSGFI/YSZwaWQ9QXBp"
                  alt="pic of full keyboard"
                  width="auto"
                  height="100"
                />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Autem libero nobis animi dicta quod expedita quaerat maiores
                  officia velit est amet quam, perferendis exercitationem quia.
                </p>
              </div>
            </div>
            <div>switches 2</div>
            <div>switches 3</div>
            <div>switches 4</div>
            <div>switches 5</div>
          </div>
        </div>
      ) : null}
      {services ? (
        <div className="info-sections">
          <h5>Services</h5>
          <div className="info-card-sections">
            <div className="info-card">
              <h5>Lubing switches</h5>
              <div className="information details">
                <img
                  src="https://imgr.search.brave.com/sAq53rOqBrj8hAivjRXLZzvlraK8YuGYmbhvym1g0hE/fit/474/225/no/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Y/ZjNqNTNVLVQ4ang5/OUViZlY2Z1dRSGFI/YSZwaWQ9QXBp"
                  alt="pic of full keyboard"
                  width="auto"
                  height="100"
                />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Autem libero nobis animi dicta quod expedita quaerat maiores
                  officia velit est amet quam, perferendis exercitationem quia.
                </p>
              </div>
            </div>
            <div>services 2</div>
            <div>services 3</div>
            <div>services 4</div>
            <div>services 5</div>
          </div>
        </div>
      ) : null}
      {keycaps ? (
        <div className="info-sections">
          <h5>Keycaps</h5>
          <div className="info-card-sections">
            <div className="info-card">
              <h5>ABS</h5>
              <div className="information details">
                <img
                  src="https://imgr.search.brave.com/wzl7daK1m3l9oWWUtjhTIDTSvuUQbaYJJ1u-yyODnf4/fit/540/360/no/1/aHR0cHM6Ly9tYXNz/ZHJvcC1zMy5pbWdp/eC5uZXQvcHJvZHVj/dC1pbWFnZXMvZHJv/cC1vYmxvdHpreS1n/bWstb2JsaXZpb24t/djItY3VzdG9tLWtl/eWNhcC1zZXQvRlAv/dkMwcFlrVUFUTlNq/RFdmM2pvUUpfdHJh/bnNwYXJlbnRfZ21r/X29ibGl2aW9uX3Yy/X2tleWJvYXJkX25v/MTY1X2dpdF9vYmxp/dmlvbl9wZXJzcF9j/bG9zZS5qcGc_YXV0/bz1mb3JtYXQmZm09/anBnJmZpdD1jcm9w/Jnc9NTQwJmJnPWYw/ZjBmMCZkcHI9MSZx/PTcw"
                  alt="pic of blue switch"
                  width="auto"
                  height="100"
                />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Autem libero nobis animi dicta quod expedita quaerat maiores
                  officia velit est amet quam, perferendis exercitationem quia.
                </p>
              </div>
            </div>
            <div>PBC</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Information;
