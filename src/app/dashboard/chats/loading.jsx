
export default function Loading(){
    return (
        <div className="flex h-[90%]">
          <div className="w-1/3 bg-gray-100 p-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-3 mb-2 animate-pulse">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
              </div>
            ))}
          </div>
          <div className="w-2/3 bg-white p-4">
            <div className="h-full bg-gray-100 rounded-lg animate-pulse"></div>
          </div>
        </div>
      );
}