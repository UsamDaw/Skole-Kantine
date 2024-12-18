import { getFirestore, collection, addDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-storage.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyA9qKrgjuKDmh5_VOqqT870_Lz8haWdXNU",
    authDomain: "thecanteenlogin.firebaseapp.com",
    databaseURL: "https://thecanteenlogin-default-rtdb.firebaseio.com",
    projectId: "thecanteenlogin",
    storageBucket: "thecanteenlogin.firebasestorage.app",
    messagingSenderId: "699730458810",
    appId: "1:699730458810:web:162822e6cad5467f3e6a83"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();

document.querySelector('.submit-btn').addEventListener('click', async (e) => {
    e.preventDefault();

    const foodName = document.getElementById('foodName').value;
    const foodDescription = document.getElementById('foodDescription').value;
    const foodPrice = document.getElementById('foodPrice').value;
    const foodImage = document.getElementById('foodImage').files[0];

    if (!foodName || !foodDescription || !foodPrice || !foodImage) {
        alert('Please fill in all fields and upload an image.');
        return;
    }

    try {
        // Upload image to Firebase Storage
        const storageRef = ref(storage, `food_images/${foodImage.name}`);
        await uploadBytes(storageRef, foodImage);
        const imageUrl = await getDownloadURL(storageRef);

        // Add food item to Firestore
        await addDoc(collection(db, "weeklyMenu"), {
            name: foodName,
            description: foodDescription,
            price: parseFloat(foodPrice),
            imageUrl: imageUrl
        });

        alert('Food item added successfully!');
        // Clear form fields
        document.getElementById('foodName').value = '';
        document.getElementById('foodDescription').value = '';
        document.getElementById('foodPrice').value = '';
        document.getElementById('foodImage').value = '';
    } catch (error) {
        console.error("Error adding food item: ", error);
        alert('An error occurred while adding the food item.');
    }
});