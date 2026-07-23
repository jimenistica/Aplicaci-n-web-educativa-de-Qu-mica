import type { Topic } from '../types';

export const topics: Topic[] = [
  {
    id: 'estequiometria',
    title: 'Estequiometría',
    subtitle: 'Mol, masa molar y relaciones cuantitativas en reacciones químicas',
    category: 'Química General',
    difficulty: 'Básico',
    progress: 100,
    readTime: 18,
    sections: [
      {
        id: 'el-mol',
        title: 'El Mol y el Número de Avogadro',
        blocks: [
          {
            type: 'text',
            content:
              'El mol es la unidad fundamental de cantidad de materia en el Sistema Internacional. Representa exactamente 6.02214076 × 10²³ entidades elementales (átomos, moléculas, iones, etc.), un valor conocido como el Número de Avogadro (Nₐ).',
          },
          {
            type: 'callout',
            variant: 'definition',
            title: 'Definición SI (2019)',
            content:
              'Un mol contiene exactamente 6.02214076 × 10²³ entidades elementales. Esta definición es exacta por convención del Sistema Internacional desde la revisión de 2019.',
          },
          {
            type: 'block-formula',
            formula: 'N_A = 6.02214076 \\times 10^{23} \\; \\text{mol}^{-1}',
          },
          {
            type: 'text',
            content:
              'La masa molar (M) de una sustancia es la masa de un mol de esa sustancia, expresada en gramos por mol (g/mol). Numéricamente coincide con la masa atómica o molecular relativa expresada en uma. Por ejemplo, la masa molar del agua (H₂O) es 18.015 g/mol.',
          },
          {
            type: 'block-formula',
            formula: 'M(\\text{H}_2\\text{O}) = 2 \\times 1.008 + 15.999 = 18.015 \\; \\text{g/mol}',
          },
        ],
      },
      {
        id: 'conversiones',
        title: 'Conversiones entre Masa, Moles y Átomos',
        blocks: [
          {
            type: 'text',
            content:
              'Las tres magnitudes clave —masa (m), cantidad en moles (n) y número de partículas (N)— se interconvierten usando la masa molar y el Número de Avogadro:',
          },
          {
            type: 'block-formula',
            formula: 'n = \\frac{m}{M} \\qquad N = n \\times N_A \\qquad m = n \\times M',
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Truco mnemotécnico',
            content:
              'Pensá en el mol como una "docena química": igual que 1 docena = 12 unidades, 1 mol = 6.022 × 10²³ unidades. La masa molar hace de "precio por docena".',
          },
        ],
      },
      {
        id: 'reacciones',
        title: 'Estequiometría de Reacciones',
        blocks: [
          {
            type: 'text',
            content:
              'En una ecuación química balanceada, los coeficientes estequiométricos indican la proporción molar entre reactivos y productos. Esta proporción es la base de todo cálculo estequiométrico.',
          },
          {
            type: 'block-formula',
            formula: '\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\longrightarrow 2\\,\\text{NH}_3(g)',
          },
          {
            type: 'text',
            content:
              'Para esta reacción, 1 mol de N₂ reacciona con exactamente 3 mol de H₂ para producir 2 mol de NH₃. El factor de conversión molar (factor estequiométrico) permite calcular cualquier cantidad a partir de cualquier otra.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Reactivo limitante',
            content:
              'Cuando los reactivos no están en proporción estequiométrica exacta, el reactivo que se agota primero determina la cantidad máxima de producto. Siempre identificá el reactivo limitante antes de calcular rendimientos.',
          },
        ],
      },
      {
        id: 'ejemplos',
        title: 'Ejemplos Resueltos',
        blocks: [
          {
            type: 'example',
            title: 'Ejemplo 1 — Moles de NaCl en 58.44 g',
            steps: [
              {
                label: 'Dato',
                content: 'Masa de NaCl = 58.44 g',
              },
              {
                label: 'Masa molar de NaCl',
                content: 'M(Na) = 22.990 g/mol; M(Cl) = 35.450 g/mol',
                formula: 'M(\\text{NaCl}) = 22.990 + 35.450 = 58.440 \\; \\text{g/mol}',
              },
              {
                label: 'Cálculo de moles',
                formula: 'n = \\frac{58.44 \\; \\text{g}}{58.440 \\; \\text{g/mol}} = 1.000 \\; \\text{mol}',
              },
              {
                label: 'Resultado',
                content: '58.44 g de NaCl equivalen exactamente a 1 mol, es decir, 6.022 × 10²³ pares Na⁺–Cl⁻.',
              },
            ],
          },
          {
            type: 'example',
            title: 'Ejemplo 2 — Masa de NH₃ producida',
            steps: [
              {
                label: 'Problema',
                content: '¿Cuántos gramos de NH₃ se obtienen a partir de 5.00 mol de H₂ (reactivo limitante)?',
              },
              {
                label: 'Relación estequiométrica',
                content: 'De la ecuación: 3 mol H₂ → 2 mol NH₃',
                formula: 'n(\\text{NH}_3) = 5.00 \\; \\text{mol H}_2 \\times \\frac{2 \\; \\text{mol NH}_3}{3 \\; \\text{mol H}_2} = 3.33 \\; \\text{mol}',
              },
              {
                label: 'Conversión a masa',
                formula: 'm(\\text{NH}_3) = 3.33 \\; \\text{mol} \\times 17.031 \\; \\text{g/mol} = 56.7 \\; \\text{g}',
              },
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: 'q1',
        question: '¿Cuántos moles hay en 36.03 g de agua (M = 18.015 g/mol)?',
        options: ['1.000 mol', '2.000 mol', '0.500 mol', '18.015 mol'],
        correctIndex: 1,
        explanation:
          'n = m / M = 36.03 g / 18.015 g/mol = 2.000 mol. La masa dada es exactamente el doble de la masa molar.',
      },
      {
        id: 'q2',
        question: 'En la reacción N₂ + 3H₂ → 2NH₃, ¿cuántos moles de H₂ se necesitan para consumir 4 mol de N₂?',
        options: ['4 mol', '8 mol', '12 mol', '6 mol'],
        correctIndex: 2,
        explanation:
          'La relación estequiométrica es 1 mol N₂ : 3 mol H₂. Para 4 mol N₂: 4 × 3 = 12 mol H₂.',
      },
      {
        id: 'q3',
        question: '¿Cuántas moléculas hay en 0.50 mol de CO₂?',
        options: [
          '3.01 × 10²³ moléculas',
          '6.02 × 10²³ moléculas',
          '1.20 × 10²⁴ moléculas',
          '1.50 × 10²³ moléculas',
        ],
        correctIndex: 0,
        explanation:
          'N = n × Nₐ = 0.50 mol × 6.022 × 10²³ mol⁻¹ = 3.01 × 10²³ moléculas.',
      },
      {
        id: 'q4',
        question: 'El reactivo limitante es aquel que…',
        options: [
          'Tiene mayor masa molar',
          'Se consume completamente primero y determina el rendimiento máximo',
          'Está en mayor cantidad en moles',
          'Tiene mayor coeficiente estequiométrico',
        ],
        correctIndex: 1,
        explanation:
          'El reactivo limitante es el que se agota primero en la reacción. Determina la cantidad máxima de producto que puede formarse, independientemente de su masa molar o coeficiente.',
      },
    ],
  },
  {
    id: 'enlace-covalente',
    title: 'Enlace Covalente',
    subtitle: 'Estructura de Lewis, geometría molecular y polaridad del enlace',
    category: 'Química General',
    difficulty: 'Intermedio',
    progress: 50,
    readTime: 22,
    sections: [
      {
        id: 'naturaleza',
        title: 'Naturaleza del Enlace Covalente',
        blocks: [
          {
            type: 'text',
            content:
              'El enlace covalente se forma cuando dos átomos comparten uno o más pares de electrones para alcanzar configuraciones electrónicas más estables. A diferencia del enlace iónico, no hay transferencia completa de electrones.',
          },
          {
            type: 'callout',
            variant: 'definition',
            title: 'Energía de enlace',
            content:
              'La energía de enlace es la energía necesaria para romper un mol de un enlace determinado en fase gaseosa. Es siempre positiva (proceso endotérmico) y aumenta con el orden de enlace: simple < doble < triple.',
          },
          {
            type: 'block-formula',
            formula:
              'E_\\text{enlace}: \\quad \\text{C−C} = 347 \\; \\text{kJ/mol} \\quad \\text{C=C} = 614 \\; \\text{kJ/mol} \\quad \\text{C≡C} = 839 \\; \\text{kJ/mol}',
          },
        ],
      },
      {
        id: 'lewis',
        title: 'Estructuras de Lewis',
        blocks: [
          {
            type: 'text',
            content:
              'Las estructuras de Lewis representan los electrones de valencia como puntos o pares. Para dibujar la estructura de una molécula se siguen cuatro pasos sistemáticos.',
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Algoritmo de Lewis (4 pasos)',
            content:
              '1. Contar el total de electrones de valencia de todos los átomos.\n2. Conectar átomos con enlaces simples (2e⁻ cada uno).\n3. Completar octetos en átomos terminales con pares solitarios.\n4. Si queda déficit en el átomo central, convertir pares solitarios en enlaces múltiples.',
          },
          {
            type: 'text',
            content:
              'La regla del octeto establece que los átomos tienden a rodearse de 8 electrones de valencia (4 pares), imitando la configuración de gases nobles. Hay excepciones importantes: H y He se estabilizan con 2e⁻ (dueto); átomos del período 3 en adelante pueden expandir el octeto.',
          },
          {
            type: 'block-formula',
            formula: 'e^-_\\text{total} = \\sum_i V_i - \\text{carga formal total}',
          },
        ],
      },
      {
        id: 'polaridad',
        title: 'Polaridad y Electronegatividad',
        blocks: [
          {
            type: 'text',
            content:
              'Un enlace covalente es polar cuando los dos átomos tienen electronegatividades distintas. La diferencia de electronegatividad (ΔEN) determina el carácter iónico parcial del enlace.',
          },
          {
            type: 'block-formula',
            formula:
              '\\Delta\\chi < 0.4: \\text{ no polar} \\quad 0.4 \\leq \\Delta\\chi < 1.7: \\text{ polar} \\quad \\Delta\\chi \\geq 1.7: \\text{ iónico}',
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Escala de Pauling',
            content:
              'La escala de Pauling asigna electronegatividades relativas: F(4.0) > O(3.5) > N/Cl(3.0) > Br(2.8) > C(2.5) > S/I(2.5) > H(2.1). El flúor es el elemento más electronegativo.',
          },
          {
            type: 'text',
            content:
              'La polaridad molecular depende tanto de la polaridad de cada enlace como de la geometría de la molécula. Una molécula puede tener enlaces polares y ser globalmente apolar si los vectores dipolo se cancelan por simetría (ej.: CO₂ lineal, CCl₄ tetraédrico).',
          },
        ],
      },
      {
        id: 'ejemplos',
        title: 'Ejemplos Resueltos',
        blocks: [
          {
            type: 'example',
            title: 'Ejemplo — Estructura de Lewis del CO₂',
            steps: [
              {
                label: 'Electrones de valencia',
                content: 'C: 4e⁻; O: 6e⁻ × 2 = 12e⁻',
                formula: 'e^-_\\text{total} = 4 + 12 = 16 \\; e^-',
              },
              {
                label: 'Conectar con enlaces simples',
                content: 'O–C–O usa 4e⁻, quedan 12e⁻',
              },
              {
                label: 'Completar octetos en O terminales',
                content: 'Cada O recibe 3 pares solitarios (6e⁻), usando 12e⁻. El C queda con solo 4e⁻ → déficit de octeto.',
              },
              {
                label: 'Convertir a dobles enlaces',
                content: 'Cada O comparte un par extra con C. Resultado: O=C=O con carga formal 0 en todos los átomos.',
                formula: '\\text{O=C=O} \\quad (\\Delta\\chi_{\\text{C–O}} = 1.0 \\rightarrow \\text{polar}) \\quad \\vec{\\mu} = 0 \\; \\text{D (simétrico)}',
              },
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: 'q1',
        question: '¿Cuántos electrones de valencia totales tiene la molécula de NH₃?',
        options: ['6', '8', '10', '5'],
        correctIndex: 1,
        explanation:
          'N aporta 5e⁻ y cada H aporta 1e⁻. Total = 5 + 3×1 = 8 electrones de valencia.',
      },
      {
        id: 'q2',
        question:
          'La diferencia de electronegatividad entre N y H es 0.9. ¿Qué tipo de enlace es el N–H?',
        options: ['No polar', 'Polar', 'Iónico', 'Metálico'],
        correctIndex: 1,
        explanation:
          'Con ΔEN = 0.9, el enlace cae en el rango 0.4 ≤ ΔEN < 1.7, lo que lo clasifica como enlace covalente polar.',
      },
      {
        id: 'q3',
        question: '¿Por qué el CO₂ es apolar aunque el enlace C=O sea polar?',
        options: [
          'Porque los dos átomos de O tienen la misma electronegatividad',
          'Porque la geometría lineal hace que los dipolos se cancelen',
          'Porque el enlace doble elimina la polaridad',
          'Porque C y O tienen electronegatividades similares',
        ],
        correctIndex: 1,
        explanation:
          'En CO₂ los dos enlaces C=O son polares pero apuntan en direcciones opuestas (molécula lineal). Los vectores dipolo se cancelan, resultando en un momento dipolar total nulo.',
      },
    ],
  },
  {
    id: 'alcanos',
    title: 'Alcanos y Nomenclatura IUPAC',
    subtitle: 'Hidrocarburos saturados: estructura, propiedades y nomenclatura sistemática',
    category: 'Orgánica',
    difficulty: 'Básico',
    progress: 0,
    readTime: 15,
    sections: [
      {
        id: 'definicion',
        title: 'Definición y Fórmula General',
        blocks: [
          {
            type: 'text',
            content:
              'Los alcanos son hidrocarburos saturados: contienen únicamente átomos de carbono e hidrógeno unidos por enlaces covalentes simples (σ). Son los compuestos orgánicos más simples y forman la base de la química orgánica.',
          },
          {
            type: 'block-formula',
            formula: 'C_n H_{2n+2} \\quad (n \\geq 1)',
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Hibridación sp³',
            content:
              'Cada carbono en un alcano tiene hibridación sp³: cuatro orbitales híbridos equivalentes apuntan hacia los vértices de un tetraedro regular (ángulos de enlace ≈ 109.5°). Esto da a los alcanos su geometría tridimensional característica.',
          },
          {
            type: 'text',
            content:
              'Los primeros cuatro alcanos de cadena lineal tienen nombres históricos: metano (CH₄), etano (C₂H₆), propano (C₃H₈) y butano (C₄H₁₀). A partir de C₅ se usa el prefijo griego del número de carbonos seguido del sufijo -ano.',
          },
        ],
      },
      {
        id: 'nomenclatura',
        title: 'Nomenclatura IUPAC',
        blocks: [
          {
            type: 'text',
            content:
              'La IUPAC (Unión Internacional de Química Pura y Aplicada) establece reglas sistemáticas para nombrar compuestos orgánicos. Para alcanos ramificados se siguen estos pasos:',
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Reglas IUPAC para alcanos ramificados',
            content:
              '1. Identificar la cadena principal: la secuencia más larga de carbonos consecutivos.\n2. Numerar la cadena desde el extremo más cercano al primer sustituyente.\n3. Nombrar los sustituyentes (alquilo) con prefijo numérico de posición.\n4. Si hay varios sustituyentes iguales, usar di-, tri-, tetra-.\n5. Ordenar alfabéticamente los sustituyentes antes del nombre de la cadena principal.',
          },
          {
            type: 'text',
            content:
              'Los sustituyentes alquilo se nombran reemplazando el sufijo -ano por -ilo: metilo (–CH₃), etilo (–C₂H₅), propilo (–C₃H₇), isopropilo (–CH(CH₃)₂).',
          },
        ],
      },
      {
        id: 'propiedades',
        title: 'Propiedades Físicas',
        blocks: [
          {
            type: 'text',
            content:
              'Las propiedades físicas de los alcanos están dominadas por fuerzas de dispersión de London (fuerzas de van der Waals débiles). Como son moléculas apolares, no forman puentes de hidrógeno.',
          },
          {
            type: 'callout',
            variant: 'definition',
            title: 'Tendencias de punto de ebullición',
            content:
              'A mayor masa molecular → mayor punto de ebullición (más área superficial, más dispersión). A mayor ramificación → menor punto de ebullición (forma más esférica, menor contacto intermolecular).',
          },
          {
            type: 'block-formula',
            formula: 'T_\\text{eb}(\\text{n-pentano}) = 36.1°C \\quad T_\\text{eb}(\\text{neopentano}) = 9.5°C',
          },
        ],
      },
      {
        id: 'ejemplos',
        title: 'Ejemplos Resueltos',
        blocks: [
          {
            type: 'example',
            title: 'Ejemplo — Nombrar 2-metilbutano',
            steps: [
              {
                label: 'Identificar la cadena principal',
                content: 'La cadena más larga tiene 4 carbonos → cadena base: butano',
              },
              {
                label: 'Localizar sustituyentes',
                content: 'Hay un grupo metilo (–CH₃) en el C2 de la cadena principal',
              },
              {
                label: 'Verificar numeración',
                content: 'Numerando desde el extremo más cercano al metilo: posición 2 (si numeráramos desde el otro lado sería posición 3, lo cual es mayor → es incorrecto)',
              },
              {
                label: 'Nombre final',
                content: '2-metilbutano. Fórmula: CH₃–CH(CH₃)–CH₂–CH₃',
                formula: '\\text{CH}_3\\text{-CH(CH}_3\\text{)-CH}_2\\text{-CH}_3 \\quad M = 72.15 \\; \\text{g/mol}',
              },
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        id: 'q1',
        question: '¿Cuál es la fórmula molecular del hexano?',
        options: ['C₆H₁₄', 'C₆H₁₂', 'C₆H₁₆', 'C₅H₁₂'],
        correctIndex: 0,
        explanation:
          'Aplicando CₙH₂ₙ₊₂ con n = 6: C₆H₁₄. El hexano tiene 6 carbonos y 2(6)+2 = 14 hidrógenos.',
      },
      {
        id: 'q2',
        question: '¿Por qué los alcanos tienen menores puntos de ebullición que los alcoholes de masa similar?',
        options: [
          'Porque los alcanos tienen menor masa molar',
          'Porque los alcanos son apolares y no forman puentes de hidrógeno',
          'Porque los alcanos tienen mayor ramificación',
          'Porque los alcanos tienen hibridación sp²',
        ],
        correctIndex: 1,
        explanation:
          'Los alcoholes tienen el grupo –OH que forma puentes de hidrógeno (fuerzas intermoleculares fuertes). Los alcanos solo tienen fuerzas de dispersión débiles, por lo que hierven a temperaturas más bajas.',
      },
      {
        id: 'q3',
        question: '¿Cómo se llama el sustituyente –CH(CH₃)₂ según IUPAC?',
        options: ['n-propilo', 'sec-butilo', 'isopropilo', 'neopentilo'],
        correctIndex: 2,
        explanation:
          'El grupo –CH(CH₃)₂ es el isopropilo (o 1-metiletilo según nomenclatura sustitutiva). Proviene del propano con el punto de unión en el carbono central.',
      },
    ],
  },
];

export const categories = [
  'Química General',
  'Orgánica',
  'Fisicoquímica',
  'Analítica',
  'Inorgánica',
] as const;
