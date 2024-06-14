document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const contactsTable = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;

        const newRow = contactsTable.insertRow();

        const nameCell = newRow.insertCell(0);
        const phoneCell = newRow.insertCell(1);

        nameCell.textContent = name;
        phoneCell.textContent = phone;

        form.reset();
    });
});
