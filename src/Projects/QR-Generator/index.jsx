import React, { useState } from "react";
import "./QRcode.css";

const QRCode = () => {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrData, setqrData] = useState("https://google.com");
  const [qrSize, setqrSize] = useState(150);
  const [error, setError] = useState("");

  const generateQR = async () => {
    setLoading(true);

    try {
      if (qrSize >= 100 && qrSize <= 300) {
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(
          qrData
        )}`;
        setImg(url);
        setError("");
      } else {
        setImg(null);
        setError("Maximum size 300 and Minimum Size 100");
      }
    } catch (error) {
      console.error("Error generating QR Code", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const downloadQR = () => {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => console.error("Error downloading QR code", error));
  };

  const handleSizeChange = (e) => {
    setqrSize(e.target.value);
    setError("");
  };

  return (
    <>
      <div className="app-container">
        <h1>QR CODE GENERATOR</h1>

        {loading && <p>Please Wait...</p>}

        <img src={img} alt="" className="qr-img" />
        <div>
          <label htmlFor="dataInput" className="input-label">
            Data for QR Code :{" "}
          </label>
          <input
            type="text"
            id="dataInput"
            value={qrData}
            onChange={(e) => setqrData(e.target.value)}
            placeholder="Enter data for QR code"
          />

          <label htmlFor="sizeInput" className="input-label">
            Image Size (e.g. 100) :{" "}
          </label>
          <input
            type="text"
            id="sizeInput"
            value={qrSize}
            onChange={(e) => handleSizeChange(e)}
            placeholder="Enter Image Size"
          />

          {error && <p className="error-msg">{error}</p>}

          <button
            className="generate-button"
            disabled={loading}
            onClick={() => generateQR()}
          >
            Generate QR code
          </button>
          <button className="download-button" onClick={() => downloadQR()}>
            Download QR code
          </button>
        </div>
        <p className="footer">
          Desinged By{" "}
          <a href="https://github.com/Nkbalaji2002" target="_blank">
            Nithish Kumar
          </a>
        </p>
      </div>
    </>
  );
};

export default QRCode;
