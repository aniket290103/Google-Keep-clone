document.getElementById('add-note-button').addEventListener('click', function() {
    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;
    
    if (title || content) {
        const Template = document.getElementById('note-template');
        const Note = Template.cloneNode(true);
        Note.style.display = 'block';
        Note.querySelector('.note-title').textContent = title;
        Note.querySelector('.note-content').textContent = content;
        
        Note.querySelector('.edit-note').addEventListener('click', function() {
            editNote(Note);
        });

        Note.querySelector('.delete-note').addEventListener('click', function() {
            deleteNote(Note);
        });

        document.querySelector('.note-container').appendChild(Note);
        
        document.getElementById('note-title').value = '';
        document.getElementById('note-content').value = '';
    }
    else{
        alert("Enter Title and Note")
    }
});

function editNote(note) {
    alert("Do You Want To Edit")
    const title = note.querySelector('.note-title').textContent;
    const content = note.querySelector('.note-content').textContent;
    
    document.getElementById('note-title').value = title;
    document.getElementById('note-content').value = content;

    note.remove();
}

function deleteNote(note) {
    alert("Do You Want To Delete")
    note.remove();
}