import { type FilesListProps } from "~/utils/types";
import { FileItem } from "./FileItem";

export function FilesContainer({
  files,
  fetchFiles,
  setFiles,
  downloadUsingEndpoint,
}: FilesListProps) {
  if (files.length === 0) {
    return (
      <div className="flex h-96 flex-col items-center justify-center ">
        <p className="text-xl"></p>
      </div>
    );
  }

  return (
    <div className="h-96">
      <h1 className="text-xl ">
        Last {files.length} uploaded file{files.length > 1 ? "s" : ""}
      </h1>
      <ul className="h-80 overflow-auto">
        {files.map((file) => (
          <FileItem
            key={file.id}
            file={file}
            fetchFiles={fetchFiles}
            setFiles={setFiles}
            downloadUsingEndpoint={downloadUsingEndpoint}
          />
        ))}
      </ul>
    </div>
  );
}
