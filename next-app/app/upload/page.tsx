"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      <p>Img Public Id :{publicId}</p>
      {publicId && (
        <CldImage
          src={publicId} // Use just the public ID
          width={270}
          height={180}
          alt="a logo"
        />
      )}
      <CldUploadWidget
        uploadPreset="o383zzon"
        onSuccess={(result) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
          console.log("Result", result);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
