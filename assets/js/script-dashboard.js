const colors = [
  "green",
  "yellow",
  "orange",
  "pink",
  "brown",
  "blue",
  "purple",
  "darkGreen",
  "red",
  "fire",
  "black",
  "turquoise",
  "lightGreen",
  "darkBlue",
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// Copy and shuffle colors
let shuffledColors = shuffle([...colors]);

// Function to get next color ensuring all colors are used before repeating
let colorIndex = 0;
function getNextColor() {
  if (colorIndex >= shuffledColors.length) {
    shuffledColors = shuffle([...colors]);
    colorIndex = 0;
  }
  return shuffledColors[colorIndex++];
}

function populateLargeLinks() {
  const largeLinks = [
    {
      icon: "fa-solid fa-file-invoice-dollar",
      heading: "Cash In Hand",
      number: "0",
    },
    { icon: "fa-solid fa-arrow-right", heading: "Cash In", number: "0" },
    { icon: "fa-solid fa-arrow-left", heading: "Cash Out", number: "0" },
    {
      icon: "fa-solid fa-boxes-stacked",
      heading: "Bank Balance",
      number: "-100",
    },
    { icon: "fa-solid fa-arrow-right", heading: "Bank Credit", number: "200" },
    { icon: "fa-solid fa-arrow-left", heading: "Bank Debit", number: "300" },
    {
      icon: "fa-solid fa-boxes-stacked",
      heading: "Construction Balance",
      number: "0",
    },
    {
      icon: "fa-solid fa-arrow-right",
      heading: "Construction In",
      number: "0",
    },
    {
      icon: "fa-solid fa-arrow-left",
      heading: "Construction Out",
      number: "0",
    },
  ];

  const largeLinksContainer = document.getElementById("large-links");

  largeLinks.forEach((link, index) => {
    const anchor = document.createElement("a");
    anchor.href = "./dashboard.html";

    const iconElement = document.createElement("i");
    iconElement.className = link.icon;

    const textDiv = document.createElement("div");
    textDiv.className = "text";

    const headingElement = document.createElement("h3");
    headingElement.textContent = link.heading;

    const numberElement = document.createElement("span");
    numberElement.textContent = link.number;

    // Append the heading and number to the text div
    textDiv.appendChild(headingElement);
    textDiv.appendChild(numberElement);

    // Append the icon and text div to the anchor
    anchor.appendChild(iconElement);
    anchor.appendChild(textDiv);

    // Apply the appropriate class based on the index
    if (index < 3) {
      anchor.classList.add("green");
    } else if (index < 6) {
      anchor.classList.add("yellow");
    } else {
      anchor.classList.add("orange");
    }

    // Append the anchor to the parent container
    largeLinksContainer.appendChild(anchor);
  });
}

function populateMediumLinks() {
  const mediumLinks = [
    { icon: "fa-solid fa-diagram-project", heading: "Project", number: "15" },
    { icon: "fa-solid fa-boxes-stacked", heading: "Product", number: "18" },
    { icon: "fa-solid fa-cart-flatbed", heading: "Sell", number: "1" },
    { icon: "fa-solid fa-cart-shopping", heading: "Purchase RQN", number: "1" },
    {
      icon: "fa-solid fa-cart-shopping",
      heading: "Purchase Order",
      number: "0",
    },
    {
      icon: "fa-solid fa-file-invoice-dollar",
      heading: "Ledger Type",
      number: "6",
    },
    {
      icon: "fa-solid fa-file-invoice-dollar",
      heading: "Ledger Group",
      number: "3",
    },
    { icon: "fa-solid fa-file-invoice-dollar", heading: "Ledger", number: "3" },
    {
      icon: "fa-solid fa-building-columns",
      heading: "Bank Or Cash",
      number: "1",
    },
    { icon: "fa-solid fa-user", heading: "User", number: "8" },
    { icon: "fa-solid fa-user-lock", heading: "Role Manage", number: "2" },
    { icon: "fa-solid fa-receipt", heading: "Report", number: "14" },
  ];

  const mediumLinksContainer = document.getElementById("medium-links");

  mediumLinks.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = "./dashboard.html";

    const iconElement = document.createElement("i");
    iconElement.className = link.icon;

    const textDiv = document.createElement("div");
    textDiv.className = "text";

    const headingElement = document.createElement("h3");
    headingElement.textContent = link.heading;

    const numberElement = document.createElement("span");
    numberElement.textContent = link.number;

    // Append the heading and number to the text div
    textDiv.appendChild(headingElement);
    textDiv.appendChild(numberElement);

    // Append the icon and text div to the anchor
    anchor.appendChild(iconElement);
    anchor.appendChild(textDiv);

    // Apply a randomized color class
    anchor.classList.add(getNextColor());

    // Append the anchor to the mediumLinks container
    mediumLinksContainer.appendChild(anchor);
  });
}

