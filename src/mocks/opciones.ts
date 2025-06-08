import type { TOpcion } from '@/models/opcion';

const mockOpcionesValidas: number[] = [
 2, 6, 12, 14, 19, 23, 27, 31, 34, 37, 42, 46,
];

const opcionesTitulos: Record<number, Partial<TOpcion>> = {
 1: { titulo: 'Swift' },
 2: { titulo: 'Kotlin' },
 3: { titulo: 'C#' },
 4: { titulo: 'PHP' },

 5: { titulo: 'Funcional' },
 6: { titulo: 'Orientado a Objetos' },
 7: { titulo: 'Reactivo' },
 8: { titulo: 'Lógico' },

 9: { titulo: 'Entero (int)' },
 10: { titulo: 'Cadena de texto (string)' },
 11: { titulo: 'Booleano (bool)' },
 12: { titulo: 'Arreglo (array)' },

 13: { titulo: 'Docker' },
 14: { titulo: 'Git' },
 15: { titulo: 'Jenkins' },
 16: { titulo: 'Postman' },

 17: { titulo: 'HTML' },
 18: { titulo: 'JavaScript' },
 19: { titulo: 'CCS' },
 20: { titulo: 'SQL' },

 21: { titulo: 'MySQL' },
 22: { titulo: 'PostgreSQL' },
 23: { titulo: 'MongoDB' },
 24: { titulo: 'Oracle' },

 25: { titulo: 'GET' },
 26: { titulo: 'DELETE' },
 27: { titulo: 'POST' },
 28: { titulo: 'PUT' },

 29: { titulo: "DRY (Don't Repeat Yourself)" },
 30: { titulo: 'ISS (Keep It Simple, Stupid)' },
 31: { titulo: 'SOLID (Single Responsibility)' },
 32: { titulo: "YAGNI (You Ain't Gonna Need It)" },

 33: { titulo: 'Desarrollo de videojuegos' },
 34: { titulo: 'Ciencia de datos' },
 35: { titulo: 'DevOps' },
 36: { titulo: 'Frontend' },

 37: { titulo: 'Resolución de problemas' },
 38: { titulo: 'Diseño gráfico' },
 39: { titulo: 'Redacción literaria' },
 40: { titulo: 'Ortografía avanzada' },

 41: { titulo: 'Java' },
 42: { titulo: 'Python' },
 43: { titulo: 'Ruby' },
 44: { titulo: 'Go' },

 45: { titulo: 'Pair Programming' },
 46: { titulo: 'Code Review' },
 47: { titulo: 'TDD (Test-Driven Development)' },
 48: { titulo: 'Sprint Planning' },
};

const mockOpcionesArray: TOpcion[] = Array.from({ length: 48 }, (_, index) => ({
 id: index + 1,
 estatus: true,
 tipo: 'radio',
 titulo: opcionesTitulos[index + 1]?.titulo ?? '',
 puntaje: mockOpcionesValidas.includes(index + 1) ? 2.5 : 0,
 createAt: new Date(),
 updateAt: new Date(),
}));

export const mockOpciones: TOpcion[] = mockOpcionesArray;
