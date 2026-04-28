# Number Base Converter

An educational web application that teaches students how to convert numbers between **Decimal**, **Binary**, and **Hexadecimal** bases—core concepts in Computer Architecture.

> **Built for:** Honors Computer Architecture Course  
> **Technologies:** HTML5, CSS3, JavaScript (Vanilla)  
> **License:** Educational Use

---

## 🎯 Project Overview

This project bridges the gap between theoretical understanding and practical conversion by:

- **Converting** numbers between three essential bases used in computing
- **Teaching** the algorithms (repeated division, positional notation) step-by-step
- **Explaining** why computers use binary and hexadecimal in real-world applications
- **Validating** inputs with clear, educational error messages
- **Engaging** users through interactive examples and visual design

### Key Features

✅ **Full Conversion Support**
- Decimal (Base-10) ↔ Binary (Base-2) ↔ Hexadecimal (Base-16)
- Handles up to 32-bit unsigned integers
- All three results displayed simultaneously

✅ **Educational Explanations**
- Step-by-step breakdown for each conversion type
- Repeated division method visualization
- Positional notation with powers explained
- Real-world context: why these bases matter in computer architecture

✅ **Robust Input Validation**
- Decimal: Only 0-9
- Binary: Only 0-1
- Hexadecimal: Only 0-9 and A-F (case-insensitive)
- User-friendly error messages
- Size limits to prevent overflow (32-bit)

✅ **Professional Design**
- Responsive layout (desktop, tablet, mobile)
- Modern UI with smooth animations
- Accessible color scheme and typography
- Card-based information architecture

✅ **Quick Examples**
- Pre-loaded common conversions (42, 255, 16, etc.)
- Click-to-learn examples for instant exploration
- Real-world hex patterns (DEAD, FF, etc.)

---

## 🚀 How to Run

### Option 1: Direct Browser (Recommended)
1. Clone or download this repository
   ```bash
   git clone https://github.com/ArshPandher/number-base-converter.git
   cd number-base-converter
   ```
2. Open `index.html` in any modern web browser
   - Chrome, Firefox, Safari, Edge all supported
3. No installation or build tools required!

### Option 2: Local Server (Optional)
For better development experience, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npm install -g http-server
http-server
```

Then visit `http://localhost:8000`

### Browser Requirements
- Modern browser (2015+)
- JavaScript enabled
- No special plugins required

---

## 💡 How It Connects to Computer Architecture

### Why These Three Bases?

#### **Binary (Base-2)** 🖥️
- **How it works:** Uses only 0 and 1
- **Why computers use it:** Digital circuits are built from transistors—electronic switches with two states: ON (1) or OFF (0)
- **Real-world example:** All CPU instructions, memory addresses, and data are ultimately stored as binary
- **In architecture:** The fundamental unit is the **bit** (binary digit)
- **Scale:** 8 bits = 1 byte, 32 bits = 1 word

#### **Hexadecimal (Base-16)** 🎨
- **How it works:** Uses 0-9 and A-F (since 16 > 10)
- **Why it's useful:** 16 = 2⁴, so each hex digit represents exactly 4 bits
- **Real-world examples:**
  - Memory addresses: `0xDEADBEEF`, `0x00007FFF`
  - Assembly language: `MOV RAX, 0x1234`
  - Machine code debugging
  - Web colors: `#FF5733` = 255 red, 87 green, 51 blue
- **In architecture:** Standard notation for low-level programming, debugging, and hardware specification

#### **Decimal (Base-10)** 🧮
- **How it works:** Uses 0-9 (what humans use naturally)
- **Why we need it:** Our familiar number system for input/output
- **In architecture:** Primarily for human interface; internally converted to binary

### Educational Value

Understanding these conversions teaches:
- **Data Representation:** How abstract numbers become electrical signals
- **Bit Manipulation:** Foundation for low-level optimization
- **Digital Logic:** How binary arithmetic powers all computation
- **Debugging Skills:** Reading hex values in debuggers, analyzing memory dumps
- **Assembly Language:** Required knowledge for systems programming

---

## 📚 Usage Examples

### Example 1: Decimal 42

**Input:** `42` (Decimal)

**Process:**
```
42 ÷ 2 = 21 remainder 0
21 ÷ 2 = 10 remainder 1
10 ÷ 2 = 5  remainder 0
5  ÷ 2 = 2  remainder 1
2  ÷ 2 = 1  remainder 0
1  ÷ 2 = 0  remainder 1

Read remainders bottom-to-top: 101010
```

