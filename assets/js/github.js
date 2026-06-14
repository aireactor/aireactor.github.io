const repo = "agireactor/agireactor.github.io";

async function getFile(path, token) {
  const res = await fetch(
    `https://api.github.com/repos/${repo}/contents/${path}`,
    {
      headers: { Authorization: "Bearer " + token }
    }
  );

  const data = await res.json();
  return {
    content: JSON.parse(atob(data.content)),
    sha: data.sha
  };
}

async function saveFile(path, data, token, sha) {
  await fetch(
    `https://api.github.com/repos/${repo}/contents/${path}`,
    {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "Reactor update",
        content: btoa(JSON.stringify(data, null, 2)),
        sha
      })
    }
  );
}