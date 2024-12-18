import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

const db = getFirestore();

async function displayWeeklyMenu() {
    const menuContainer = document.getElementById('menuContainer');
    menuContainer.innerHTML = ''; // Clear existing content

    try {
        const querySnapshot = await getDocs(collection(db, "weeklyMenu"));
        querySnapshot.forEach((doc) => {
            const foodItem = doc.data();
            const foodElement = document.createElement('div');
            foodElement.className = 'food-item';
            foodElement.innerHTML = `
                <img src="${foodItem.imageUrl}" alt="${foodItem.name}" class="food-image">
                <h3>${foodItem.name}</h3>
                <p>${foodItem.description}</p>
                <p class="price">NOK ${foodItem.price.toFixed(2)}</p>
            `;
            menuContainer.appendChild(foodElement);
        });
    } catch (error) {
        console.error("Error getting weekly menu: ", error);
        menuContainer.innerHTML = '<p>Error loading menu. Please try again later.</p>';
    }
}

displayWeeklyMenu();