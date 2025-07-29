"use client"

export default function TestImagesPage() {
  const testImages = [
    { name: "Daikin Comfora", path: "/images/daikin-comfora-right.webp" },
    { name: "Daikin Emura", path: "/images/daikin-emura-wit.webp" },
    { name: "Daikin Stylish", path: "/images/daikin-stylish-wit.webp" },
    { name: "LG ArtCool", path: "/images/lg-artcool-mirror.webp" },
    { name: "Samsung WindFree", path: "/images/samsung/windfreeElite/WindFree Elite_S2_Front_Web_RGB.webp" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Image Test Page</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {testImages.map((img, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">{img.name}</h3>
            <p className="text-xs text-gray-500 mb-4">Path: {img.path}</p>
            
            {/* Test with different methods */}
            <div className="space-y-4">
              {/* Method 1: Direct img tag */}
              <div>
                <p className="text-sm font-medium mb-1">Direct img:</p>
                <div className="border border-gray-300 p-2 bg-gray-50">
                  <img 
                    src={img.path} 
                    alt={img.name}
                    className="w-full h-32 object-contain"
                    onError={() => console.error(`Failed to load: ${img.path}`)}
                  />
                </div>
              </div>
              
              {/* Method 2: With background color */}
              <div>
                <p className="text-sm font-medium mb-1">With black background:</p>
                <div className="border border-gray-300 p-2 bg-black">
                  <img 
                    src={img.path} 
                    alt={img.name}
                    className="w-full h-32 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}