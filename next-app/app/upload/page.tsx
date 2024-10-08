'use client';
import React, { useState } from 'react';
import { CldUploadWidget, CldImage } from 'next-cloudinary';

interface CloudinaryResult {
    public_id: string;
}

const UploadPage = () => {
    const [publicId, setPublicId] = useState('');

    return (
        <>
            {publicId && (
                <CldImage
                    src={publicId} // Use just the public ID
                    width={270}
                    height={180}
                    alt="a logo"
                    quality={75} // Optional: add quality to the image
                />
            )}
            <CldUploadWidget
                uploadPreset='o383zzon'
                onUploadAdded={(result, widget) => {
                    if (result.event !== 'success') return;
                    const info = result.info as CloudinaryResult;
                    setPublicId(info.public_id); // Store the public ID
                }}
            >
                {({ open }) => (
                    <button className='btn btn-primary' onClick={() => open()}>
                        Upload
                    </button>
                )}
            </CldUploadWidget>
        </>
    );
};

export default UploadPage;
