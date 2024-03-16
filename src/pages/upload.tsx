import Head from "next/head";
import { useState, useEffect } from "react";
import { type FileProps } from "~/utils/types";
import { UploadFilesRoute } from "~/components/UploadFilesForm/UploadFilesRoute";

export type fileUploadMode = "NextjsAPIEndpoint";

export default function UploadPage() {
  const [files, setFiles] = useState<FileProps[]>([]);
  const [uploadMode, setUploadMode] =
    useState<fileUploadMode>("NextjsAPIEndpoint");

  const fetchFiles = async () => {
    const response = await fetch("/api/files");
    const body = (await response.json()) as FileProps[];
    // set isDeleting to false for all files after fetching
    setFiles(body.map((file) => ({ ...file, isDeleting: false })));
  };

  // fetch files on the first render
  useEffect(() => {
    fetchFiles().catch(console.error);
  }, []);

  // determine if we should download using presigned url or Nextjs API endpoint
  const downloadUsingEndpoint = uploadMode === "NextjsAPIEndpoint";
  // handle mode change between s3PresignedUrl and NextjsAPIEndpoint
  const handleModeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUploadMode(event.target.value as fileUploadMode);
  };

  return (
    <>
      <Head>
        <title>Geojson Map Data</title>
        <meta
          name="description"
          content="File Uploads Geojson"
        />
      </Head>
      <main className="flex min-h-screen items-center justify-center gap-5 font-mono">
        <div className="container flex flex-col gap-5 px-3">
          <ModeSwitchMenu
            uploadMode={uploadMode}
            handleModeChange={handleModeChange}
          />
          {
            <UploadFilesRoute onUploadSuccess={fetchFiles} />
          }
          {/* <FilesContainer
            files={files}
            fetchFiles={fetchFiles}
            setFiles={setFiles}
            downloadUsingEndpoint={downloadUsingEndpoint}
          /> */}
        </div>
      </main>
    </>
  );
}

export type ModeSwitchMenuProps = {
  uploadMode: fileUploadMode;
  handleModeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

function ModeSwitchMenu({ uploadMode, handleModeChange }: ModeSwitchMenuProps) {
  return (
    <ul className="flex items-center justify-center gap-2">
      <li>
        <label htmlFor="uploadMode"></label>
      </li>
      <li>
        <select
          className="rounded-md border-2 border-gray-300"
          id="uploadMode"
          value={uploadMode}
          onChange={handleModeChange}
        >
          <option value="NextjsAPIEndpoint">Upload by API Endpoint</option>
        </select>
      </li>
    </ul>
  );
}