function populatesmallLinks() {
  const smallLinks = [
    "Project",
    "Customer",
    "Product",
    "Sell",
    "Purchase Order",
    "Vendor",
    "Trial Balance",
    "Balance sheet",
    "Ledger",
    "Cash Flow",
    "Purchase Requisition",
    "Cost Of Revenue",
    "Receive Payment",
    "Ledger Type",
    "Profit Or Loss Account",
    "Ledger Group",
    "Retained Earnings",
    "Debit Voucher",
    "Employee",
    "Fixed Asset Schedule",
    "Credit Voucher",
    "Journal Voucher",
    "Contra Voucher",
  ];

  const smallLinksContainer = document.getElementById("small-links");

  smallLinks.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = "./dashboard.html";
    anchor.textContent = link;

    // Apply a randomized color class
    anchor.classList.add(getNextColor());

    // Append the anchor to the smallLinks container
    smallLinksContainer.appendChild(anchor);
  });
}

function populateSideLinks() {
  const sideLinks = [
    { icon: "fa-solid fa-border-all", heading: "Dashboard" },
    { icon: "fa-solid fa-diagram-project", heading: "Project" },
    { icon: "fa-solid fa-boxes-stacked", heading: "Product" },
    { icon: "fa-solid fa-cart-flatbed", heading: "Sell" },
    { icon: "fa-solid fa-cart-shopping", heading: "Purchase" },
    { icon: "fa-solid fa-industry", heading: "Vendor" },
    { icon: "fa-solid fa-user-graduate", heading: "Employee" },
    { icon: "fa-solid fa-user-tie", heading: "Customer" },
    { icon: "fa-solid fa-user-tie", heading: "Customer Category" },
    { icon: "fa-solid fa-file-invoice-dollar", heading: "Ledger" },
    { icon: "fa-solid fa-building-columns", heading: "Customer" },
    { icon: "fa-solid fa-scale-balanced", heading: "Customer Category" },
    { icon: "fa-solid fa-wallet", heading: "Ledger" },
    { icon: "fa-solid fa-receipt", heading: "Bank Cash" },
    { icon: "fa-solid fa-user", heading: "Initial Balance" },
    { icon: "fa-solid fa-user-lock", heading: "Voucher" },
    { icon: "fa-solid fa-gear", heading: "Report" },
    { icon: "fa-solid fa-user", heading: "User" },
    { icon: "fa-solid fa-user-lock", heading: "Role Manage" },
    { icon: "fa-solid fa-gear", heading: "Settings" },
  ];

  const sideLinksContainer = document.getElementById("side-links");

  sideLinks.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = "./dashboard.html";

    const firstIcon = document.createElement("i");
    firstIcon.className = link.icon;

    const listItem = document.createElement("li");
    listItem.textContent = link.heading;

    const secondIcon = document.createElement("i");
    if (link.heading == "Dashboard") {
      secondIcon.className = "f";
    } else {
      secondIcon.className = "fa-solid fa-plus";
    }

    anchor.appendChild(firstIcon);
    anchor.appendChild(listItem);
    anchor.appendChild(secondIcon);

    sideLinksContainer.appendChild(anchor);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populateLargeLinks();
  populateMediumLinks();
  populateSideLinks();
  populatesmallLinks();
});
