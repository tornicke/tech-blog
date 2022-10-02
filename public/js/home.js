const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#blog-name").value.trim();
  const description = document.querySelector("#blog-desc").value.trim();

  if (name && description) {
    const response = await fetch(`/api/blogs`, {
      method: "POST",
      body: JSON.stringify({ title: name, content: description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create blog");
    }
  }
};

const addCommentHandler = async (event) => {
  event.preventDefault();

  const description = document.querySelector("#comment-desc").value.trim();
  const id = document.querySelector("#blog-name").dataset.blog_id;

  if (description) {
    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({ content: description, blog_id: id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create blog");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete blog");
    }
  }
};
if (document.querySelector(".new-blog-form"))
  document
    .querySelector(".new-blog-form")
    .addEventListener("submit", newFormHandler);

if (document.querySelector(".add-comment-form"))
  document
    .querySelector(".add-comment-form")
    .addEventListener("submit", addCommentHandler);

document
  .querySelector(".blog-list")
  .addEventListener("click", delButtonHandler);
