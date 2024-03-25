import QRCode from 'qrcode';
import { useState } from 'react';

function QR() {
  const [url, setUrl] = useState('');
  const [qr, setQr] = useState('');

  const GenerateQRCode = () => {
    QRCode.toDataURL(url, {
      width: 800,
      margin: 2,
      color: {
        dark: '#335383FF',
        light: '#EEEEEEFF',
      },
    }, (err, url) => {
      if (err) return console.error(err);

      console.log(url);
      setQr(url);
    });
  };

  return (
    <div className="app max-w-md flex flex-col mx-auto text-center py-8">
      <h1 className="text-2xl font-bold mb-4">QR Generator</h1>
      <input 
        type="text"
        placeholder="e.g. https://google.com"
        className="text-center py-2 px-4 border-2 border-gray-200 rounded-lg mb-4 w-full"
        value={url}
        onChange={e => setUrl(e.target.value)} />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={GenerateQRCode}>
        Generate
      </button>
      {qr && (
        <>
          <div className="mt-4">
            <img src={qr} alt="Generated QR Code" className="mx-auto" />
          </div>
          <a href={qr} download="qrcode.png" className="inline-block mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default QR;