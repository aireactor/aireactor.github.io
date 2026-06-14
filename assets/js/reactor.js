let token = localStorage.getItem("gh_token");

async function run() {
  const input = document.getElementById("input").value;

  let graphData = await getFile("data/graph.json", token);

  let graph = graphData.content;

  const words = input.toLowerCase().split(" ");

  // add nodes
  words.forEach(w => {
    if (!graph.nodes.find(n => n.id === w)) {
      graph.nodes.push({ id: w });
    }
  });

  // connect words
  for (let i = 0; i < words.length - 1; i++) {
    graph.edges.push({
      source: words[i],
      target: words[i + 1],
      strength: 0.5
    });
  }

  await saveFile("data/graph.json", graph, token, graphData.sha);

  fetch(window.CONFIG.DISCORD_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: "Reactor: " + input })
  });

  alert("Learned!");
}