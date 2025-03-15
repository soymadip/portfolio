---
title: Brace Expansion
---

**Brace expansion** is a feature in bash (and other Unix shells) that allows you to generate arbitrary strings. It can be used for creating lists of strings, filenames, or paths efficiently. Here are the key points and examples to help you understand how brace expansion works:

### Basic Syntax

The basic syntax of brace expansion is:

```bash
{item1,item2,item3}
```

This will expand into:

```bash
item1 item2 item3
```

### Examples

#### 1. Basic List Expansion

```bash
echo {apple,banana,cherry}
```

Output:

```
apple banana cherry
```

#### 2. Combining Strings

```bash
echo file{1,2,3}.txt
```

Output:

```
file1.txt file2.txt file3.txt
```

#### 3. Creating Directories

```bash
mkdir -p project/{src,docs,tests}
```

This will create the following directories:

```
project/src
project/docs
project/tests
```

### Nested Brace Expansion

Braces can be nested to generate more complex patterns.

```bash
echo {A,B{1,2},C}
```

Output:

```
A B1 B2 C
```

### Range Expansion

You can use brace expansion to generate a sequence of numbers or letters.

#### 1. Numerical Range

```bash
echo {1..5}
```

Output:

```
1 2 3 4 5
```

#### 2. Alphabetical Range

```bash
echo {a..e}
```

Output:

```
a b c d e
```

### Combining Ranges and Lists

You can combine lists and ranges for more complex expansions.

```bash
echo file{a..c}_{1..3}.txt
```

Output:

```
filea_1.txt filea_2.txt filea_3.txt fileb_1.txt fileb_2.txt fileb_3.txt filec_1.txt filec_2.txt filec_3.txt
```

### Practical Examples

#### 1. Generating a Series of Files

```bash
touch file{1..3}.txt
```

This creates:

```
file1.txt file2.txt file3.txt
```

#### 2. Creating Nested Directories

```bash
mkdir -p project/{src/{main,tests},docs,build}
```

This will create:

```bash
project/
├── build
├── docs
└── src
    ├── main
    └── tests
```

#### 3. Combining Fixed and Variable Parts

```bash
echo pre{a,b,c}post
```

Output:

```
preapost prebpost precpost
```

### Advanced Example 

#### Creating a Date-Stamped Directory Structure

```bash
mkdir -p backup/{2024-06-{01..30}}
```

This will create directories for each day in June 2024:

```
backup/
├── 2024-06-01
├── 2024-06-02
├── 2024-06-03
├── 2024-06-30
```

### Summary

Brace expansion is a powerful tool in bash for generating multiple strings, filenames, or directory names from a pattern. It saves time and reduces errors compared to manually typing out each item. Remember:

- Use `{}` to define a list of items.
- Use `{start..end}` for ranges.
- Combine and nest braces for more complex patterns.