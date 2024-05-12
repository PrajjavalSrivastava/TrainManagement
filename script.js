// Simulated data for demonstration
const trainScheduleData = [
    { trainNumber: '1234', departure: 'Station A', arrival: 'Station B', departureTime: '08:00', arrivalTime: '10:00' },
    { trainNumber: '5678', departure: 'Station B', arrival: 'Station C', departureTime: '11:00', arrivalTime: '13:00' },
    { trainNumber: '91011', departure: 'Station C', arrival: 'Station D', departureTime: '14:00', arrivalTime: '16:00' }
];

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchResults = document.getElementById('searchResults');
    const scheduleTable = document.getElementById('scheduleTable');

    // Function to handle form submission for searching trains
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchTerm = document.getElementById('trainName').value;
        const searchResult = trainScheduleData.find(train => train.trainNumber === searchTerm);
        
        if (searchResult) {
            searchResults.innerHTML = `<p>Train found: ${searchResult.trainNumber} - ${searchResult.departure} to ${searchResult.arrival}</p>`;
        } else {
            searchResults.innerHTML = '<p>No train found.</p>';
        }
    });

    // Function to dynamically populate the train schedule table
    function populateSchedule() {
        const scheduleTableBody = scheduleTable.querySelector('tbody');
        scheduleTableBody.innerHTML = '';

        trainScheduleData.forEach(train => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${train.trainNumber}</td>
                <td>${train.departure}</td>
                <td>${train.arrival}</td>
                <td>${train.departureTime}</td>
                <td>${train.arrivalTime}</td>
            `;
            scheduleTableBody.appendChild(row);
        });
    }

    // Initial population of the train schedule table
    populateSchedule();
});
