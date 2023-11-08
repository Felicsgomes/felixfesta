let totalAmount = 1800;
let currentAmount = 0;
let contributionsCount = 0;

function updateProgressBarColor() {
  const progress = document.getElementById("progress");
  const percent = (currentAmount / totalAmount) * 100;
  progress.style.width = percent + "%";
  progress.innerText = `$${currentAmount}`;

  const hue = contributionsCount * 10;
  progress.style.backgroundColor = `hsl(${hue}, 70%, 50%)`;

  if (currentAmount >= totalAmount) {
    progress.style.backgroundColor = "gold";
    document.getElementById("congratulations").style.display = "block";
    document.getElementById("blink").style.display = "block";
  }
}

function addContributor() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();

  if (name === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  currentAmount += 30;
  contributionsCount++;

  const contributions = document.getElementById("contributions");
  const newContributor = document.createElement("div");
  newContributor.innerText = `${name} contribuiu com $30`;
  contributions.appendChild(newContributor);

  updateProgressBarColor();

  nameInput.value = "";
}

updateProgressBarColor();
