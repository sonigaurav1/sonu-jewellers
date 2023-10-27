
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("goToTopBtn").classList.add("show");
    } else {
        document.getElementById("goToTopBtn").classList.remove("show");
    }
}
function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function scrollToTop() {

    const scroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

    if (scroll > 0) {
        window.requestAnimationFrame(scrollToTop);

        window.scrollTo(0, scroll - scroll / 8);
    }
}
function goToTop() {
    scrollToTop();
}

const animatedText = document.getElementById('animatedText');
const textContent = animatedText.textContent;
animatedText.innerHTML = '';

for (let i = 0; i < textContent.length; i++) {
    const span = document.createElement('span');
    span.textContent = textContent[i];
    animatedText.appendChild(span);
}


function searchCategories() {

    var searchQuery = document.getElementById("searchInput").value;
    alert("Searching for: " + searchQuery);
}
function toggleSearchBar() {
    var searchInput = document.getElementById("searchInput");

    if (searchInput.style.display === "none") {
        searchInput.style.display = "block";
    } else {
        searchInput.style.display = "none";
    }
}




document.addEventListener("DOMContentLoaded", function () {
    var dropdown = document.querySelector(".dropdown");
    var dropdownContent = document.querySelector(".dropdown-content");

    dropdown.addEventListener("click", function () {
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var searchIcon = document.getElementById("searchIcon");
    var searchBar = document.getElementById("searchBar");
    var relatedItems = document.getElementById("relatedItems");

    searchIcon.addEventListener("click", function () {
        searchBar.classList.toggle("open");
    });

    var searchButton = document.getElementById("searchButton");
    var searchInput = document.getElementById("searchInput");

    searchButton.addEventListener("click", function () {
        var searchTerm = searchInput.value.trim();
        if (searchTerm) {
            switch (searchTerm.toLowerCase()) {
                case "Nec":
                case "Neck":
                case "Necklace":
                    window.location.href = "necklace.html";
                    break;
                case "p":
                case "pa":
                case "pauj":
                case "pau":
                case "pauju":
                    window.location.href = "pauju.html";
                    break;
                default:
                    alert("Search term not found.");
                    break;
            }
        }
    });

    searchInput.addEventListener("input", function () {
        var searchTerm = searchInput.value.trim();
        relatedItems.innerHTML = "";

        if (searchTerm) {
            var relatedItemNames = getRelatedItemNames(searchTerm);
            if (relatedItemNames.length > 0) {
                relatedItemNames.forEach(function (itemName) {
                    var listItem = document.createElement("li");
                    listItem.textContent = itemName;
                    listItem.addEventListener("click", function () {
                        navigateToItem(itemName);
                    });
                    relatedItems.appendChild(listItem);
                });
            }
        }
    });

    function getRelatedItemNames(searchTerm) {

        var itemNames = [
            "Necklace",
            "Tilhari",
            "Earring",
            "Bala",
            "Payal",
            "Ring",
            "Mang-Tikka",
            "Chokar",
            "Diya",
            "Chandrama",
            "Kanbaja",
            "Karwa",
            "Katora",
            "Loket",
            "Pauju",
            "Top",
            "Sikri",
            "Rani-Har",
            "Panja",
            "Nathiya",
            "Mangalsutra",
            "Lota",
        ];

        var relatedItemNames = itemNames.filter(function (itemName) {
            return itemName.toLowerCase().includes(searchTerm.toLowerCase());
        });

        return relatedItemNames;
    }

    function navigateToItem(itemName) {
        switch (itemName.toLowerCase()) {
            case "necklace":
                window.location.href = "necklace.html";
                break;
            case "tilhari":
                window.location.href = "tilhari.html";
                break;
            case "earring":
                window.location.href = "earring.html";
                break;
            case "bala":
                window.location.href = "bala.html";
                break;
            case "payal":
                window.location.href = "pauju.html";
                break;
            case "pauju":
                window.location.href = "pauju.html";
                break;
            case "ring":
                window.location.href = "ring.html";
                break;
            case "mang-tikka":
                window.location.href = "mang-tikka.html";
                break;
            case "chokar":
                window.location.href = "chokar.html";
                break;
            case "diya":
                window.location.href = "diya.html";
                break;
            case "chandrama":
                window.location.href = "chandrama.html";
                break;
            case "kanbaja":
                window.location.href = "kanbaja.html";
                break;
            case "karwa":
                window.location.href = "karwa.html";
                break;
            case "katora":
                window.location.href = "katora.html";
                break;
            case "loket":
                window.location.href = "loket.html";
                break;
            case "lota":
                window.location.href = "lota.html";
                break;
            case "mangalsutra":
                window.location.href = "mangalsutra.html";
                break;
            case "nithiya":
                window.location.href = "nathiya.html";
                break;
            case "panja":
                window.location.href = "panja.html";
                break;
            case "rani-har":
                window.location.href = "rani-har.html";
                break;
            case "sikri":
                window.location.href = "sikri.html";
                break;
            case "tikka":
                window.location.href = "tikka.html";
                break;
            case "top":
                window.location.href = "top.html";
                break;

            default:
                alert("Item not found.");
                break;
        }
    }
});


