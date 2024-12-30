export const downloadFile = (url: string, fileName: string) => {
  try {
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName ? fileName : url;
    a.click();

    return { code: "success", error: null };
  } catch (error) {
    return { code: "error", error };
  }
};
