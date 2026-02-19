import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface GuitarNote {
  note: string;
  isRoot: boolean;
  isInScale: boolean;
  isInChord: boolean;
  isChordRoot: boolean;
  fret: number;
  string: number;
  finger?: number; // Dedo a usar (1=indicador, 2=médio, 3=anelar, 4=mínimo)
}

interface ChordShape {
  name: string;
  frets: (number | 'x')[]; // 'x' = não tocar a corda
  fingers: (number | null)[]; // qual dedo usar
  baseFret: number; // casa base do shape
}

interface Scale {
  name: string;
  intervals: number[];
}

interface Chord {
  name: string;
  intervals: number[];
  symbol: string;
  shapes: ChordShape[]; // Múltiplas posições para tocar o acorde
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Guitar Classes - Escalas Musicais';
  
  // Notas musicais
  notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  
  // Afinação padrão da guitarra (6 cordas)
  tuning = ['E', 'B', 'G', 'D', 'A', 'E'];
  
  // Tom selecionado
  selectedKey = 'C';
  
  // Acorde selecionado
  selectedChord: string | null = null;
  
  // Shape do acorde selecionado
  selectedChordShape: number = 0;
  
  // Modo de visualização
  viewMode: 'scale' | 'chord' = 'scale';
  
  // Tipo de escala selecionada
  selectedScaleType: 'pentaMajor' | 'pentaMinor' | 'naturalMajor' | 'naturalMinor' = 'pentaMajor';
  
  // Número de casas a exibir
  frets = 13;
  
  // Escalas disponíveis
  scales = {
    pentaMajor: {
      name: 'Pentatônica Maior',
      intervals: [0, 2, 4, 7, 9]
    },
    pentaMinor: {
      name: 'Pentatônica Menor',
      intervals: [0, 3, 5, 7, 10]
    },
    naturalMajor: {
      name: 'Escala Natural Maior (Diatônica)',
      intervals: [0, 2, 4, 5, 7, 9, 11]
    },
    naturalMinor: {
      name: 'Escala Natural Menor (Eólia)',
      intervals: [0, 2, 3, 5, 7, 8, 10]
    }
  };
  
  // Acordes disponíveis na escala
  availableChords: Chord[] = [
    { 
      name: 'Maior', 
      symbol: '', 
      intervals: [0, 4, 7],
      shapes: [
        { name: 'Posição E', frets: [0, 2, 2, 1, 0, 0], fingers: [null, 2, 3, 1, null, null], baseFret: 0 },
        { name: 'Posição A', frets: ['x', 0, 2, 2, 2, 0], fingers: [null, null, 2, 3, 4, null], baseFret: 0 },
        { name: 'Posição Barra', frets: [1, 3, 3, 2, 1, 1], fingers: [1, 3, 4, 2, 1, 1], baseFret: 0 }
      ]
    },
    { 
      name: 'Menor', 
      symbol: 'm', 
      intervals: [0, 3, 7],
      shapes: [
        { name: 'Posição E', frets: [0, 2, 2, 0, 0, 0], fingers: [null, 2, 3, null, null, null], baseFret: 0 },
        { name: 'Posição A', frets: ['x', 0, 2, 2, 1, 0], fingers: [null, null, 2, 3, 1, null], baseFret: 0 },
        { name: 'Posição Barra', frets: [1, 3, 3, 1, 1, 1], fingers: [1, 3, 4, 1, 1, 1], baseFret: 0 }
      ]
    },
    { 
      name: 'Dominante', 
      symbol: '7', 
      intervals: [0, 4, 7, 10],
      shapes: [
        { name: 'Posição E', frets: [0, 2, 0, 1, 0, 0], fingers: [null, 2, null, 1, null, null], baseFret: 0 },
        { name: 'Posição A', frets: ['x', 0, 2, 0, 2, 0], fingers: [null, null, 2, null, 3, null], baseFret: 0 },
        { name: 'Posição Barra', frets: [1, 3, 1, 2, 1, 1], fingers: [1, 3, 1, 2, 1, 1], baseFret: 0 }
      ]
    },
    { 
      name: 'Maior com 7ª', 
      symbol: 'maj7', 
      intervals: [0, 4, 7, 11],
      shapes: [
        { name: 'Posição E', frets: [0, 2, 1, 1, 0, 0], fingers: [null, 2, 1, 1, null, null], baseFret: 0 },
        { name: 'Posição A', frets: ['x', 0, 2, 1, 2, 0], fingers: [null, null, 3, 1, 4, null], baseFret: 0 }
      ]
    },
    { 
      name: 'Menor com 7ª', 
      symbol: 'm7', 
      intervals: [0, 3, 7, 10],
      shapes: [
        { name: 'Posição E', frets: [0, 2, 0, 0, 0, 0], fingers: [null, 2, null, null, null, null], baseFret: 0 },
        { name: 'Posição A', frets: ['x', 0, 2, 0, 1, 0], fingers: [null, null, 2, null, 1, null], baseFret: 0 }
      ]
    }
  ];
  
