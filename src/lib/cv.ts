export function downloadCV() {
  try {
    // Create a link element
    const link = document.createElement("a");

    // Set the href to the CV HTML file
    link.href = "/cv/cv.html";

    // Set the download attribute with a custom filename
    link.download = "CV-Nguyen-Van-Developer.pdf";

    // Set target to open in new tab for HTML viewing
    link.target = "_blank";

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show success message
    return { success: true, message: "CV đã được tải xuống!" };
  } catch (error) {
    console.error("Error downloading CV:", error);
    return { success: false, message: "Có lỗi xảy ra khi tải CV" };
  }
}

export function downloadCVAsPDF() {
  try {
    // Open CV in new window for printing/PDF generation
    const newWindow = window.open("/cv/cv.html", "_blank");

    if (newWindow) {
      // Wait for the window to load, then trigger print
      newWindow.onload = () => {
        setTimeout(() => {
          newWindow.print();
        }, 1000);
      };
    }

    return { success: true, message: "CV đã được mở để in/PDF!" };
  } catch (error) {
    console.error("Error opening CV for PDF:", error);
    return { success: false, message: "Có lỗi xảy ra khi mở CV" };
  }
}

export function copyCVLink() {
  try {
    const cvUrl = `${window.location.origin}/cv/cv.html`;
    navigator.clipboard.writeText(cvUrl);
    return { success: true, message: "Link CV đã được copy!" };
  } catch (error) {
    console.error("Error copying CV link:", error);
    return { success: false, message: "Có lỗi xảy ra khi copy link" };
  }
}
