//your JS code here. If required.

        document.addEventListener('DOMContentLoaded', function() {
            // Get form elements
            const titleInput = document.getElementById('title');
            const authorInput = document.getElementById('author');
            const isbnInput = document.getElementById('isbn');
            const submitButton = document.getElementById('submit');
            const bookList = document.getElementById('book-list');
            
            // Add event listener for form submission
            submitButton.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get input values
                const title = titleInput.value.trim();
                const author = authorInput.value.trim();
                const isbn = isbnInput.value.trim();
                
                // Validate inputs
                if (title === '' || author === '' || isbn === '') {
                    alert('Please fill in all fields');
                    return;
                }
                
                // Create new row
                const row = document.createElement('tr');
                
                // Create cells
                const titleCell = document.createElement('td');
                titleCell.textContent = title;
                
                const authorCell = document.createElement('td');
                authorCell.textContent = author;
                
                const isbnCell = document.createElement('td');
                isbnCell.textContent = isbn;
                
                const deleteCell = document.createElement('td');
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'X';
                deleteButton.className = 'delete';
                deleteButton.addEventListener('click', function() {
                    row.remove();
                });
                deleteCell.appendChild(deleteButton);
                
                // Add cells to row
                row.appendChild(titleCell);
                row.appendChild(authorCell);
                row.appendChild(isbnCell);
                row.appendChild(deleteCell);
                
                // Add row to table
                bookList.appendChild(row);
                
                // Clear input fields
                titleInput.value = '';
                authorInput.value = '';
                isbnInput.value = '';
            });
        });