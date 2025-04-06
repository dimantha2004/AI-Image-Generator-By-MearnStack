export default function CreatePost() {
    return (
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Create New Post</h1>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Title</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Content</label>
            <textarea 
              rows={4}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Create Post
          </button>
        </form>
      </div>
    );
  }