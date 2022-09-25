const updatedBlog = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#blog-name").value.trim();
  const id = document.querySelector("#blog-name").dataset.blog_id;
  const description = document.querySelector("#blog-desc").value.trim();

  if (name && description) {
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
