import "../App.css"
import QRCode from "../assets/image-qr-code.png"

const QRCodeCard = () => (
    <div className="qrcode--card d-flex align-items-center justify-content-center">
        <div className="card p-3 m-5" style={{ borderRadius: 20 }}>
            <div className="card-body d-flex justify-content-center align-items-center p-0">
                <div className="row">
                    <div className="col-md-12">
                        <img className="mb-2 p-2" src={QRCode} alt="QRcode"/>
                        <h4>Improve your front-end skills by building projects</h4>
                        <small>Scan the QR code to visit Frontend Mentor and take coding skills to the next level</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default QRCodeCard;