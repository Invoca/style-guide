## Prelude
Invoca Python Style Guide

The contents of this styleguide are to be enforced by [flake8](https://flake8.pycqa.org/en/latest/) and [black](https://github.com/psf/black) through the use of the flake8 plugin [flake8-black](https://github.com/peterjc/flake8-black).

Any adjustments to this styleguide should be captured in the [tox.ini](tox.ini) config.

## Table of Contents

- [Prelude](#prelude)
- [Table of Contents](#table-of-contents)
- [PEP-8: Style Guide for Python Code](#pep-8-style-guide-for-python-code)
- [PEP-20: The Zen of Python](#pep-20-the-zen-of-python)
- [Layout](#layout)
- [Syntax](#syntax)
- [Naming](#naming)
- [Comments](#comments)
- [Classes](#classes)
- [Type Annotations](#type-annotations)
- [Recommendations](#recommendations)

## PEP-8: Style Guide for Python Code

[PEP-8](https://peps.python.org/pep-0008/) defines the official style guide for python. While it is not entirely comprehensive, it provides a sufficient foundation for more detailed style guides such as this. This style guide makes frequent reference to PEP-8. In general code should adhere to that. Any extensions to or deviations from PEP-8 will be documented here.

## PEP-20: The Zen of Python

[PEP-20](https://peps.python.org/pep-0020/#the-zen-of-python) defines the so-called Zen of Python which is a set of principles for writing clean, idiomatic python code. Where PEP-8 is prescriptive, this is much more abstract and interpretive. While this shouldn't be taken as scripture, it useful to apply these abstract principles when faced with ambiguity.

```text
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
```

## Layout

PEP-8 standards:
* [indentation](PEP-8.md#indentation)
* [tabs or spaces](PEP-8.md#tabs-or-spaces)
* [maximum line length](PEP-8.md#maximum-line-length)
* [line breaks after binary operators](PEP-8.md#should-a-line-break-before-or-after-a-binary-operator)
* [blank lines](PEP-8.md#blank-lines)
* [encoding](PEP-8.md#source-file-encoding)
* [imports](PEP-8.md#imports)

## Syntax

PEP-8 standards:
* [string quotes](PEP-8.md#string-quotes)
* [whitespace in expressions and statements](PEP-8.md#whitespace-in-expressions-and-statements)
* [whitespace in general](PEP-8.md#other-recommendations)
* [trailing commas](PEP-8.md#when-to-use-trailing-commas)

## Naming

```text
Names that are visible to the user as public parts of the API should
follow conventions that reflect usage rather than implementation.
```

PEP-8 standards:
* [naming conventions](PEP-8.md#naming-conventions)
* [module-level dunder names](PEP-8.md#module-level-dunder-names)
* [naming styles](PEP-8.md#descriptive-naming-styles)
* [use of naming styles](PEP-8.md#prescriptive-naming-conventions)

## Comments

PEP-8 standards:
* [comments](PEP-8.md#comments)
* [block comments](PEP-8.md#block-comments)
* [inline comments](PEP-8.md#inline-comments)
* [documentation strings](PEP-8.md#documentation-strings)

## Classes

PEP-8 standards:
* [inheritance](PEP-8.md#designing-for-inheritance)
* [public interfaces](PEP-8.md#public-and-internal-interfaces)

## Type Annotations

PEP-8 standards:
* [function annotations](PEP-8.md#function-annotations)
* [variable annotations](PEP-8.md#variable-annotations)

## Recommendations

PEP-8 standards:
* [programming recommedations](PEP-8.md#programming-recommendations)
