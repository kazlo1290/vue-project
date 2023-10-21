import { defineStore } from 'pinia';

export const useNoteStore = defineStore({
  id: 'note',
  state: () => ({
    notes: [] as NoteI[],
    filterColor: '' as NoteI['color'],
    colors: [
      'red',
      'green',
      'blue',
      'yellow',
      'orange',
      'purple',
      'pink',
      'brown',
      'black',
      'white'
    ] as NoteI['color'][]
  }),
  getters: {
    getColorCount: (state) => {
      return (color: NoteI['color']) => {
        return state.notes.filter((note) => note.color === color).length;
      };
    },
    filteredNotes: (state) => {
      if (state.filterColor === '') return state.notes;
      return state.notes.filter((note) => note.color === state.filterColor);
    }
  },
  actions: {
    addNote(note: NoteI) {
      if (typeof note === 'object') {
        this.notes.push(note);
        this.saveToLocalStorage();
      }
    },
    setFilterColor(color: NoteI['color']) {
      if (color) {
        this.filterColor = color;
      } else {
        this.filterColor = '';
      }
      this.saveToLocalStorage();
    },
    removeNote(id: NoteI['id']) {
      this.notes = this.notes.filter((note) => note.id !== id);
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem('notes', JSON.stringify(this.$state.notes));
    },

    initializeFromLocalStorage() {
      const data = localStorage.getItem('notes');
      if (data) {
        this.$state.notes = JSON.parse(data);
      }
    }
  }
});