**Results:**
- Decimal: `42`
- Binary: `101010`
- Hexadecimal: `2A`

**Why this matters:** The number 42 appears in Star Trek and "The Hitchhiker's Guide to the Galaxy" as the "Answer to the Ultimate Question." In binary, it's `101010`—a perfect teaching example!

---

### Example 2: Hexadecimal FF

**Input:** `FF` (Hexadecimal)

**Process:**
```
F (hex) = 15 (decimal)
F = 15

Position 1: F × 16¹ = 15 × 16 = 240
Position 0: F × 16⁰ = 15 × 1  = 15

Sum: 240 + 15 = 255
```

**Results:**
- Decimal: `255`
- Binary: `11111111`
- Hexadecimal: `FF`

**Why this matters:** 255 is the maximum value in an unsigned 8-bit integer. In binary, all bits are set to 1. In hex, this is simply `FF`. This appears everywhere in computing: maximum color values, memory boundaries, etc.

---

### Example 3: Binary 11111111

**Input:** `11111111` (Binary)

**Process:**
```
Position 7: 1 × 2⁷ = 1 × 128 = 128
Position 6: 1 × 2⁶ = 1 × 64  = 64
Position 5: 1 × 2⁵ = 1 × 32  = 32
Position 4: 1 × 2⁴ = 1 × 16  = 16
Position 3: 1 × 2³ = 1 × 8   = 8
Position 2: 1 × 2² = 1 × 4   = 4
Position 1: 1 × 2¹ = 1 × 2   = 2
Position 0: 1 × 2⁰ = 1 × 1   = 1

Sum: 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255
```

**Results:**
- Decimal: `255`
- Binary: `11111111`
- Hexadecimal: `FF`

---

## 🎨 Design Features

### Responsive Layout
- **Desktop:** Multi-column cards with optimal spacing
- **Tablet:** Adapted grid layouts
- **Mobile:** Single-column layout, touch-friendly buttons

### Color Scheme
- **Primary Blue:** `#2563eb` — Main conversion elements
- **Secondary Green:** `#059669` — Binary education
- **Accent Orange:** `#f97316` — Hexadecimal highlights
- **Neutral Grays:** Text hierarchy and borders

### Accessibility
- High contrast text (WCAG AA compliant)
- Semantic HTML structure
- Keyboard navigation support (Tab, Enter)
- Clear labeling for all form inputs
- Readable font sizes (minimum 16px on mobile)

---

## 📋 File Structure

```
number-base-converter/
├── index.html          # HTML structure (semantic, accessible)
├── style.css           # Responsive design with animations
├── script.js           # Conversion logic and education
├── README.md           # This file
└── .gitignore          # Git configuration
```

### Code Quality
- **HTML:** Semantic elements, proper form structure, comments
- **CSS:** Custom properties (CSS variables), mobile-first responsive design
- **JavaScript:** Well-documented functions, error handling, input validation

---

## 🔧 Technical Details

### Conversion Algorithms

#### Decimal → Binary (Repeated Division)
```
While number > 0:
    remainder = number mod 2
    quotient = number div 2
    Record remainder
    number = quotient
Read remainders in reverse
```

#### Decimal → Hexadecimal (Repeated Division)
```
While number > 0:
    remainder = number mod 16
    quotient = number div 16
    Convert remainder to hex digit (0-9, A-F)
    Record hex digit
    number = quotient
Read hex digits in reverse
```

#### Binary → Decimal (Positional Notation)
```
Sum = 0
For each bit position i (right to left):
    If bit is 1:
        Sum += 2^i
Return Sum
```

#### Hexadecimal → Decimal (Positional Notation)
```
Sum = 0
For each digit position i (right to left):
    digit_value = convert hex digit to decimal (0-15)
    Sum += digit_value × 16^i
Return Sum
```

### Input Validation Rules

| Base | Allowed | Max Value | Max Digits |
|------|---------|-----------|-----------|
| Decimal | 0-9 | 4,294,967,295 | 10 |
| Binary | 0-1 | 2³²-1 | 32 bits |
| Hexadecimal | 0-9, A-F | 0xFFFFFFFF | 8 digits |

