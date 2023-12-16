function showShareOptions(networkLink) {
    // Utilisez SweetAlert pour afficher une fenêtre modale avec un rectangle de partage
    Swal.fire({
        title: 'Partager ce lien: ',
        html: `
            <div class="CopyLink">
                <div style="flex: 1;">
                    <a href="${networkLink}" target="_blank">${networkLink}</a>
                </div>
                <button onclick="copyToClipboard('${networkLink}')" type="button" class="btn btn-secondary">Copier</button>
            </div>
        `,
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            container: 'swal-container', // Classe pour le conteneur de la fenêtre modale
        },
        
    });
}



function copyToClipboard(text) {
    // Fonction pour copier le texte dans le presse-papiers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Afficher une notification de copie réussie
    Swal.fire({
        icon: 'success',
        title: 'Texte Copié',
        showConfirmButton: false,
        timer: 1500,
    });
}