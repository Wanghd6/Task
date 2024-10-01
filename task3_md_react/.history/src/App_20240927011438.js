function App() {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('File selected:', file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        console.log('File content:', event.target.result);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input
        id="file-input"
        type="file"
        onChange={(e) => {
          console.log('File input changed');
          handleFileChange(e);
        }}
      />
    </div>
  );
}

export default App;
