export const getNotesByUserId = (id) =>
  fetch(
    `http://localhost:5000/notes?_sort=createdAt&_order=desc&userId=${id}`
  ).then((r) => r.json());

export const getNoteById = (id) => {
  return fetch(`http://localhost:5000/notes/${id}`).then((r) => {
    if (r.status === 404) throw new Error();
    return r.json();
  });
};

export const createNote = ({ userId, title, body }) => {
  const createdAt = new Date().toISOString();
  return fetch(`http://localhost:5000/notes`, {
    method: "POST",
    body: JSON.stringify({ userId, title, body, createdAt }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((r) => r.json());
};

export const editNote = ({ id, title, body }) => {
  return fetch(`http://localhost:5000/notes/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ title, body }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((r) => r.json());
};

export const deleteNote = (id) => {
  return fetch(`http://localhost:5000/notes/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((r) => r.json());
};
