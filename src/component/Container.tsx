import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import QRCode from 'qrcode.react';

const Container = () => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

   

    const QrCodeGenerate = () => {
        const input = inputRef.current?.value;

        if (input) {
            setInputValue(input);
        } else {
            console.error("Input field is not available.");
        }
    };

    const downloadQrCode = () => {
        const canvas = document.querySelector('canvas');
        const QRCodeImg = canvas?.toDataURL('image/png');

        if (QRCodeImg) {
            const link = document.createElement('a');
            link.href = QRCodeImg;
            link.download = 'qr-code.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div className="container justify-center d-flex justify-content-center row p-3">
            <div className="col-6 row">
                <div className="input-group input-group-lg">
                    <span className="input-group-text" id="inputGroup-sizing-lg">
                        <FontAwesomeIcon icon={faPen} />
                    </span>
                    <input
                        type="text"
                        ref={inputRef}
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                        placeholder="Enter Link Address..."
                    />
                </div>
            </div>
            <div className='col-12 d-flex justify-content-center px-5'>
                <button className='btn btn-success my-3 col-4' onClick={QrCodeGenerate}>Qr Code Generate</button>
            </div>
            <div className='col-12 d-flex justify-content-center'>
                {inputValue && <QRCode value={inputValue} size={300} />}
            </div>
            <div className='col-12 d-flex justify-content-center px-5 py-3'>
                {inputValue && <button onClick={downloadQrCode} className='btn btn-primary col-4'>Download</button>}
            </div>
        </div>
    );
}

export default Container;