### Browser Compatibility

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Modern versions recommended |
| Firefox | ✅ Full | Modern versions recommended |
| Safari | ✅ Full | iOS 12+ recommended |
| Edge | ✅ Full | Chromium-based (2020+) |
| IE 11 | ⚠️ Partial | BigInt not supported; would need polyfill |

---

## 🎓 Educational Outcomes

After using this converter, students will understand:

- ✅ **Number Systems:** How different bases represent the same value
- ✅ **Positional Notation:** Why position and power matter in number representation
- ✅ **Binary Fundamentals:** Why computers choose 0 and 1 as their basic units
- ✅ **Hexadecimal Usage:** Real-world applications in computing
- ✅ **Algorithm Thinking:** Step-by-step problem-solving approach
- ✅ **Data Representation:** How abstract numbers become machine code

---

## 🚀 Future Improvements

Potential enhancements for future versions:

### Phase 2: Extended Number Systems
- ⏳ **Octal (Base-8):** Historical importance and current use
- ⏳ **Base conversion generator:** Let users input any base (2-36)
- ⏳ **Custom bases:** Educational exploration of arbitrary bases

### Phase 3: Signed Numbers & Arithmetic
- ⏳ **Signed Binary:** Two's complement representation
- ⏳ **One's Complement:** Discuss alternatives and their limitations
- ⏳ **Binary Arithmetic:** Addition and subtraction visualization
- ⏳ **Overflow/Underflow:** Understanding limits and wraparound

### Phase 4: Floating-Point Representation
- ⏳ **IEEE 754:** Single and double precision
- ⏳ **Sign, Exponent, Mantissa:** Breaking down float representation
- ⏳ **Scientific notation:** Connection between bases and floating-point
- ⏳ **Special values:** Infinity, NaN, denormalized numbers

### Phase 5: Advanced Representations
- ⏳ **ASCII Conversion:** Characters ↔ Decimal/Binary/Hex
- ⏳ **Unicode:** Extended character representation
- ⏳ **UTF-8 Encoding:** Variable-width character encoding
- ⏳ **BCD (Binary Coded Decimal):** Historical computer format

### Phase 6: Developer Tools
- ⏳ **Batch Conversion:** Convert multiple values at once
- ⏳ **Export Results:** Copy to clipboard, save as CSV
- ⏳ **Interactive Circuits:** Visualize binary logic gates
- ⏳ **Practice Quizzes:** Self-assessment with scoring

### Phase 7: Mobile App
- ⏳ **Native iOS/Android:** Offline accessibility
- ⏳ **Progressive Web App:** Install as app from browser
- ⏳ **Dark Mode:** Eye-friendly interface for low-light environments

---

## 📸 Screenshots

*Section for future screenshots:*

- **Screenshot 1:** Input form with example
- **Screenshot 2:** Results display showing all three bases
- **Screenshot 3:** Educational step-by-step explanation
- **Screenshot 4:** Mobile responsive layout
- **Screenshot 5:** Example quick-reference section

---

## 🤝 Contributing

This is an educational project. Suggestions for improvements:
- Better explanations or algorithms
- Additional examples
- Accessibility improvements
- Bug reports

Feel free to fork and modify for your own learning!

---

## 📄 License

Educational Use License — Use freely for learning and teaching Computer Architecture.

---

## 👨‍🎓 Author

**Created for:** Honors Computer Architecture Course  
**Date:** Spring 2026 
**Institution:** Your University Here

---

## 🔗 Related Resources

### Learn More About Number Bases
- [Khan Academy: Number Bases](https://www.khanacademy.org/computing/computer-science/computers-and-internet)
- [Wikipedia: Positional Notation](https://en.wikipedia.org/wiki/Positional_notation)
- [Computer Architecture Fundamentals](https://en.wikipedia.org/wiki/Computer_architecture)

### Hexadecimal in Practice
- [Memory Addressing](https://en.wikipedia.org/wiki/Memory_address)
- [Machine Code](https://en.wikipedia.org/wiki/Machine_code)
- [Assembly Language](https://en.wikipedia.org/wiki/Assembly_language)

### IEEE Standards
- [IEEE 754 Floating Point](https://en.wikipedia.org/wiki/IEEE_754)
- [Binary Arithmetic](https://en.wikipedia.org/wiki/Binary_arithmetic)

---

**Happy Learning! 🚀**
