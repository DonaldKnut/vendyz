"use client";

import React, { useState, useEffect } from "react";
import Sort from "@/components/Sort";
import Card from "@/components/Card";
import { getFileTypesParams } from "@/lib/utils";

type File = {
  id: string;
  name: string;
  type: string;
  size: number; // size in bytes
  createdAt: string;
};

const fetchDummyFiles = async ({
  types,
  searchText,
  sort,
}: {
  types: string[];
  searchText: string;
  sort: string;
}): Promise<{ total: number; documents: File[] }> => {
  // Simulate client-side fetching with static data
  const dummyFiles: File[] = [
    {
      id: "1",
      name: "Sample File 1",
      type: types[0] || "document",
      size: 1024 * 1024, // 1 MB
      createdAt: "2024-11-21T12:00:00Z",
    },
    {
      id: "2",
      name: "Sample File 2",
      type: types[1] || "image",
      size: 2048 * 1024, // 2 MB
      createdAt: "2024-11-20T14:00:00Z",
    },
  ];

  // Filter by searchText (if any)
  const filteredFiles = dummyFiles.filter((file) =>
    file.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Simulate sorting (asc or desc by name)
  if (sort === "asc") {
    filteredFiles.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "desc") {
    filteredFiles.sort((a, b) => b.name.localeCompare(a.name));
  }

  return { total: filteredFiles.length, documents: filteredFiles };
};

const Page = () => {
  const [files, setFiles] = useState<{ total: number; documents: File[] }>({
    total: 0,
    documents: [],
  });
  const [searchText, setSearchText] = useState("");
  const [sort, setSort] = useState("");
  const type = "all"; // Hardcoded for now, can be dynamic

  useEffect(() => {
    const fetchFiles = async () => {
      const types = getFileTypesParams(type);
      const data = await fetchDummyFiles({ types, searchText, sort });
      setFiles(data);
    };

    fetchFiles();
  }, [searchText, sort]);

  // Calculate total size in MB
  const totalSizeInMB =
    files.documents.reduce((total, file) => total + file.size, 0) /
    (1024 * 1024);

  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1 capitalize">{type || "All Files"}</h1>

        <div className="total-size-section">
          <p className="body-1">
            Total: <span className="h5">{totalSizeInMB.toFixed(2)} MB</span>
          </p>

          <div className="sort-container">
            <p className="body-1 hidden text-light-200 sm:block">Sort by:</p>
            <Sort onChange={setSort} />
          </div>
        </div>
      </section>

      {/* Render the files or show a message if no files are found */}
      {files.total > 0 ? (
        <section className="file-list">
          {files.documents.map((file) => (
            <Card key={file.id} file={file} />
          ))}
        </section>
      ) : (
        <p className="empty-list">No files uploaded</p>
      )}
    </div>
  );
};

export default Page;
