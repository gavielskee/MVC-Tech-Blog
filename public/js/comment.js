const newFormHandler = async (event) => {
    event.preventDefault();
  
    const commentBody = document.querySelector('.commentInput').value;
    const postUrl = document.location.href.split('');
    const post_id = postUrl[postUrl.length - 1]
  
    if (commentBody && post_id) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ commentBody, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
  };

  document
  .querySelector('.commentBtn')
  .addEventListener('click', newFormHandler);
