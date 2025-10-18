# 🎸 Guitar Classes

> **Plataforma moderna de estudos de guitarra com foco em escalas pentatônicas**

Uma aplicação web elegante e intuitiva que ajuda guitarristas a dominar a escala pentatônica maior através do sistema CAGED, com design inspirado em produtos modernos como Nubank.

---

## ✨ Destaques do Design

- 🌌 **Dark Mode Nativo** - Interface escura profissional com gradientes vibrantes
- 🎨 **Glassmorphism** - Cards com efeito de vidro fosco e blur
- 🎯 **Animações Fluídas** - Transições suaves e micro-interações
- 📱 **100% Responsivo** - Funciona perfeitamente em todos os dispositivos
- 🎭 **Sistema de Cores Vibrante** - Paleta moderna inspirada em produtos fintech

---

## 🎯 Funcionalidades

### 🎹 Seleção Inteligente de Tom
Escolha qualquer um dos 12 tons musicais com um seletor moderno e intuitivo:
- **C, C#, D, D#, E, F, F#, G, G#, A, A#, B**
- Feedback visual instantâneo
- Atualização em tempo real do braço da guitarra

### 🎸 Visualização Interativa do Braço
- **14 casas** completas (corda solta até casa 13)
- **6 cordas** com afinação padrão
- Marcadores visuais nas casas importantes
- Efeitos hover com glow
- Animação de pulso nas notas tônicas

### 🌈 Sistema CAGED em Cores Vibrantes
Cada padrão possui sua própria identidade visual:
- 🟡 **Pattern 1 (E shape)** - Amarelo Dourado `#FFB627`
- 🔵 **Pattern 2 (D shape)** - Azul Ciano `#4CC9F0`
- 🔴 **Pattern 3 (C shape)** - Rosa Vibrante `#FF6B9D`
- 🟣 **Pattern 4 (A shape)** - Roxo Claro `#C77DFF`
- 🟪 **Pattern 5 (G shape)** - Roxo Escuro `#7209B7`

### ⭐ Destaques Especiais
- **Notas Tônicas** com borda branca, brilho e animação
- **Efeitos de Hover** com scale e shadow
- **Badge das Notas** com gradiente e elevação
- **Scrollbar Customizado** com tema da aplicação

---

## 🚀 Começando

### Pré-requisitos
```bash
Node.js >= 18.0.0
npm >= 9.0.0
```

### Instalação
```bash
# Clone ou navegue até o projeto
cd guitar-classes

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

### Acesse
Abra seu navegador em **`http://localhost:4200`**

---

## � Paleta de Cores

```scss
// Cores Principais
$primary-color: #8A05BE;      // Roxo Principal
$secondary-color: #A445ED;    // Roxo Secundário
$accent-color: #FF6B9D;       // Rosa Accent
$background: #0A0118;         // Fundo Escuro

// Sistema CAGED
$pattern-e: #FFB627;          // Amarelo Dourado
$pattern-d: #4CC9F0;          // Azul Ciano
$pattern-c: #FF6B9D;          // Rosa Vibrante
$pattern-a: #C77DFF;          // Roxo Claro
$pattern-g: #7209B7;          // Roxo Escuro
```

---

## 🎼 Teoria Musical

### Escala Pentatônica Maior
Formada por **5 notas** com o seguinte padrão de intervalos:

| Grau | Intervalo | Exemplo (C) |
|------|-----------|-------------|
| 1    | Tônica    | C           |
| 2    | 2ª Maior  | D           |
| 3    | 3ª Maior  | E           |
| 5    | 5ª Justa  | G           |
| 6    | 6ª Maior  | A           |

### Sistema CAGED
Sistema que divide o braço em **5 padrões interconectados**, baseados nos shapes dos acordes abertos:
- **C** - Chord shape (Pattern 3)
- **A** - Chord shape (Pattern 4)
- **G** - Chord shape (Pattern 5)
- **E** - Chord shape (Pattern 1)
- **D** - Chord shape (Pattern 2)

---

## 🛠️ Stack Tecnológico

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| Angular    | 19.x   | Framework principal |
| TypeScript | 5.7.x  | Linguagem tipada |
| SCSS       | -      | Estilização avançada |
| RxJS       | 7.8.x  | Programação reativa |

---

## 📱 Responsividade

### Breakpoints
- 🖥️ **Desktop**: 1400px+
- 💻 **Laptop**: 1024px - 1399px
- 📱 **Tablet**: 768px - 1023px
- 📱 **Mobile**: até 767px

### Otimizações Mobile
- Layout adaptativo
- Touch-friendly buttons (min 44px)
- Scroll horizontal otimizado no fretboard
- Tipografia fluída

---

## ✨ Features de UX

### Micro-interações
- ✅ Hover effects com transform
- ✅ Smooth transitions (cubic-bezier)
- ✅ Pulse animation nas tônicas
- ✅ Glow effects nas notas
- ✅ Fade-in na inicialização

### Acessibilidade
- ✅ Contraste WCAG AA
- ✅ Foco visível nos controles
- ✅ Hierarquia semântica
- ✅ Labels descritivos

---

## �️ Roadmap

### Fase 1 - Escalas ✅
- [x] Escala pentatônica maior
- [ ] Escala pentatônica menor
- [ ] Escalas maiores e menores
- [ ] Modos gregos

### Fase 2 - Interatividade
- [ ] Player de áudio para as notas
- [ ] Metrônomo integrado
- [ ] Exercícios guiados
- [ ] Quiz de teoria

### Fase 3 - Social
- [ ] Salvar progressões favoritas
- [ ] Compartilhar escalas
- [ ] Comunidade de usuários
- [ ] Desafios semanais

### Fase 4 - Avançado
- [ ] Backing tracks
- [ ] Gravação de sessões
- [ ] IA para feedback
- [ ] Modo de prática gamificado

---

## 🎯 Como Usar

1. **Selecione o Tom** 
   - Use o dropdown para escolher entre os 12 tons disponíveis

2. **Observe o Braço**
   - As notas coloridas indicam os padrões CAGED
   - Notas com ★ são as tônicas (raiz da escala)

3. **Pratique os Padrões**
   - Comece com um padrão por vez
   - Use as cores para memorizar visualmente
   - Conecte os padrões gradualmente

4. **Explore Diferentes Tons**
   - Treine em todos os 12 tons
   - Desenvolva mobilidade no braço
   - Melhore sua improvisação

---

## 🎓 Dicas de Estudo

💡 **Iniciantes**: Foque em um padrão por semana
💡 **Intermediários**: Conecte 2-3 padrões adjacentes
💡 **Avançados**: Pratique mudanças de tom instantâneas

---

## 📄 Licença

MIT License - Sinta-se livre para usar em seus projetos!

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:
- 🐛 Reportar bugs
- 💡 Sugerir features
- 🔧 Enviar pull requests
- ⭐ Dar uma estrela no projeto

---

<div align="center">

**Desenvolvido com ❤️ e 🎸 para a comunidade de guitarristas**

[Reportar Bug](../../issues) · [Sugerir Feature](../../issues) · [Documentação](../../wiki)

</div>