  // Matriz do braço da guitarra
  fretboard: GuitarNote[][] = [];
  
  // Shapes CAGED
  cagedShapes = {
    C: { pattern: 3, fretStart: 0 },
    A: { pattern: 4, fretStart: 2 },
    G: { pattern: 5, fretStart: 4 },
    E: { pattern: 1, fretStart: 7 },
    D: { pattern: 2, fretStart: 9 }
  };

  ngOnInit() {
    this.generateFretboard();
  }

  onKeyChange() {
    this.generateFretboard();
  }

  onScaleTypeChange() {
    this.generateFretboard();
  }

  onChordChange() {
    this.viewMode = this.selectedChord !== null ? 'chord' : 'scale';
    this.selectedChordShape = 0; // Reset para primeira posição
    this.generateFretboard();
  }

  onViewModeChange() {
    if (this.viewMode === 'scale') {
      this.selectedChord = null;
    }
    this.generateFretboard();
  }

  onChordShapeChange() {
    this.generateFretboard();
  }

  getChordShapes(): ChordShape[] {
    if (this.selectedChord === null) return [];
    const chord = this.availableChords.find(c => c.symbol === this.selectedChord);
    return chord?.shapes || [];
  }

  getCurrentChordShape(): ChordShape | null {
    const shapes = this.getChordShapes();
    return shapes[this.selectedChordShape] || null;
  }

  generateFretboard() {
    this.fretboard = [];
    const scaleNotes = this.getScaleNotes();
    const currentShape = this.getCurrentChordShape();
    
    // Para cada corda (de cima para baixo na visualização)
    this.tuning.forEach((openString, stringIndex) => {
      const stringNotes: GuitarNote[] = [];
      
      // Para cada casa (incluindo corda solta)
      for (let fret = 0; fret <= this.frets; fret++) {
        const noteIndex = (this.notes.indexOf(openString) + fret) % 12;
        const noteName = this.notes[noteIndex];
        const isInScale = scaleNotes.includes(noteName);
        const isRoot = noteName === this.selectedKey;
        
        // Verificar se esta nota faz parte do shape do acorde
        let isInChord = false;
        let isChordRoot = false;
        let finger: number | undefined = undefined;
        
        if (currentShape && this.viewMode === 'chord') {
          const shapeStringIndex = 5 - stringIndex; // Inverter porque tuning é [E,B,G,D,A,E] (top to bottom)
          const shapeFret = currentShape.frets[shapeStringIndex];
          
          if (shapeFret !== 'x' && shapeFret === fret) {
            isInChord = true;
            finger = currentShape.fingers[shapeStringIndex] || undefined;
            
            // Verificar se é a tônica
            const rootIndex = this.notes.indexOf(this.selectedKey);
            if (noteIndex === rootIndex) {
              isChordRoot = true;
            }
          }
        }
        
        stringNotes.push({
          note: noteName,
          isRoot,
          isInScale,
          isInChord,
          isChordRoot,
          fret,
          string: stringIndex,
          finger
        });
      }
      
      this.fretboard.push(stringNotes);
    });
  }

  getScaleNotes(): string[] {
    const rootIndex = this.notes.indexOf(this.selectedKey);
    const scaleNotes: string[] = [];
    const currentScale = this.scales[this.selectedScaleType];
    
    currentScale.intervals.forEach((interval: number) => {
      const noteIndex = (rootIndex + interval) % 12;
      scaleNotes.push(this.notes[noteIndex]);
    });
    
    return scaleNotes;
  }

  getCurrentScaleName(): string {
    return this.scales[this.selectedScaleType].name;
  }

  getChordNotes(): string[] {
    if (!this.selectedChord) return [];
    
    const chord = this.availableChords.find(c => c.symbol === this.selectedChord);
    if (!chord) return [];
    
    const rootIndex = this.notes.indexOf(this.selectedKey);
    const chordNotes: string[] = [];
    
    chord.intervals.forEach(interval => {
      const noteIndex = (rootIndex + interval) % 12;
      chordNotes.push(this.notes[noteIndex]);
    });
    
    return chordNotes;
  }

  getChordDisplayName(): string {
    if (!this.selectedChord) return '';
    const chord = this.availableChords.find(c => c.symbol === this.selectedChord);
    return `${this.selectedKey}${this.selectedChord}`;
  }

  getPatternNumber(fret: number, stringIndex: number): number {
    // Retorna o número do padrão CAGED baseado na posição
    const scaleNotes = this.getScaleNotes();
    const note = this.fretboard[stringIndex][fret].note;
    
    if (!scaleNotes.includes(note)) return 0;
    
    // Lógica simplificada para identificar padrões CAGED
    if (fret >= 0 && fret <= 3) return 3; // C shape
    if (fret >= 2 && fret <= 5) return 4; // A shape
    if (fret >= 4 && fret <= 7) return 5; // G shape
    if (fret >= 7 && fret <= 10) return 1; // E shape
    if (fret >= 9 && fret <= 13) return 2; // D shape
    
    return 0;
  }
}
