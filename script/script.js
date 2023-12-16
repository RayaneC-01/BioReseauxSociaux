// Function to show a modal for sharing a network link
function showShareOptions(networkLink) {
    // Use SweetAlert to display a modal with a sharing rectangle
    Swal.fire({
        title: 'Partager ce lien: ', // Modal title
        html: `
            <div class="CopyLink">
                <div style="flex: 1;">
                    <a href="${networkLink}" target="_blank">${networkLink}</a>
                    <!-- Display the network link as a clickable link -->
                </div>
                <button onclick="copyToClipboard('${networkLink}')" type="button" class="btn btn-secondary">Copier</button>
                <!-- Button to copy the network link to the clipboard -->
            </div>
        `,
        showCloseButton: true, // Display the close button
        showConfirmButton: false, // Do not display the confirm button
        customClass: {
            container: 'swal-container', // Class for the modal container
        },
    });
}

// Function to copy text to the clipboard
function copyToClipboard(text) {
    // Create a textarea element to hold the text
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);

    // Select and copy the text to the clipboard
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Display a notification for successful copy
    Swal.fire({
        icon: 'success', // Success icon
        title: 'Texte Copié', // Notification title
        showConfirmButton: false, // Do not display the confirm button
        timer: 1500, // Timer for auto-closing the notification
    });
}
