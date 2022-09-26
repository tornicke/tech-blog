const commentDisplay = async (event) => {
  event.preventDefault();

  const id = document.querySelector("#blog-name").dataset.blog_id;
  const content = document.querySelector("#blog-desc").value.trim();

  if (id && content) {
    const response = await fetch(`/api/blogs/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title: name, content: description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to update blog");
    }
  }
};

document
  .querySelector(".new-blog-form")
  .addEventListener("submit", updatedBlog);
