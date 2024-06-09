var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Note class to represent individual notes
var Note = /** @class */ (function () {
    function Note(title, content) {
        this.title = title;
        this.content = content;
    }
    return Note;
}());
// NoteManager class to manage creation, editing, and organizing of notes
var NoteManager = /** @class */ (function () {
    function NoteManager() {
        this.notes = [];
    }
    // Function to add a new note
    NoteManager.prototype.addNote = function (title, content) {
        var newNote = new Note(title, content);
        this.notes.push(newNote);
        console.log("Note \"".concat(title, "\" added successfully."));
    };
    // Function to edit an existing note
    NoteManager.prototype.editNote = function (title, newContent) {
        var noteIndex = this.findNoteIndex(title);
        if (noteIndex !== -1) {
            this.notes[noteIndex].content = newContent;
            console.log("Note \"".concat(title, "\" edited successfully."));
        }
        else {
            throw new Error("Note \"".concat(title, "\" not found."));
        }
    };
    // Function to list all notes
    NoteManager.prototype.listNotes = function () {
        console.log("All Notes:");
        this.notes.forEach(function (note, index) {
            console.log("".concat(index + 1, ". ").concat(note.title));
        });
    };
    // Function to find the index of a note by title
    NoteManager.prototype.findNoteIndex = function (title) {
        return this.notes.findIndex(function (note) { return note.title === title; });
    };
    return NoteManager;
}());
// This is the main function that will interact with the user
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var noteManager, choice, _a, title, content, noteTitle, newContent;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    noteManager = new NoteManager();
                    console.log("Welcome to my very own Note-Taking App! Please do the following:");
                    _b.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 13];
                    console.log("1. To add a note");
                    console.log("2. To edit previously added note");
                    console.log("3. To list all recorded note(s)");
                    console.log("4. To exit program");
                    return [4 /*yield*/, promptUser("Please enter your option choice: ")];
                case 2:
                    choice = _b.sent();
                    _a = choice;
                    switch (_a) {
                        case "1": return [3 /*break*/, 3];
                        case "2": return [3 /*break*/, 6];
                        case "3": return [3 /*break*/, 9];
                        case "4": return [3 /*break*/, 10];
                    }
                    return [3 /*break*/, 11];
                case 3: return [4 /*yield*/, promptUser("Please enter title of note: ")];
                case 4:
                    title = _b.sent();
                    return [4 /*yield*/, promptUser("Please enter note of content: ")];
                case 5:
                    content = _b.sent();
                    noteManager.addNote(title, content);
                    return [3 /*break*/, 12];
                case 6: return [4 /*yield*/, promptUser("Please enter title of note to edit: ")];
                case 7:
                    noteTitle = _b.sent();
                    return [4 /*yield*/, promptUser("Please enter new content: ")];
                case 8:
                    newContent = _b.sent();
                    try {
                        noteManager.editNote(noteTitle, newContent);
                    }
                    catch (error) {
                        console.error(error.message);
                    }
                    return [3 /*break*/, 12];
                case 9:
                    noteManager.listNotes();
                    return [3 /*break*/, 12];
                case 10:
                    console.log("Thank you for participating!");
                    return [2 /*return*/];
                case 11:
                    console.log("This option is invalid. Please try again.");
                    _b.label = 12;
                case 12: return [3 /*break*/, 1];
                case 13: return [2 /*return*/];
            }
        });
    });
}
// Function to prompt user for input
function promptUser(question) {
    var readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(function (resolve) {
        readline.question(question, function (answer) {
            resolve(answer);
            readline.close();
        });
    });
}
main().catch(console.error);
