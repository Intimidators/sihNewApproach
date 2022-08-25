function WebinarShowPage() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <iframe
        src="https://us05web.zoom.us/j/82775991592?pwd=SERQRjZHV0w4OGNzcmtYSWUxTjNQZz09"
        allow="camera;microphone"
        style={{ height: "100%", width: "100%" }}
        // sandbox="allow-top-navigation allow-scripts allow-forms"
      />
    </div>
  );
}
export default WebinarShowPage;
