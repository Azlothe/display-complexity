export const downloadFromURL = async (url: string, filename: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();

    // minor optimization: reuse the same <a> element if it exists
    let downloadLink = document.getElementById(
      "downloadLink"
    ) as HTMLAnchorElement;
    if (!downloadLink) {
      downloadLink = document.createElement("a");
      downloadLink.id = "downloadLink";
      document.body.appendChild(downloadLink);
    }

    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = filename;
    downloadLink.click();

    // clean up the URL after the download
    URL.revokeObjectURL(downloadLink.href);
  } catch (error) {
    console.error("Error downloading image:", error);
  }
};
