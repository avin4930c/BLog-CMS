function BlogComment() {
    return (
        <div id="blog-comments" class="flex bg-gray-100 p-4 rounded-lg">
            <div class="w-16 h-16 mr-4">
                <img class="w-full h-full object-cover rounded-full" src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="User Avatar" />
            </div>
            <div class="w-full">
                <h3 class="text-lg font-semibold">John Doe</h3>
                <p class="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices.</p>
                <p class="mt-1 text-sm text-gray-500">Posted on June 21, 2024</p>
            </div>
        </div>
    )
}

export default BlogComment