// Note class to represent individual notes
class Note {
    constructor(public title: string, public content: string) {}
}

// NoteManager class to manage creation, editing, and organizing of notes
class NoteManager {
    private notes: Note[] = [];

    // Function to add a new note
    addNote(title: string, content: string): void {
        const newNote = new Note(title, content);
        this.notes.push(newNote);
        console.log(`Note "${title}" added successfully.`);
    }

    // Function to edit an existing note
    editNote(title: string, newContent: string): void {
        const noteIndex = this.findNoteIndex(title);
        if (noteIndex !== -1) {
            this.notes[noteIndex].content = newContent;
            console.log(`Note "${title}" edited successfully.`);
        } else {
            throw new Error(`Note "${title}" not found.`);
        }
    }

    // Function to list all notes
    listNotes(): void {
        console.log("All Notes:");
        this.notes.forEach((note, index) => {
            console.log(`${index + 1}. ${note.title}`);
        });
    }

    // Function to find the index of a note by title
    private findNoteIndex(title: string): number {
        return this.notes.findIndex((note) => note.title === title);
    }
}

// Main function to interact with the user
async function main() {
    const noteManager = new NoteManager();

    console.log("Welcome to the Note Taking App!");

    while (true) {
        console.log("\nOptions:");
        console.log("1. Add a Note");
        console.log("2. Edit a Note");
        console.log("3. List All Notes");
        console.log("4. Exit");

        const choice = await promptUser("Enter your choice: "); // Change 'prompt' to 'promptUser'

        switch (choice) {
            case "1":
                const title = await promptUser("Enter note title: "); // Change 'prompt' to 'promptUser'
                const content = await promptUser("Enter note content: "); // Change 'prompt' to 'promptUser'
                noteManager.addNote(title, content);
                break;
            case "2":
                const noteTitle = await promptUser("Enter title of the note to edit: "); // Change 'prompt' to 'promptUser'
                const newContent = await promptUser("Enter new content: "); // Change 'prompt' to 'promptUser'
                try {
                    noteManager.editNote(noteTitle, newContent);
                } catch (error) {
                    console.error(error.message);
                }
                break;
            case "3":
                noteManager.listNotes();
                break;
            case "4":
                console.log("Exiting...");
                return;
            default:
                console.log("Invalid choice. Please try again.");
        }
    }
}

// Function to prompt user for input
function promptUser(question: string): Promise<string> {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        readline.question(question, (answer: string) => {
            resolve(answer);
            readline.close();
        });
    });
}

// Start the main function
main().catch(console.error);
