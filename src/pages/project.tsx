import React, { useState } from 'react'
import BaseLayout from '../layouts/BaseLayout';

export default function UploadProject() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.length) {
            setSelectedFile(event.target.files[0]);
            setIsFilePicked(true);
        }
    };

    const handleSubmission = () => {
        // Implement logic to send file to server here
    };

    return (
        <BaseLayout>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <div className="p-5 bg-white rounded shadow-md w-96">
                    <h1 className="text-2xl font-bold mb-7 text-center">Upload your project</h1>
                    <input type="file" name="file" onChange={changeHandler} />
                    {isFilePicked && selectedFile ? (
                        <div>
                            <p>Filename: {selectedFile.name}</p>
                            <p>Filetype: {selectedFile.type}</p>
                            <p>Size in bytes: {selectedFile.size}</p>
                            <p>Last modified date: {new Date(selectedFile.lastModified).toLocaleDateString()}</p>
                            <div className="mt-6">
                                <button
                                    onClick={handleSubmission}
                                    className="bg-blue-500 text-white w-full py-3 rounded hover:bg-blue-600">
                                    Submit
                                </button>
                            </div>
                        </div>
                    ) : (
                        <p>Select a file to show details</p>
                    )}
                </div>
            </div>
        </BaseLayout>
    )
}
