import Link from "next/link";
import { LoadSpinner } from "../LoadSpinner";
import { type UploadFilesFormUIProps } from "~/utils/types";

export function UploadFilesFormUI({
  isLoading,
  fileInputRef,
  uploadToServer,
  maxFileSize,
}: UploadFilesFormUIProps) {
  return (
    <form
      className="flex flex-col items-center justify-center gap-3"
      onSubmit={uploadToServer}
    >
      <h1 className="text-2xl">
        Upload Geojson Data
      </h1>
      <p className="text-lg">{`Total file(s) size should not exceed ${maxFileSize} MB`}</p>
      {isLoading ? (
        <LoadSpinner />
      ) : (
        <div className="flex h-16 gap-5">
          <input
            id="file"
            type="file"
            multiple
            className="rounded-md border bg-gray-100 p-2 py-5"
            required
            ref={fileInputRef}
          />
          <button
            disabled={isLoading}
            className="m-2 rounded-md bg-blue-500 px-5 py-2 text-white
                hover:bg-blue-600  disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            Upload
          </button>
        </div>
      )}
    </form>
  );
}
