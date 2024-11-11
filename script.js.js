// Your API key from IP Stack
const API_KEY = '7546ffc46aab4a5002d21669de8dde0d';  // Your API key

// Function to fetch location information based on IP address
const fetchLocation = async (ipAddress) => {
    try {
        const response = await fetch(`https://api.ipstack.com/${ipAddress}?access_key=${API_KEY}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch location data');
        }

        const data = await response.json();
        
        // Log the API response for debugging
        console.log(data);  // Add this line to check the response

        // Display the location data
        displayLocation(data);
    } catch (error) {
        console.error(error);
        displayError('Could not retrieve location information.');
    }
};

// Function to display the location data
const displayLocation = (data) => {
    const resultContainer = document.getElementById('location-result');
    
    resultContainer.innerHTML = `
        <h3>Location Information:</h3>
        <p><strong>IP Address:</strong> ${data.ip}</p>
        <p><strong>Country:</strong> ${data.country_name}</p>
        <p><strong>Region:</strong> ${data.region_name}</p>
        <p><strong>City:</strong> ${data.city}</p>
        <p><strong>Latitude:</strong> ${data.latitude}</p>
        <p><strong>Longitude:</strong> ${data.longitude}</p>
    `;
};

// Function to display an error message
const displayError = (message) => {
    const resultContainer = document.getElementById('location-result');
    resultContainer.innerHTML = `<p style="color: red;">${message}</p>`;
};

// Event listener for form submission
document.getElementById('ip-form').addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent the default form submission
    const ipAddress = document.getElementById('ip-address').value;
    fetchLocation(ipAddress);  // Call the API with the entered IP address
});
