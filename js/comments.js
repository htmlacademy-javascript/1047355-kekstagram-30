const container = document.querySelector('.social__comments');


const createComment = ({avatar, name, message }) => {
  const comment = document.createElement('li');
  comment.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';
  comment.classList.add('social__picture');
  comment.querySelector('social__picture').src = avatar;
  comment.querySelector('social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
};

const renderComments = (comments) => {
  container.document.querySelectorAll('.social__comment').forEach((commentsItem) => commentsItem.remove());
  container.append(...createComment(comments));
};

export {renderComments};
