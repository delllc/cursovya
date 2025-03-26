import { Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { DefaultLayout, Viewer } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useState } from 'react';

const PdfReader = () => {
    const [pdfUrl, setPdfUrl] = useState('');

    return (
        <div className="container mx-auto p-4">
            <h1 className="fontBold mb-4 text-2xl">Читалка</h1>

            <div className="rounded-lg border p-4 shadow-md">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js">
                    {pdfUrl ? <Viewer fileUrl={pdfUrl} plugins={[DefaultLayout()]} /> : <p className="text-center text-gray-500">PDF not find</p>}
                </Worker>
            </div>
        </div>
    );
};

export default PdfReader;
